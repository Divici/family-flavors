import { View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const RecipeCard = ({style}) => {
  return (
    <View className="flex flex-row items-center h-40 mt-4 mb-10">
            
            {/* Left Side */}
            <View className=" ">
                <View className="h-40 w-40 mx-4 rounded-xl bg-orange">

                </View>
            </View>

            {/* Right Side */}
            <View className="" >
                <Text className="text-white text-base font-bold">
                    Macaroni and Cheese
                </Text>
                <Text className="text-white">
                    Prep Time:
                    <Text className="text-white"> 10 Minutes</Text>
                </Text>
                <Text className="text-white">
                    Cook Time:
                    <Text className="text-white"> 45 Minutes</Text>
                </Text>
                
            </View>
            
        </View>
  )
}

export default RecipeCard