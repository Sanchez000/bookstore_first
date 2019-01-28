class CatalogController < ApplicationController
  def index
    @categorys = Category.all
  end
end
