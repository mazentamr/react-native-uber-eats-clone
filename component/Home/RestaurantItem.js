import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.1,
    },
    {
        name: "India's Grill",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.1,
    },
];


export default function RestaurantItem({ restaurantData,navigation}) {
    return (
        <View style={{ flex: 1 }}>
            {
                restaurantData ? (
                    <ScrollView >
                        {
                            restaurantData.map((item, i) => (
                                <TouchableOpacity key={i}
                                    style={{
                                        backgroundColor: "#fff",
                                        padding: 10,
                                    }}
                                    onPress={()=> navigation.navigate("RestaurantDital",{
                                        name:item.name,
                                        image:item.image_url,
                                        price:item.price,
                                        reviews:item.review_count,
                                        rating:item.rating,
                                        categories:item.categories,
                                    })}
                                >
                                    <ImageRestaurantItem image={item.image_url} />
                                    <InfoRestaurant name={item.name} rating={item.rating} />
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                ) : (
                    < ScrollView >
                        {
                            localRestaurants.map((item, i) => (
                                <View key={i}
                                    style={{
                                        backgroundColor: "#fff",
                                        padding: 10,
                                    }}
                                >
                                    <ImageRestaurantItem image={item.image_url} />
                                    <InfoRestaurant name={item.name} rating={item.rating} />
                                </View>
                            ))
                        }
                    </ScrollView>
                )
            }
        </View >
    )
}

const ImageRestaurantItem = ({ image }) => (
    <>
        <Image
            source={{ uri: image }}
            style={{
                width: "100%",
                height: 180,
            }}
        />
        <TouchableOpacity
            style={{
                position: "absolute",
                right: 20,
                top: 20,
            }}
        >
            <AntDesign name="hearto" size={25} color="white" />
        </TouchableOpacity>
    </>
)

const InfoRestaurant = ({ name, rating }) => (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }}>
        <View style={{ margin: 5 }}>
            <Text>{name}</Text>
            <Text style={{ fontSize: 12 }}>35-45 . min</Text>
        </View>
        <View>
            <Text style={{
                backgroundColor: "#eee",
                padding: 7,
                borderRadius: 30,
                margin: 5,
            }}>{rating}</Text>
        </View>
    </View>
)