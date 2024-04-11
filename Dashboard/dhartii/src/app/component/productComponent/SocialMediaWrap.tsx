import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

function SocialMediaWrap() {
  return (
    <div className="psfw-social-wrap">
      <ul className="psfw-social-icons rounded_corner only_icon ">
        <li>
          <Link
            href="https://www.facebook.com/sharer/sharer.php?u=https://dhartii.in/product/aasmani-kurta/"
            data-psfw-href="https://www.facebook.com/sharer/sharer.php?u="
            target="_blank"
          >
            <i className="fa-brands fa-facebook" />
          </Link>
        </li>
        <li>
          <Link
            href="https://api.whatsapp.com/send?text=https://dhartii.in/product/aasmani-kurta/"
            data-psfw-href="https://api.whatsapp.com/send?text="
            target="_blank"
          >
            <i className="fa-brands fa-whatsapp" />
          </Link>
        </li>
        <li>
          <Link
            id="psfw-copy-link"
            data-url="https://dhartii.in/product/aasmani-kurta/"
            data-psfw-href=""
            href="#"
          >
            <i className="psfw-clipboard fa-solid fa-clipboard" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SocialMediaWrap