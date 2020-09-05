Rails.application.routes.draw do
  root 'top#index'
  post 'user_login/login'
  post 'user_login/logout'
  get 'user_login/authenticated'
  get '*path', to: 'top#index', format: :html
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
