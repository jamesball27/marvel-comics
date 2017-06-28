require "httparty"

class MarvelApi

  include HTTParty

  BASE_URL = "http://gateway.marvel.com/v1/public"
  MD5 = Digest::MD5.new
  TIMESTAMP = Time.now.to_i.to_s
  DIGEST = TIMESTAMP + ENV["marvel_api_private_key"] + ENV["marvel_api_public_key"]

  def self.get_comics(offset, character_id = nil)
    url = BASE_URL + "/comics"

    params = {
      formatType: "comic",
      hasDigitalIssue: "false",
      limit: "10",
      offset: (offset.to_i * 10).to_s,
      orderBy: "-focDate",
      apikey: ENV["marvel_api_public_key"],
      ts: TIMESTAMP,
      hash: MD5.hexdigest(DIGEST)
    }

    if character_id
      params[:characters] = character_id
    end

    response = JSON.parse get(url, query: params).to_s
    response["data"]["results"]
  end

  def self.get_character_id(search_term)
    url = BASE_URL + "/characters"

    params = {
      name: search_term,
      limit: 1,
      apikey: ENV["marvel_api_public_key"],
      ts: TIMESTAMP,
      hash: MD5.hexdigest(DIGEST)
    }

    response = JSON.parse get(url, query: params).to_s
    results = response["data"]["results"]
    results.empty? ? nil : results.first["id"]
  end

end
