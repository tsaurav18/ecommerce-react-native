import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

interface ButtonProps{
    text:string,
    onPress:()=>void,
    containerStyle?:object 
}
const Button = ({text, onPress,containerStyle}:ButtonProps) => {
    return (
        <Pressable style={[styles.root, containerStyle]}onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}
const styles= StyleSheet.create({
    root:{backgroundColor:"#e47911",
marginVertical:10, 
height:35,
justifyContent:'center',
alignItems:'center',
borderRadius:5,
borderWidth:1,
borderColor:"#a15e1b"
},

    text:{
        fontSize:16
    }
})
export default Button
