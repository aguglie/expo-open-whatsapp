import { Linking } from "react-native";

import { InstalledVariants } from "./InstalledVariants";

/*
As of iOS 9, your app also needs to provide the LSApplicationQueriesSchemes key inside Info.plist or canOpenURL() will always resolve to false.
 */

export async function getInstalled(): Promise<InstalledVariants> {
  const hasWhatsapp = await Linking.canOpenURL("whatsapp-consumer://send");
  const hasWhatsappBusiness = await Linking.canOpenURL("whatsapp-smb://send");

  return {
    whatsapp: hasWhatsapp,
    whatsappBusiness: hasWhatsappBusiness,
  };
}

export function sendWhatsapp(phoneNumber: string, text: string): Promise<void> {
  return Linking.openURL(
    `whatsapp-consumer://send?phone=${phoneNumber}&text=${urlEncode(text)}`,
  );
}

export function sendWhatsappBusiness(
  phoneNumber: string,
  text: string,
): Promise<void> {
  return Linking.openURL(
    `whatsapp-smb://send?phone=${phoneNumber}&text=${urlEncode(text)}`,
  );
}

function urlEncode(text: string): string {
  return encodeURIComponent(text).replace(/'/g, "%27").replace(/"/g, "%22");
}
