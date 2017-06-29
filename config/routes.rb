Rails.application.routes.draw do
  devise_for :admins
  root 'static_pages#index'

  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end

  namespace :api do
    namespace :v1 do
      resources :localfirsts, only: [:index]
    end
  end
end
