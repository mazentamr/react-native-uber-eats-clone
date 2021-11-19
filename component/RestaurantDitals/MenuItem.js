import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { addToCart, selectCart, deleteCart } from "../../slices/cartSlice";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export default function MenuItem({foodItem}) {
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) => {
        checkboxValue ?
            dispatch(addToCart({ item, checkboxValue })) :
            dispatch(deleteCart(item.title));
    }
    const carts = useSelector(selectCart);
    const saveCheckboxValue = (carts, food) => Boolean(carts.find((item => item.item.title === food.title)))


    // console.log(carts)
    return (
        <ScrollView>
            {
                foodItem.map((item, i) => (
                    <View key={i} style={{}}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                margin: 20,
                            }}
                        >
                            <BouncyCheckbox
                                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                                fillColor="green"
                                isChecked={saveCheckboxValue(carts, item)}
                                onPress={(checkboxValue) => selectItem(item, checkboxValue)}
                            />
                            <InfoMenu item={item} />
                            <ImageMenu image={item.image} />
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
                fontSize: 20
            }}>{item.title}</Text>
        <Text style={{

        }}>{item.description}</Text>
        <Text style={{

        }}>{item.price}</Text>
    </View>
)