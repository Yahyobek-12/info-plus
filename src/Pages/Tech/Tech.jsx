import axios from 'axios';
import '../../styles/Tech.css';
import Similar from './Similar';
import { v4 as uuidv4 } from 'uuid';
import CountUp from 'react-countup';
import { FaLink } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import loadingLogo from '../../Images/loader.gif';
 

const Tech = () => {
  const [limitData, setLimitData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=3bae03128ef34b1d99d8968de15c32dd&pageSize=3')
      .then(response => {
        setLoading(false);
        console.log(response.data.articles);
        setLimitData(response.data.articles);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='tech'>
      <div className="top-tech">
        <div className="inside-top-tech">
          <div className="top-tech-txt">
            <h1>Creating a Better Solution</h1>
            <h3>IT Solutions.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magni assumenda quam porro, quae cumque?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magni assumenda quam porro, quae cumque?</p>
            <Link to='https://www.google.com' target='_blank'><button className="btn-more">Contact Us</button></Link>
          </div>
        </div>
      </div>

      <div className="middle-tech">
        <h3><CountUp start={0} end={19} duration={5} />k world news</h3>
        <h3><CountUp start={0} end={40} duration={5} />k Asia news</h3>
        <h3><CountUp start={0} end={87} duration={5} />k Brazil news</h3>
      </div>

      <div className="limit-tech">
        <h2>United States Technology </h2>
        <div className="flex-limit">
          {loading ? (
            <>
              <img src={loadingLogo} alt="loading..." width='350px' height='250px' />
            </>
          ) : (
            <>
              {limitData.map(item => (
                <div className="limit-card" key={uuidv4()}>
                  <img src={item.urlToImage} alt={item.athor} />
                  <p>{item.title.slice(0, 100)}</p>
                  <h5>📆 {item.publishedAt.slice(0, 10)}</h5>
                  <Link to={item.url} className='to-link' target='_blank'><FaLink /></Link>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      <div className="more-data">
        <h2>Similar News</h2>
        <Similar loading={loading} setLoading={setLoading} />
      </div>
    </div>
  );
}

export default Tech;
