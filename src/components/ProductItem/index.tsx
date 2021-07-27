import React from 'react'
import { View, Image, Text , Pressable} from 'react-native'
import styles from './styles'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {useNavigation} from "@react-navigation/native"
interface ProductItemProps{
    item:{
        id:string,
        title:string,
        image:string,
        avgRating:number,
        rating:number,
        price:number,
        oldPrice?: number
    }
}
const ProductItem = ({item}:ProductItemProps) => {
    const navigation = useNavigation()
const onPress = ()=>{
        navigation.navigate('ProductDetail', {id: item.id})
}
    return (
        <Pressable onPress={onPress} style={styles.page}>
        {/* render product component */}
        <View style={styles.root}>
            <Image style={styles.image } source={{uri:item.image}}/>
            <View style={styles.rightContainer}>
    <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
 {/* rating */}
 <View style={styles.ratingContainer}>
    {[0,0,0,0,0].map((el, i)=>
 <FontAwesome key={`${item.id}-${i}`} style={styles.star} name={i< Math.floor(item.avgRating)? 'star':'star-o'} size={18} color={"#e47911"}/>
    )}
     <Text>{item.avgRating}</Text>
 </View>
 <Text style={styles.price}>from  ${item.price} {item.oldPrice &&<Text style={styles.oldPrice}>${item.oldPrice}</Text>}</Text>

            </View>
        </View>
    </Pressable>
    )
}

export default ProductItem
