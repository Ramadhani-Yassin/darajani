# Deploy Darajani website to your domain

Options: **Hostinger File Manager**, **Vercel**, or **your own server** (VPS).

---

## Option 1: Hostinger File Manager (darajanikilimanjaro.com)

The site is built as **static HTML/CSS/JS** and uploaded to Hostinger. No Node.js on the server.

### Step 1: Build the static files on your computer

In the project folder, with **Node 20+**:

```bash
cd /path/to/darajani-next
nvm use 20
npm ci
npm run build
```

When it finishes, you’ll have an **`out`** folder with the whole site (HTML, JS, CSS, and a copy of `public` assets).

### Step 2: Open Hostinger File Manager

1. Log in to [Hostinger](https://www.hostinger.com) → **hPanel**.
2. Go to **Hosting** → your plan → **File Manager** (or **Files**).
3. Open the folder for **darajanikilimanjaro.com**:
   - Often: **`public_html`** (for the main domain), or  
   - **`domains/darajanikilimanjaro.com/public_html`**  
   If you’re not sure, check Hostinger’s “Domain” or “File Manager” docs for your plan.

### Step 3: Clear the web root (optional but recommended)

Inside that `public_html` (or your domain’s root):

- Delete or move aside any existing files you don’t need (e.g. default `index.html`).
- You’ll replace them with the contents of `out`.

### Step 4: Upload the contents of `out`

Upload **everything inside** the `out` folder into the web root (e.g. `public_html`), **not** the `out` folder itself.

- **From your computer:** open the `out` folder. You should see:
  - `index.html`
  - `_next/` (folder with JS/CSS)
  - `assets/` (or whatever is in your `public/` folder, e.g. images)
- Select **all files and folders** inside `out` and upload them into `public_html` (or your domain root).

So after upload, the domain root should contain at least:

- `index.html` (and other `.html` files if you have more pages)
- `_next/`
- `assets/` (images, Logo.png, etc.)

### Step 5: Check the site

- Open **https://darajanikilimanjaro.com** (and **https://www.darajanikilimanjaro.com** if you use www).
- If something doesn’t load, check that paths are correct and all files from `out` are in the root (no extra `out` folder in the URL).

### When you change the site later

1. Run `npm run build` again locally.
2. In File Manager, delete the old files in the web root (or overwrite).
3. Upload again the **contents** of the new `out` folder into the same root.

---

## Option 2: Deploy with Vercel (recommended if not using Hostinger)

Vercel runs Next.js natively and supports custom domains.

### 1. Push code to GitHub

Your repo is already at `git@github-ramadhani:Ramadhani-Yassin/darajani.git`. Ensure everything is pushed:

```bash
git add .
git commit -m "Ready for deploy"
git push origin main
```

(Use `master` instead of `main` if that’s your default branch.)

### 2. Sign up and import on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (e.g. with GitHub).
2. Click **Add New** → **Project**.
3. Import the **Ramadhani-Yassin/darajani** repository.
4. Leave **Framework Preset** as Next.js and **Root Directory** as `.` (or set it if the app lives in a subfolder).
5. Click **Deploy**. Vercel will build and give you a URL like `darajani.vercel.app`.

### 3. Add your custom domain

1. In the project on Vercel, open **Settings** → **Domains**.
2. Add your domain (e.g. `darajanimotel.com` or `www.darajanimotel.com`).
3. Follow the instructions to add the DNS records at your domain registrar:
   - **A record** pointing to Vercel’s IP, or  
   - **CNAME** for `www` → `cname.vercel-dns.com` (as shown in the dashboard).
4. Wait for DNS to propagate (often 5–30 minutes). Vercel will issue SSL automatically.

---

## Option 3: Deploy on your own server (VPS)

Use this if you have a Linux server and want to run the app there.

### 1. Build on your machine (or in CI)

```bash
# Use Node 20+
nvm use 20

npm ci
npm run build
```

### 2. Copy build and run files to the server

Copy the whole project (including `.next`, `node_modules`, `package.json`, `public`) to the server, e.g.:

```bash
rsync -avz --exclude node_modules --exclude .git . user@YOUR_SERVER_IP:/var/www/darajani/
```

SSH into the server and install dependencies + run:

```bash
ssh user@YOUR_SERVER_IP
cd /var/www/darajani
npm ci --production
npm run build   # if you didn’t copy .next
npm start       # runs on port 3000
```

### 3. Run the app in the background (PM2)

```bash
# On the server
sudo npm install -g pm2
cd /var/www/darajani
pm2 start npm --name "darajani" -- start
pm2 save
pm2 startup   # run the command it prints so it starts on reboot
```

### 4. Point Nginx to your app (reverse proxy + SSL)

Install Nginx and Certbot, then add a site config:

```bash
sudo apt install nginx certbot python3-certbot-nginx
sudo nano /etc/nginx/sites-available/darajani
```

Example config (replace `yourdomain.com`):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site and get SSL:

```bash
sudo ln -s /etc/nginx/sites-available/darajani /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### 5. DNS at your domain registrar

- **A record** for `@` (and optionally `www`) → your server’s public IP, or  
- **CNAME** for `www` → your server hostname if your host provides one.

---

## Checklist before deploy

- [ ] Node version on build/server is **≥ 20.9.0** (e.g. `nvm use 20`).
- [ ] Environment variables (if any) are set in Vercel **Project → Settings → Environment Variables** or in your server’s env / `.env.production`.
- [ ] Repo is pushed and the branch you deploy from is up to date.

---

## Quick reference

| Task              | Command / action                          |
|------------------|--------------------------------------------|
| Build for Hostinger | `npm run build` → upload contents of `out/` to `public_html` |
| Build locally    | `npm run build`                            |
| Run production   | `npm start` (port 3000)                    |
| Vercel deploy    | Push to GitHub → Vercel auto-deploys       |
| Custom domain    | Vercel: Settings → Domains; Server: Nginx + Certbot + DNS |
