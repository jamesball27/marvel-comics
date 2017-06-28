Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :comics, only: [:index]
    resources :favorites, only: [:index]
    resource :favorite, only: [:create, :destroy]
  end
end
