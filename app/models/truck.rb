# == Schema Information
#
# Table name: trucks
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  truck_start :integer          not null
#  truck_end   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Truck < ApplicationRecord
    validates :name, :truck_start, :truck_end, presence: true

    has_many :jobs,
        primary_key: :id,
        foreign_key: :truck_id,
        class_name: :Job
end
