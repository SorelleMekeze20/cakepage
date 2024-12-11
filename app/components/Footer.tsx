import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'; // react-icons for social media

function Footer() {
    return (
        <footer className="bg-orange-300 text-center py-16">
            <div className="flex justify-around py-5 text-white">
                <div >
                    <h3 >About Crazy Cakes</h3>
                    <p>Crazy Cakes offers a variety of cake recipes for all occasions. </p>
                    <p>Discover baking tips, tutorials, and much more.</p>
                </div>
                <div className={"px-4"}>
                    <h3>Contact Us</h3>
                    <p>Email: crazycakes@gmail.com</p>
                    <p>Phone: +49 17600000000</p>
                </div>
                <div className="px-4">
                    <h3>Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                           className="text-gray-800 hover:text-purple-500">
                            <FaInstagram className="h-8 w-8"/>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                           className="text-gray-800 hover:text-blue-500">
                            <FaTwitter className="h-8 w-8"/>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                           className="text-gray-800 hover:text-blue-700">
                            <FaFacebook className="h-8 w-8"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
