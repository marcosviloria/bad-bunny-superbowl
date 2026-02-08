# Deploy to Railway (Step-by-Step)

**Your app will run 24/7 on Railway servers. You can edit the leaderboard from your phone. No PC needed once deployed.**

---

## Step 1: Create a GitHub Repo

1. Go to https://github.com/new
2. Create repo name: `bad-bunny-superbowl` (or whatever you want)
3. **Do NOT** initialize with README (we have one)
4. Click "Create repository"
5. Copy the HTTPS URL (looks like `https://github.com/your-username/bad-bunny-superbowl.git`)

---

## Step 2: Push Your Code to GitHub

Open PowerShell, navigate to project folder:

```powershell
cd "c:\Users\marco\Desktop\Python Projects\superbowl"
```

Run these commands (replace `<HTTPS_URL>` with the URL from Step 1):

```powershell
git init
git add .
git commit -m "Initial commit: Bad Bunny Super Bowl LX app ready to deploy"
git branch -M main
git remote add origin <HTTPS_URL>
git push -u origin main
```

**Example** (with real URL):
```powershell
git push -u origin https://github.com/marco-dev/bad-bunny-superbowl.git
```

✅ Your code is now on GitHub.

---

## Step 3: Deploy to Railway

1. Go to https://railway.app
2. Click **"Start a New Project"** (or sign in if you have an account)
3. Click **"Deploy from GitHub repo"**
4. Click **"Connect GitHub"** (authorizes Railway to access your repos)
5. Find and select `bad-bunny-superbowl` repo
6. Click **"Deploy"** (Railway will auto-detect Node.js)

**Status page will say "Building..." then "Running"** (takes 1-2 min).

---

## Step 4: Set Environment Variables

1. On the Railway dashboard, click your project
2. Click the **"Variables"** tab or **"Settings"** → **"Variables"**
3. Click **"+ New Variable"** and add these (one by one):

| Key | Value | Notes |
|-----|-------|-------|
| `OWNER_PASSWORD` | `b162540Mv` | Or your chosen password |
| `SESSION_SECRET` | `superbowl2026random` | Any random string |
| `USE_REAL_SPOTIFY` | `false` | Use local mock songs |
| `PORT` | `5000` | Railway assigns a port automatically, but you can set this |

4. Save each variable
5. Railway will **redeploy automatically**

---

## Step 5: Add Persistent Database (Critical!)

**Without this, your leaderboard/correct songs may disappear when the app restarts.**

### Option A: Add Postgres (Recommended)

1. On Railway dashboard, click your project
2. Click **"+ New Service"** or **"Marketplace"**
3. Search and click **"PostgreSQL"**
4. Click **"Create"** (Railway auto-sets `DATABASE_URL`)
5. Your Node app will auto-restart with Postgres connected

✅ **That's it!** The app will be updated to use Postgres automatically (you need to update the code; see "Migrate to Postgres" section below if needed).

### Option B: Persistent Disk (Simple Alternative)

1. On Railway dashboard, click your project
2. Go to **"Volumes"** tab
3. Click **"+ Create Volume"**
4. Name: `db` or `data`
5. Mount path: `/app/backend` (ensures `superbowl.db` persists)
6. Save and redeploy

---

## Step 6: Get Your Public URL

1. On Railway project dashboard, look for a card labeled **"Domains"** or **"Networking"**
2. You'll see a URL like `https://your-project-xyz.up.railway.app`
3. **This is your public app URL!**

---

## Step 7: Test & Share

### Test on Desktop:
- Open the Railway URL in your browser
- Create an account
- Add songs, check leaderboard
- Click Admin, enter `OWNER_PASSWORD`, mark a song correct

### Test on Phone:
- Open same URL on phone browser
- Sign in
- Check that leaderboard highlights your matched songs (green background)
- Click Admin → mark songs as correct from your phone

### Share with Friends:
- Send them the Railway URL
- They create accounts and make predictions
- You manage admin from your phone using the same URL

---

## Step 8: Migrate to Postgres (If Using Railway Postgres)

If you added Postgres in Step 5, your app needs a small code update:

**Option A: Simple Workaround** (stick with SQLite on disk)
- Use Persistent Disk (Option B above) instead of Postgres
- No code changes needed

**Option B: Proper Postgres** (recommended for reliability)
- Contact me or run:
  ```bash
  npm install pg
  ```
- Update `backend/database.js` to use `DATABASE_URL` from Railway
- I can help with this after you deploy

For now, **use Persistent Disk (Option B)** to keep using SQLite without code changes.

---

## Troubleshooting

### App shows "Error" on Railway dashboard
- Check **"Logs"** tab in Railway project
- Look for error messages
- Verify `OWNER_PASSWORD` and `SESSION_SECRET` are set

### "Cannot connect to database"
- Ensure persistent disk is mounted to `/app/backend`
- Or add Postgres and update the code (Option B above)

### URL is very slow or times out
- Railway free tier may have rate limits; consider paid plan (~$5/month)
- Check Rails logs for errors

### "PORT already in use"
- Railway auto-assigns ports; don't worry — let it use what it assigns
- Remove manual `PORT=5000` if set; Railway env var `PORT` overrides

---

## Keeping It Running 24/7

✅ **Automatic** — Railway servers run your app 24/7.
✅ **Your PC can be off.**
✅ **Open the Railway URL from anywhere (home, phone, away).**
✅ **Admin edits from phone work immediately.**

---

## Costs

- **free tier**: limited requests/month, may sleep. OK for testing Super Bowl day.
- **Paid ($5–$10/month)**: guaranteed uptime, no sleep, more requests. Recommended if >50 users.

Check your Railway bill after Super Bowl to see actual usage.

---

## After Super Bowl

- Keep the Railway project running for game stats
- Or pause it to stop paying
- Download your database before pausing: 
  - If Postgres: export using Railway UI
  - If SQLite: download from persistent disk

---

**Questions? Open Railway logs and look for error messages. If stuck, I can help via the code editor.**
