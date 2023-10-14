import { View, Text, TouchableOpacity, SafeAreaView } from "react-native"
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const RecipeCard = ({style}) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className="h-48 mt-4 mb-4 flex-row justify-center bg-dark-alt">

            {/* Left Side image */}
            <TouchableOpacity 
                className="h-40 w-40 mx-4 my-auto rounded-xl bg-orange"
                onPress={() => navigation.navigate('Recipe')}
            >
            </TouchableOpacity>

            {/* Right Side */}
            <View className="flex-col flex-1 justify-between mr-4" >
                <TouchableOpacity className="">
                    <Text className="text-white text-base font-bold text-center pt-4">
                        Macaroni and Cheese
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="text-white">
                        Cook Time:
                        <Text className="text-white"> 10 Minutes</Text>
                    </Text>
                    <Text className="text-white">
                        Serves:
                        <Text className="text-white"> 6-7</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity className="self-end mb-2">
                    <AntDesign name='edit' style={{color: '#FFF', fontSize: 30}} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default RecipeCard