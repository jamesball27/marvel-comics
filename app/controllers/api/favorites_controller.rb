class Api::FavoritesController < ApplicationController

  def index
    @favorites = Favorite.all.pluck(:comic_id)
  end

  def create
    favorite = Favorite.new(favorite_params)

    if favorite.save
      @comic_id = favorite.comic_id
      render :show
    else
      render json: ["Oops! Something went wrong"], status: 422
    end
  end

  def destroy
    favorite = Favorite.find_by(favorite_params)
    @comic_id = favorite.comic_id
    favorite.destroy!
    render :show
  end

  private

  def favorite_params
    params.require(:favorite).permit(:comic_id)
  end

end
