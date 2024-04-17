import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import { styles } from "./style";

export function CreditCard() {
  return (
    <View>
      <ImageBackground
        style={styles.cardContainer}
        source={require("../../assets/images/bg1.png")}
      >
        <View style={styles.flag}>
          <Image
            style={styles.circles}
            source={require("../../assets/images/circles.png")}
          />
          <Text style={styles.mycard}>Meu cartão</Text>
        </View>
        <Text style={styles.name}>Nathã Souza Lopes</Text>
      </ImageBackground>
      <ImageBackground
        style={[styles.cardContainer]}
        source={require("../../assets/images/bg2.png")}
      >
        <View style={styles.flag}>
          <Image
            style={styles.circles}
            source={require("../../assets/images/circles.png")}
          />
        </View>
        <View style={styles.cardDetails}>
          <Text style={styles.textDetails}>CVV</Text>
          <Text style={styles.textDetails}>123</Text>
          <View style={styles.footer}>
            <View>
              <Text style={styles.textDetails}>Número do cartão</Text>
              <Text>270603981020356 1996</Text>
            </View>
            <Text style={styles.validate}>04/24</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
