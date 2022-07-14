import React from 'react'
import { View, Image,StyleSheet } from 'react-native'

const ImageIcons = (props) => {
    return (
        <View>
            <Image  source={props.image} style={props.style}/>
        </View>
    )
}
const style=StyleSheet.create({
    
})


export default ImageIcons;
