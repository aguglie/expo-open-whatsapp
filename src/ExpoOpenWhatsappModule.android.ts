import { requireNativeModule } from "expo-modules-core";

import { InstalledVariants } from "./InstalledVariants";

const nativeModule = requireNativeModule("ExpoOpenWhatsapp");

export function getInstalled(): Promise<InstalledVariants> {
  return Promise.resolve(nativeModule.getInstalled());
}

export function sendWhatsapp(phoneNumber: string, text: string): Promise<void> {
  nativeModule.sendWhatsapp(phoneNumber, text);
  return Promise.resolve();
}

export function sendWhatsappBusiness(
  phoneNumber: string,
  text: string,
): Promise<void> {
  nativeModule.sendWhatsappBusiness(phoneNumber, text);
  return Promise.resolve();
}
