class CatalogController < ApplicationController
  def index
    @categorys = Category.all
    if params[:id].nil?
      @books = Book.all.limit(12)
    else
      @books = Category.find_by(id: params[:id]).books
    end
  end
end
