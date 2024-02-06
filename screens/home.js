import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Story from '../components/stories';


const First = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <SafeAreaView>
            <ScrollView>
                <View
                    style={{
                        width: windowWidth,
                        height: windowHeight,
                        backgroundColor: 'white',
                        // position: 'relative',
                        // backgroundColor: 'black',
                    }}>
                        {/* //header */}
                    <View
                        style={styles.container11}>

                        <Icon name="arrow-left" style={{ fontSize: 20, paddingTop: 10, color: 'black' }} />
                        <Text style={{ fontSize: 40, fontWeight: '100', color: 'black', }}> ZIMO</Text>
                        <Feather name="lock" style={{ paddingTop: 10, fontSize: 20, color: 'black' }} />
                    </View>
                    {/* stories section */}
                    <View style={{ height: 1, marginTop: 55, backgroundColor: 'grey', opacity: 0.2 }}></View>
                    <View style={{ flexDirection: 'row', margin: 10, }}>
                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}

                        >
                            <TouchableOpacity>
                                <ImageBackground style={styles.img} resizeMode='cover' source={require('../assets/Rectangle1.png')}>
                                    <Image style={styles.imglogo} source={require('../assets/1.png')} />
                                    <Icon name="play" style={styles.icon5} />
                                </ImageBackground>
                            </TouchableOpacity>
                            <ImageBackground style={styles.img} source={require('../assets/Rectangle2.png')} >
                                <Image style={styles.imglogo1} source={require('../assets/2.png')} />
                                <Icon name="play" style={styles.icon5} />
                            </ImageBackground>
                            <ImageBackground style={styles.img} source={require('../assets/Rectangle3.png')}>
                                <Image style={styles.imglogo2} source={require('../assets/3.png')} />
                                <Icon name="play" style={styles.icon0} />
                            </ImageBackground>
                            <ImageBackground style={styles.img} source={require('../assets/Rectangle4.png')}>
                                <Image style={styles.imglogo} source={require('../assets/4.png')} />
                                <Icon name="play" style={styles.icon5} />
                            </ImageBackground>
                        </ScrollView>
                    </View>
                    {/* card section */}
                    <View>
                        <ImageBackground style={styles.bg}
                            source={require('../assets/Rectangle5.png')}
                            resizeMode='cover' >
                            <LinearGradient
                                colors={['rgba(0, 0, 0,0.8)', 'rgba(255, 255, 255,0.1)',]}
                                style={{
                                    borderTopRightRadius: 14,
                                    borderTopLeftRadius: 14,
                                }}
                            >
                                <View>
                                    <View style={{ flexDirection: 'row', padding: 10 }}>
                                        <View style={styles.all}>
                                            <Text style={styles.text1}>78
                                            </Text>
                                            <Text style={styles.text2}>DAYS</Text>
                                        </View>
                                        <View style={styles.all}>
                                            <Text style={styles.text1}>06
                                            </Text>
                                            <Text style={styles.text2}>HOURS</Text>
                                        </View>
                                        <View style={styles.all}>
                                            <Text style={styles.text1}>07
                                            </Text>
                                            <Text style={styles.text2}>MINUTES</Text>
                                        </View>
                                        <View style={styles.all}>
                                            <Text style={styles.text1}>08
                                            </Text>
                                            <Text style={styles.text2}>SECONDS</Text>
                                        </View>
                                    </View>
                                    <View styles={{ flexDirection: 'row' }}>
                                        <Feather name="corner-up-right" style={styles.icon1} />
                                        <Icon name="heart" style={styles.icon} />
                                    </View>
                                </View>
                            </LinearGradient>
                            <LinearGradient
                                colors={['rgba(255, 255, 255,0.1)', 'rgba(0, 0, 0,0.8)',]}
                                style={{ height: 105, marginTop: 80 }} >
                                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 10, paddingRight: 10, paddingBottom: 5, marginTop: 12 }}>
                                    <Image style={{ height: 25, width: 25, marginTop: 42 }} source={require('../assets/23.png')} />
                                    <Text style={styles.text8}>£5,000,000 GBP
                                    </Text>
                                    <Image style={{ height: 15, width: 55, marginTop: 52 }} source={require('../assets/logo1.png')} />
                                </View>
                                <Text style={styles.area}>SHELTON STREET COVENT GARDEN LONDON WC2H UNITED KINGDOM
                                </Text>
                                <Text style={styles.text6}>
                                    #ZM7861234567</Text>
                            </LinearGradient>
                        </ImageBackground>
                        <View style={{
                            backgroundColor: 'black',
                            width: 306,
                            alignSelf: 'center',
                            height: 50,
                            borderBottomLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            marginTop: 5,
                        }}>
                            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', }}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    fontStyle: 'normal',
                                    opacity: 0.9,
                                }}>£25.00 GBP</Text>
                                <View style={{ flexDirection: "column" }}>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        fontStyle: 'normal',
                                        opacity: 0.9,

                                    }}>BUY ENTRY NOW</Text>
                                    <Text style={styles.text5}>
                                        #ZM7861234567</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                
                    </View >


            </ScrollView>
        </SafeAreaView >
    );
};

export default First;
const styles = StyleSheet.create({
    container: {
        // width: windowWidth,
        //height: windowHeight,
        //backgroundColor: 'white',
        //position: 'relative',
        // backgroundColor: 'black',
    },
    container11: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1,
        padding: 10,
    }, img: {
        height: 185, width: 105,
        marginLeft: 5,
        opacity: 0.9,
    },
    bg: {
        width: 306,
        alignSelf: 'center',
        height: 300,
        opacity: 1.00,

    }, all: {
        flexDirection: 'column', paddingLeft: 20, alignItems: 'center'
    },
    text1: {
        color: 'white',
        //padding: 5,
        fontSize: 45,
    },
    text2: {
        fontSize: 10,
        color: 'white',
        paddingBottom: 10,
        justifyContent: "space-between",
    },
    text5: {

        color: 'white',
        fontSize: 5,
        opacity: 0.9,
        paddingLeft: 70,
        paddingTop: 3,
        letterSpacing: 1,
        fontWeight: "bold",


    },
    text6: {

        color: 'white',
        fontSize: 5,
        opacity: 0.9,
        paddingLeft: 240,
        letterSpacing: 1,
        fontWeight: "bold",
    },
    icon: {
        fontSize: 25,
        color: '#880808',
        paddingLeft: 215,
        marginTop: -25,
    },
    icon1: {
        fontSize: 25,
        color: 'white',
        fontWeight: '700',
        marginLeft: 175
    },
    icon5: {
        zIndex: 5, color: 'white',
        margin: 5,
        fontSize: 15,
        marginTop: 125,
    },
    icon0: {
        zIndex: 5, color: 'white',
        margin: 5,
        fontSize: 15,
        marginTop: 90,
    },
    area: {
        color: 'white',
        fontWeight: 'bold',
        justifyContent: "space-between",
        fontSize: 11,
        textAlign: "center",
        opacity: 0.5,

    },
    text8: {
        color: 'white',
        marginTop: 45,
        fontSize: 15,
        fontWeight: "bold",
        opacity: 0.5,

    },
    imglogo: {
        width: '90%',
        // height:8 ,
        padding: 1,
        marginTop: 16,
        alignSelf: "center"
    },
    imglogo1: {
        width: '90%',
        // height:50 ,
        padding: 1,
        marginTop: 10,
        alignSelf: "center"
    },
    imglogo2: {
        width: '90%',
        //height:"" ,
        //padding:1,
        marginTop: 5,
        alignSelf: "center"
    },
})







