# Marvel Comics search
This is a simple app built using Ruby on Rails and React/Redux that allows for browsing, searching, and favoriting Marvel comics.

[Live link](http://marvel-comics-search.herokuapp.com/)

## Implementation

Comic data is fetched from the [Marvel API](https://developer.marvel.com/) on the backend using the HTTParty gem. The JSON response is then parsed in the [Comic model](/app/models/comic.rb) and a JSON response with the comic id, title, and image URL is sent to the React/Redux frontend for rendering.

```ruby
# app/models/comic.rb

  def self.next_ten_comics(offset, character_id = nil)
    comics = MarvelApi.get_comics(offset, character_id)

    comics.map do |comic|
      id, title, image = comic["id"], comic["title"], comic["images"].first
      image_url = image.nil? ? nil : image["path"] + "/portrait_uncanny." + image["extension"]
      Comic.new(id, title, image_url)
    end
  end
```
To prevent unwieldy load times, only 10 comics are fetched per request. The current number of page loads is stored in the ComicsIndex component's internal state and is sent along when requesting more comics. This sends an offset value to the Marvel API to only return the next 10 comics.


Users can search for comics by their favorite character. This search term is stored in the global Redux state; if a search term is present, the API will fetch comics in which that character appears, if there is no search term, it will revert to fetching all comics.

```ruby
# app/controllers/api/comics_controller

  def index
    offset, search_term = comic_params[:offset], comic_params[:search_term]

    if search_term.nil? || search_term == ""
      @comics = Comic.next_ten_comics(offset)
    else
      @comics = Comic.comics_by_character(offset, search_term)
    end
  end
```

Users can click on a comic to favorite it. This stores the comic's id in a Postgres database to persist favorites for future visits to the site.

## Future directions
* __User Profiles__: allow users to sign up and log in to save and view their own favorite comics
* __Favorites filter__: ability to display just the comics a user has favorited
