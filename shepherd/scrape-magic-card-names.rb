require 'wombat'

names = []

(1..683).to_a.each do |page|
  result = Wombat.crawl do
    base_url "https://deckbox.org"
    path "/games/mtg/cards?p=#{page}"


    card_names({ css: "td.card_name" }, :list)
  end

  names << result["card_names"]
end

File.open("names.csv", "w+") do |f|
  names.each do |name|
    f.puts(name)
  end
end
