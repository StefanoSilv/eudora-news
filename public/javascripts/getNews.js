const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(`${process.env.apiKey}`);

module.exports = function(req, res, next) {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let lastyyyy = (Number(today.getFullYear()) - 1).toString();
  let lastyear = new Date(`${lastyyyy}-${mm}-${dd}`);
  let sostenibilità = [
    "sostenibile",
    "sostenibilità",
    "ecosostenibile",
    "eco-sostenibile",
    "ecologia",
    "ecologico",
    "ecologica",
    "(blue growth)",
    "(Gunther Pauli)"
  ];
  let natura = [
    "organico",
    "organica",
    "natura",
    "naturale",
    "(metodo narutale)",
    "biologico",
    "biologica",
    "biologia",
    "(kilometro zero)",
    "(KM 0)",
    "(KM zero)",
    "(decrescita felice)",
    "canapa"
  ];

  let people = [
    "(Gunther Pauli)",
    "(Umberto Galimberti)",
    "(Paolo Silvestrini)",
    "(Giuseppe Ferraro)",
    "(Anthony Legget)",
    "(Anthony James Legget)"
  ];

  let mind = ["consapevolezza", "felicità", "(nuova visione)", "comunità"];

  let argomenti = [
    "(fisica quantistica)",
    "(intelligenza artificiale)",
    "(crescita sostenibile)"
  ];

  const getString = arrays => {
    let q = "(" + arrays[0].join(" OR ") + ")";
    arrays.shift();
    arrays.forEach(array => {
      q += " OR " + "(" + array.join(" OR ") + ")";
    });
    q += "NOT porno";
    return q;
  };

  newsapi.v2
    .everything({
      qInTitle: getString([argomenti, mind, natura, sostenibilità]),
      from: `${lastyear}`,
      to: `${today}`,
      language: "it",
      sortBy: "publishedAt",
      page: 1,
      pageSize: 100
    })
    .then(response => {
      console.log(response.articles);
      res.render("index", { news: response.articles });
    });
};
