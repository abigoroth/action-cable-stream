Rails.application.routes.draw do
  resources :conversations
  devise_for :users
  resources :tokens, only: [:create]
  root to: 'chats#show'
end