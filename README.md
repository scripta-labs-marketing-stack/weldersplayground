# Welders Playground 

Ein React-basiertes Web-Projekt, das mit Vite, TailwindCSS und modernen UI-Komponenten erstellt wurde.

## 🚀 Schnellstart

### Voraussetzungen
- Node.js (Version 18 oder höher)
- npm oder yarn

### Installation und Start

1. **Dependencies installieren:**
   ```bash
   npm install
   ```

2. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```

3. **Browser öffnen:**
   Die Anwendung ist unter `http://localhost:3000` verfügbar.

### Verfügbare Scripts

- `npm run dev` - Startet den Entwicklungsserver
- `npm run build` - Erstellt eine Produktions-Build
- `npm run preview` - Zeigt die Produktions-Build lokal an
- `npm run lint` - Führt ESLint aus

## 🏗️ Projektstruktur

```
src/
├── api/                 # API-Client und Funktionen
├── components/          # React-Komponenten
│   └── ui/             # UI-Komponenten (Radix UI)
├── hooks/              # Custom React Hooks
├── lib/                # Utility-Funktionen
├── pages/              # Seiten-Komponenten
└── utils/              # Weitere Utilities
```

## 🎨 Technologien

- **React 18** - UI-Framework
- **Vite** - Build-Tool und Dev-Server
- **TailwindCSS** - CSS-Framework
- **Radix UI** - Headless UI-Komponenten
- **React Router** - Client-side Routing
- **Framer Motion** - Animationen

## 🔒 Security-Header

Das Projekt ist für die Verwendung von Security-Headern vorbereitet:

### Vercel Deployment
Verwende die `vercel.json` Datei für automatische Security-Header.

### Apache Server
Kopiere die `.htaccess` Datei in das Root-Verzeichnis deines Apache-Servers.

### Enthaltene Security-Header:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy
- Strict-Transport-Security (für HTTPS)
- Content-Security-Policy

## 📦 Build für Produktion

```bash
npm run build
```

Die gebauten Dateien befinden sich im `dist/` Ordner.

## 🚀 Deployment

### Vercel
1. Verbinde dein Repository mit Vercel
2. Die `vercel.json` wird automatisch verwendet

### Apache Server
1. Führe `npm run build` aus
2. Lade den Inhalt des `dist/` Ordners auf deinen Server hoch
3. Kopiere die `.htaccess` Datei in das Root-Verzeichnis

## 🛠️ Entwicklung

Das Projekt verwendet:
- ESLint für Code-Qualität
- Prettier für Code-Formatierung (empfohlen)
- TypeScript-Unterstützung (optional)

## 📝 Lizenz

Dieses Projekt wurde als Base44 Export erstellt.