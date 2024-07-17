import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavbar from "../../../components/bottomNavbar";
import StyleText from "../../../components/StyleText";
import Navbar from "../../../components/navbar";
import Badge from "../../../components/Badge";
import { useRoute } from "@react-navigation/native";
import TicketItem from "../../../components/TicketItem";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { addTicket, removeTicket } from "../../../store/boleteria/slice";
import FixedFooter from "../../../components/FixedFooter";
import CustomButton from '../../../components/customButton'
import { getTotalPrize } from "../../../store/selectors";

export default function CarritoCompra() {
  const route = useRoute();
  const dispatch = useAppDispatch()
  const tickets = useAppSelector((state)=> state.boleteria.boletos)
  const total = useAppSelector((state)=> getTotalPrize(state))
  const { idFuncion, fecha, horaInicio, horaFinal, evento } = route.params;

  const lotes = [
    {
      id: "1",
      nombre: "Patio VIP",
      precio: "10.55",
      color: "#D33636",
      disponibles: 10,
    },
    {
      id: "2",
      nombre: "Patio General",
      precio: "5",
      color: "#15A422",
      disponibles: 200,
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navbar back={true} title={"Comprar Boletos"} loggedIn={true} />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 10, marginVertical: 16, padding: 6 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <Text style={styles.title}>{evento}</Text>
            <Badge color="gray">Obra Teatral</Badge>
          </View>

          <Text style={styles.subtitle}>{`Fecha: ${fecha}`}</Text>
          <Text
            style={styles.subtitle}
          >{`Horario: ${horaInicio} - ${horaFinal}`}</Text>
        </View>
        <View style={{ marginHorizontal: 10, marginTop: 12, marginBottom: 6 }}>
          {lotes.map((lote) => {
            const index = tickets.findIndex(item=> item.id === lote.id)
            const cantidad = (index !== -1) ? tickets[index].cantidad : 0
            return (
              <TicketItem
                key={lote.id}
                title={lote.nombre}
                ticketColor={lote.color}
                prize={lote.precio}
                ticketsAvailable={lote.disponibles}
                addTicket={()=> {
                    dispatch(addTicket({
                        id: lote.id,
                        asientos: [],
                        nombre: lote.nombre,
                        precio: lote.precio
                    }))
                }}
                removeTicket={()=> {
                    dispatch(removeTicket({
                        id: lote.id
                    }))
                }}
                quantity={cantidad}
              />
            );
          })}
        </View>
      </ScrollView>
      <FixedFooter>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16}}>
          <StyleText tag={`${total} Ref`} size='small'>Total:</StyleText>
          <CustomButton text={'Siguiente'} width={125} height={36} screen='SeleccionAsientos'/>
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
    color: '#000'
  },
});
