import React ,{useState}from 'react'
import { View, Image, Text } from 'react-native'

import QuantitySelector from '../../components/QuantitySelector';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import styles from './styles';
interface CartProductItemProps{
    cartItem:{
        id: string,
        quantity:number,
        option?:string,
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
    
}
const CartProductItem = ({cartItem}:CartProductItemProps) => {
const {quantity:quantityProp, item} = cartItem
const [quantity, setQuantity] = useState(quantityProp)
    return (
        <View style={styles.root}>

        {/* render product component */}
        <View style={styles.row}>
            <Image style={styles.image } source={{uri:item?.image}}/>
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
<View style={styles.quantatiyContainer}><QuantitySelector quantity={quantity} setQuantity={setQuantity}/></View>

    

    </View>
    )
}

export default CartProductItem
