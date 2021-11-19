import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function BottomTabs() {
    return (
        <View
            style={{
                flexDirection:"row",
                justifyContent:"space-evenly",
                marginVertical:5,
            }}
        >
            <Icon text="Home" IconComponent={FontAwesome} icon="home" />
            <Icon text="Browse" IconComponent={FontAwesome} icon="search" />
            <Icon text="Grocery" IconComponent={FontAwesome} icon="shopping-bag" />
            <Icon text="Orders" IconComponent={FontAwesome5} icon="receipt" />
            <Icon text="Account" IconComponent={FontAwesome} icon="user" />
        </View>
    )
}

const Icon = ({ IconComponent, icon, text }) => (
    <TouchableOpacity>
        <View>
            <IconComponent style={{ alignSelf: "center" }} name={icon} size={30} color="black" />
            <Text>{text}</Text>
        </View>
    </TouchableOpacity>
)
