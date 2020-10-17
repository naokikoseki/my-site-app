Rails.application.routes.draw do
  root to: "top_page#index"
  resources :top_page, only: :index do
    collection do
      get 'history'
      get 'product'
    end
  end
end
