import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoOpenWhatsapp.web.ts
// and on native platforms to ExpoOpenWhatsapp.ts
import ExpoOpenWhatsappModule from './ExpoOpenWhatsappModule';
import ExpoOpenWhatsappView from './ExpoOpenWhatsappView';
import { ChangeEventPayload, ExpoOpenWhatsappViewProps } from './ExpoOpenWhatsapp.types';

// Get the native constant value.
export const PI = ExpoOpenWhatsappModule.PI;

export function hello(): string {
  return ExpoOpenWhatsappModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoOpenWhatsappModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoOpenWhatsappModule ?? NativeModulesProxy.ExpoOpenWhatsapp);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoOpenWhatsappView, ExpoOpenWhatsappViewProps, ChangeEventPayload };
