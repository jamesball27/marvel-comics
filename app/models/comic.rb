class Comic

  def self.parse_comics(comics)
    parsed = []
    comics["data"]["results"].each do |comic|
      parsed << Comic.new(comic["id"], comic["title"])
    end
    parsed
  end

  attr_reader :id, :title

  def initialize(id, title)
    @id = id
    @title = title
  end
end
