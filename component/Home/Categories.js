import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
const items = [
    {
        image: require("../../assets/images/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../../assets/images/soft-drink.png"),
        text: "Soft Drinks",
    },
    {
        image: require("../../assets/images/bread.png"),
        text: "Bakery Items",
    },
    {
        image: require("../../assets/images/fast-food.png"),
        text: "Fast Foods",
    },
    {
        image: require("../../assets/images/deals.png"),
        text: "Deals",
    },
    {
        image: require("../../assets/images/coffee.png"),
        text: "Coffee & Tea",
    },
    {
        image: require("../../assets/images/desserts.png"),
        text: "Desserts",
    },
];
export default function Categories() {
    return (
        <View
            style={{
                backgroundColor: "#fff",
                marginTop: 7,

            }}
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    items.map((item, i) => (
                        <View key={i} style={{
                            padding: 10,
                            alignItems:"center"
                        }}>
                            <Image
                                source={item.image}
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                            />
                            <Text>{item.text}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
