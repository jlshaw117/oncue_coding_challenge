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
    validates :name_of_user, :date_of_move, :start_time, :est_end_time, presence: true
    validates :truck_id, presence: {message: "No truck avalible for that time. Please pick another time."}

    before_validation :find_truck

    belongs_to :truck,
        primary_key: :id,
        foreign_key: :truck_id,
        class_name: :Truck

    def find_truck
        time_being_used = (self.start_time .. self.end_time).to_a
        self.turuck_id = Truck.where.not(id: Jobs.where(start_time: time_being_used).pluck(:truck_id)).pluck(:id).first
    end
end
