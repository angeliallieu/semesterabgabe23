# Semesterabgabe Webtech WiSe 22/23 Freiheit
## Zu meiner Anwendung

Meine Anwendung **Siamusic** stellt eine Musiksammlung dar und wurde Mithilfe von Angular, Node.js und MongoDB erstellt. Diese zeigt Lieder an, die der Nutzer abgespeichert hat. Dabei werden Informationen wie Künstler, Album, Bild, Titel und Liedlänge gespeichert. Einige Lieder sind schon von mir eingefügt worden. Der Nutzer hat auch die Möglichkeit selbst Lieder hinzuzufügen. Dies passiert, wenn man auf der Home-Seite oben rechts aufs **Plus**-drückt. Man kann beim Eingeben der Daten auch einzelne Informationen auslassen, wenn diese nicht bekannt sind. Diesen Prozess kann man zudem auch Abbrechen (mit der **Abbrechen**-Taste“). Auf der linken Seite kann man sich durchs Anklicken auf das jeweilige Icon die **Künstler** und **Alben** anzeigen lassen. Diese Funktion ist aber noch nicht weiter ausgebaut, als das die verfügbaren Alben oder Künstler aus der Datenbank anzeigt werden. Die Felder Suche & LogIn sind symbolisch und zurzeit ohne Funktion. Zukunftperspektivisch, kann man diese Anwendung nutzen, um einen Musik-Streaming-Dienst aufzubauen. Dafür könnte man einen Musikplayer einbauen und in der JSON-Datei von Songs einen „Pfad“ für die Audio-Datei hinterlegen. Mir ist leider sehr spät eingefallen das ich in der JSON-Datei einen YouTube-Link des jeweiligen Liedes einfügen hätte können, sodass man beim Klick auf die jeweilige Songkarte auf den YouTube-Link (oder beim eingefügten Songs auf die YouTube-Webseite) verweisen könnte.

## Installation der Anwendung:
**Backend**: siamusicbackend <br>
**Frontend**: siaback <br>

Der **Backend**- und der **Frontend**-Ordner müssen jeweils im eigenen Terminals (am besten über GitBash) geöffnet werden. 
Für das **Frontend** erfolgt im Terminal die Eingabe: 
```cmd
ng serve
```

Erfolgreiche ist dies wenn folgende **Ausgabe** erfolgt:
```ts
console.log("Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ √ Compiled successfully.")
```

Für das **Backend** gilt die Eingabe:
```cmd
npm run watch
```
Hier sollte erfolgen:
```ts
console.log("Server started and listening on port 3000.... Connected to DB")
```

Das Backend sollte durch meine Implementation bereits mit der MongoDB-Datenbank verknüpft sein.
Wenn beide Terminals laufen, kann man die Seite über *http://localhost:4200/* erreichen.



## Screenshots der Anwendung
**Startseite**
<img src="/siaback/src/assets/appbilder/Bild1.png" alt="Startseite" title="Startseite">

**Startseite weitergescrollt**
<img src="/siaback/src/assets/appbilder/Bild2.png" alt="Startseite2" title="Startseite2">

**Neuen Song hinzufügen**
<img src="/siaback/src/assets/appbilder/Bild3.png" alt="CreateSong" title="CreateSong">

**Künstlerseite**
<img src="/siaback/src/assets/appbilder/Bild4.png" alt="Künstler" title="Künstler">

**Albenseite**
<img src="/siaback/src/assets/appbilder/Bild5.png" alt="Alben" title="Alben">


##Weiterführende Ideen
- Datenbanken so verknüpfen, dass man von der Alben-Seite auf die Lieder in dem Alben kommt   
- Datenbanken so verknüpfen, dass man von der Künstler-Seite auf die Lieder in dem Künstler kommt
- Suchfunktion implementieren
- Log-In Funktion einrichten
- Lieder abspielbar machen
- Error-Meldung, wenn ein Lied schon existiert   
- linke Sidenav fixieren, sodass sie nicht mitscrollt
