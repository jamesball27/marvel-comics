class Api::ComicsController < ApplicationController

  def index
    offset, search_term = comic_params[:offset], comic_params[:search_term]

    if search_term
      @comics = Comic.comics_by_character(offset, search_term)
    else
      @comics = Comic.next_ten_comics(offset)
    end
  end

  private

  def comic_params
    params.require(:comics).permit(:offset, :search_term)
  end

end
