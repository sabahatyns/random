import React from "react";
import { View, Text, ScrollView } from "react-native";
import peopleData from '../data.json'

export const Searchfilter = (data, input, setInput) => {
    return (
        <View>
            <ScrollView >
               {peopleData.map(item => {
                    return (
                        <View style={{
                            width: '100%', height: 40,
                            flexDirection: 'row', justifyContent: "space-between",
                        }}>
                            <Text>{item.name}</Text>
                            <Text>{item.dial_code}</Text>
                            <Text>{item.code}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    )
};
