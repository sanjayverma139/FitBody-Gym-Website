import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from "../../assets/img/avatar.jpg";
import avatar01 from "../../assets/img/avatar01.jpg";
import avatar02 from "../../assets/img/avatar02.jpeg";
import avatar04 from "../../assets/img/avatar04.jpg";
import avatar03 from "../../assets/img/avatar03.jpg";
import "../../Styles/testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      image: avatar,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet tellus nec neque interdum, sit amet placerat elit tincidunt.",
    },
    {
      image: avatar01,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet tellus nec neque interdum, sit amet placerat elit tincidunt.",
    },
    {
      image: avatar02,
      name: "Jane Smith",
      text: "Aenean eu massa facilisis, bibendum odio id, cursus quam. Sed suscipit mauris vitae facilisis suscipit. Pellentesque habitant morbi tristique ",
    },

    {
      image: avatar03,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet tellus nec neque interdum, sit amet placerat elit tincidunt.",
    },

    {
      image: avatar04,
      name: "Roney Boss",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet tellus nec neque interdum, sit amet placerat elit tincidunt.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section>
      <div className="container slide_container">
        <h2 className="highlights">Testimonials</h2>
        <Slider {...settings} className="Slide">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="testimonial_wrapper"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="1000"
              key={index}
            >
              <img
                className="slider_img"
                src={testimonial.image}
                alt={`Avatar ${index + 1}`}
              />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
