# == Schema Information
#
# Table name: jobs
#
#  id           :bigint(8)        not null, primary key
#  truck_id     :integer          not null
#  name_of_user :string           not null
#  date_of_move :date             not null
#  start_time   :float            not null
#  est_end_time :float            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Job < ApplicationRecord
    validates :name_of_user, :date_of_move, :start_time, :est_end_time, :truck_id, presence: true
    # validates :truck_id, presence: {message: "Fail"}

    belongs_to :truck,
        primary_key: :id,
        foreign_key: :truck_id,
        class_name: :Truck

    def find_truck
        job_table = Job.arel_table
        truck_table = Truck.arel_table
        time_range = (self.start_time .. self.est_end_time)
        self.truck_id = Truck.where(id: Truck.where.not(id: Job.where(
            job_table[:date_of_move].eq(self.date_of_move)
            .and(
                job_table[:start_time].in(self.start_time .. self.est_end_time)
                .or(job_table[:est_end_time].in(self.start_time .. self.est_end_time))
                )
            .or(
                job_table[:start_time].lteq(self.start_time)
                .and(job_table[:est_end_time].gteq(self.est_end_time))
            )).pluck(:truck_id)))
            .where(truck_table[:truck_start].lteq(self.start_time)
            .and(truck_table[:truck_end].gteq(self.est_end_time))
            ).pluck(:id).first
    end
end
