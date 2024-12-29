import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/articles')
            .then(response => setArticles(response.data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    return (
        <div className="home">
            <h2>Latest Articles</h2>
            <div className="articles">
                {articles.map(article => (
                    <div key={article._id} className="article-card">
                        <h3>{article.title}</h3>
                        <p>{article.content.substring(0, 100)}...</p>
                        <small>By {article.author}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
