import { Text, View } from "react-native";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel/Carousel";
import { ProductsHome } from "../components/Products/ProductsHome";

export default function Index() {
  return (
      <View>
        <Banner />
        <Carousel />
        <ProductsHome />
      </View>
  );
}
