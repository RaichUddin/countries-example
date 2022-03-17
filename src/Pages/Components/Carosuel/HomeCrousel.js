import React from 'react';
import { Carousel } from 'react-carousel-minimal';


const HomeCrousel = () => {
    const data = [
        {
            image: "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",

        },
        {
            image: "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",

        },
        {
            image: "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3740_.jpg",

        }
    ];
    return (
        <div>
            <Carousel
                // className="home-image"
                data={data}
                time={2000}
                width="100%"
                height="500px"
                radius="10px"
                slideNumber={true}
                automatic={true}
                // dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                // thumbnails={true}
                // thumbnailWidth="100px"
                style={{
                    maxwidth: "100%",
                    maxHeight: "500px",
                    marginBottom: "-150px",

                }}
            />
        </div>
    );
};

export default HomeCrousel;