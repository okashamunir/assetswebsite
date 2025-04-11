# Image Hosting Service

A simple static image hosting service for deployment on Vercel.

## How to Use

1. **Add Images**: Place your image files in the `public/images` directory.
2. **Deploy to Vercel**: Push this repository to GitHub and connect it to Vercel, or use the Vercel CLI to deploy directly.
3. **Access Your Images**: After deployment, your images will be available at:
   ```
   https://your-vercel-domain.com/images/your-image-filename.jpg
   ```

## Local Development

To run the site locally:

```bash
npm install
npm run dev
```

The site will be available at http://localhost:3000.

## Adding New Images

Simply add new images to the `public/images` directory and they will be accessible after deployment.

## Notes

- This is a basic static hosting solution. For more advanced features like uploading through a UI, you would need to implement server-side functionality.
- The Vercel deployment gives you a free domain (`your-project.vercel.app`) and CDN distribution of your images. 