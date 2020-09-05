class AdminUser < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true

  validates :email,
            format: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i,
            presence: true,
            uniqueness: { case_sensitive: false }

  has_secure_password
  validates :password, confirmation: true, presence: true
end
