import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Restora Menu</title>
      </Helmet>
      <Cover img={'/public/assets/menu/pizza-bg.jpg'}title={'Our Menu'}></Cover>
    </div>
  );
};

export default Menu;
