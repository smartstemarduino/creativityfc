CREATING FC WEBSITE: HOSTING & EDITING
======================================
FILES
  index.html        page structure and text
  css/style.css     design (colours are at the top, in :root)
  js/players.js     PLAYERS, CLUBS and EMAIL: edit these to update the site
  js/main.js        site behaviour (no need to edit)
  assets/           logo, intro video, photos, player folders

HOSTING
  Upload everything inside this folder (index.html, css, js, assets) to the
  ROOT of your host (cPanel public_html, Netlify, Vercel, GitHub Pages...).
  Keep the folder structure exactly as it is.

ADDING A PLAYER'S VIDEO
  Put the file in assets/players/<player-folder>/highlights.mp4
  (MP4, H.264, 1080p, 20-60 seconds, under about 20 MB).

ADDING / CHANGING A PLAYER
  Photos go in assets/players/<player-folder>/ as profile.jpg and
  action-1.jpg, action-2.jpg ... Then edit that player in js/players.js
  (set "shots" to the number of action photos).

PARTNERSHIP FORM
  Opens the visitor's email app with the enquiry filled in. For submissions
  delivered straight to your inbox, connect a form service (e.g. Formspree).
