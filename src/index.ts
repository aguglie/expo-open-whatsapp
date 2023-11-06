import { Alert } from "react-native";

import * as ExpoOpenWhatsappModule from "./ExpoOpenWhatsappModule";
import { InstalledVariants } from "./InstalledVariants";

export function getInstalled(): Promise<InstalledVariants> {
  return ExpoOpenWhatsappModule.getInstalled();
}

export async function send(
  phoneNumber: string,
  text: string,
  disambiguation?: { title: string; message: string },
): Promise<"OK" | "NO_WHATSAPP_INSTALLED"> {
  const installedVariants = await getInstalled();

  if (!installedVariants.whatsapp && !installedVariants.whatsappBusiness) {
    return "NO_WHATSAPP_INSTALLED";
  }

  if (installedVariants.whatsapp && !installedVariants.whatsappBusiness) {
    await ExpoOpenWhatsappModule.sendWhatsapp(phoneNumber, text);
    return "OK";
  }

  if (installedVariants.whatsappBusiness && !installedVariants.whatsapp) {
    await ExpoOpenWhatsappModule.sendWhatsappBusiness(phoneNumber, text);
    return "OK";
  }

  Alert.alert(
    disambiguation?.title || "Send via...",
    disambiguation?.message || "Choose which WhatsApp to use",
    [
      {
        text: "WhatsApp",
        onPress: () => ExpoOpenWhatsappModule.sendWhatsapp(phoneNumber, text),
      },
      {
        text: "WhatsApp Business",
        onPress: () =>
          ExpoOpenWhatsappModule.sendWhatsappBusiness(phoneNumber, text),
      },
    ],
  );

  return "OK";
}
