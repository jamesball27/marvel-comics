@comics.each do |comic|
  json.set! comic.id do
    json.title comic.title
  end
end
