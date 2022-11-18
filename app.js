var title = document.createElement("div")
title.className = "vaportitle"
title.innerText = "Vapor"
appid.appendChild(title)

var items = document.createElement("center")

var games = document.createElement("iframe")
games.source = "https://uwuugle.com/games/index.html"
gamesrameborder="1"
gamesmarginheight="0px"
gamesmarginwidth="0px"
gamesheight="100%"
gameswidth="100%"
gamesallowfullscreen
items.appendChild(games)

appid.appendChild(items)

var vaporstyle = document.createElement("style")
vaporstyle.innerText = ".vaportitle {font-size: 60px; text-align: center; color: white; user-select: none; margin-top: 10px;}.vaportab{cursor: pointer;background: #303134;border-radius: 2.5px;height: 50px;text-align: center;line-height: 50px;color: white; border: none; font-size: 18px;user-select: none; margin: 5px;} .vaportab:hover {background: darkslategrey;}"
document.getElementsByTagName("html")[0].appendChild(vaporstyle)