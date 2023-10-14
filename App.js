import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import MyRecipes from "./screens/MyRecipes";
import Recipe from "./screens/Recipe";

const Stack = createStackNavigator();

const App = () => {
 
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >

        <Stack.Screen 
          name="Home" 
          component={Home} 
        />
        <Stack.Screen 
          name="MyRecipes" 
          component={MyRecipes} 
        />
        <Stack.Screen 
          name="Recipe" 
          component={Recipe} 
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;