/* eslint-disable react/prop-types */
import { useState } from 'react'

import { Link } from 'react-router-dom';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { masonryData, masonryImage } from '../data/portfolio';

export default function PortfolioDetailFilter(props) {

    let [isOpen, setisOpen] = useState(false);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    const slides = masonryImage.map((image) => ({ src: image }));
  
    return (
        <div>
            <ResponsiveMasonry
                    columnsCountBreakPoints={props.columnsCountBreakPoints}
            >
              <Masonry columnsCount={props.shuffle}>

                {
                    masonryData.map((data, index) => {
                        return (
                            <div className="p-1 picture-item" data-groups={data.dataGroup} key={index}>
                                <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                    <Link to={data.image} className="lightbox transition-all duration-500 group-hover:scale-105" title="">
                                        <img src={data.image} className="" alt="" onClick={() => handleImageClick(index)} />
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
                 <Lightbox
                    open={isOpen}
                    close={() => setisOpen(false)}
                    slides={slides}
                    index={currentImageIndex} // Show the clicked image first
                />
               </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}
