class CreateLocalfirst < ActiveRecord::Migration[5.0]
  def change
    create_table :localfirsts do |t|
      t.string :name, null: false
      t.string :logo
      
    end
  end
end
