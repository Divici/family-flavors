import { View, Text, TouchableOpacity, Dimensions, SafeAreaView } from "react-native"
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const RecipeCard = ({style}) => {
    return (
        <SafeAreaView className="h-40 mt-4 mb-10 flex-row justify-center">

            {/* Left Side image */}
            <View className="h-full w-40 mx-4 rounded-xl bg-orange">
            </View>

            {/* Right Side */}
            <View className="flex-col flex-1 justify-between mr-4" >
                <View className="">
                    <Text className="text-white text-base font-bold text-center pt-4">
                        Macaroni and Cheese
                    </Text>
                </View>
                <View>
                    <Text className="text-white">
                        Prep Time:
                        <Text className="text-white"> 10 Minutes</Text>
                    </Text>
                    <Text className="text-white">
                        Cook Time:
                        <Text className="text-white"> 45 Minutes</Text>
                    </Text>
                </View>
                <TouchableOpacity className="self-end">
                    <AntDesign name='edit' style={{color: '#FFF', fontSize: 30}} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default RecipeCard