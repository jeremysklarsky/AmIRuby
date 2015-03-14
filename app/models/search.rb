class Search

  attr_accessor :domain, :html

  def initialize(domain)
    @domain = domain
  end

  def am_i_ruby
    if has_page?
      # binding.pry
      if @html.include?("Ruby on Rails")
        "Yes"
      else
        "No"
      end
    else
      "No one knows what you're talking about."
    end
  end

  def has_page?
    # binding.pry
    begin
      @html = open("http://builtwith.com/#{@domain}").read
      true
    rescue OpenURI::HTTPError => e
      if e.message == '404 Not Found'
        false
      end
    end
  end

end