import { FiTrash2 } from 'react-icons/fi';
import {
  Card as StyledCard,
  DrinkTitle,
  DrinkStat,
  DrinkDesc,
  DrinkBtnContainer,
  SeeMoreLink,
  DeleteCardBtn,
  DrinkImage,
} from '../DrinkCard/DrinkCard.styled';

const DrinkCard = ({ cardData, onDelete }) => {
  const { drink, description, alcoholic, _id, drinkThumb } = cardData;

  return (
    <StyledCard>
      <picture>
        <DrinkImage
          src={drinkThumb}
          alt="coctail"
          loading="lazy"
        />
      </picture>
      <DrinkTitle>{drink}</DrinkTitle>
      <DrinkStat>{alcoholic}</DrinkStat>
      <DrinkDesc>{description}</DrinkDesc>
      <DrinkBtnContainer>
        <SeeMoreLink to={`/aboutdrink`}>See more</SeeMoreLink>
        <DeleteCardBtn type="button" id={_id} onClick={() => onDelete(_id)}>
          <FiTrash2 size={24} />
        </DeleteCardBtn>
      </DrinkBtnContainer>
    </StyledCard>
  );
};

export default DrinkCard;
