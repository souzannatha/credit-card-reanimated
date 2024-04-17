import { StyleSheet } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import theme from "@/styles/themes/light";

export const styles = StyleSheet.create({
  front: {
    backfaceVisibility: "hidden",
    position: "absolute",
  },
  back: {
    backfaceVisibility: "hidden",
  },
  card: {
    width: 354,
    height: 230,
    borderRadius: 15,
    padding: 16,
    margin: 20,
  },
  circles: {
    width: 54,
    height: 35,
  },
  mycard: {
    alignSelf: "center",
    fontSize: 14,
    fontFamily: theme.fonts.md,
    fontWeight: "500",
    marginLeft: 8,
  },
  flag: {
    flexDirection: "row",
    gap: 5,
  },
  name: {
    alignSelf: "center",
    marginTop: 35,
    fontSize: 32,
    fontFamily: theme.fonts.bg,
  },
  cardDetails: {
    gap: 8,
    marginTop: 10,
  },
  textDetails: {
    fontSize: 20,
    fontFamily: theme.fonts.md,
    fontWeight: "500",
    marginBottom: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignContent: "center",
  },
  validate: {
    marginTop: 35,
  },
});
