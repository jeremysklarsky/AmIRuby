class ResultsController < ApplicationController

  def index
    @search = Search.new(params[:search][:keyword]).am_i_ruby
  end

end