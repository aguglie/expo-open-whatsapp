import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoOpenWhatsappViewProps } from './ExpoOpenWhatsapp.types';

const NativeView: React.ComponentType<ExpoOpenWhatsappViewProps> =
  requireNativeViewManager('ExpoOpenWhatsapp');

export default function ExpoOpenWhatsappView(props: ExpoOpenWhatsappViewProps) {
  return <NativeView {...props} />;
}
