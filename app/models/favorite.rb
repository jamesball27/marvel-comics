class Favorite < ActiveRecord::Base
  validates :comic_id, presence: true
end
