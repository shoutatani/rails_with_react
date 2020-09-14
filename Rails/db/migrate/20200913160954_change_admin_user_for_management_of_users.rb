class ChangeAdminUserForManagementOfUsers < ActiveRecord::Migration[6.0]
  def change
    change_table :admin_users do |t|
      t.remove :first_name, :last_name, :email, :password_digest
      t.references :user, foreign_key: true
    end
  end
end
