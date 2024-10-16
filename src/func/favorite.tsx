import { AntDesign } from "@expo/vector-icons";


export const favoriteProducts = (favorite: boolean) => {

    let _favorite: boolean ;

    _favorite = favorite;
    if (favorite) {
        favorite = false;
        return <AntDesign name="heart" size={20} color="red" />;
    }
    favorite = true;
    return <AntDesign name="hearto" size={20} color="black" />;
};