class SearchController < ApplicationController

  def index
    if params[:search]
      @search = Search.new(params[:search][:keyword]).am_i_ruby
      format.html {render partial: "result"}
    end  
  end

end
