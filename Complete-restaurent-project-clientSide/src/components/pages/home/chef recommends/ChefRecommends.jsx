import SectionTitle from "../../../section title/SectionTitle";

const ChefRecommends = () => {
  return (
    <section className="max-w-[1320px] mx-auto mt-36 ">

        <SectionTitle
        subHeadeing={"should try"}
        heading={"chef recommends"}
        ></SectionTitle>

        {/* card container */}
        <div className="flex justify-between">
        {/* first card */} 
      <div className="card w-96 bg-[#f3f3f305] shadow-xl rounded-md">
        <figure>
          <img
            className="max-w-[300px] max-h-[400px] pt-7 "
            src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="salad"
          />
        </figure>
        <div className="card-body flex justify-center items-center text-center">
          <h2 className="text-2xl">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions ">
            <button className="btn   btn-outline uppercase text-[#BB8506] rounded-lg border-0 border-b-4 ">
              read more
            </button>
          </div>
        </div>
      </div>
      {/* second card */}
      <div className="card w-96 bg-[#f3f3f305] shadow-xl rounded-md">
        <figure>
          <img
            className="max-w-[300px] max-h-[400px] pt-7 "
            src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="salad"
          />
        </figure>
        <div className="card-body flex justify-center items-center text-center">
          <h2 className="text-2xl">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions ">
            <button className="btn   btn-outline uppercase text-[#BB8506] rounded-lg border-0 border-b-4 ">
              read more
            </button>
          </div>
        </div>
      </div>
      {/* third card */}
      <div className="card w-96 bg-[#f3f3f305] shadow-xl rounded-md">
        <figure>
          <img
            className="max-w-[300px] max-h-[400px] pt-7 "
            src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="salad"
          />
        </figure>
        <div className="card-body flex justify-center items-center text-center">
          <h2 className="text-2xl">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions ">
            <button className="btn   btn-outline uppercase text-[#BB8506] rounded-lg border-0 border-b-4 ">
              read more
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
