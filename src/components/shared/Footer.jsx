import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Footer = () => {
    return (
        <footer className="footer bg-black text-white mt-32">
            <div className="container footer py-32">
                <div className="md:w-1/2">
                    <img className="mx-auto" src={logo} alt="logo" />
                    <p className="text-center mt-2">
                        Shakiqur is a software and web technologies engineer, a
                        life coach trainer who is also a serial .
                    </p>
                    <div className="flex gap-2 mx-auto mt-4">
                        {/* google */}
                        <div className="w-9 h-9 rounded-full bg-gray-800 text flex items-center justify-center">
                            <FaGoogle className="text-white" />
                        </div>
                        {/* Twitter */}
                        <div className="w-9 h-9 rounded-full bg-gray-800 text flex items-center justify-center">
                            <FaTwitter className="text-white" />
                        </div>
                        {/* instagram */}
                        <div className="w-9 h-9 rounded-full bg-gray-800 text flex items-center justify-center">
                            <FaInstagram className="text-white" />
                        </div>
                        {/* LinkedIn */}
                        <div className="w-9 h-9 rounded-full bg-gray-800 text flex items-center justify-center">
                            <FaLinkedin className="text-white" />
                        </div>
                    </div>
                </div>
                <div>
                    <span className="footer-title ">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
