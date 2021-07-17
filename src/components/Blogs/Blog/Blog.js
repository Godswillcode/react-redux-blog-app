import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = ({id, title, content, timestamp, thumbnailUrl, username}) => {
    const truncate = (str) => {
		return str.length > 10 ? str.substring(0, 75) + '...' : str;
	};
    return (
        <div className="blog">
            

            <img src={thumbnailUrl} alt='Thumbnail' className='blog__thumbnail' />

			<div className='blog__content'>
				<h3 className='blog___title'>{title}</h3>
				<p className='blog__timestamp'>{timestamp}</p>
				<h5 className='blog__summary'>{truncate(content)}</h5>
				<Link className='blog__readMore'>Read More...</Link>
				<p className='blog__author'>Blog By {username}</p>
			</div>
        </div>
    )
}

export default Blog

// npm install -g firebase-tools

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.7.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
