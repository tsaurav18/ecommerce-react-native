import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ProductItem from '../../components/ProductItem/index';
import products from "../../data/products"
const HomeScreen = ({searchValue}:{searchValue: String}) => {
    
    return (
        <View style={styles.page}>
            {/* render product component */}
            <FlatList data={products}
            renderItem={({item})=> <ProductItem item={item}/>}
            showsVerticalScrollIndicator={false}
            />
          
          
       
        </View>
    )
}
const styles = StyleSheet.create({
    page:{
padding:5,


    }
})
export default HomeScreen
