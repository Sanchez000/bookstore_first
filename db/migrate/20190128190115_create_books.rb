class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :imagen
      t.string :title
      t.string :authors
      t.decimal :price
      t.string :category
      t.timestamps
    end
  end
end
