import React from 'react';
import { View, Text, Image, ImageBackground, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { SliderBox } from "react-native-image-slider-box";

const Bugatti = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    this.state = {
        images: [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?tree", // Network image
            require('../assets/post1.jpg'),          // Local image
        ]
    };

    return (
        <View
            style={{
                width: windowWidth,
                height: windowHeight,
                backgroundColor: 'grey',
                position: 'relative',
                // backgroundColor: 'black',
            }}>
            <ImageBackground source={require('../assets/bugatti.jpg')} resizeMode='cover' style={{ flex: 1 }}>

                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                         left: 0,
                         right: 0,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        zIndex: 1,
                        padding: 10,
                        paddingTop: 10,
                    }}>

                    <Icon name="arrow-left" style={{ fontSize: 20, color: 'white' }} />
                    <View style={{ flexDirection: "column", }}>
                        <Text style={{ fontSize: 40, fontWeight: '100', color: 'white',}}> ZIMO</Text>
                    
                    </View>
                    <View style={{ flexDirection: 'column' ,}}>
                        <Feather name="lock" style={{ fontSize: 20, color: 'white' }} />
                        <Feather name="x" style={{ marginTop: 20, fontSize: 20, color: 'white' }} />

                    </View>
                </View>
                <View>
                <SliderBox
                            images={this.state.images}
                            dotStyle={{
                                width: 15,
                                height: 2,
                                marginHorizontal: 0,
                                padding:0,
                                margin:0,
                              }}
                              imageLoadingColor="transparent"
                              ImageComponentStyle={{borderRadius: 15, width: '0', }}

                            
                             style={{ height: 0 ,width:0,marginTop:75,}}
                        />
                </View>
                <View>
                    <View style={{
                        height: 30, width: 95, borderRadius: 5, marginLeft: 290, marginTop: 360, flexDirection: 'row',
                        alignContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'
                    }}>
                        <Text style={{ color: 'grey', padding: 5, alignSelf: 'center' }}>View</Text>
                        <Icon name="arrow-right" style={{ fontSize: 25, color: 'grey', paddingLeft: 5, }} />
                    </View>
                    <View style={{
                        height: 150, width: '100%', zIndex: 1, flexDirection: 'coloum', marginTop: 5, opacity: 1,
                        alignContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'
                    }}>
                        <Text style={{ color: 'grey', fontWeight: 'bold', textAlign: 'left', fontSize: 14, letterSpacing: 0, margin: 10, }}>exclusive production super sports,exclusive production super sports,exclusive production super sports
                            By choosing one of the options from the list below, we will be able to provide you with the most relevant information for your chosen region.you with the most relevant information for your chosen region. You with the most relevant information for your chosen region. please contact our Customer service team in your nearest region for advice on how to obtain Gaggenau appliances.</Text>
                        <Image style={{ opacity: 0.5, marginLeft: 240, height: 15, width: 125, paddingBottom: 10 }} source={require('../assets/logo.png')} />

                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Bugatti;