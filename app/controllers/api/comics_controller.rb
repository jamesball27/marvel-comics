class Api::ComicsController < ApplicationController

  def index
    @comics = Comic.all
  end

end
