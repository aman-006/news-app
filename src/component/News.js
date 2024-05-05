import React, { useState, useEffect } from 'react';
import NewsItems from './NewItem';

function News(props) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d4cf63f18751497d834f4d9a1238d0e2`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }

    fetchArticles();
  }, [props.category]);
  console.log(props.category)
  return (
    <div className="container my-4">
      <h1 className='text-center text-bold text-uppercase font-weight-bold' >India - {props.category ? props.category : "All Category"} News</h1>
      <div className="row justify-content-md-center">
        {articles.map((article) => (
          <div className="col-md-3 my-4" key={article.url}>
            <NewsItems title={article.title} description={article.description} img={article.urlToImage} url={article.url}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
