import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";

export function CreditCard() {
  return (
    <ImageBackground
      style={styles.card}
      source={require("../../assets/images/bg1.png")}
    >
      <View style={styles.header}>
        <View style={styles.flag}>
          <Image
            style={styles.circles}
            source={require("../../assets/images/circles.png")}
          />
          <Text style={styles.mycard}>Meu cartão</Text>
        </View>
        <Text style={styles.name}>Nathã Souza Lopes</Text>
      </View>
    </ImageBackground>
  );
}
