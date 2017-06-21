class Api::ComicsController < ApplicationController

  def index
    @comics = Comic.next_ten_comics(comic_params[:load_count])
  end

  private
  def comic_params
    params.require(:comics).permit(:load_count)
  end
end
