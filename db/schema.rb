# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_12_203231) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "jobs", force: :cascade do |t|
    t.integer "truck_id", null: false
    t.string "name_of_user", null: false
    t.date "date_of_move", null: false
    t.float "start_time", null: false
    t.float "est_end_time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["date_of_move"], name: "index_jobs_on_date_of_move"
    t.index ["est_end_time"], name: "index_jobs_on_est_end_time"
    t.index ["start_time"], name: "index_jobs_on_start_time"
  end

  create_table "trucks", force: :cascade do |t|
    t.string "name", null: false
    t.integer "truck_start", null: false
    t.integer "truck_end", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["id"], name: "index_trucks_on_id"
    t.index ["truck_end"], name: "index_trucks_on_truck_end"
    t.index ["truck_start"], name: "index_trucks_on_truck_start"
  end

end
