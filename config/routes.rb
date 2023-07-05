Rails.application.routes.draw do
   resources :menus
   resources :users, only: [:new, :create] do
      collection do
        get 'login', to: 'users#login_form'
        post 'login', to: 'users#login'
        delete 'logout', to: 'users#logout'
      end
    end
    root to: 'home#index'

end
