import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

type Props = {}

const SocialIcon = (props: Props) => {
  return (
    <div className='grid grid-cols-4 gap-3'>
        <FaFacebookF/>
        <FaInstagram/>
        <FaTwitter/>
        <FaLinkedin/>
    </div>
  )
}

export default SocialIcon