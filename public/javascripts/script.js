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
    console.log(response);
    res.render("index", { news: response });
  });
