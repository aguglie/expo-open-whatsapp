# expo-open-whatsapp

A React Native package for opening a WhatsApp chat from your app. It supports both WhatsApp and WhatsApp Business, and
provides a disambiguation prompt if both are installed.

## Installation

```bash
npm install https://github.com/aguglie/expo-open-whatsapp
```

## iOS Setup

In your Info.plist, add:

```xml

<key>LSApplicationQueriesSchemes</key>
<array>
<string>whatsapp</string>
<string>whatsapp-smb</string>
</array>
```

## Usage

See the [example](/example) folder for a working example.

```js
import { useEffect, useState } from 'react';
import { Button } from 'react-native';
import * as ExpoOpenWhatsapp from "expo-open-whatsapp";

function sendWhatsAppMessage(phone, text) {
  ExpoOpenWhatsapp.send(phone, text, {
    title: "Select app",
    message: "Which app would you like to use?",
  });
}

// Example Button in your component
<Button title="Open WhatsApp" onPress={() => sendWhatsAppMessage('+393333333333', 'Your message')}/>
```

## API

| Function       | Arguments                                                                    | Returns                                                    | Description                                                                                                                                      |
|----------------|------------------------------------------------------------------------------|------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `getInstalled` | None                                                                         | `Promise<{ whatsapp: boolean, whatsappBusiness: boolean}>` | Checks which WhatsApp variants are installed.                                                                                                    |
| `send`         | `phoneNumber: string`, `text: string`, `disambiguation?: { title, message }` | `Promise<"OK" \| "NO_WHATSAPP_INSTALLED">`                 | Opens WhatsApp/WhatsApp Business to send a message. Use `disambiguation` to customize the alert in case of multiple WhatsApp variants installed. |



## Example App

The library includes an example folder with a sample app to demonstrate the usage of `expo-open-whatsapp`.

## License

MIT License
