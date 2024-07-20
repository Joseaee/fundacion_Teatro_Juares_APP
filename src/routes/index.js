import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppSelector } from "../hooks/store";
import { getIsLogged } from "../store/selectors";
import { useEffect, useState } from "react";
import { useStorage } from "../hooks/localStorage";
import { useAuthActions } from "../hooks/useAuthActions";

import LoadingScreen from "../components/LoadingScreen";
import Home from "../views/home";
import Login from "../views/session/login";
import Register from "../views/session/register";
import MakePassword from "../views/session/makePassword";
import ForgetPassword from "../views/session/forgetPassword";
import CodePassword from "../views/session/codePassword";
import ChangePassword from "../views/session/changePassword";
import Success from "../views/success";
import DataUser from "../views/profile/dataUser";
import Chat from "../views/chat/chat";

import Cartelera from "../views/boleteria/cartelera";
import DetallesEvento from "../views/boleteria/detallesEvento";
import CarritoCompra from "../views/boleteria/carritoCompra";
import SeleccionarAsientos from "../views/boleteria/seleccionarAsientos";
import FormasPago from "../views/boleteria/formasPago";
import PagarBoletos from "../views/boleteria/pagarBoletos";

import ForoNoticias from "../views/noticias/foroNoticias";
import DetalleNoticia from "../views/noticias/detalleNoticia";

import EditUser from "../views/profile/editUser";

import Notification from "../views/profile/notification";
import Help from "../views/profile/help";
import HelpDetailsUser from "../views/profile/help/HelpDetailsUser";
import HelpDetailsChat from "../views/profile/help/HelpDetailsChat";
import HelpDetailsEvent from "../views/profile/help/HelpDetailsEvent";
import HelpDetailsNoticias from "../views/profile/help/HelpDetailsNoticias";

function Routes() {
  const Stack = createNativeStackNavigator();
  const { authenticated } = useAuthActions();
  const { getItem } = useStorage();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await getItem("userToken");
        const expToken = await getItem("expToken");
        const TiempoActual = Math.floor(Date.now() / 1000); 
        console.log('expiracion: '+expToken)
        console.log('Tiempo Actual: '+TiempoActual)
        console.log('Token: '+token);

        if (token && expToken > TiempoActual) {
          authenticated(true);
        } else {
          authenticated(false);
        }
      } catch (error) {
        console.error("Failed to load the token from AsyncStorage", error);
      } finally{
        setIsInitialized(true)
      }
    };

    loadToken();
  }, []);
  const isLogged = useAppSelector((state) => getIsLogged(state));

  if(!isInitialized){
    return <LoadingScreen/>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogged ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ animation: "fade" }}
            />

            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ animation: "fade_from_bottom" }}
            />

            <Stack.Screen
              name="Cartelera"
              component={Cartelera}
              options={{ animation: "fade_from_bottom" }}
            />
            <Stack.Screen
              name="EventDetails"
              component={DetallesEvento}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="CarritoCompra"
              component={CarritoCompra}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="SeleccionAsientos"
              component={SeleccionarAsientos}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="FormasPago"
              component={FormasPago}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="PagarBoletos"
              component={PagarBoletos}
              options={{ animation: "slide_from_right" }}
            />

            <Stack.Screen
              name="ForoNoticias"
              component={ForoNoticias}
              options={{ animation: "fade" }}
            />
            <Stack.Screen
              name="DetalleNoticia"
              component={DetalleNoticia}
              options={{ animation: "fade" }}
            />

            <Stack.Screen
              name="DataUser"
              component={DataUser}
              options={{ animation: "fade" }}
            />
            <Stack.Screen
              name="Notification"
              component={Notification}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="Help"
              component={Help}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="HelpDetailsUser"
              component={HelpDetailsUser}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="HelpDetailsChat"
              component={HelpDetailsChat}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="HelpDetailsEvent"
              component={HelpDetailsEvent}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="HelpDetailsNoticias"
              component={HelpDetailsNoticias}
              options={{ animation: "slide_from_right" }}
            />

            <Stack.Screen
              name="EditUser"
              component={EditUser}
              options={{ animation: "slide_from_bottom" }}
            />

            <Stack.Screen
              name="Success"
              component={Success}
              options={{ animation: "slide_from_right" }}
            />
            
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ animation: "fade" }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="MakePassword"
              component={MakePassword}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="ForgetPassword"
              component={ForgetPassword}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="CodePassword"
              component={CodePassword}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="Success"
              component={Success}
              options={{ animation: "slide_from_right" }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default Routes;
