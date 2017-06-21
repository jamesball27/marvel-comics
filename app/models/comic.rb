class Comic

  def self.next_ten_comics(offset)
    comics = MarvelApi.get_comics(offset)
    comics["data"]["results"].map do |comic|
      id, title, image = comic["id"], comic["title"], comic["images"][0]
      image_url = image.nil? ? nil : image["path"] + "/portrait_uncanny." + image["extension"]
      Comic.new(id, title, image_url)
    end
  end

  attr_reader :id, :title, :image_url

  def initialize(id, title, image_url)
    @id = id
    @title = title
    @image_url = image_url
  end

end
