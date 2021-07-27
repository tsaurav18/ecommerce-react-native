import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    page:{
padding:5,


    },
root:{
flexDirection:"row",
borderWidth:1,
borderColor:'#d1d1d1',
borderRadius:10,
backgroundColor:"#fff",
marginVertical:2
},
image:{
resizeMode:'contain',
height:150,
flex:2
},
rightContainer:{
    padding:10,
    flex:3

},
title:{
  fontSize:16,
 fontWeight:"bold"
},
price:{
    fontSize:15,
    fontWeight:"bold"
},
ratingContainer:{
    flexDirection:"row",
    alignItems:'center',
    marginVertical:5
},
star:{
    margin:3,
    alignItems:'center',
    
},
oldPrice:{
    fontSize:12,
    fontWeight:'normal',
    textDecorationLine:'line-through'
    
}
})
export default styles