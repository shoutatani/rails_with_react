class DropAdminUsersTable < ActiveRecord::Migration[6.0]
  def up
    drop_table :admin_users
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
