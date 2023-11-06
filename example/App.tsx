import * as ExpoOpenWhatsapp from "expo-open-whatsapp";
import { InstalledVariants } from "expo-open-whatsapp/InstalledVariants";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [instelldVariants, setInstelldVariants] = useState<
    InstalledVariants | undefined
  >(undefined);
  const [phone, setPhone] = useState("+393333333333");
  const [text, setText] = useState("Message from Expo Open Whatsapp");

  useEffect(() => {
    ExpoOpenWhatsapp.getInstalled().then(setInstelldVariants);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ width: "80%" }}>
        <Text>Enter a phone number</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={{
            marginBottom: 10,
            borderWidth: 0.2,
            borderColor: "blue",
          }}
        />

        <Text>Enter a message to send</Text>

        <TextInput
          value={text}
          multiline
          numberOfLines={4}
          onChangeText={setText}
          style={{
            marginBottom: 10,
            borderWidth: 0.2,
            borderColor: "blue",
          }}
        />
        <Button
          title="Send Message with Whatsapp"
          onPress={() =>
            ExpoOpenWhatsapp.send(phone, text, {
              title: "Multiple apps found",
              message: "Choose the app to send the message with:",
            })
          }
        />
      </View>
      <View style={{ width: "80%", marginTop: 80, alignItems: "center" }}>
        <Text>has Whatsapp: {instelldVariants?.whatsapp ? "Yes" : "No"}</Text>
        <Text>
          has Whatsapp Business:{" "}
          {instelldVariants?.whatsappBusiness ? "Yes" : "No"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
