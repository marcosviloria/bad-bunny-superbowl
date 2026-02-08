# Project File Structure

```
superbowl/
│
├── 📖 README.md                 # Full project documentation
├── 📖 SETUP_GUIDE.md            # Quick start guide (READ THIS FIRST!)
├── 📖 DEPLOYMENT.md             # Deployment instructions for Heroku/Railway/AWS
├── 📖 QUICKSTART.txt            # One-page quick start
├── 📋 package.json              # Root package.json
│
├── 🗂️ backend/                  # Node.js/Express Server
│   ├── 📄 server.js             # Main server file
│   ├── 📄 database.js           # SQLite database setup
│   ├── 📋 package.json          # Backend dependencies
│   ├── 📝 .env.example          # Environment variables template
│   ├── 📝 .env                  # Your actual credentials (create this!)
│   ├── 📝 .gitignore            # Git ignore rules
│   ├── superbowl.db             # SQLite database (created on first run)
│   │
│   └── 🗂️ routes/               # API route handlers
│       ├── 📄 spotify.js        # Spotify API integration & search
│       ├── 📄 users.js          # User signup/signin
│       ├── 📄 predictions.js    # User predictions/setlist
│       ├── 📄 admin.js          # Admin panel & correct setlist
│       └── 📄 leaderboard.js    # Leaderboard scoring
│
├── 🗂️ frontend/                 # Client-side web app
│   ├── 🗂️ public/               # Served to browser
│   │   ├── 📄 index.html        # Main HTML page
│   │   ├── 📄 styles.css        # All styling (dark theme)
│   │   ├── 📄 app.js            # Main JavaScript app (all logic)
│   │   └── 🗂️ assets/           # PNG/images folder (if needed)
│   │
│   └── 📖 README.md             # Frontend notes
│
├── 💾 start.bat                 # Windows start script
├── 💾 start.sh                  # Mac/Linux start script
│
└── 📝 .gitignore                # Top-level git ignore

```

## File Descriptions

### Core Configuration
- **package.json**: Lists npm dependencies and scripts
- **.env.example**: Template for environment variables
- **.env**: YOUR credentials (create this with your Spotify API keys)
- **.gitignore**: Which files to exclude from git

### Backend (Node.js API)
- **server.js**: Starts Express server on port 5000, sets up middleware
- **database.js**: Creates/initializes SQLite database tables
- **routes/spotify.js**: Connects to Spotify API, handles song search
- **routes/users.js**: User signup, signin, session management
- **routes/predictions.js**: Add/remove/reorder user predictions
- **routes/admin.js**: Mark correct songs, update leaderboard
- **routes/leaderboard.js**: Get leaderboard scores

### Frontend (HTML/CSS/JS)
- **index.html**: Single HTML file with div placeholder
- **styles.css**: All styling (~700 lines), dark Bad Bunny themed
- **app.js**: Entire frontend application (~1000 lines)
  - Handles auth pages (signup/signin)
  - Song search interface
  - Setlist builder with drag/drop
  - Leaderboard display
  - Admin panel

### Documentation
- **README.md**: Complete project documentation
- **SETUP_GUIDE.md**: Quick start (read this!)
- **DEPLOYMENT.md**: Platform-specific deployment guides
- **QUICKSTART.txt**: One-page reference

---

## Key Technologies

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Backend | Node.js + Express | RESTful API server |
| Frontend | Vanilla HTML/CSS/JS | User interface (no frameworks) |
| Database | SQLite | Store users, predictions, scores |
| Authentication | Session-based + bcrypt | User login system |
| API | Spotify Web API | Get Bad Bunny songs |

---

## How the App Works

1. **User Signs Up** → Stored in database
2. **User Searches Songs** → API calls Spotify
3. **User Adds Songs** → Stored in predictions table
4. **Event Ends at 7:30 PM** → Predictions close
5. **Owner Marks Correct** → Updates correctSetlist
6. **Scores Calculate** → Leaderboard updates
7. **Users See Ranking** → View their position

---

## Database Schema

### users
```
id (primary key)
firstName
lastName
password (bcrypt hashed, optional)
createdAt
```

### predictions
```
id (primary key)
userId (foreign key)
songId (Spotify ID)
songName
artist
albumCover (image URL)
position (1-15)
createdAt
```

### correctSetlist
```
id (primary key)
songId (Spotify ID)
songName
artist
albumCover (image URL)
position (songs played order)
markedAt
```

### leaderboard
```
id (primary key)
userId (foreign key)
firstName
lastName
score (count of matches)
updatedAt
```

---

## Getting Started

1. **Read**: SETUP_GUIDE.md
2. **Configure**: Create backend/.env
3. **Install**: `cd backend && npm install`
4. **Run**: `npm start`
5. **Test**: Open http://localhost:5000
6. **Deploy**: Follow DEPLOYMENT.md
7. **Share**: Send URL to friends
8. **Monitor**: Use Admin panel during event

---

## Customization Ideas

- Change the 7:30 PM deadline in `routes/predictions.js`
- Modify max songs from 15 to another number
- Add more fields to user profiles
- Change theme colors in `styles.css`
- Add password requirement for everyone
- Add email/username instead of names
- Export final scores to CSV

See code comments for specific lines to modify.

---

**Everything you need is here. You're ready to go!**
