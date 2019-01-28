class Book < ApplicationRecord
  # has_many :authors
  # belongs_to :category
  has_one :category
end
