Rails.application.routes.draw do
  # resources :items
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # This will be the only route that renders a component (i.e., html)
  root 'items#app'

  # These routes for the demo will all render json:
  # standard CRUD routes except new/edit

  get '/items', to: 'items#index'
  get '/items/:id', to: 'items#show'

  post '/items', to: 'items#create'

  put '/items/:id', to: 'items#update'
  patch '/items/:id', to: 'items#update'

  delete '/items/:id', to: 'items#destroy'
end
