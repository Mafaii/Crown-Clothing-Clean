import { Link } from "react-router-dom";
import { CardBackground, CardBody, CardItemContainer } from "./card-item.styles.jsx";
const Carditem = ({ category, id, imageUrl }) => {
  return (
    <CardItemContainer key={id}>
      <CardBackground
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></CardBackground>

      <CardBody >
        <h2>{category.toUpperCase()}</h2>
        <Link to={`/shop/${category}`}>
        <p>SHOP NOW</p>
        </Link>
      </CardBody>
    </CardItemContainer>
  );
};

export default Carditem;
