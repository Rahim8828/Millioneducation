# Deployment Instructions for Million Education

## Vercel Deployment Setup

This project uses a monorepo structure with the Next.js app in the `million-education-next` folder.

### Steps to Deploy on Vercel:

1. **Connect Repository**
   - Go to https://vercel.com/new
   - Import the GitHub repository: `Rahim8828/Millioneducation`
   - Select "Next.js" framework

2. **Configure Root Directory**
   - In Project Settings → General
   - Set **Root Directory** to: `million-education-next`
   - Save changes

3. **Environment Variables** (if needed)
   - Add any required environment variables in Project Settings → Environment Variables

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at: `https://millioneducation.vercel.app`

### Build Configuration

- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)
- **Dev Command**: `npm run dev` (auto-detected)

### Troubleshooting

If build fails:
1. Check Root Directory is set to `million-education-next`
2. Ensure `package.json` exists in that folder
3. Check Next.js version in `package.json` dependencies
4. Verify all imports are correct (no circular dependencies)

### Local Testing

```bash
cd million-education-next
npm install
npm run build
npm run start
```

Then visit: http://localhost:3000