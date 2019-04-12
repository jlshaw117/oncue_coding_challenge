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

require 'test_helper'

class JobTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
