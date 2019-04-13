# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
    Truck.destroy_all
    Job.destroy_all

    truck1 = Truck.create!(name: 'Truck 1', truck_start: 6, truck_end: 18)
    truck2 = Truck.create!(name: 'Truck 2', truck_start: 6, truck_end: 18)

    Job.create!(name_of_user: 'Jane Doe', date_of_move: '2019-04-15', start_time: 7, est_end_time: 10, truck_id: truck1.id)
    Job.create!(name_of_user: 'John Smith', date_of_move: '2019-04-15', start_time: 7, est_end_time: 14, truck_id: truck2.id)
    Job.create!(name_of_user: 'Betty Sue', date_of_move: '2019-04-15', start_time: 12, est_end_time: 16, truck_id: truck1.id)
end