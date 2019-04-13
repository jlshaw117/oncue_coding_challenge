class ChangeDateOfMoveToBeStringInJob < ActiveRecord::Migration[5.2]
  def change
    change_column :jobs, :date_of_move, :string
  end
end
