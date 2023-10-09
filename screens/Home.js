import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {

    return (
        <View className="flex-1 bg-white flex justify-center items-center">
            <Text className="text-4xl font-bold text-center">Family</Text>
            <Text className="text-6xl font-extrabold text-center">Flavors</Text>

            <TouchableOpacity 
                onPress={() => navigation.navigate('MyRecipes')} 
                className="w-20 h-24 pt-2 bg-black self-end top-[25%] flex justify-center rounded-l-3xl" 
            >
                <Text>
                    <MaterialCommunityIcons name='food-turkey' style={{color: '#FFF', fontSize: 50, textAlign: 'center' }} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home