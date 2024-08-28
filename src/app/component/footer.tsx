// app/component/footer.tsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Categories Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Categories</h4>
          <ul className="space-y-2">
            <li><Link href="/category/technology" className="text-gray-400 hover:text-white">Technology</Link></li>
            <li><Link href="/category/lifestyle" className="text-gray-400 hover:text-white">Lifestyle</Link></li>
            <li><Link href="/category/travel" className="text-gray-400 hover:text-white">Travel</Link></li>
            <li><Link href="/category/food" className="text-gray-400 hover:text-white">Food</Link></li>
          </ul>
        </div>
    
        {/* Follow Us Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>
    
        {/* About Us Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">About Us</h4>
          <p className="text-gray-400">
            We are a passionate team of writers and content creators dedicated to bringing you the best stories and insights from around the world.
          </p>
        </div>
    
        {/* Newsletter Subscription Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Subscribe</h4>
          <form className="flex flex-col space-y-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="p-2 rounded-md text-gray-800 border border-gray-700 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button 
              type="submit" 
              className="bg-sky-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8">
        <p>&copy; 2024 My Blog Platform. All rights reserved.</p>
      </div>
    </footer>
    );
  };
  
  export default Footer;
  