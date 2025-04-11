import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imagesDirectory = path.join(process.cwd(), 'public/images');
  const fileNames = fs.readdirSync(imagesDirectory);
  
  // Filter out system files and directories
  const imageFiles = fileNames.filter(file => {
    const filePath = path.join(imagesDirectory, file);
    return fs.statSync(filePath).isFile() && 
           !file.startsWith('.') && 
           /\.(jpg|jpeg|png|gif|webp)$/i.test(file);
  });
  
  const images = imageFiles.map(file => {
    // Get file stats for additional info
    const filePath = path.join(imagesDirectory, file);
    const stats = fs.statSync(filePath);
    
    return {
      name: file,
      path: `/images/${file}`,
      size: stats.size,
      createdAt: stats.birthtime,
    };
  });
  
  res.status(200).json({ images });
} 