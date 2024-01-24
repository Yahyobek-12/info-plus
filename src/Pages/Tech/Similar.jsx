import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import loadingLogo from '../../Images/loader.gif';
import { IoReaderOutline, IoCloseCircle } from "react-icons/io5";

const Similar = ({ loading, setLoading }) => {
    const [similarData, setSimilarData] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=3bae03128ef34b1d99d8968de15c32dd')
            .then(response => {
                setLoading(false);
                console.log(response.data.articles);
                setSimilarData(response.data.articles);
            })
            .catch(error => {
                console.log(error);
            });
    }, [setLoading]);

    const handleReadClick = (article) => {
        setSelectedArticle(article);
    };

    return (
        <div className='similar-flex'>
            {loading ? (
                <img src={loadingLogo} alt="loading..." width='350px' height='250px' />
            ) : (
                <>
                    {similarData.map(item => (
                        <div className="similar-card" key={uuidv4()}>
                            <img src={item.urlToImage} alt={item.title} />
                            <h3>{item.title}</h3>
                            <IoReaderOutline className='read' onClick={() => handleReadClick(item)} />
                        </div>
                    ))}
                    {selectedArticle && (
                        <div className='similar-card-active'>
                            <h3>{selectedArticle.title}</h3>
                            <img src={selectedArticle.urlToImage} alt='active-card' />
                            <h2><span>Author:</span> {selectedArticle.author}</h2>
                            <p className='description'><span>Description</span>: {selectedArticle.description}</p>
                            <h5 className="time">📆 {selectedArticle.publishedAt.slice(0, 10)}</h5>
                            <Link to={selectedArticle.url} className="active-links" target='_blank'><span>Links</span>: More Information</Link>
                            <IoCloseCircle onClick={() => setSelectedArticle(null)} className='remove-active' />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Similar;
