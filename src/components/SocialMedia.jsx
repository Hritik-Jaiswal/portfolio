import React from 'react'
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";


const SocialMedia = () => {
  return (
    <div className="app__social">
        <div className="app__social__container">
            <a href="https://twitter.com/hritik__j" target='_blank' rel="noreferrer">
              <BsTwitter />
            </a>
        </div>
        <div className="app__social__container">
            <a href="https://www.instagram.com/hritik__j/" target='_blank' rel="noreferrer">
              <BsInstagram />
            </a>
        </div>
        <div className="app__social__container">
            <a href="https://www.facebook.com/hritik.jaiswal.1257/" target='_blank' rel="noreferrer">
              <FaFacebookF />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia