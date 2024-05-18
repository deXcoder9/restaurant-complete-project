import PropTypes from 'prop-types';
import MenuItem from '../../shared/menu item/MenuItem';
import Cover from '../../shared/cover/Cover';


const MenuCategory = ({items, description, header, bgImage }) => {
  return (
    <div className=''>

        {
          header &&   <Cover header={header} description={description} bgImage={bgImage}  ></Cover>
        }


    <div className="grid md:grid-cols-2 gap-10 my-16 max-w-[1320px] mx-auto">
        {
            items.map((item) => <MenuItem key={item._id} item={item}></MenuItem> )
        }
    </div>
    </div>
  )
}
MenuCategory.propTypes  = {
    items: PropTypes.array,
    header: PropTypes.string,
    description: PropTypes.string,
    bgImage: PropTypes.bool,
  }

export default MenuCategory