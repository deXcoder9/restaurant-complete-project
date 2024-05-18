
import SectionTitle from '../../../section title/SectionTitle'
import MenuItem from '../../shared/menu item/MenuItem'
import useMenu from '../../../../hooks/useMenu'

const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

  return (
    <section className='max-w-[1320px] mx-auto mt-14 '>
        <SectionTitle
        subHeadeing={"Check it out"}
        heading={"from our menu"}
        >
        </SectionTitle>
        <div className='grid md:grid-cols-2 gap-10'>
            {
                popular.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
            }
        </div>

    </section>
  )
}

export default PopularMenu