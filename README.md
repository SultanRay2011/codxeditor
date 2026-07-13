# CodX Editor

CodX Editor is a browser-based code editor for building and testing frontend projects directly in the browser. It is designed for HTML, CSS, and JavaScript workflows, with live preview, debugging tools, project file management, and real-time collaboration.

Live site:

`https://codx-furo.onrender.com`

## What CodX Editor Is

CodX Editor is a lightweight web IDE that lets users:

- create and manage project files
- write HTML, CSS, and JavaScript
- preview projects instantly in an iframe
- debug with a built-in console and error system
- collaborate with other people in real time
- manage room roles such as host, co-host, and participant
- control sessions with room-wide collaboration tools

It is built as a custom editor experience instead of relying on a large external IDE framework.

## How It Works

CodX Editor has two main parts:

1. Frontend
- `frontend.html`
- `frontend.css`
- `frontend.js`

This is the actual editor interface. It handles:

- typing and syntax highlighting
- file explorer and project structure
- live preview
- error display and jump-to-error behavior
- settings, fonts, and editor customization
- collaboration UI, chat, cursors, and room controls

2. Backend
- `server.js`

This powers the real-time collaboration features using Node.js, Express, and Socket.IO. It handles:

- creating collaboration sessions
- joining and resuming sessions
- syncing files between collaborators
- chat messages
- host and co-host controls
- session permissions and room-wide controls
- admin panel data and actions

## Main Features

- live HTML/CSS/JS preview
- built-in console and runtime error capture
- file create, rename, delete, import, and export
- ZIP project export/import
- syntax highlighting and suggestions
- clickable error badges
- inline error highlighting
- `cxstart` starter shortcut for HTML
- Google Fonts support
- collaboration links and live file sync
- group chat and private chat
- live collaborator cursors and typing indicators
- host, co-host, and participant roles
- room controls and participant controls
- admin panel for live session monitoring
- Zen Mode for focused editing

## Run Locally

Install dependencies:

```powershell
npm install
```

Start the server:

```powershell
npm start
```

Then open:

```text
http://localhost:3000/frontend.html
```

### GitHub account connection

The **More → Connect to GitHub** button uses GitHub's browser-based OAuth login. No personal access token is required. Once connected, click it again to browse repositories, choose editor files, enter a commit message and optional description, and commit them to a branch.

1. In GitHub, open **Settings → Developer settings → OAuth Apps → New OAuth App**.
2. Use `http://localhost:3000` as the homepage URL for local development.
3. Use `http://localhost:3000/auth/github/callback` as the authorization callback URL.
4. Copy `.env.example` to `.env` and add the OAuth app's client ID and client secret.
5. Restart the CodX Editor server with `npm run dev`.

The default `repo read:user` scope allows updates to public and private repositories the account can access. Disconnect and reconnect after changing scopes. For production, set `GITHUB_OAUTH_CALLBACK_URL` to the public HTTPS callback URL registered with GitHub. Keep `.env` and the client secret private.

## Project Structure

- `frontend.html` - main editor page
- `frontend.css` - editor styling
- `frontend.js` - editor logic
- `server.js` - backend collaboration server
- `index.html` - homepage
- `help.html` - complete feature guide
- `welcome.html` - terms gate / entry page

## Summary

CodX Editor is a collaborative browser code editor focused on frontend development. It combines editing, previewing, debugging, and collaboration in one interface, with a Node.js backend powering real-time shared sessions.
