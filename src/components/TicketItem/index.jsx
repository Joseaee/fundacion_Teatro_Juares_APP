import { View, Text } from "react-native";
import Badge from "../Badge";
import Count from "../Count";
import Ticket from '../../../assets/icons/ticket.svg'

export default function TicketItem({ticketColor, title, ticketsAvailable, prize, addTicket, removeTicket, quantity}) {
  return (
    <View style={{ flexDirection: "row", padding: 6, borderRadius: 10, marginBottom: 8 }}>
      <View
        style={{
          paddingVertical: 6,
          paddingHorizontal: 10,
          marginEnd: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ticket height={40} width={40} fill={ticketColor} />
      </View>
      <View style={{ flex: 1}}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          {title}
        </Text>
        <Text
          style={{ fontSize: 12, color: "gray", marginBottom: 4 }}
        >{`Boletos Disponibles: ${ticketsAvailable}`}</Text>
        <Badge color="#2FB31A" size={80}>{`Ref ${prize}`}</Badge>
      </View>
      <View style={{ flex: 0, justifyContent: "center", alignItems: "center" }}>
        <Count limit={ticketsAvailable} onMinus={removeTicket} onPlus={addTicket} value={quantity} />
      </View>
    </View>
  );
}
