class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :imagen
      t.string :title
      t.decimal :price
      t.integer :publication_year
      t.string :dimentions
      t.integer :sales_count
      t.text :description
      t.string :material
      t.references :category
      t.timestamps
    end
  end
end
