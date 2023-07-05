class User < ApplicationRecord
  has_secure_password

  has_many :reviews

  # Validations
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }

  # Other associations and methods...

end
