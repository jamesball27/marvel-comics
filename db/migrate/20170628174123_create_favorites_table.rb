class CreateFavoritesTable < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :comic_id, null: false

      t.timestamps
    end

    add_index :favorites, :comic_id, unique: true
  end
end
