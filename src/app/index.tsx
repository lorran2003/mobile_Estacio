import { Text, View } from "react-native";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel/Carousel";
import { ProductsHome } from "../components/Products/ProductsHome";
import { Footer } from "../components/Footer";

export default function Index() {
  return (
      <View>
        <Banner image={require('../assets/images/banner.png')} />
        <Carousel />
        <ProductsHome />
        <Banner image={require('../assets/images/bannerOferta.png')} />
        <Footer />
      </View>
  );
}
