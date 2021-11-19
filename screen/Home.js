import React, { useEffect, useState } from 'react'
import { SafeAreaView, Platform } from 'react-native'
import HeaderTabd from '../component/Home/HeaderTabd'
import SearchBar from '../component/Home/SearchBar'
import Categories from '../component/Home/Categories'
import RestaurantItem from '../component/Home/RestaurantItem'
import { Divider } from 'react-native-elements'
import BottomTabs from '../component/Home/BottomTabs'


export default function Home({ navigation }) {
    const [city, setSity] = useState("USA");
    const [activeTap, setActiveTap] = useState("Delivery");
    const [restaurantData, setRestaurantData] = useState([]);

    const YELP_API_KEY =
        "rMcX1wum9GwT_BsL_IURO6Vuww82NDqZKYzE1AbgMRhlrLCopc_BSSXURVysdBluLo5nh8arxZphlAruccgTXj10tDD3L19p4vaimx73Uxa7R8Sk40hdPtVATL6AYXYx";

    useEffect(() => {
        fetchRestaurant();
    }, [activeTap,city])
    
    function fetchRestaurant() {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then(res => res.json())
            .then(json => setRestaurantData(json.businesses.filter((business => business.transactions.includes(activeTap.toLowerCase())))))
    }

    console.log(city);
    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: Platform.OS === 'android' ? 25 : 0,
                backgroundColor: "#eee"
            }}>

            <HeaderTabd activeTap={activeTap} setActiveTap={setActiveTap} />
            <SearchBar setSity={setSity}/>
            <Categories />
            <RestaurantItem restaurantData={restaurantData} navigation={navigation}/>
            <Divider width={1} />
            <BottomTabs/>
        </SafeAreaView>
    )
}
