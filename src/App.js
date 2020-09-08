import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from './components/NewsCards/NewsCards';

const alanKey =
  "4eeb306e56c79cf75fee990ca7454b672e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setArticles(articles);
          console.log(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <NewsCards articles={articles}/>
    </div>
  );
};

export default App;
