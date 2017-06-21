require "httparty"

class MarvelApi
  include HTTParty
  BASE_URL = "http://gateway.marvel.com/"

  def self.get_comics(offset)
    url = BASE_URL + "/v1/public/comics"
    md5 = Digest::MD5.new
    timestamp = Time.now.to_i.to_s
    params = {
      format: "comic",
      formatType: "comic",
      noVariants: "true",
      limit: "10",
      offset: offset.to_i * 10,
      orderBy: "-focDate",
      apikey: ENV["marvel_api_public_key"],
      ts: timestamp,
      hash: md5.hexdigest(timestamp + ENV["marvel_api_private_key"] + ENV["marvel_api_public_key"])
    }

    JSON.parse get(url, query: params).to_s
  end
end
