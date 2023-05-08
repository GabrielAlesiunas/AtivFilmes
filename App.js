import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from '@expo/vector-icons';

import Desenho from "./components/Desenho";
import Series from "./components/Series";
import Filmes from "./components/Filmes";

const Menu = createDrawerNavigator().Navigator;
const ItensMenu = createDrawerNavigator().Screen;

export default function App() {
  return (

    <NavigationContainer>
        <Menu screenOptions={{
          tabBarStyle: {
            backgroundColor: "#ccc"
          },
          tabBarLabelStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          tabBarActiveBackgroundColor: "#fff",
          tabBarInactiveTintColor: "#555",
          tabBarActiveTintColor: "#222",
          tabBarLabelPosition: "beside-icon"
          
        }}
        >
          <ItensMenu name="Filmes" component={Filmes}
            options={{
              tabBarIcon: ({ color, size }) => (<MaterialIcons name="movie-creation" size={24} color="black" />),
              tabBarBadge: 3,
            }}
            />
          <ItensMenu name="Séries" component={Series} />
          <ItensMenu name="Desenhos" component={Desenho} />
        </Menu>
    </NavigationContainer>
  );
}