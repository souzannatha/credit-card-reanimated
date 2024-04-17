import { StyleSheet } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export const styles = StyleSheet.create({
  header: {},
  card: {
    width: 354,
    height: 230,
    borderRadius: 15,
    padding: 16,
    margin: 20,
  },
  front: {},
  back: {},
  mycard: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 8,
  },
  circles: { width: 54, height: 35 },
  flag: { flexDirection: "row", gap: 5 },
  name: {
    alignSelf: "center",
    marginTop: 35,
    fontSize: 32,
    fontWeight: "bold",
  },
});
