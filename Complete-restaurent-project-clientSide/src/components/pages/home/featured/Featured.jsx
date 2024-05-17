import SectionTitle from '../../../section title/SectionTitle'
import featuredImage from "../../../../assets/home/featured.jpg"
import './featured.css'

const Featured = () => {
  return (
    <section className='featured-background  mt-16 lg:min-h-screen flex justify-center place-items-center'>
        <div>
        <SectionTitle
        subHeadeing={"Check it out"}
        heading={"from our menu"}
        ></SectionTitle>
        <div className='md:flex justify-center items-center space-x-14'>
            <div>
                <img className='max-w-[650px] max-h-[400px]' src={featuredImage} alt="" />
            </div>
            <div className='max-w-[604px] space-y-2'>
                <h4 className='text-white font-bold'>May 23, 2023</h4>
                <h2 className='uppercase text-white font-bold'>where can i get some?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, reiciendis dolore? Iusto labore, maxime eius sapiente id temporibus laboriosam asperiores, nihil qui dolor cum. Quam culpa iure velit soluta nostrum blanditiis ab, ratione quis amet maxime mollitia, facere debitis a.</p>
                <button className="btn  btn-ghost btn-outline uppercase text-white rounded-lg border-0 border-b-4 ">read more</button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Featured