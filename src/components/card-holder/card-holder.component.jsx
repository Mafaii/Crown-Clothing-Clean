import Carditem from "../card-item/card-item.component";

import { CardHolderStyled } from "./card-holder.styles.jsx";
const CardHolder = ({ categories }) => {
  return (
    <>
      <h1>Categories</h1>
      <CardHolderStyled>
        {categories.map((cat) => (
          <Carditem category={cat.title} id={cat.id} imageUrl={cat.imageUrl} />
        ))}
      </CardHolderStyled>
    </>
  );
};

export default CardHolder;
