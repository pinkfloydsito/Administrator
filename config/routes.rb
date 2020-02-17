Rails.application.routes.draw do
  get 'home/index'
  root 'home#index'
  namespace :api do
    namespace :v1 do
      resources :products
      resources :keywords
      resources :categories
      resources :stores
    end
  end
end

