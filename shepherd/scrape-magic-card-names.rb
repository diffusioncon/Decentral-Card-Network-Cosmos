require 'wombat'

(1..3).to_a.each do |page| # 683
  Wombat.crawl do
    base_url "https://deckbox.org/games/mtg/cards?p=#{page}"
    path "/games/mtg/cards"

    cards do
      card_names({ css: ".card_name a" }, :list)
    end
  end
end
