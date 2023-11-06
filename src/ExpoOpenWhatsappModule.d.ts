import { InstalledVariants } from "./InstalledVariants";

export function getInstalled(): Promise<InstalledVariants>;

export function sendWhatsapp(phoneNumber: string, text: string): Promise<void>;

export function sendWhatsappBusiness(
  phoneNumber: string,
  text: string,
): Promise<void>;
