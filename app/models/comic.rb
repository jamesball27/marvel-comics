require '/lib/marvel_api.rb'

class Comic

  def self.next_ten_comics(offset, character_id = nil)
    comics = MarvelApi.get_comics(offset, character_id)

    comics.map do |comic|
      id, title, image = comic["id"], comic["title"], comic["images"].first
      image_url = image.nil? ? nil : image["path"] + "/portrait_uncanny." + image["extension"]
      Comic.new(id, title, image_url)
    end
  end

  def self.comics_by_character(offset, search_term)
    character_id = MarvelApi.get_character_id(search_term)

    return [] if character_id.nil?
    Comic.next_ten_comics(offset, character_id)
  end

  attr_reader :id, :title, :image_url

  def initialize(id, title, image_url)
    @id = id
    @title = title
    @image_url = image_url
  end

end
