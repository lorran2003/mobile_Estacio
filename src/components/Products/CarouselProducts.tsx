import { View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { cardsDetails, CardsType } from '../Carousel/Carousel';
import { CardsProducts } from './CardsProducts';

const numberViewComponents: null[] = new Array(Math.ceil(cardsDetails.length / 4)).fill(null);

const gerenateFourCards = (starIndex: number): CardsType[] => {

  const arrayFourCards: CardsType[] = [];

  for (let index = 0; index < 4; index++) {

    const cardIndex = starIndex + index;

    if (starIndex < cardsDetails.length) {
      arrayFourCards.push(cardsDetails[cardIndex]);
      starIndex++;
    }
  }

  return arrayFourCards;
}

export function CarouselProducts() {

  return (
    <View className='w-full h-full'>
      <PagerView
        initialPage={0}
        style={{ flex: 1, height: 200 }}
      >
        {
          numberViewComponents.map((item, index) =>
            <View key={index} className='w-full h-auto justify-center items-center gap-5 flex-row flex-wrap'>
              {
                gerenateFourCards(index * 4).map((item) => <CardsProducts key={item.id} cardsDetails={item.img} />)
              }
            </View>
          )
        }
      </PagerView>
    </View>
  )
}