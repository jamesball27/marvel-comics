require_relative "../../../lib/marvel_api.rb"

class Api::ComicsController < ApplicationController

  def index
    @comics = Comic.parse_comics(MarvelApi.get_comics)
  end

end
