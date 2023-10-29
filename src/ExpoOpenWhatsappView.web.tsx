import * as React from 'react';

import { ExpoOpenWhatsappViewProps } from './ExpoOpenWhatsapp.types';

export default function ExpoOpenWhatsappView(props: ExpoOpenWhatsappViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
