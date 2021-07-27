import React,{useState} from 'react'
import { View, Text ,ScrollView} from 'react-native'
import styles from './styles'
import product from '../../data/product';
import { useRoute } from '@react-navigation/core';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product?.options[0])
    const [quantity, setQuantity] = useState(1)
    const route = useRoute()
    console.log(route.params)
    console.log(selectedOption)
    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>
            <ImageCarousel images={product.images}/>
            {/* image carousel */}
            <Picker selectedValue={selectedOption}
            onValueChange={(itemValue)=>setSelectedOption(itemValue)}>
            {product.options.map(option=>(<Picker.Item label={option} value={option} />))}
    
            </Picker>
            <Text style={styles.price}>from  ${product.price} {product.oldPrice &&<Text style={styles.oldPrice}>${product.oldPrice}</Text>}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <View><QuantitySelector quantity={quantity} setQuantity={setQuantity}/></View>
            <Button text={"Add to Cart"} containerStyle={{backgroundColor:'#e3c905'}} onPress={()=>{console.warn('add to cart')}}></Button>
            <Button text={"Buy Now"} onPress={()=>{console.warn('buy now')}}></Button>
        </ScrollView>
    ) 
}


export default ProductScreen
