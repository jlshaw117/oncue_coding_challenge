class CreateTrucks < ActiveRecord::Migration[5.2]
  def change
    create_table :trucks do |t|
      t.string :name, null: false
      t.integer :truck_start, null: false
      t.integer :truck_end, null: false
      t.timestamps
    end
    add_index :trucks, :id
    add_index :trucks, :truck_start
    add_index :trucks, :truck_end
  end
end