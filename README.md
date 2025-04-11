# Image Hosting for Flutter

A simple Next.js application for hosting and serving images for use in Flutter applications.

## Features

- Easy browsing of all hosted images
- Direct image URLs for Flutter applications
- Copy-paste Flutter code snippets
- Raw image access for direct embedding

## How to Use

1. Visit the home page to see all available images
2. Click on an image to view its details
3. Copy the direct URL for use in your Flutter app
4. Use the Flutter code snippet provided

## Image URLs

The images can be accessed directly at:

```
https://your-vercel-domain.com/images/filename.jpg
```

For raw image access without any HTML wrapping:

```
https://your-vercel-domain.com/raw/filename.jpg
```

## In Your Flutter App

```dart
Image.network(
  'https://your-vercel-domain.com/images/filename.jpg',
  fit: BoxFit.cover,
)
```

## Adding New Images

To add new images:

1. Add image files to the `public/images` directory
2. Commit and push to GitHub
3. Vercel will automatically deploy the changes

## Local Development

```bash
npm run dev
```

The app will be available at http://localhost:3000. 