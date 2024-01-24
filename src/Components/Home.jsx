import '../styles/Home.css'
import Footer from './Footer'
import TopNews from './Top-News'
import MiddleNews from './Middle-News'
import { IoEarth } from "react-icons/io5"
import { IoIosSearch } from "react-icons/io"
import { SiFuturelearn } from "react-icons/si"

const Home = () => {
  return (
    <div className="home">
        <div className="inside-home">
          <h3>Search Explores</h3>
          <form className="search-bar">
              <input type="text" placeholder='Search...' />
              <IoIosSearch className='search-btn' />
          </form>
          <h2 className='top-news-logo'>Featured News <SiFuturelearn /></h2>
            <TopNews />
          <h2 className='middle-news-logo'>World News <IoEarth /></h2>
            <MiddleNews />
          </div>
        <Footer />
    </div>
  )
}

export default Home
