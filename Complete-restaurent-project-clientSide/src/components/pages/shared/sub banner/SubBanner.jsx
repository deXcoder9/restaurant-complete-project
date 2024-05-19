import PropTypes from 'prop-types';

const SubBanner = ({ bgImage, header, description }) => {
  return (
    <section
      style={{ background: `url(${bgImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
      className= " h-[800px]  mx-auto grid place-items-center"
    >
      <div style={{background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6))'}}  className="text-center  space-y-3  w-2/3 py-28  mx-auto ">
        <h1 className="text-5xl font-bold text-white uppercase">{header}</h1>
        <p className="text-center w-3/4 mx-auto text-gray-300 uppercase">{description} </p>
      </div>
    </section>
  );
};

SubBanner.propTypes  = {
    bgImage: PropTypes.node,
    header: PropTypes.string,
    description: PropTypes.string
}


export default SubBanner;
