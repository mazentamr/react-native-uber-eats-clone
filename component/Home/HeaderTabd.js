import React from 'react'
import { Text, TouchableOpacity, SafeAreaView } from 'react-native'

export default function HeaderTabd(props) {
    return (
        <SafeAreaView
            style={{
                flexDirection: "row",
                justifyContent: "center",
                backgroundColor: "#fff",
            }}
        >
            <BottomTab
                name="Delivery"
                color="#000"
                fontColor="#fff"
                activeTap={props.activeTap}
                setActiveTap={props.setActiveTap}
            />
            <BottomTab
                name="Pickup"
                color="#fff"
                fontColor="#000"
                activeTap={props.activeTap}
                setActiveTap={props.setActiveTap}
            />
        </SafeAreaView>
    )
}

const BottomTab = (props) => (
    <TouchableOpacity
        style={{
            backgroundColor: props.activeTap == props.name ? "#000" : "#fff",
            borderRadius: 30,
            marginTop: 20,
        }}
        onPress={() => props.setActiveTap(props.name)}
    >

        <Text
            style={{
                color: props.activeTap == props.name ? "#fff" : "#000",
                fontSize: 20,
                padding: 5,
                paddingHorizontal: 10,
            }}>{props.name}</Text>
    </TouchableOpacity>
)
