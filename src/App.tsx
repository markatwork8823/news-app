import React, { useEffect, useState } from "react";
import AdBlock from "./Layout/Headers/AdBlock";
import Page from "./Layout/Page/Page";
import healthNews from "./NewsSource/healthNews";
import Article from "./Models/Article";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  healthNews.posts.forEach((post) => {
    var article: Article = {
      image: post.thread.main_image,
      body: post.text,
      date: new Date(post.published).toDateString(),
      title: post.title,
    };
    articles.push(article);
  });
  useEffect(() => {
    setArticles(articles);
  }, articles);

  return (
    <>
      <div className="headerBackground">
        <AdBlock />
      </div>
      <Page articles={articles} />
    </>
  );
}

export default App;
