import React from "react";
import './footer.css';
import { Link } from "react-router-dom";
const Footer = () =>{
    return(
        <footer>
            <div className="foot_con">
                <div className="ft_cl">
                    <div className="ft_lg">
                        <Link to="/">Zomapp</Link>
                    </div>
                    <div className="ft_cn ft_email">
                        <a href="mailto:zomapp@gmail.com">
                            <i class="fa-solid fa-envelope"></i>
                            zomapp@gmail.com
                        </a>
                    </div>
                    <div className="ft_cn ft_phn">
                        <a href="tel:9938754210">
                            <i class="fa-solid fa-phone"></i>
                            9938754210
                        </a>
                    </div>
                </div>
                <div className="ft_cl">
                    <h5 className="ft_ttl">About Zomapp</h5>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Blog</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className="ft_cl">
                    <h5 className="ft_ttl">About Zomapp</h5>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Blog</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className="ft_cl">
                    <h5 className="ft_ttl">Social Links</h5>
                    <div className="ft_scl">
                        <a href="www.facebook.com">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="www.instagram.com">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="www.twitter.com">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="www.linkedin.com">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="foot_cp">
                <div className="cpt_msg">2023 &#169; Zomapp Made by <a href="https://github.com/abdulchaman">Abdul Chaman</a></div>
            </div>
        </footer>
    )
}
export default Footer;