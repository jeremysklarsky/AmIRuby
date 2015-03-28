class Search

  extend ActiveModel::Naming
  include ActiveModel::Conversion
  def persisted?
    false
  end

  attr_accessor :html, :keyword

  def am_i_ruby(input)
    if has_page?(input)
      if @html.include?("Ruby on Rails")
        "Yes"
      else
        "Nope."
      end
    else
      "We don't know what you're talking about."
    end

  end

  def has_page?(input)
    begin
      @html = open("http://builtwith.com/#{input}").read
      true
    rescue 
      false
    end
  end

end