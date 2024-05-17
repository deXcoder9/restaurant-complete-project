

const SectionTitle = ({heading, subHeadeing}) => {
  return (
    <div className="text-center mb-14 mt-5">
        <p className="text-lg pb-3 text-[#D99904] ">--- {subHeadeing} ---</p>
        <hr className="w-1/5 mx-auto border-[1px] border-[#e8e8e8a1]" />
        <h1 className="text-white text-4xl py-3 pb-5 uppercase">{heading}</h1>
        <hr className="w-1/5 mx-auto border-[1px]  border-[#e8e8e8a1]" />
    </div>
  )
}

export default SectionTitle;