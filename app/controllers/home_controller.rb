class HomeController < ApplicationController
  def index
    @categorys = Category.all
    @books = Book.all
  end
end
