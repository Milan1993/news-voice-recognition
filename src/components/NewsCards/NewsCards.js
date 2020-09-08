import React from "react";

import NewsCard from './../NewsCard/NewsCard';

const NewsCarts = ({ articles}) => {
    return (
        <div>
            {articles.map((el, i) => (
                <NewsCard/>
            ))}
        </div>
    );
}

export default NewsCarts;