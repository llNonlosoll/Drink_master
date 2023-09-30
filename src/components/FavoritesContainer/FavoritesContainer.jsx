import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CommonContainer } from '../GlobalStyles/CommonContainer.styled';
import { Section, Title } from './FavoritesContainer.styled';
import { CardsContainer } from '../DrinkCard/DrinkCard.styled';
import { Paginator } from '../Paginator/Paginator';
import { Loading } from '../Loading/Loading';

import { InfoComponent } from '../InfoComponent/InfoComponent';
import {
  checkAndSetPage,
  countElements,
  displayedFavoriteCards,
  fetchFavorite,
  handlePageChange,
  updLimit,
} from '../../helpers';

const FavoritesContainer = () => {
  const [cards, setCards] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page =
    searchParams.get('page') - 1 ? Number(searchParams.get('page')) : 0;
  const [currentPage, setCurrentPage] = useState(page);
  const [limit, setLimit] = useState(null);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(3);
  const [showPagination, setShowPagination] = useState(false);

  useEffect(() => {
    fetchFavorite(setIsloading, setCards);
  }, []);

  const pagesVisited = currentPage * limit;

  useEffect(() => {
    const { newLimit, newPageRangeDisplayed } = updLimit();
    setLimit(newLimit);
    setPageRangeDisplayed(newPageRangeDisplayed);

    window.addEventListener('resize', updLimit);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    return () => {
      window.removeEventListener('resize', updLimit);
    };
  }, []);

  useEffect(() => {
    if (cards.length > limit) {
      setShowPagination(true);
    } else {
      setShowPagination(false);
    }
  }, [cards.length, limit]);

  const { numberOfElementsOnPage } = countElements(cards, currentPage, limit);

  useEffect(() => {
    checkAndSetPage(
      numberOfElementsOnPage,
      currentPage,
      setSearchParams,
      setCurrentPage,
    );
  }, [numberOfElementsOnPage, currentPage, setSearchParams]);

  const displayedCards = displayedFavoriteCards(
    cards,
    pagesVisited,
    limit,
    setCards,
  );

  return (
    <Section>
      <CommonContainer>
        <div>
          <Title>Favorites</Title>
          {isloading ? (
            <Loading />
          ) : cards.length > 0 ? (
            <>
              <CardsContainer>{displayedCards}</CardsContainer>
              {showPagination && (
                <Paginator
                  limit={limit}
                  currentPage={currentPage}
                  itemsLength={cards.length}
                  handlePageChange={(page) =>
                    handlePageChange(page, setSearchParams, setCurrentPage)
                  }
                  pageRangeDisplayed={pageRangeDisplayed}
                />
              )}
            </>
          ) : (
            <InfoComponent>
              You haven't added any favorite cocktails yet
            </InfoComponent>
          )}
        </div>
      </CommonContainer>
    </Section>
  );
};

export default FavoritesContainer;
