import {
  View, Text, StyleSheet
} from "react-native";
import Swiper from "react-native-swiper";

export default function Carousel({data = [], renderItem = ()=>{}, loop = false, horizontal = true}) {
  return (
        <Swiper
        style={{height: 210}}
        showsButtons={false}
        autoplay={true}
        showsPagination={true}
        loop={loop}
        horizontal={horizontal}
        dot={
            <View
            style={{
                backgroundColor: "rgba(255,255,255,.3)",
                width: 10,
                height: 10,
                borderRadius: 8,
                marginLeft: 4,
                marginRight: 4,
            }}
            />
        }
        activeDot={
            <View
            style={{
                backgroundColor: "rgba(255,255,255,1)",
                width: 10,
                height: 10,
                borderRadius: 8,
                marginLeft: 4,
                marginRight: 4,
            }}
            />
        }
        >
        {data.map((item, index) => (
            <View key={index}>
                {renderItem(item)}
            </View>
        ))}
        </Swiper>
  );
}