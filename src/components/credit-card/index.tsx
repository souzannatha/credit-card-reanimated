import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import { styles } from "./style";

import Animated, {
  useAnimatedStyle,
  SharedValue,
  interpolate,
  withTiming,
} from "react-native-reanimated";

type CreditCardProps = {
  cardSide: SharedValue<number>;
  data: {
    name: string;
    number: string;
    date: string;
    code: string;
  };
};

export enum CARD_SIDE {
  front = 0,
  back = 1,
}

export function CreditCard({ cardSide, data }: CreditCardProps) {
  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(
      cardSide.value,
      [CARD_SIDE.front, CARD_SIDE.back],
      [0, 180]
    );
    return {
      transform: [
        { rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) },
      ],
    };
  });
  const backAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(
      cardSide.value,
      [CARD_SIDE.front, CARD_SIDE.back],
      [180, 360]
    );
    return {
      transform: [
        { rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) },
      ],
    };
  });

  return (
    <View>
      <Animated.View style={[styles.front, frontAnimatedStyles]}>
        <ImageBackground
          style={styles.card}
          source={require("../../assets/images/bg1.png")}
        >
          <View style={styles.flag}>
            <Image
              style={styles.circles}
              source={require("../../assets/images/circles.png")}
            />
            <Text style={styles.mycard}>Meu cartão</Text>
          </View>
          <Text style={styles.name}>{data.name}</Text>
        </ImageBackground>
      </Animated.View>
      <Animated.View style={[backAnimatedStyles, styles.back]}>
        <ImageBackground
          style={[styles.card]}
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
            <Text style={styles.textDetails}>{data.code}</Text>
            <View style={styles.footer}>
              <View>
                <Text style={styles.textDetails}>Número do cartão</Text>
                <Text>{data.number}</Text>
              </View>
              <Text style={styles.validate}>{data.date}</Text>
            </View>
          </View>
        </ImageBackground>
      </Animated.View>
    </View>
  );
}
