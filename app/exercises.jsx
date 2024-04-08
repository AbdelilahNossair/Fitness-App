import { View, Text, Image,  TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExercisesByBodypart } from '../api/exerciseDB';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import ExerciseList from '../components/ExerciseList'
import { demoExercises } from '../constants';
import {ScrollView} from 'react-native-virtualized-view'

export default function exercises() {

    const [exercises, setExercises]=useState(demoExercises)

    const router = useRouter();
    const item = useLocalSearchParams();
    //console.log(item)


    useEffect(()=>{
        if(item) getExercises(item.name);

    }, [item]);

    const getExercises= async(bodypart)=>{
        let data = await fetchExercisesByBodypart(bodypart);
        //console.log('got data: ', data);
        setExercises(data)
    }

  return (
    <ScrollView>
        <StatusBar style="light"/>
        <Image
            source = {item.image}
            style={{width: wp(100), height: hp(45)}}
            className="rounded-b-[40px]"
        />
        <TouchableOpacity
            onPress={()=> router.back()}
            className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
            style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
        >
            <Ionicons name="caret-back-outline" size={hp(5.5)} color='white'/>
        </TouchableOpacity>

        <View className="mx-4 space-y-3 mt-4">
            <Text style={{fontSize: hp(3)}} className="font-semibold text-neutral-700">
                {item.name} exercises
            </Text>
            
        </View>

        <View className="mb-10">
            <ExerciseList data={exercises}/>
        </View>
    </ScrollView>

  )
}