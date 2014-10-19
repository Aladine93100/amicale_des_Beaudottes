class AddPhotoColumnsToInquiries < ActiveRecord::Migration
  def self.up
    add_attachment :inquiries, :photo
  end

  def self.down
    remove_attachment :inquiries, :photo
  end
end
