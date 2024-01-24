import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="opacity">
      <h3 className="footer-logo">InfoPlus+</h3>
      <div className="flex-footer">
        <div className="inside-footer">
          <Link to='/'>Home</Link>
          <Link to=''>Technology</Link>
          <Link to=''>Sports</Link>
          <Link to=''>More</Link>
        </div>
      </div>
      <h3>&copy; Copiright 2024</h3>
      </div>
    </div>
  )
}

export default Footer
