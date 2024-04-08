import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';

export default function ExerciseList({data}) {
    const router = useRouter();

  return (
    
    <View>
        
        <FlatList 
        data={data}
        numColumns={1}
        keyExtractor={item=>item.name}
        showsVerticalScrollIndicator= {false }
        contentContainerStyle= {{paddingBottom:60, paddingTop:20}}
        renderItem={({item, index})=> <ExerciseCard router = {router} index={index} item={item}/>}
        />
    </View>
  )
}

const ExerciseCard=({item, router, index})=>{
    return (
        <View>
           <TouchableOpacity onPress={()=> router.push({pathname:'/exerciseDetails', params: item})} className = "flex py-2 sapce-y-2" style={{justifyContent: 'center'}}>
                <View className="bg-neutral-200 shadow rounded-[25px] flex align-center items-center"
                    style={{width: wp(100), height:wp(15), alignItems: 'center', justifyContent: 'center'}}
                >
                    <Text
                        style={{fontSize:hp(1.7)}}
                        className="text-neutral-700 flex justify-center items-center font-semibold ml-1 tracking-wide"
                    >
                        {item.name }


                    </Text>

                </View>
           </TouchableOpacity>
        </View>
    )
}