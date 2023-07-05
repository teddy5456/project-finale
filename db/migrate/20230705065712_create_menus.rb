class CreateMenus < ActiveRecord::Migration[6.1]
  def change
    create_table :menus do |t|
      t.string :menu_name
      t.text :description
      t.decimal :price
      t.string :image_url

      t.timestamps
    end
  end
end
