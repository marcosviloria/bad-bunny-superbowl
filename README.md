# Bad Bunny Super Bowl Setlist Predictor

A deployable web application inspired by the "Mastermind" app for Taylor Swift. Users predict Bad Bunny's Super Bowl LX setlist and compete on a live leaderboard!

## Features

✅ **User System**
- Sign up with first/last name
- Optional password protection for editing predictions
- Sign in anytime to edit your predictions (until 7:30 PM)

✅ **Setlist Prediction**
- Search from Bad Bunny's entire Spotify catalog
- Select up to 15 songs for your prediction (max 15 — you don't have to add 15)
- Drag and drop to reorder your setlist
- Album covers displayed next to each song

✅ **Real-time Scoring**
- Owner marks songs that were actually played
- Leaderboard updates automatically
- 1 point per correct prediction

✅ **Admin Panel**
- Owner can mark songs as correct in real-time
- Live leaderboard visible to owner
- Password protected

✅ **Live Leaderboard**
- Public leaderboard viewable by all users
- Sorted by score
- Shows player names and points

## Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Database**: SQLite
- **API**: Spotify Web API

## Requirements

- Node.js 14+
- npm
- Spotify Developer Account (for API credentials)

## Setup Instructions

### 1. Get Spotify API Credentials

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Accept the terms and create the app
4. Copy your `Client ID` and `Client Secret`

### 2. Install Dependencies

```bash
cd backend
npm install
```

### 3. Create Environment File

Create `backend/.env` file with your credentials:

```
PORT=5000
SPOTIFY_CLIENT_ID=your_spotify_client_id_here
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
OWNER_PASSWORD=your_secure_owner_password_here
SESSION_SECRET=your_random_session_secret_here
```

**Example .env:**
```
PORT=5000
SPOTIFY_CLIENT_ID=abc123def456ghi789jkl012
SPOTIFY_CLIENT_SECRET=xyz987uvw654tsr321qpo098
OWNER_PASSWORD=SuperBowl2025!
SESSION_SECRET=my_super_secret_session_key_12345
```

### 4. Run the Application

```bash
cd backend
npm start
```

The server will start on `http://localhost:5000`

## Usage Guide

### For Users

1. **Create Account**: Enter first and last name (password optional)
2. **Sign In**: Use your name (and password if you set one)
3. **Build Setlist**:
   - Search for Bad Bunny songs
   - Click songs to add them to your setlist
   - Drag to reorder
   - Maximum 15 songs (you do not have to put 15 songs — it's the upper limit)
4. **Submit**: Your predictions are saved automatically
5. **Check Leaderboard**: Click "🏆 Leaderboard" to see standings

⏰ **Deadline**: Predictions close at 7:30 PM. After that, you can view but not edit.

### For Owner (Admin)

1. Click **⚙️ Admin** panel
2. Enter your `OWNER_PASSWORD`
3. Search for each song that was actually played
4. Click "Mark as Correct"
5. Leaderboard updates automatically
6. View live scores in admin leaderboard

## Deployment

### Option 1: Deploy to Heroku (Recommended for Quick Setup)

```bash
# Install Heroku CLI
# Create Heroku account at heroku.com

# Login
heroku login

# Create app
heroku create your-app-name

# Set environment variables
heroku config:set SPOTIFY_CLIENT_ID=xxxxx
heroku config:set SPOTIFY_CLIENT_SECRET=xxxxx
heroku config:set OWNER_PASSWORD=xxxxx
heroku config:set SESSION_SECRET=xxxxx

# Deploy
git push heroku main
```

### Option 2: Deploy to Railway.app

```bash
# Create account at railway.app
# Connect your GitHub repo
# Add environment variables in Railway dashboard
# Deploy
```

### Option 3: Deploy to Any VPS (AWS, DigitalOcean, etc.)

1. SSH into your server
2. Install Node.js and npm
3. Clone repository
4. Create `.env` file with credentials
5. Install dependencies: `npm install`
6. Start with PM2 for persistence:
   ```bash
   npm install -g pm2
   pm2 start server.js
   pm2 startup
   pm2 save
   ```
7. Setup Nginx as reverse proxy (port 80/443 → port 5000)
8. Get SSL certificate with Let's Encrypt

## Database

The app uses SQLite which stores data in `backend/superbowl.db`. 

**Backup your database before Super Bowl:**
```bash
cp backend/superbowl.db backend/superbowl.db.backup
```

## API Endpoints

### Users
- `POST /api/users/signup` - Create account
- `POST /api/users/signin` - Sign in
- `GET /api/users/current` - Get current user
- `POST /api/users/signout` - Sign out

### Spotify
- `GET /api/spotify/bad-bunny-songs` - Get top Bad Bunny tracks
- `GET /api/spotify/search?q=query` - Search for songs

### Predictions
- `GET /api/predictions/my-predictions` - Get user's setlist
- `POST /api/predictions/add` - Add song to setlist
- `DELETE /api/predictions/remove/:id` - Remove song
- `PUT /api/predictions/reorder` - Reorder setlist

### Admin
- `POST /api/admin/add-correct-song` - Mark song as correct (requires password)
- `DELETE /api/admin/remove-correct-song/:id` - Remove correct song
- `GET /api/admin/correct-setlist` - Get correct songs

### Leaderboard
- `GET /api/leaderboard` - Get leaderboard

## Troubleshooting

### Spotify API Not Working
- Check your `Client ID` and `Client Secret` are correct in `.env`
- Ensure they don't have quotes around them
- Restart the server after changing `.env`

### Database Locked Error
- Make sure only one instance of the server is running
- Kill any lingering Node processes: `pkill -f "node server.js"`

### Port Already in Use
- Change `PORT` in `.env` to a different number
- Or kill the process: `lsof -ti:5000 | xargs kill -9` (Mac/Linux)

### Songs Not Showing
- Wait a moment for Spotify API to load
- Check browser console for errors (F12)
- Verify Spotify API credentials

## File Structure

```
superbowl/
├── backend/
│   ├── server.js
│   ├── database.js
│   ├── package.json
│   ├── .env
│   ├── superbowl.db (created on first run)
│   └── routes/
│       ├── spotify.js
│       ├── users.js
│       ├── predictions.js
│       ├── admin.js
│       └── leaderboard.js
└── frontend/
    └── public/
        ├── index.html
        ├── styles.css
        ├── app.js
        └── assets/
```

## Performance Tips

1. **Database**: Consider upgrading to PostgreSQL for production
2. **Caching**: Add Redis for session storage
3. **CDN**: Serve static assets from CloudFront/Cloudflare
4. **Scaling**: Use load balancer if expecting high traffic

## License

Created for Super Bowl LX 🏈🎤

## Support

Issues? Check:
1. Server is running: `npm start` in backend/
2. `.env` file exists with all correct values
3. No other app is using port 5000
4. Browser console for JavaScript errors (F12)

Enjoy predicting! 🎵
