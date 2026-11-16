# PDF Reader Aloud - Android app

Reads any PDF aloud in an Indian English voice, highlights the sentence being read and scrolls the page along.
Built with Capacitor (web app inside a real Android app). Uses the phone's own text-to-speech.

## Easiest way to get the APK: build it free on GitHub (no installs)

1. Create a free account at github.com and make a **new repository** (any name, Private is fine).
2. Upload everything in this folder to it. Make sure the hidden folder `.github/workflows/build-apk.yml`
   is included (using `git push` is the safest way; with the web uploader, drag the whole extracted folder in).
3. Open the repository's **Actions** tab -> **Build APK** -> **Run workflow** (it also starts by itself after the upload).
4. After about 5 minutes, open the finished run and download **PDF-Reader-Aloud-APK** (a zip containing `app-debug.apk`).
5. Copy `app-debug.apk` to your phone and open it. Allow "Install unknown apps" when Android asks.

## Or build it on your computer

Needs Node 18+, Java 17 and Android Studio (for the Android SDK).

```
npm install
node scripts/prepare.js
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug          (Windows: gradlew.bat assembleDebug)
```
The APK is at `android/app/build/outputs/apk/debug/app-debug.apk`.
(Or run `npx cap open android` and use Build > Build APK in Android Studio.)

## Get the best voice on the phone

Settings > System > Languages > **Text-to-speech output** > choose **Speech Services by Google**,
tap the gear > Install voice data > **English (India)**. Then pick it in the app's voice dropdown,
or leave it on "Indian English (auto)".

## Notes
- Works offline once the voice data is installed. PDFs never leave your phone.
- Scanned PDFs (images only) have no text to read.
- The screen is kept awake while reading; if you lock the phone, reading may stop.
- This is a debug-signed APK, fine for personal use. For the Play Store you would need a release build and a signing key.
