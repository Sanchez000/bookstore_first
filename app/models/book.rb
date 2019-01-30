class Book < ApplicationRecord
  has_many :author_book
  has_many :author, :through => :author_book
  belongs_to :category
  # one more magoc comment
end
