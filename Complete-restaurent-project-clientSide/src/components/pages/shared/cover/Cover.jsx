import PropTypes from "prop-types";
import { Parallax } from "react-parallax";

import "./cover.css";


const Cover = ({ header, description, bgImage }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={bgImage}
      bgImageAlt="menu"
      strength={-300}
    >
      <section className="cover-background h-[600px]  mx-auto grid place-items-center mt-28">
        <div className="cover-body text-center  space-y-4  w-3/4 py-16 mx-auto  ">
          <h1 className="text-5xl font-bold text-white uppercase">{header}</h1>
          <p className="text-center w-3/4 mx-auto text-gray-200 uppercase">
            {description}
          </p>
        </div>
      </section>
    </Parallax>
  );
};

Cover.propTypes = {
  bgImage: PropTypes.element,
  header: PropTypes.string,
  description: PropTypes.string,
};

export default Cover;
