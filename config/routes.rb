Apptest::Application.routes.draw do

 get "photos/create"
 resources :inquiries, :only => [:new, :create] do
 get 'thank_you', :on => :collection
end
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'inquiries#new'

  get '/appartements' => 'appartements#new'
  get '/exterieurs5'  => 'exterieurs5#new'
  get '/exterieurs4'  => 'exterieurs4#new'
  get '/exterieurs3'  => 'exterieurs3#new'
  get '/exterieurs2'  => 'exterieurs2#new'
  get '/exterieurs1'  => 'exterieurs1#new'
  get '/interieurs5'  => 'interieurs5#new'
  get '/interieurs4'  => 'interieurs4#new'
  get '/interieurs3'  => 'interieurs3#new'  
  get '/interieurs2'  => 'interieurs2#new'
  get '/interieurs1'  => 'interieurs1#new'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end