import { StyleSheet } from "react-native";
import theme from "@/styles/themes/light";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 60,
    fontFamily: theme.fonts.sm,
  },
  imageBorder: {
    borderWidth: 2,
    borderColor: "#373843",
    borderRadius: 100,
    padding: 8,
  },
  image: {
    width: 90,
    height: 90,
  },
  welcome: {
    marginTop: 30,
    fontSize: 24,
    fontFamily: theme.fonts.bg,
    color: "#fff",
  },
});
