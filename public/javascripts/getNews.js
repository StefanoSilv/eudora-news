const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(`${process.env.apiKey}`);

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let lastyyyy = (Number(today.getFullYear()) - 1).toString();
let lastyear = new Date(`${lastyyyy}-${mm}-${dd}`);
console.log(today);

newsapi.v2
  .everything({
    q: "bitcoin",
    from: `${lastyear}`,
    to: `${today}`,
    language: "it",
    sortBy: "publishedAt",
    page: 1,
    pageSize: 100
  })
  .then(response => {
    // console.log(response);
    /*
    {
      status: "ok",
      articles: [...]
    }
  */
  });
