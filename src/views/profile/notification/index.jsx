import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../../../components/navbar";
import BottomNavbar from "../../../components/bottomNavbar";
import CustomButton from "../../../components/customButton";
import CardNotification from "../../../components/CardNotification";
import Messages from "../../../../assets/icons/messages.svg";
import Money from "../../../../assets/icons/money.svg";
import Film from "../../../../assets/icons/film.svg";
import StyleText from "../../../components/StyleText";
import { useEffect, useState } from "react";
import { useStorage } from "../../../hooks/localStorage";
import axios from "axios";
import { API_URL } from "../../../config/constants";
import { useFormatDate } from "../../../hooks/useFormatDate";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../../hooks/store";
import { getEventRecent } from "../../../store/selectors";

const icons = {
  [16]: Messages,
  [6]: Money,
};

export default function Notification() {
  const navigation = useNavigation();
  const [notificaciones, setNotificaciones] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getItem } = useStorage();
  const { getTimestamp } = useFormatDate();
  const event = useAppSelector((state) => getEventRecent(state));
  
  useEffect(() => {
    const fetchNotification = async () => {
      const token = await getItem("userToken");
      setLoading(true);
      try {
        const response = await axios({
          method: "GET",
          url: API_URL,
          responseType: "json",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            url: "app",
            type: "notificaciones",
          },
        });
        const {data} = response.data
        const newNotis = data.filter(item=> item.modulo != 1)
        setNotificaciones(newNotis);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotification();
  }, []);

  const handlePress = async (idNotificacion)=>{
    const token = await getItem("userToken");
    try {
      const response = await axios({
        method: "POST",
        url: API_URL,
        responseType: "json",
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
          url: "app",
          type: "notificaciones",
        },
        data: {
          idNotificacion
        }
      });
      
      if(response.data.status === 'success'){
        const newNotis = notificaciones.filter(i=> i.idNotificacion != idNotificacion)
        setNotificaciones(newNotis)
      }
      
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navbar back={true} title={"Notificaciones"} loggedIn={true} />
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#E31734" />
        </View>
      ) : (
        <ScrollView style={{ flex: 1 }}>
          <View>
            {
              (notificaciones.length === 0)
              ? <StyleText
              tag="Por Leer"
              size={"medium"}
              style={{ marginVertical: 20, justifyContent: "center" }}
            >
              No Posee Notificaciones
              </StyleText>
              : <>
                  <StyleText
              tag="Notificaciones"
              size={"big"}
              style={{ marginVertical: 14, justifyContent: "center" }}
            >
              Nuevas
            </StyleText>
            {
              notificaciones.map((item) => {
                return (
                  <CardNotification
                    key={item.idNotificacion}
                    disabled={true}
                    style={styles.carta}
                    Icon={icons[item.modulo]}
                    subtitle={getTimestamp(item.fecha)}
                    onPress={() => {
                      navigation.navigate("Home");
                    }}
                    onCheckPress={()=>{
                      handlePress(item.idNotificacion)
                    }}
                  >
                    <Text>{item.transaccion}</Text>
                  </CardNotification>
                );
              }) 
            }
             {
              (event) 
              ? <CardNotification
              key={event.nroEvento}
              style={styles.carta}
              Icon={Film}
              subtitle={event.nombre}
              onPress={() => {
                navigation.navigate("EventDetails", {
                  id: event.nroEvento,
                });
              }}
            >
              <Text>Proximo Evento Reciente</Text>
            </CardNotification>
              : null
            }
                </>
            }

           
          </View>
        </ScrollView>
      )}

      <BottomNavbar title="Notificaciones" loggedIn={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
