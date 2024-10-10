import PagerView from 'react-native-pager-view'
import { CarouselCards } from './CarouselCards'
import { FlatList, View } from 'react-native';
import { useEffect, useRef } from 'react';

interface CardsType {
  id: number;
  img: any;
}

const containerCarousel: CardsType[] = [
  {
    id: 1,
    img: require('../../assets/images/imgCarousel.png')
  },
  {
    id: 2,
    img: require('../../assets/images/imgCarousel.png')
  },
  {
    id: 3,
    img: require('../../assets/images/imgCarousel.png')
  },
  {
    id: 4,
    img: require('../../assets/images/imgCarousel.png')
  },
  {
    id: 5,
    img: require('../../assets/images/imgCarousel.png')
  },
  {
    id: 6,
    img: require('../../assets/images/imgCarousel.png')
  },
  {
    id: 7,
    img: require('../../assets/images/imgCarousel.png')
  },
]

export function Carousel() {
  const flatListRef = useRef<FlatList>(null);
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % containerCarousel.length;
      console.log(currentIndex)
      flatListRef.current?.scrollToIndex({ index: currentIndex, animated: true })
    }, 2500)

    return () => clearInterval(interval);
  })

  return (
    <View className='h-full py-5'>
      <FlatList
        ref={flatListRef}
        data={containerCarousel}
        renderItem={({ item }) => <CarouselCards key={item.id} img={item.img} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={'fast'}
      />
    </View>
  )
}