import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavbar from "../../../components/bottomNavbar";
import StyleText from "../../../components/StyleText";
import Navbar from "../../../components/navbar";
import Badge from "../../../components/Badge";
import { useNavigation, useRoute } from "@react-navigation/native";
import TicketItem from "../../../components/TicketItem";
import { useAppSelector } from "../../../hooks/store";
import FixedFooter from "../../../components/FixedFooter";
import CustomButton from "../../../components/customButton";
import { getTotalPrize } from "../../../store/selectors";
import { useEffect, useState } from "react";
import { useBoleteriaActions } from "../../../hooks/useBoleteriaActions";
import { useStorage } from "../../../hooks/localStorage";
import axios from "axios";
import { API_URL } from "../../../config/constants";

export default function CarritoCompra() {
  const route = useRoute();
  const navigation = useNavigation();
  const { getItem } = useStorage();
  const [loading, setLoading] = useState(true)
  const [lotesBoletos, setLotesBoletos] = useState([])
  const { idFuncion, categoria, fecha, horaInicio, horaFinal, evento, tipoVenta } =
    route.params;
  const tickets = useAppSelector((state) => state.boleteria.boletos);
  const total = useAppSelector((state) => getTotalPrize(state, {idFuncion}));
  const { newTicket, deleteTicket, newFactura} = useBoleteriaActions();

  useEffect(() => {
    const loadLotes = async () => {
      try {
        const token = await getItem("userToken");
        const response = await axios({
          method: "GET",
          url: API_URL,
          responseType: "json",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            url: "app",
            type: "boletos",
            funcion: idFuncion,
          },
        });

        setLotesBoletos(response.data.data)
      } catch (error) {
        console.error(error)
      }finally{
        setLoading(false)
      }
    };

    loadLotes();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navbar back={true} title={"Comprar Boletos"} loggedIn={true} />
      <ScrollView>
        <View style={{ marginHorizontal: 10, marginVertical: 16, padding: 6 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <Text style={styles.title}>{evento}</Text>
            <Badge color="gray">{categoria}</Badge>
          </View>

          <Text style={styles.subtitle}>{`Fecha: ${fecha}`}</Text>
          <Text
            style={styles.subtitle}
          >{`Horario: ${horaInicio} - ${horaFinal}`}</Text>
        </View>
        {
          loading
          ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#E31734" />
        </View>
          : <View style={{ marginHorizontal: 10, marginTop: 12, marginBottom: 6 }}>
          {lotesBoletos.map((lote) => {
            const index = tickets.findIndex(
              (item) => item.id === lote.idLote
            );
            const cantidad = index !== -1 ? tickets[index].cantidad : 0;
            return (
              <TicketItem
                key={lote.idLote}
                title={lote.nombre}
                ticketColor={lote.color}
                prize={lote.precio}
                ticketsAvailable={lote.disponibles}
                addTicket={() => {
                  newTicket({
                    id: lote.idLote,
                    asientos: [],
                    nombre: lote.nombre,
                    precio: lote.precio,
                    color: lote.color,
                    tipoVenta,
                    idFuncion
                  });
                }}
                removeTicket={() => {
                  deleteTicket({
                    id: lote.idLote,
                  });
                }}
                quantity={cantidad}
              />
            );
          })}
        </View>
        }
      </ScrollView>
      <FixedFooter>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 16,
          }}
        >
          <StyleText tag={`${total} Ref`} size="small">
            Total:
          </StyleText>
          <CustomButton
            text={"Siguiente"}
            width={125}
            height={36}
            onPress={()=>{
              if(tickets.length === 0){
                return
              }
              if(tipoVenta == 1){
                navigation.navigate('SeleccionAsientos', {
                  fecha, horaInicio, horaFinal, evento, idFuncion
                })
              }else{
                newFactura({
                  evento,
                  funcion: `${fecha} ${horaInicio} - ${horaFinal}`,
                  formasPago: [],
                  montoTotal: total,
                  idFuncion
              })
              navigation.navigate('FormasPago', {
                idFuncion
              })
              }
              
            }}
          />
        </View>
      </FixedFooter>
      <BottomNavbar title={"Cartelera"} loggedIn={true} active={3} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#000",
  },
});
