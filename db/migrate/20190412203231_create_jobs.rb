class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.integer :truck_id, null: false
      t.string :name_of_user, null: false
      t.date :date_of_move, null: false
      t.float :start_time, null: false
      t.float :est_end_time, null: false
      t.timestamps
    end
    add_index :jobs, :date_of_move
    add_index :jobs, :start_time
    add_index :jobs, :est_end_time
  end
end
