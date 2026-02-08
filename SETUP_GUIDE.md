# 🎤 Bad Bunny Super Bowl Setlist Predictor - Setup Guide

**Event**: Super Bowl LX (Feb 8, 2026)
**Current Time**: 7:30 PM Deadline
**Status**: ✅ Complete and Ready to Deploy

---

## 📋 What You Have

A complete, production-ready web application with:

✅ **User System**
- Sign up with first/last name + optional password
- Sign in to edit predictions until 7:30 PM
- Session management

✅ **Song Prediction**
- Search 1000+ Bad Bunny songs from Spotify
- Select up to 15 songs (max 15 — you don't have to add 15)
- Drag-and-drop reordering
- Album cover images

✅ **Scoring System**
- Real-time point tracking
- 1 point per correct song
- Live leaderboard

✅ **Admin Panel**
- Mark correct songs in real-time
- Live leaderboard visible to owner
- Password protected

✅ **Frontend**
- Dark theme matching Bad Bunny aesthetic
- Mobile responsive
- Real-time updates

---

## 🚀 Quick Start (5 minutes)

### Step 1: Get Spotify Credentials (2 minutes)

1. Go to https://developer.spotify.com/dashboard
2. Log in (create account if needed - it's free)
3. Create a new app
4. Accept terms and click "Create"
5. Copy your **Client ID**
6. Click "Show Client Secret" and copy it

### Step 2: Configure Environment

In `backend/.env` (create if doesn't exist):

```
PORT=5000
SPOTIFY_CLIENT_ID=paste_your_client_id_here
SPOTIFY_CLIENT_SECRET=paste_your_secret_here
OWNER_PASSWORD=YourAdminPasswordHere123
SESSION_SECRET=any_random_string_here
```

**Example:**
```
PORT=5000
SPOTIFY_CLIENT_ID=abc123def456ghi789jkl012
SPOTIFY_CLIENT_SECRET=xyz987uvw654tsr321qpo098
OWNER_PASSWORD=SuperBowlParty2025!
SESSION_SECRET=my_super_secret_key_12345
```

### Step 3: Start Server

**On Windows:**
```bash
cd backend
npm install
npm start
```

**On Mac/Linux:**
```bash
cd backend
npm install
npm start
```

The server will start at: **http://localhost:5000**

### Step 4: Test It Works

1. Open http://localhost:5000 in browser
2. Create an account (first name: "Test", last name: "User")
3. Search for "Bad Bunny" songs
	4. Add 3 songs to your setlist (you can add up to 15)
5. Check the leaderboard

✅ If this works, you're ready to deploy!

---

## 🌐 Deploying Online (Pick One)

### Option A: Heroku (Recommended - Easiest)

1. Create account: https://heroku.com
2. Install Heroku CLI
3. In project folder:
```bash
heroku login
heroku create your-unique-app-name
heroku config:set SPOTIFY_CLIENT_ID=your_id
heroku config:set SPOTIFY_CLIENT_SECRET=your_secret
heroku config:set OWNER_PASSWORD=your_password
heroku config:set SESSION_SECRET=random_string
```
4. Create `Procfile` in root:
```
web: cd backend && npm install && node server.js
```
5. Deploy:
```bash
git push heroku main
```

**Your app is now live at**: https://your-unique-app-name.herokuapp.com

### Option B: Railway.app (Very Easy)

1. Go to https://railway.app
2. Sign in with GitHub
3. Create new project
4. Select "Deploy from GitHub" and connect your repo
5. Add environment variables in dashboard
6. Done! Auto-deploys on every push

### Option C: DigitalOcean, AWS, etc.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions

---

## 🎮 Operating the App

### For Users:
- Go to deployed URL
- Create account or sign in
- Search for Bad Bunny songs
	- Add up to 15 to their setlist (max 15 — not required)
- See leaderboard with all players' scores

### For You (Admin/Owner):
- Click the **⚙️ Admin** button
- Enter your `OWNER_PASSWORD`
- Search for each song Bad Bunny plays
- Click "Mark as Correct"
- Leaderboard updates automatically in real-time

---

## 📱 Sharing with Friends

Once deployed, share the URL:
- `http://localhost:5000` (local testing only)
- `https://your-app-name.herokuapp.com` (after deployment)

Everyone can:
- Create their own account
- Make their predictions
- View the leaderboard
- See real-time scoring

---

## 🔒 Important Notes

### Before Super Bowl:
- ✅ Test with your Spotify credentials
- ✅ Create your own test prediction
- ✅ Verify all songs load properly
- ✅ Test the admin panel with your owner password
- ✅ Share the link with friends

### During Super Bowl:
- ⏰ Predictions are locked at 7:30 PM
- 🎵 Mark songs as they're played in real-time
- 🏆 Leaderboard updates automatically
- 📊 Keep admin panel open to monitor scoring

### After Super Bowl:
- 💾 Download your database: `cp backend/superbowl.db superbowl_final.db`
- 📈 Keep the app running if you want archives/stats
- 🎉 Congratulate the winner!

---

## 🐛 Troubleshooting

### "Cannot find module 'express'"
```bash
cd backend
npm install
```

### "Spotify API returns errors"
- Check your Client ID and Secret are correct
- Make sure they don't have spaces or quotes
- Restart the server after changing `.env`

### "Port 5000 already in use"
- Change PORT in `.env` to 5001, 5002, etc.
- Or stop other apps using that port

### Songs not loading
- Wait 5 seconds (Spotify API takes time)
- Check browser console (F12 → Console tab)
- Verify Spotify API credentials are correct

### Database locked error
- Close all other instances of the app
- Restart with: `npm start`

---

## 📊 What Data is Stored

**Users Table:**
- First name, last name, optional password
- Created date

**Predictions Table:**
- User ID, Song ID, Song Name, Artist, Album Cover, Position
- When they added it

**Correct Setlist:**
- Songs you marked as correct
- Timestamp of when marked

**Leaderboard:**
- User names and scores
- Automatically calculated from predictions

---

## 💡 Pro Tips

1. **Offline testing**: Run locally without deploying to test everything
2. **Backup database**: `cp backend/superbowl.db backup.db` before event
3. **Keep admin panel open**: During Super Bowl, keep admin panel window open
4. **Test with friends**: Have 2-3 friends test before the event
5. **Mobile friendly**: The app works great on phones!

---

## 📞 Support

If you encounter issues:

1. Check the console: Press F12 in browser, go to Console tab
2. Check server logs: Look at the npm start output
3. Verify `.env` file exists and has correct values
4. Make sure Node.js is properly installed
5. Check DEPLOYMENT.md for platform-specific issues

---

## 🎯 Next Steps

1. **RIGHT NOW**: Add your Spotify credentials to `.env`
2. **NEXT 5 MIN**: Run locally and test
3. **BEFORE GAME**: Deploy to Heroku/Railway
4. **GAME TIME**: Share link, monitor admin panel
5. **POST-GAME**: Celebrate! 🎉

---

**Questions?** All the code is in this folder. Everything is documented.
Good luck! 🎤🏈
