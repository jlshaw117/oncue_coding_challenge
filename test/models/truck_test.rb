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

require 'test_helper'

class TruckTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
