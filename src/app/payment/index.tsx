import { Text, View } from "react-native";
import { styles } from "./styles";
import { ProfilePicture } from "@/components/profile-picture";
import { CreditCard } from "@/components/credit-card";

export function Payment() {
  return (
    <View style={styles.container}>
      <ProfilePicture />
      <CreditCard />
    </View>
  );
}
