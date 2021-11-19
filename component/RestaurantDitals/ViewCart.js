import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { useSelector } from 'react-redux';
import { selectCart } from '../../slices/cartSlice';
import LottieView from "lottie-react-native";



export default function ViewCart({ navigation, restaurantName }) {
    const [lodaing, setLodaing] = useState(false);
    const carts = useSelector(selectCart);
    const [modalVisible, setModalVisible] = useState(false)
    const total = carts
        .map((item) => Number(item.item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);


    const styles = StyleSheet.create({
        moduleContainer: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.7)"
        },
        moduleOrderes: {
            width: "100%",
            height: 300,
            backgroundColor: "#eee",
            position: "absolute",
            // alignItems: "center",
        },
        subtotalContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 20,
        },
        Checkout: {
            width: 300,
            backgroundColor: "#000",
            flexDirection: "row",
            justifyContent: "flex-end",
            borderRadius: 30,
            alignItems: "center"
        },

    })
    const handelCheckout = () => {
        setLodaing(true);
        setTimeout(() => {
            setLodaing(false);
            navigation.navigate("OrderCompleted");
        }, 2500);

    }


    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.moduleContainer}>
                    <View style={styles.moduleOrderes}>
                        <View style={{ alignItems: "center", padding: 10 }}>
                            <Text>{restaurantName}</Text>
                        </View>
                        <ScrollView>
                            {
                                carts.map((item, i) => (
                                    <Orderes key={i} item={item} />
                                ))
                            }
                        </ScrollView>
                        <View style={styles.subtotalContainer}>
                            <Text>subtotal</Text>
                            <Text>${total}</Text>
                        </View>

                        <View style={{ alignItems: "center" }}>
                            <TouchableOpacity
                                style={styles.Checkout}
                                onPress={() => {
                                    handelCheckout()
                                    setModalVisible(false)
                                }}
                            >
                                <Text style={{ fontSize: 20, color: "#fff", padding: 10, marginRight: 20 }}>Checkout</Text>
                                <Text style={{ color: "#fff", marginRight: 20 }}>${total}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                {checkoutModalContent()}
            </Modal>
            {
                total ? (
                    <View
                        style={{
                            flex: 1,
                            position: "absolute",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                            flexDirection: "row",
                            bottom: 80,
                            zIndex: 999
                        }}
                    >
                        <View
                            style={{
                                width: "100%",
                                height: 50,
                                alignItems: "center",
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    width: 300,
                                    height: 50,
                                    backgroundColor: "#000",
                                    borderRadius: 30,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-end",

                                }}
                                onPress={() => setModalVisible(true)}>
                                <Text
                                    style={{
                                        color: "#fff",
                                        position: "relative",
                                        right: 40,
                                        fontSize: 20
                                    }}
                                >View Cart</Text>
                                <Text
                                    style={{
                                        color: "#fff",
                                        marginRight: 20
                                    }}
                                >${total}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (<></>)
            }
            {
                lodaing ? (<>
                    <View
                        style={{
                            backgroundColor: "black",
                            position: "absolute",
                            opacity: 0.6,
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            width: "100%",
                        }}
                    >
                        {

                        }

                        <LottieView
                            style={{ height: 200 }}
                            source={require("../../assets/animations/scanner.json")}
                            autoPlay
                            speed={3}
                        />
                    </View>
                </>) : (<></>)
            }

        </>
    )
}

const Orderes = ({ item }) => (
    <View
        style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomColor: "#000"
        }}
    >
        <Text style={{ padding: 15, fontSize: 18 }}>{item.item.title}</Text>
        <Text style={{ padding: 20 }}>{item.item.price}</Text>
    </View>
)