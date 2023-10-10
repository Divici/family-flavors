import { SafeAreaView } from "react-native-safe-area-context"
import RecipeCard from "../components/RecipeCard"

const MyRecipes = ({navigation}) => {

    return (
        <SafeAreaView className="flex-1 bg-dark-bg">
            <RecipeCard/>
        </SafeAreaView>
    )
}

export default MyRecipes