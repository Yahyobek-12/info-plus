import 'swiper/css';
import axios from 'axios';
import '../styles/Home.css'
import 'swiper/css/pagination';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import loaderLogo from '../Images/loader.gif'
import { useEffect, useState } from 'react';

const TopNews = () => {
    const [topNews, setTopNews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3bae03128ef34b1d99d8968de15c32dd')
            .then(response => {
                setTopNews(response.data.articles)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

  return (
    <div className='top-news'>
      {loading ? (
        <img src={loaderLogo} alt='loader-logo' width='350px' style={{ marginLeft: '-2rem' }} />

      ) : (
        <>
            {topNews.map(topnews => (
                <div className="top-news-card" key={uuidv4()}>
                    <img src={topnews.urlToImage} alt={topnews.title.slice(0, 5)} />
                    <p>📅 {topnews.publishedAt.slice(0, 10)}</p>
                    <h4>{topnews.title}</h4>
                    <Link to={topnews.url} target='_blank'>More information</Link>
                </div>
            ))}
        </>
      )}
    </div>
  )
}

export default TopNews;
