import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from '@expo/vector-icons'; 


import Desenho from "./components/Desenho";
import Series from "./components/Series";
import Filmes from "./components/Filmes";
import { color } from "react-native-reanimated";

const Menu = createDrawerNavigator().Navigator;
const ItensMenu = createDrawerNavigator().Screen;

export default function App() {
  return (

    <NavigationContainer>
        <Menu screenOptions={{
          drawerStyle: {
            backgroundColor: "#ccc"
          },
          drawerLabelStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          drawerActiveBackgroundColor: "#fff",
          drawerInactiveTintColor: "#555",
          drawerActiveTintColor: "#222",
          drawerLabelPosition: "beside-icon"
          
        }}
        >
          <ItensMenu name="Filmes" component={Filmes}
            options={{
              drawerIcon: ({focused, size, color}) => (
                <MaterialIcons
                name = "movie-filter"
                size = {size}
                color = {focused ? 'black': 'blue'}
                />
                
              )
            }}
            />
          <ItensMenu name="Séries" component={Series} 
          />
          <ItensMenu name="Desenhos" component={Desenho} />
        </Menu>
    </NavigationContainer>
  );
}