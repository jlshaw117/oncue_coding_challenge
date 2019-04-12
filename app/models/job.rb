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
    validates :truck_id, :name_of_user, :date_of_move, :start_time, :est_end_time, presence: true

    belongs_to :truck,
        primary_key: :id,
        foreign_key: :truck_id,
        class_name: :Truck
end
