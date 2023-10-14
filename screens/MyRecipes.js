import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView } from "react-native";
import RecipeCard from "../components/RecipeCard"

const MyRecipes = ({navigation}) => {

    const recipesList = [{},{},{},{},{},{}];

    return (
        <SafeAreaView className="flex-1 bg-dark-bg">
            <ScrollView>
                {recipesList.map((recipe, i)=>{
                    return <RecipeCard key={i} />
                })}
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default MyRecipes