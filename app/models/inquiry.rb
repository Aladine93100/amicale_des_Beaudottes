class Inquiry
  extend ActiveModel::Naming
  include ActiveModel::Conversion
  include ActiveModel::Validations
  include ActionView::Helpers::TextHelper
  
  attr_accessor :name, :firstname, :telephone, :message, :voie
  
  validates :name, 
            :presence => true
  
  validates :firstname,
            :presence => true

  validates :telephone, 
            :presence => true
  
  validates :message,
            :length => { :minimum => 10, :maximum => 1000 }

def create_from(params: 'tmp')
  inquiry = create(params)
  #Pony.mail(..., :attachments => {"foo.zip" => File.read(file), "hello.txt" => "hello!"})
end

  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end
  
  def deliver
    return false unless valid?
    Pony.mail({
      :from => %("#{name} #{voie} "),
      :subject => "Notifications de #{name}, #{firstname}, #{telephone}, #{voie}",
      :body => message,
    })
  end
      
  def persisted?
    false
  end
end