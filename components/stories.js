import React, {useRef, useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
// import Video from 'react-native-video';
// import Ionic from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Feather from 'react-native-vector-icons/Feather';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
const  {height, width} =Dimensions.get('window');
const Story = () => {
    const [current, setcurrent] = useState(0)
        const [content,setcontent] = useState([
        {
            content:require('../assets/Rectangle1.png'),
            type:"image",
            finish:0,
        },
        {
            content:require('../assets/Rectangle2.png'),
            type:"image",
            finish:0,
        },
        {
            content:require('../assets/Rectangle3.png'),
            type:"image",
            finish:0,
        },
        {
            content:require('../assets/Rectangle1.png'),
            type:"image",
            finish:0,
        },
        {
            content:require('../assets/Rectangle4.png'),
            type:"image",
            finish:0,
        }
    ])

  return (
 <View style={{ flex:1,  backgroundColor: "#000"}}>
    <Image source={content[current].content} 
    style={{width:width,height:height,resizeMode:'cover'}}/>
<View 
style={{
width:width,
height:height,
position:"absolute",
top: 0,
flexDirection:"row",
justifyContent:"space-between",
//backgroundColor:"orange"

}}>
    <TouchableOpacity style={{
        width:"30%",
        height:'100%',
        
    }}
    onPress={()=>{
if(current>0){
    setcurrent(current-1);
}
    }}
    >
        <View></View>
    </TouchableOpacity>
    <TouchableOpacity style={{
        width:"38%",
        height:'100%',
    }}
    onPress={()=>{
if(current< content.length-1){
    setcurrent(current+1);
}
    }}
    >
    </TouchableOpacity>
</View>
 </View>
  );
};

export default Story;