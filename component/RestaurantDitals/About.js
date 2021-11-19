import React from 'react'
import { View, Text, Image } from 'react-native'

export default function About({ route }) {
    const { reviews, name, image, price, rating, categories } = route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" . ");

    const description = `${formattedCategories} ${price ? " . " + price : ""
        } . 💳 . ${rating} ⭐ (${reviews}+)`;

    return (
        <View>
            <ImageRestaurant image={image} />
            <TitelRestaurant name={name} />
            <InfoRestaurant info={description} />
        </View>
    )
}


const ImageRestaurant = ({ image }) => (
    <Image
        source={{ uri: image }}
        style={{
            width: "100%",
            height: 180,
        }}
    />
)

const TitelRestaurant = ({name}) => (
    <View>
        <Text
            style={{
                fontSize: 29,
                marginHorizontal: 15,
                marginVertical: 5,
            }}
        >{name}</Text>
    </View>
)

const InfoRestaurant=({info})=>(
    <View>
        <Text
            style={{
                fontSize: 15,
                marginHorizontal: 15,
                marginVertical: 5,
            }}
        >{info}</Text>
    </View>
)