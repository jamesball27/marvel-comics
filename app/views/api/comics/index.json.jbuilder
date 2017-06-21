json.array! @comics do |comic|
  json.id comic.id
  json.title comic.title
  json.imageUrl comic.image_url
end
