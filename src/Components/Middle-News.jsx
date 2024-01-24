import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import loaderLogo from '../Images/loader.gif';
import 'react-loading-skeleton/dist/skeleton.css';

const MiddleNews = () => {
    const [middleNews, setMiddleNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3bae03128ef34b1d99d8968de15c32dd')
            .then(response => {
                setMiddleNews(response.data.articles);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className='top-news'>
            {loading ? (
                <img src={loaderLogo} alt='loader-logo' width='350px' style={{ marginLeft: '-2rem' }} />
            ) : (
                <>
                    {middleNews.map(middlenews => (
                        <div className="top-news-card" key={uuidv4()}>
                            <img src={middlenews.urlToImage} alt={middlenews.title} />
                            <p>📅 {middlenews.publishedAt.slice(0, 10)}</p>
                            <h4>{middlenews.title}</h4>
                            <Link to={middlenews.url} target='_blank'>More information</Link>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default MiddleNews;
