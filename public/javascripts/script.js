let value;
const getText = e => {
  value = e.target.value;
  return value;
};

let news = [];
let grid = document.querySelector(".grid");
const getSnippets = () => {
  axios.get("/api/news").then(res => {
    news = res.data;
    //Value is undefined because it is called the first time it renders before the user type anything

    news.forEach(article => {
      grid.insertAdjacentHTML(
        "beforeEnd",
        `
			<div class="news">
				<h2 class="newsTitle">
					${article.title}
				</h2>
				<pre class="snipptesCode">
	${article.description}
				</pre>
			</div>`
      );
    });
  });
  return news;
};

getSnippets();

let results = [];
const filter = () => {
  if (value && value.length) {
    document.querySelectorAll(".grid").forEach(k => {
      k.innerHTML = "";
    });

    let words = value.split(" ");
    console.log({ words });
    // console.log({words});
    // words.forEach( word => {
    // 	news.forEach(article => {
    //  		if (article.title.includes(word)) {
    //  			results.push(article)
    //  			console.log({results});
    //  		}
    //  	})
    // })
    words.forEach(word => {
      if (word) {
        news.forEach(s => {
          if (
            s.title.toLowerCase().indexOf(word.toLowerCase()) != -1 ||
            s.description.toLowerCase().indexOf(word.toLowerCase()) != -1
          ) {
            let newsCopy = [];
            newsCopy.push(s);
            newsCopy.forEach(article => {
              grid.insertAdjacentHTML(
                "beforeEnd",
                `
							<div class="news">
								<h2 class="newsTitle">
									${article.title}
								</h2>
								<pre class="snipptesCode">
			${article.description}
								</pre>
							</div>`
              );
            });
          }
        });
      }
    });
  } else {
    document.querySelectorAll(".grid").forEach(k => {
      k.innerHTML = "";
    });
    news.forEach(article => {
      grid.insertAdjacentHTML(
        "beforeEnd",
        `
			<div class="news">
				<h2 class="newsTitle">
					${article.title}
				</h2>
				<pre class="snipptesCode">
	${article.description}
				</pre>
			</div>`
      );
    });
  }
};
