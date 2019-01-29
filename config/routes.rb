Rails.application.routes.draw do
  get '/catalog' => 'catalog#index', as: 'catalog'
  get '/' => 'home#index', as: 'home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
