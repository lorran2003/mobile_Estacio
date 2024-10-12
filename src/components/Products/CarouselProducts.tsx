import { View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { cardsDetails, CardsType } from '../Carousel/Carousel';
import { CardsProducts } from './CardsProducts';
import { useState } from 'react';

const numberViewComponents: null[] = new Array(Math.ceil(cardsDetails.length / 4)).fill(null);

const gerenateFourCards = (starIndex: number): CardsType[] => {

  const arrayFourCards: CardsType[] = [];

  for (let index = 0; index < 4; index++) {

    const cardIndex = starIndex + index;

    if (cardIndex < cardsDetails.length) {
      arrayFourCards.push(cardsDetails[cardIndex]);
      continue;
    }
  }

  return arrayFourCards;
}

export function CarouselProducts() {

  const [cards, setCards] = useState<CardsType[]>(gerenateFourCards(0))

  return (
    <View className='w-full h-full'>
      <PagerView
        initialPage={0}
        style={{flex:1,  height:500}}
      >
        {
          numberViewComponents.map((_, index) =>

            <View key={index} className='w-full h-full justify-center items-center gap-5 flex-row flex-wrap'>
              {
                cards.map((item) => <CardsProducts key={item.id} cardsDetails={item} />)
              }
            </View>
          )
        }
      </PagerView>
    </View>
  )
}