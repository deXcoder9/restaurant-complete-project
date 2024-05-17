import React, { useState } from 'react'
import { useEffect } from 'react'
import SectionTitle from '../../../section title/SectionTitle'
import MenuItem from '../../shared/menu item/MenuItem'

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect( () =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === "popular" )
            setMenu(popularItems)

        })
    } , [])
  return (
    <section className='max-w-[1320px] mx-auto mt-14 '>
        <SectionTitle
        subHeadeing={"Check it out"}
        heading={"from our menu"}
        >
        </SectionTitle>
        <div className='grid md:grid-cols-2 gap-10'>
            {
                menu.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
            }
        </div>

    </section>
  )
}

export default PopularMenu