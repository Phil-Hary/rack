# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_26_081406) do

  create_table "movies", force: :cascade do |t|
    t.string "movie_name"
    t.string "img_url"
    t.string "slug"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "year"
    t.string "rated"
    t.string "genre"
    t.string "plot"
    t.json "ratings", default: []
    t.string "backdrop"
    t.string "released"
    t.string "runtime"
    t.string "director"
    t.string "actors"
    t.string "writers"
    t.string "lang"
    t.string "production"
    t.string "awards"
    t.string "popularity"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.integer "score"
    t.integer "movie_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
    t.index ["movie_id"], name: "index_reviews_on_movie_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "user_movies", force: :cascade do |t|
    t.integer "user_id"
    t.integer "movie_id"
    t.index ["movie_id"], name: "index_user_movies_on_movie_id"
    t.index ["user_id"], name: "index_user_movies_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.string "avatar"
  end

  create_table "users_movies", force: :cascade do |t|
    t.integer "User_id"
    t.integer "Movie_id"
    t.index ["Movie_id"], name: "index_users_movies_on_Movie_id"
    t.index ["User_id"], name: "index_users_movies_on_User_id"
  end

  add_foreign_key "reviews", "movies"
  add_foreign_key "reviews", "users"
end
