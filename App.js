import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Screen/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screen/Home';
import RecipeDetailsScreen from './Screen/RecipeDetailsScreen';

export default function App() {

  const stack = createStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Welcome' screenOptions={{ header: () => null }}>
        <stack.Screen name="Welcome" component={Welcome} />
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="RecipeDetailsScreen" component={RecipeDetailsScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
