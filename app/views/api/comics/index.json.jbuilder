@comics.each do |comic|
  json.set! comic.id do
    json.title comic.title
    json.imageUrl comic.image_url
  end
end
