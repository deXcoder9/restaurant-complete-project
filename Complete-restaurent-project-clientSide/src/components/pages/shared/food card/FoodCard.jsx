import PropTypes from 'prop-types';

const FoodCard = ({item}) => {

    const { name, image, price,  recipe } = item;

  return (
    <div className="card w-96 bg-[#f3f3f311] shadow-xl rounded-md relative">
        <p className='absolute right-4 top-2 rounded-md bg-black text-white py-1 px-5' > {"$" + price}</p>
      <figure>
        <img
          className="tabPanelImage  "
          src={image}
          alt="salad"
        />
      </figure>
      <div className="card-body flex justify-center items-center text-center">
        <h2 className="text-2xl">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions ">
          <button className="btn  transition-all  ease-linear btn-outline uppercase text-[#BB8506] rounded-lg border-0 border-b-4 ">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes  = {
    item: PropTypes.object.isRequired,
}


export default FoodCard;
