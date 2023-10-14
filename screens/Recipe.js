import { useState } from 'react';
import { View, SafeAreaView, ScrollView, Text, Image, TouchableOpacity } from 'react-native';

const Recipe = ({style}) => {
    const [isIngredientsCollapsed, setIngredientsCollapsed] = useState(false);

    const toggleIngredients = () => {
        setIngredientsCollapsed(!isIngredientsCollapsed);
    };

    return (
        
            <View className='flex-1'>
            {/* Recipe Image */}
            <View className="h-[30rem]">
                <Image
                    source={{ uri: 'https://images.pexels.com/photos/5107161/pexels-photo-5107161.jpeg' }} // Replace with your image URL
                    className='h-80 w-full'
                />
            </View>
            <ScrollView>
                <Text className='text-lg p-4 text-center font-bold'>
                    Recipe Name
                </Text>

                {/* Ingredients Section */}
                <TouchableOpacity
                    className='p-4'
                    onPress={toggleIngredients}
                >
                    <Text className={('text-lg font-bold')}>
                    Ingredients
                    </Text>
                </TouchableOpacity>
                {isIngredientsCollapsed ? null : (
                    <View className='p-4'>
                    {/* List of Ingredients */}
                    <Text className='text-base'>Ingredient 1</Text>
                    <Text className='text-base'>Ingredient 2</Text>
                    {/* Add more ingredients here */}
                    </View>
                )}

                {/* Recipe Steps Section */}
                <View className='p-4'>
                    <Text className='text-lg font-bold'>
                    Recipe Steps
                    </Text>
                    {/* Add the list of recipe steps here */}
                    <Text className='text-base'>Step 1: ...</Text>
                    <Text className='text-base'>Step 2: ...</Text>
                    {/* Add more steps here */}
                </View>
            </ScrollView>

        </View>
    
    )
}

export default Recipe