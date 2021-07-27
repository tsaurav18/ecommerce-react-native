import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Button from '../../components/Button';
import products from '../../data/cart';
import {useNavigation} from '@react-navigation/native';
import CartProductItem from '../../components/CartProductItem/index';
const ShoppingCartScreen = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );
  const navigation = useNavigation();
  const onCheckout = () => {
    navigation.navigate('Address');
  };
  return (
    <View style={styles.page}>
      <View>
        <Text style={{fontSize: 16}}>
          {' '}
          Subtotal ({products.length} items):
          <Text style={{color: '#e47911', fontWeight: 'bold'}}>
            ${totalPrice.toFixed(2)}
          </Text>{' '}
        </Text>
        <Button
          text={'Proceed to checkout'}
          containerStyle={{backgroundColor: 'yellow', borderColor: '#c7b702'}}
          onPress={
            onCheckout
          }></Button>
      </View>
      {/* render product component */}
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    padding: 5,
  },
});
export default ShoppingCartScreen;
