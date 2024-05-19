import PropTypes from 'prop-types';
import MenuItem from '../../shared/menu item/MenuItem';
import Cover from '../../shared/cover/Cover';
import { Link } from 'react-router-dom';


const MenuCategory = ({items, description, header, bgImage }) => {
  return (
    <div className=''>

        {
          header &&   <Cover header={header} description={description} bgImage={bgImage}  ></Cover>
        }


    <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-[1320px] mx-auto">
        {
            items.map((item) => <MenuItem key={item._id} item={item}></MenuItem> )
        }
    </div>
    <div className='grid place-items-center mb-20 mt-8'>
        <Link to={`/order/${header}`}>
        <button className="   btn   transition-all w-[170px]  ease-linear btn-outline uppercase text-[#BB8506] rounded-lg border-0 border-b-4 ">
            Order now
          </button>
          </Link>
    </div>
    </div>
  )
}
MenuCategory.propTypes  = {
    items: PropTypes.array,
    header: PropTypes.string,
    description: PropTypes.string,
    bgImage: PropTypes.node,
  }

export default MenuCategory