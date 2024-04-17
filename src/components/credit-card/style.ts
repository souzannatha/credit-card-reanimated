import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    width: 354,
    height: 230,
    borderRadius: 15,
    padding: 16,
    margin: 20,
  },
  flag: {
    flexDirection: "row",
    gap: 5,
  },
  circles: {
    width: 54,
    height: 35,
  },
  mycard: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 8,
  },
  name: {
    alignSelf: "center",
    marginTop: 35,
    fontSize: 32,
    fontWeight: "bold",
  },
  cardDetails: {
    gap: 8,
    marginTop: 10,
  },
  textDetails: {
    fontSize: 20,
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
