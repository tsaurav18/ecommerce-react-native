import React,{useState, useCallback} from 'react'
import { View, Image, FlatList,StyleSheet ,
useWindowDimensions} from 'react-native'

const ImageCarousel = ({images}:{Image:string[]}) => {
    const [activeIndex, setActiveIndex] = useState(0)
 const windowWidth = useWindowDimensions().width

 const onFlatlistUpdate=useCallback(({viewableItems})=>{
    if(viewableItems.length>0){setActiveIndex(viewableItems[0].index || 0)}
 },[])
    return (
        <View style={styles.root}>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth-20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{viewAreaCoveragePercentThreshold:50}}
        onViewableItemsChanged={onFlatlistUpdate}
        data={images}
         renderItem={({item})=>(
             <Image
              style={[styles.image, {width:windowWidth-40}]} source={{uri:item}}/>

     ) }/>
     <View style={styles.dots}>
          {images.map((image, index)=>
          (<View style={[styles.dot, {backgroundColor: index==activeIndex?'#c9c9c9':'#ededed'}]}/>
          ))}
          </View>
    
        </View>
    )
}
const styles = StyleSheet.create({
    root:{
    },
    dots:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"center"
    },
    dot:{
        width:10, 
        height:10,
        backgroundColor:"#ededed",
        borderColor:"#c9c9c9",
        borderRadius:25,
        borderWidth:1,
        margin:5,
    },
    image:{ resizeMode:'contain',
 margin:10,
 height:250

    }
})

export default ImageCarousel
