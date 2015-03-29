class SearchesController < ApplicationController

  def index
    @search = Search.new
  end

  def show
  end

  def create

    @result = Search.new.am_i_ruby(search_params)    
    respond_to do |f|
      f.html
      f.js 
    end
  end

  private

  def search_params
    params[:search][:keyword]
  end

end
