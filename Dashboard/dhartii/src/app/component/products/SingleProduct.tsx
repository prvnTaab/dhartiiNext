'use client'
import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function SingleProduct() {

  const images = [
    {
      original: "https://picsum.photos/id/237/300/150",
      thumbnail: "https://picsum.photos/id/237/300/150"
    },
    {
      original: "https://picsum.photos/id/1/300/150",
      thumbnail: "https://picsum.photos/id/1/300/150"
    },
    {
      original: "https://picsum.photos/id/10/300/150",
      thumbnail: "https://picsum.photos/id/10/300/150"
    },
    {
      original: "https://picsum.photos/id/100/300/150",
      thumbnail: "https://picsum.photos/id/100/300/150"
    },
    {
      original: "https://picsum.photos/id/101/300/150",
      thumbnail: "https://picsum.photos/id/101/300/150"
    },
    {
      original: "https://picsum.photos/id/1000/300/150",
      thumbnail: "https://picsum.photos/id/1000/300/150"
    },
    {
      original: "https://picsum.photos/id/1001/300/150",
      thumbnail: "https://picsum.photos/id/1001/300/150"
    }
  ];
  return (
    <div className="col-6">
      <ImageGallery
        items={images}
        showBullets={false}
        autoPlay={true}
        showIndex={false}
        showThumbnails={true}
        lazyLoad={false}
        showPlayButton={false}
        showNav={true}
        showFullscreenButton={false}
        thumbnailPosition={"left"}
      />
      </div>
  )
}

export default SingleProduct