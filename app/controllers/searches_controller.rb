class SearchesController < ApplicationController

  def index
    @search = Search.new
  end

  def show

  end

  def create

    @result = Search.new.am_i_ruby(search_params)
    
    render :results
  end

  private

  def search_params
    params[:search][:keyword]
  end

end
