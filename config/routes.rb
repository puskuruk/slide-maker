Rails.application.routes.draw do
  get 'slide_show/index'
  root 'slide_show#index'
end
