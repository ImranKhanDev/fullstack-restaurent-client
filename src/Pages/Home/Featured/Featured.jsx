import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css'

const Featured = () => {
  return (
    <section className="featured text-white bg-white">
      <SectionTitle heading={"Check it out"} subHeading={"From Our Menu"} />

      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src="public/assets/home/featured.jpg" alt="featured image" />
        </div>
        <div className="md:ml-10 ">
          <p>Dec 25,2029</p>
          <p>where can i get</p>
          <p className="mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sit
            magnam maxime autem quas labore voluptate maiores in.
          </p>
          <button className="btn btn-outline border-0 border-b-4">Order now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
