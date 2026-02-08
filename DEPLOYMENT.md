# Deployment Guides

## Quick Deployment Options

### 1. Heroku (Recommended - Easiest)

**Why**: Free tier available, no credit card needed for hobbyist tier, easy scaling

**Steps**:

1. Create Heroku account: https://www.heroku.com/

2. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli

3. In your project folder, run:
```bash
heroku login
heroku create your-app-name
```

4. Set environment variables:
```bash
heroku config:set SPOTIFY_CLIENT_ID=your_id
heroku config:set SPOTIFY_CLIENT_SECRET=your_secret
heroku config:set OWNER_PASSWORD=your_password
heroku config:set SESSION_SECRET=your_secret_key
```

5. Create `Procfile` in root:
```
web: cd backend && npm install && node server.js
```

6. Deploy:
```bash
git push heroku main
```

7. View logs:
```bash
heroku logs --tail
```

### 2. Railway.app (Easy)

**Why**: Modern platform, straightforward setup, good free tier

**Steps**:

1. Go to https://railway.app
2. Sign up and connect GitHub
3. Create new project from your repository
4. Add environment variables in Railway dashboard
5. Select Node.js buildpack
6. Deploy automatically on push

### 3. DigitalOcean App Platform

**Why**: Affordable, good uptime, no container setup needed

**Steps**:

1. Create DigitalOcean account
2. Create new app in "App Platform"
3. Connect GitHub repo
4. Select Node.js runtime
5. Set environment variables
6. Deploy

### 4. AWS EC2 (Full Control)

**Why**: Scalable, powerful, but more complex

**Setup**:
1. Launch EC2 instance (Ubuntu 20.04)
2. SSH into instance
3. Install Node.js:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. Clone repo and setup:
```bash
git clone your-repo
cd superbowl/backend
npm install
```

5. Use PM2 to keep running:
```bash
sudo npm install -g pm2
pm2 start server.js --name "bunny-setlist"
pm2 startup
pm2 save
```

6. Setup Nginx reverse proxy
7. Get SSL certificate with Let's Encrypt

### 5. Vercel (Experimental)

**Note**: Vercel is best for serverless, but this app needs persistent server

You'd need to modify to use Vercel's serverless functions with a database.

---

## Environment Variables Needed for Any Platform

```
PORT=5000
SPOTIFY_CLIENT_ID=abc123...
SPOTIFY_CLIENT_SECRET=xyz789...
OWNER_PASSWORD=YourAdminPassword123!
SESSION_SECRET=AnyRandomStringHere_12345
```

## After Deployment

1. Test the app works at your deployed URL
2. Create a user account
3. Search for Bad Bunny songs (verify Spotify API works)
4. Add songs to setlist
5. Share URL with friends
6. Use admin panel to mark correct songs

## Troubleshooting Deployments

### "Port 5000 already in use"
- Platform automatically assigns ports. Don't hardcode PORT to 5000 in production
- Use: `const PORT = process.env.PORT || 5000`
- Already in code ✓

### "Module not found"
- Run `npm install` on server
- Make sure package.json has all dependencies

### "Spotify API returns errors"
- Verify credentials are correct
- Check Spotify dashboard that app is authorized
- Verify API calls have Bearer token

### "Database is locked"
- Make sure only one instance running
- SQLite doesn't handle concurrent writes well
- For production with high traffic, migrate to PostgreSQL

## Database Backup & Recovery

**Before Super Bowl (backup locally)**:
```bash
cp backend/superbowl.db backup_$(date +%Y%m%d).db
```

**Restore**:
```bash
cp backup_file.db backend/superbowl.db
```

**Export data to CSV** (after event):
```sql
SELECT firstName, lastName, score FROM leaderboard ORDER BY score DESC;
```

## Scaling for High Traffic

If experiencing slowness:

1. **Cache**: Add Redis for session storage
2. **Database**: Migrate from SQLite to PostgreSQL
3. **CDN**: Serve static files from Cloudflare
4. **Load Balancing**: Use multiple server instances with sticky sessions
5. **Reduce API Calls**: Cache Spotify results

---

**Recommended for your use case**: Start with **Heroku** or **Railway.app** - they handle scaling automatically and you can upgrade later if needed.
