class Menu < ApplicationRecord
  has_many :reviews, dependent: :destroy
  
end
