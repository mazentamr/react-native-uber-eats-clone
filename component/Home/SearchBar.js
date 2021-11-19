import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



export default function SearchBar({ setSity }) {
  const [newCityChange, setNewCityChange] = useState("")

  return (



    <View style={{ flexDirection: "row", backgroundColor: "#fff" }}>
      <View style={{
        flexDirection: "row",
        width: "85%",
        height: 55,
        justifyContent: "space-between",
        // alignContent:"center",
        alignItems: "center",
        backgroundColor: "#eee",
        margin: 15,
        borderRadius: 30,
        marginTop: 15,

      }}>
        <View style={{
          flexDirection: "row"
        }}>
          <View>
            <Entypo name="location-pin" size={24} style={{ marginHorizontal: 10 }} />
          </View>
          <TextInput
            onChangeText={setNewCityChange}
            placeholder="Search"
            value={newCityChange}
          />

        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            padding: 7,
            borderRadius: 30,
            alignItems: "center",
            marginRight: 10,

          }}
          onPress={() => { setSity(newCityChange) }}
        >
          <AntDesign name="clockcircle" size={11} color="black" style={{ marginRight: 6 }} />
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
    // <View style={{ backgroundColor: "#fff" ,margin:30}}>

    //     <GooglePlacesAutocomplete
    //         query={{ key: "AIzaSyBpXJcIPMth-YQVJ6lTTGMMen-rVeG-32k" }}
    //         onPress={(data, details = null) => {
    //             console.log(data.description);
    //             const city = data.description.split(",")[0];
    //             cityHandler(city);
    //         }}
    //         placeholder="Search"
    //         styles={{
    //             textInput: {
    //                 backgroundColor: "#eee",
    //                 borderRadius: 20,
    //                 fontWeight: "700",
    //                 marginTop: 7,
    //             },
    //             textInputContainer: {
    //                 backgroundColor: "#eee",
    //                 borderRadius: 50,
    //                 flexDirection: "row",
    //                 alignItems: "center",
    //                 marginRight: 10
    //             },

    //         }}

    //         renderHeaderComponent={() => (
    //             <View>
    //                 <Entypo name="location-pin" size={24} />
    //             </View>
    //         )}
    //         renderRightButton={() => (
    //             <View style={{
    //                 flexDirection: "row",
    //                 marginRight: 8,
    //                 backgroundColor: "white",
    //                 padding: 9,
    //                 borderRadius: 30,
    //                 alignItems: "center",
    //             }}>
    //                 {/* <Ioni
    //                     name="clockcircle"
    //                     size={11}

    //                 />
    //                 <AntDesign name="clockcircle" size={11} color="black" style={{ marginRight: 6 }} /> */}
    //                 {/* <Text>Seare</Text> */}
    //             </View>
    //          )}
    //      />

    //     {/* <View style={{
    //         flexDirection:"row",
    //         width:"85%",
    //         height:55,
    //         justifyContent:"space-between",
    //         // alignContent:"center",
    //         alignItems:"center",
    //         backgroundColor:"#eee",
    //         margin:15,
    //         borderRadius:30,
    //         marginTop:15,

    //     }}>
    //         <View style={{
    //             flexDirection:"row"
    //         }}>
    //             <View>
    //                 <Entypo name="location-pin" size={24} style={{marginHorizontal:10}} />
    //             </View>
    //             <TextInput
    //                 placeholder="Search"
    //                 value=""
    //             />

    //         </View>
    //         <TouchableOpacity
    //         style={{
    //             flexDirection:"row",
    //             backgroundColor:"#fff",
    //             padding:7,
    //             borderRadius:30,
    //             alignItems:"center",
    //             marginRight:10,

    //         }}
    //         >
    //             <AntDesign name="clockcircle" size={11} color="black" style={{ marginRight: 6 }} />
    //             <Text>Search</Text>
    //         </TouchableOpacity>
    //     </View> */}
    // </View>
  )
}





