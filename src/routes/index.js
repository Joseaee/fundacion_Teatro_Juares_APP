import React from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../views/home";
import Login from "../views/session/login";
import Register from "../views/session/register";
import MakePassword from "../views/session/makePassword";
import ForgetPassword from "../views/session/forgetPassword";
import CodePassword from "../views/session/codePassword";
import ChangePassword from "../views/session/changePassword";
import SuccessSession from "../views/session/successSession";
import DataUser from "../views/profile/dataUser";
import AskDates from "../views/dates/askdates";
import MakeDate from "../views/dates/makeDate";
import SuccessDate from "../views/dates/successDate";
import Chat from "../views/chat/chat";
import Cartelera from "../views/boleteria/cartelera";
import DetallesEvento from "../views/boleteria/detallesEvento";
import CarritoCompra from "../views/boleteria/carritoCompra";
import SeleccionarAsientos from "../views/boleteria/seleccionarAsientos";
import FormasPago from "../views/boleteria/formasPago";
import ForoNoticias from "../views/noticias/foroNoticias";
import DetalleNoticia from "../views/noticias/detalleNoticia";

function Routes(){

    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={ {headerShown: false,} }>
            
            <Stack.Screen name="Login" component={ Login } options={ {animation: 'fade'} }/>
            <Stack.Screen name="Register" component={ Register } options={ {animation: 'slide_from_right'} }/>
            <Stack.Screen name="MakePassword" component={ MakePassword } options={ {animation: 'slide_from_right'} }/>
            <Stack.Screen name="SuccessSession" component={ SuccessSession } options={ {animation: 'slide_from_right'} }/>
            <Stack.Screen name="ForgetPassword" component={ ForgetPassword } options={ {animation: 'slide_from_right'} }/>
            <Stack.Screen name="CodePassword" component={ CodePassword } options={ {animation: 'slide_from_right'} }/>
            <Stack.Screen name="ChangePassword" component={ ChangePassword } options={ {animation: 'slide_from_right'} }/>

            <Stack.Screen name="Home" component={ Home } options={ {animation: 'fade',} }/>

            <Stack.Screen name="Cartelera" component={ Cartelera } options={ {animation: 'fade_from_bottom',} }/>
            <Stack.Screen name="EventDetails" component={ DetallesEvento } options={ {animation: 'slide_from_right',} }/>
            <Stack.Screen name="CarritoCompra" component={ CarritoCompra } options={ {animation: 'slide_from_right',} }/>
            <Stack.Screen name="SeleccionAsientos" component={ SeleccionarAsientos } options={ {animation: 'slide_from_right',} }/>
            <Stack.Screen name="FormasPago" component={ FormasPago } options={ {animation: 'slide_from_right',} }/>
            
            <Stack.Screen name="ForoNoticias" component={ ForoNoticias } options={ {animation: 'fade'} }/>
            <Stack.Screen name="DetalleNoticia" component={ DetalleNoticia } options={ {animation: 'fade'} }/>
            
            <Stack.Screen name="DataUser" component={ DataUser } options={ {animation: 'fade'} }/>

            <Stack.Screen name="AskDates" component={ AskDates } options={ {animation: 'fade_from_bottom'} }/>
            <Stack.Screen name="MakeDate" component={ MakeDate } options={ {animation: 'slide_from_right'} }/>
            <Stack.Screen name="SuccessDate" component={ SuccessDate } options={ {animation: 'slide_from_right'} }/>

            <Stack.Screen name="Chat" component={ Chat } options={ {animation: 'fade_from_bottom'} }/>
            </Stack.Navigator>

        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

    
});

export default Routes;