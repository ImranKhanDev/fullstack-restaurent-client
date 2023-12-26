import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Restora Menu</title>
      </Helmet>
      <Cover
        img={"/public/assets/menu/pizza-bg.jpg"}
        title={"Our Menu"}
      ></Cover>
      <SectionTitle
        heading={"Dont miss"}
        subHeading={"Todays offer"}
      ></SectionTitle>
      {/* main img */}
      {/* dessert */}
      <MenuCategory
        items={dessert}
        img={"/public/assets/menu/dessert-bg.jpeg"}
        title={"dessert"}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        img={"/public/assets/menu/salad-bg.jpg"}
        title={"salad"}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        img={"/public/assets/menu/pizza-bg.jpg"}
        title={"pizza"}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        img={"/public/assets/menu/soup-bg.jpg"}
        title={"soup"}
      ></MenuCategory>
      <MenuCategory
        items={offered}
        img={"/public/assets/menu/salad-bg.jpg"}
        title={"offered"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
