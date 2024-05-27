import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const diasSemana = ["Dom", "Lun", "Mar", "Mierc", "Juev", "Vier", "Sáb"];
const meses = [
  "En",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ag",
  "Sept",
  "Oct",
  "Nov",
  "Dic",
];

export default function CalendarItem({ date, title, children, onPress }) {
  const fecha = new Date(`${date} 00:00:00`);
  const semana = diasSemana[fecha.getDay()];
  const mes = meses[fecha.getMonth()];
  const dia = fecha.getDate();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.eventItem}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{mes}</Text>
          <Text style={styles.dayText}>{dia}</Text>
          <Text style={styles.timeText}>{semana}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.titleText}>{title}</Text>
          {children}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  eventItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
  },
  dateContainer: {
    marginRight: 14,
  },
  dateText: {
    fontWeight: "bold",
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  dayText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  timeText: {
    color: "#666",
    textAlign: 'center'
  },
});
