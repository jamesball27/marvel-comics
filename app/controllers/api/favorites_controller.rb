class FavoritesController < ApplicationController

  def index
    @favorites = Favorite.all
  end

  def create
    @favorite = Favorite.new(favorite_params)

    if @favorite.save
      render :index
    else
      render json: ["Oops! Something went wrong"], status: 422
    end
  end

  def destroy
    @favorite = Favorite.find_by(favorite_params)
    @favorite.destroy!
    render :index
  end

  private

  def favorite_params
    params.require(:favorite).permit(:comic_id)
  end

end
