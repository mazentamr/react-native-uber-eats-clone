import React from 'react'
import { View, Text, SafeAreaView,ScrollView ,Image} from 'react-native'
import LottieView from "lottie-react-native";
import { useSelector } from 'react-redux';
import { selectCart } from '../slices/cartSlice';
import { Divider } from 'react-native-elements';

export default function OrderCompleted() {
    const carts = useSelector(selectCart);
    const total = carts
        .map((item) => Number(item.item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: Platform.OS === 'android' ? 25 : 0,
                backgroundColor: "#fff"
            }}>

            <LottieView
                style={{ height: 110, marginTop: 10, alignSelf: "center", marginBottom: 30 }}
                source={require("../assets/animations/check-mark.json")}
                autoPlay
                speed={0.5}
                loop={false}
            />
            <Text>Your order at FIG Restaurant has been placed for ${total}🚀</Text>
            <ScrollView>
                {
                    carts.map((item, i) => (
                        <View key={i} style={{}}>   
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    margin: 20,
                                }}
                            >
                                <InfoMenu item={item.item} />
                                <ImageMenu image={item.item.image} />
                            </View>
                            <Divider
                                width={0.5}
                                orientation="vertical"
                                style={{ marginHorizontal: 20 }}
                            />
                        </View>
                    ))
                }
            </ScrollView>
            <LottieView
                style={{ height: 200, marginTop: 10, alignSelf: "center", marginBottom: 30 }}
                source={require("../assets/animations/cooking.json")}
                autoPlay
                speed={0.5}
                loop={true}
            />
        </SafeAreaView>
    )
}

const ImageMenu = ({ image }) => (
    <Image
        source={{ uri: image }}
        style={{
            width: 100,
            height: 100,
            borderRadius: 10,
        }}
    />
)

const InfoMenu = ({ item }) => (
    <View style={{ justifyContent: "center", width: 240 }}>
        <Text
            style={{
                fontSize: 20,
            }}>{item.title}</Text>
        <Text style={{}}>{item.description}</Text>
        <Text style={{}}>{item.price}</Text>
    </View>
)