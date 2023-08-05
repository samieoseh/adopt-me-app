/* eslint-disable react/prop-types */
import { useState } from "react";

const Carousel = ({ images }) => {
    const [active, setActive] = useState(0);

    const handleThumbnailClick = (index) => {
        setActive(index);
    };

    return (
        <div className="carousel">
            <img src={images[active]} alt="animal hero" />
            <div className="carousel-smaller">
                {images.map((photo, index) => (
                    <img
                        key={photo}
                        src={photo}
                        className={index === active ? "active" : ""}
                        alt="animal thumbnail"
                        onClick={() => handleThumbnailClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

Carousel.defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
};

export default Carousel;
