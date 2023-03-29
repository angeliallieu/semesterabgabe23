# Semesterabgabe Webtech WiSe 22/23 Freiheit
## Zu meiner Anwendung

Meine Anwendung stellt eine Musiksammlung dar und wurde Mithilfe von Angular, Node.js und MongoDB erstellt. Diese zeigt Lieder an, die der Nutzer abgespeichert hat. Dabei werden Informationen wie Künstler, Album, Bild, Titel und Liedlänge gespeichert. Einige Lieder sind schon von mir eingefügt worden. Der Nutzer hat auch die Möglichkeit selbst Lieder hinzuzufügen. Dies passiert, wenn man auf der Home-Seite oben links aufs **Plus**-drückt. Man kann beim Eingeben der Daten auch einzelne Informationen auslassen, wenn diese nicht bekannt sind. Diesen Prozess kann man auch Abbrechen (mit der **Abbrechen**-Taste“). Auf dem linken Seite kann man sich durchs Anklicken auf das jeweilige Icon **Künstler** und **Alben** anzeigen lassen. Diese Funktion ist aber noch nicht weiter ausgebaut, als das die alle verfügbaren Alben oder Künstler aus der Datenbank anzeigt. Die Felder Suche & LogIn sind symbolisch in zurzeit ohne Funktion. Zukunftperspektivisch, kann man diese Anwendung nutzen, um einen Musik-Streaming diesen aufzubauen. Dafür könnte man einen Musikplayer einbauen und in der JSON-Datei von Songs einen „Pfad“ für die Audio-Datei hinterlegen. Mir ist leider sehr spät eingefallen das ich in der JSON-Datei einen YouTube-Link des jeweiligen Liedes einfügen hätte können, sodass man beim Klick auf die jeweilige Songkarte auf den YouTube-Link (oder beim eingefügten Songs auf die YouTube-Webseite) verweisen könnte.

## Installation der Anwendung:
Der Backend- und der Frontend-Ordner müssen jeweils in eigenen Terminals (am besten über GitBash) geöffnet werden. 
Für das Frontend erfolgt im Terminal die Eingabe: 
```cmd
ng serve
```

Erfolgreiche ist dies wenn folgende Ausgabe erfolgt:
```ts
console.log("Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ √ Compiled successfully.")
```

Für das Backend gilt die Eingabe:
```cmd
npm run watch
```
Hier sollte erfolgen:
```ts
console.log("Server started and listening on port 3000.... Connected to DB")
```

Das Backend sollte durch meine Implementation bereits mit der MongoDB-Datenbank verknüpft sein.
Wenn beide Terminals laufen, kann man die Seite über *http://localhost:4200/* erreichen.





```cmd
npm run watch
```
 ### Mein Untertitel 2
```ts
console.log("Hello Kpamanah")
```

```json
{name: String}
```
<img src="../siaback/src/assets/cover/confetti.jpg" alt="Alt text" title="Optional title">
<img src="siaback/src/assets/cover/confetti.jpg" alt="Alt text" title="Optional title">
![alt text]("siaback\src\assets\cover\confetti.jpg")


