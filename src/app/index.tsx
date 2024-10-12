import { View } from "react-native";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel/Carousel";
import { ProductsHome } from "../components/Products";
import { Footer } from "../components/Footer";
import { setStatusBarBackgroundColor} from "expo-status-bar";

setStatusBarBackgroundColor('rgb(63 63 70)', true);

export default function Index() {
  return (
      <View className="w-full h-full">
        <Banner image={require('../assets/images/banner.png')} />
        <Carousel />
        <ProductsHome />
        <Banner image={require('../assets/images/bannerOferta.png')} />
        <Footer />
      </View>
  );
}
