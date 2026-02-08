# ⚡ Quick Command Reference

## Getting Started

```bash
# 1. Create .env file with your Spotify credentials
# Edit backend/.env and add:
#   SPOTIFY_CLIENT_ID=xxx
#   SPOTIFY_CLIENT_SECRET=xxx
#   OWNER_PASSWORD=xxx
#   SESSION_SECRET=xxx

# 2. Install dependencies (first time only)
cd backend
npm install

# 3. Start the app
npm start
# Server runs at: http://localhost:5000

# 4. Stop the app
# Press Ctrl+C in the terminal
```

## Deployment

```bash
# HEROKU
heroku login
heroku create your-unique-app-name
heroku config:set SPOTIFY_CLIENT_ID=xxx
heroku config:set SPOTIFY_CLIENT_SECRET=xxx
heroku config:set OWNER_PASSWORD=xxx
heroku config:set SESSION_SECRET=xxx
git push heroku main

# RAILWAY.APP
# Just connect GitHub and add env vars in dashboard

# OTHER PLATFORMS
# See DEPLOYMENT.md for AWS, DigitalOcean, etc.
```

## Database

```bash
# Backup your database
cp backend/superbowl.db backend/superbowl.db.backup

# Delete database (fresh start)
rm backend/superbowl.db
# Next time you run npm start, it will recreate

# Find database file
# Windows: c:\Users\marco\Desktop\Python Projects\superbowl\backend\superbowl.db
# Mac: ~/Desktop/superbowl/backend/superbowl.db
# Linux: ~/Desktop/superbowl/backend/superbowl.db
```

## Troubleshooting

```bash
# Kill process using port 5000 (Windows PowerShell)
Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process

# Kill process (Mac/Linux)
lsof -ti:5000 | xargs kill -9

# Check if Node.js installed
node --version

# Check npm
npm --version

# Clear npm cache
npm cache clean --force

# Reinstall all dependencies
rm -rf node_modules package-lock.json
npm install

# Check if port is in use
# Windows: netstat -ano | findstr :5000
# Mac: lsof -i :5000
# Linux: netstat -tunap | grep :5000
```

## File Editing

```bash
# Edit .env file (Windows)
notepad backend\.env

# Edit .env file (Mac)
nano backend/.env

# Edit .env file (VS Code)
code backend/.env
```

## Important Files

```
START_HERE.md           ← Begin here!
SETUP_GUIDE.md          ← 5-minute setup
DEPLOYMENT.md           ← Deploy online
GAME_DAY_CHECKLIST.md   ← During event
FILE_STRUCTURE.md       ← Project organization
README.md               ← Full documentation

backend/.env            ← YOUR CREDENTIALS (create this)
backend/server.js       ← Main server
frontend/public/app.js  ← Frontend logic
```

## URLs

```
Local Testing:       http://localhost:5000
After Deploy:        https://your-app-name.herokuapp.com
Or:                  https://your-subdomain.railway.app

Admin Panel:         [URL]/    (click ⚙️ Admin button)
Public Leaderboard:  [URL]/    (click 🏆 Leaderboard button)
User Setlist:        [URL]/    (main page)
```

## Spotify Credentials Flow

```
1. Go to https://developer.spotify.com/dashboard
2. Sign up (free)
3. Create "New App"
4. Agree to terms
5. Click "Create"
6. See "Client ID" → Copy to .env
7. Click "Show Client Secret" → Copy to .env
8. Restart server with npm start
9. Test: Search for "Bad Bunny" at http://localhost:5000
```

## Environment Variables (.env)

```
PORT=5000                                    # Server port
SPOTIFY_CLIENT_ID=abc123def456              # From Spotify dashboard
SPOTIFY_CLIENT_SECRET=xyz789uvw654           # From Spotify dashboard
OWNER_PASSWORD=YourAdminPasswordHere123     # Your choice
SESSION_SECRET=any_random_string_here        # Your choice
```

## Success Indicators

✅ Running: `npm start` shows "Server running on http://localhost:5000"
✅ Database: `npm start` shows "Database tables initialized"
✅ Browser: http://localhost:5000 loads login page
✅ Signup works: Can create account
✅ Signup fails: Spotify API needed for song search (credentials issue)
✅ Search works: Type "Bad Bunny" and songs appear
✅ Admin works: Can access admin panel with OWNER_PASSWORD
✅ Server error: Check .env file and restart

## Quick Test Script

```bash
# Run this to test everything works:

# 1. Check Node
node --version

# 2. Go to backend
cd backend

# 3. Install (if not done)
npm install

# 4. Start
npm start

# Now:
# - Open http://localhost:5000 in browser
# - Try creating account (use any first/last name)
# - Search "Bad Bunny"
# - Click on a song
# - See it appear in your setlist
# - Drag to reorder
# - Click admin and try marking songs
# - Check leaderboard

# All working? You're ready to deploy!
```

## Platform-Specific Help

```
WINDOWS:
- Use PowerShell or Command Prompt
- Run: cd c:\Users\marco\Desktop\Python Projects\superbowl\backend
- Run: npm start

MAC:
- Use Terminal
- Run: cd ~/Desktop/superbowl/backend
- Run: npm start

LINUX:
- Use terminal
- Run: cd ~/Desktop/superbowl/backend
- Run: npm start
```

---

**Need more help?** See the README.md file for detailed explanations.
