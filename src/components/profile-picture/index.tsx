import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export function ProfilePicture() {
  return (
    <View style={styles.container}>
      <View style={styles.imageBorder}>
        <Image
          style={styles.image}
          source={require("../../assets/images/photo.png")}
        />
      </View>
      <Text style={styles.welcome}>Bem Vindo, Nathã</Text>
    </View>
  );
}
