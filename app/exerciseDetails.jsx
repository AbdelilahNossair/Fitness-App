import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Anticons from 'react-native-vector-icons/AntDesign';
import Animated , { FadeInDown } from 'react-native-reanimated';

export default function exerciseDetails() {

    const router = useRouter();
    const item = useLocalSearchParams();
    console.log(item)

  return (
    <View className = "flex flex-1">
        <Image
            source={require("../assets/images/welcome1.png")}
            style={{width: wp(100), height: hp(45)}}
            className="rounded-b-[40px]"
        />

        <TouchableOpacity
            onPress={()=>router.back()}
            className='mx-2 absolute rounded-full mt-12 right-3 '   
        >
            <Anticons name="closecircle" size={hp(4.5)} color='#f43f5e'/>
        </TouchableOpacity>

        <ScrollView className="mx-4 space-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}}>
            <Animated.Text
                entering = {FadeInDown.duration(300).springify()}
                style={{fontSize:hp(3.5)}}
                className="font-semibold text-neutral-800 tracking-wide"
            >
            {item.name }
            </Animated.Text>
            <Animated.Text
                entering = {FadeInDown.delay(100).duration(300).springify()}
                style={{fontSize:hp(2)}}
                className="text-neutral-700 tracking-wide"
            >
            Equipment: <Text className="font-bold text-neutral-700">{item?.equipment}</Text>
            </Animated.Text>
            <Animated.Text
                entering = {FadeInDown.delay(200).duration(300).springify()}
                style={{fontSize:hp(2)}}
                className="text-neutral-700 tracking-wide"
            >
            Difficulty: <Text className="font-bold text-neutral-700">{item?.difficulty}</Text>
            </Animated.Text>
            <Animated.Text
                entering = {FadeInDown.delay(300).duration(300).springify()}
                style={{fontSize:hp(2)}}
                className="text-neutral-700 tracking-wide"
            >
            Type: <Text className="font-bold text-neutral-700">{item?.type}</Text>
            </Animated.Text>
            <Animated.Text
                entering = {FadeInDown.delay(400).duration(300).springify()}
                style={{fontSize:hp(3)}}
                className="font-semibold text-neutral-800 tracking-wide"
            >
            Instructions: 
            </Animated.Text>
                {item.instructions.split('.').map((instruction, index)=>{
                    return(
                        <Animated.Text
                            entering = {FadeInDown.delay((index+6)*100).duration(300).springify()}
                            key={instruction}
                            style={{fontSize:hp(1.7)}}
                            className="text-neutral-800"
                        >{instruction}</Animated.Text>
                    )
                }
                )
                }

        </ScrollView>
    </View>
  )
}