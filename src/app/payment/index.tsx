import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ProfilePicture } from "@/components/profile-picture";
import { CreditCard, CARD_SIDE } from "@/components/credit-card";
import { useSharedValue } from "react-native-reanimated";
import { Input } from "@/components/input";

export function Payment() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [code, setCode] = useState("");

  const cardSide = useSharedValue(CARD_SIDE.front);

  function showFrontCard() {
    cardSide.value = CARD_SIDE.front;
  }

  function showBackCard() {
    cardSide.value = CARD_SIDE.back;
  }

  function handleFlipCard() {
    console.log(cardSide.value);
    if (cardSide.value === CARD_SIDE.front) {
      showBackCard();
    } else {
      showFrontCard();
    }
  }

  return (
    <View style={styles.container}>
      <ProfilePicture />
      <CreditCard
        cardSide={cardSide}
        data={{
          name,
          number: number.replace(/(\d{4})(?=\d)/g, "$1"),
          date,
          code,
        }}
      />
      <TouchableOpacity onPress={handleFlipCard}>
        <Text>Inverter</Text>
      </TouchableOpacity>
      <View style={styles.form}>
        <Input
          style={styles.inputItems}
          placeholder="Nome"
          placeholderTextColor="white"
          onFocus={showFrontCard}
          onChangeText={setName}
        />
        <Input
          style={styles.inputItems}
          placeholder="Número do cartão"
          keyboardType="numeric"
          placeholderTextColor="white"
          maxLength={16}
          onChangeText={setNumber}
          onFocus={showBackCard}
        />
        <View style={styles.inputInline}>
          <Input
            style={styles.inputInlineItems}
            placeholder="CVV"
            keyboardType="numeric"
            placeholderTextColor="white"
            maxLength={3}
            onChangeText={setCode}
            onFocus={showBackCard}
          />
          <Input
            style={styles.inputInlineItems}
            placeholder="01/02"
            keyboardType="numeric"
            placeholderTextColor="white"
            onChangeText={setDate}
            onFocus={showBackCard}
          />
        </View>
      </View>
    </View>
  );
}
