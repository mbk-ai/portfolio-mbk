# Assets Directory Guide

This directory should contain static assets for the portfolio website.

## Directory Structure

```
assets/
├── images/
│   ├── profile.jpg          # Profile picture (optional)
│   ├── og-image.png         # Open Graph preview image (1200x630px)
│   └── project-thumbnails/  # Project screenshot thumbnails
│
├── icons/
│   └── favicon.png          # Browser favicon (32x32px or 64x64px)
│
└── documents/
    └── Resume-Motasim-DBA.pdf  # Resume PDF for download
```

## Required Files

### 1. Favicon (`favicon.png`)
- **Purpose:** Browser tab icon
- **Size:** 32x32px, 64x64px, or 256x256px
- **Format:** PNG with transparency
- **Location:** `/assets/favicon.png`
- **How to create:**
  - Use online favicon generator (favicon.io)
  - Simple text/initials work well (e.g., "MB" for Motasim Bin Kamal)
  - Should be recognizable in small sizes

### 2. Open Graph Image (`og-image.png`)
- **Purpose:** Social media preview when sharing portfolio link
- **Size:** 1200x630px (optimal for most platforms)
- **Format:** PNG or JPG
- **Location:** `/assets/og-image.png`
- **Design suggestions:**
  - Include your name or tagline
  - Use portfolio color scheme
  - Add professional image or gradient
  - Include title: "SQL Server DBA & Infrastructure Specialist"

### 3. Resume PDF (`Resume-Motasim-DBA.pdf`)
- **Purpose:** Downloadable resume
- **Format:** PDF
- **Location:** `/assets/Resume-Motasim-DBA.pdf`
- **Note:** Update with your actual resume PDF
- **To update:** Replace the file with your own while keeping the filename

## Optional Assets

### Profile Picture
- **Filename:** `assets/images/profile.jpg`
- **Purpose:** About section profile image
- **Size:** Square format (400x400px recommended)
- **Format:** JPG or PNG
- **Tips:**
  - Professional headshot recommended
  - Good lighting, clean background
  - Well-cropped face/shoulders shot
  - High resolution (300+ DPI for printing)

### Project Thumbnails
- **Location:** `assets/images/project-thumbnails/`
- **Size:** 600x400px (3:2 ratio)
- **Format:** JPG or PNG
- **Naming:** `project-name.jpg`
- **Examples:**
  - `ha-cluster-deployment.jpg`
  - `database-migration.jpg`
  - `disaster-recovery.jpg`

## How to Add Images to Portfolio

### 1. Create Assets Folder Structure
```bash
# Create folders
mkdir -p assets/images/project-thumbnails
mkdir -p assets/icons
mkdir -p assets/documents
```

### 2. Add Favicon
- Place your `favicon.png` in `/assets/`
- The HTML already links to it:
  ```html
  <link rel="icon" type="image/png" href="assets/favicon.png">
  ```

### 3. Add Profile Picture (Optional)
Update HTML in About section:
```html
<!-- Find this line in the About section -->
<!-- Add before the about-text div -->
<div class="about-image">
    <img src="assets/images/profile.jpg" alt="Motasim Bin Kamal">
</div>
```

Add CSS styling to `style.css`:
```css
.about-image {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing-2xl);
}

.about-image img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid var(--accent-blue);
    object-fit: cover;
    box-shadow: 0 10px 40px rgba(59, 130, 246, 0.3);
}
```

### 4. Update Resume Link
The resume download link is pre-configured:
```html
<a href="assets/Resume-Motasim-DBA.pdf" class="btn btn-primary" download>
    <i class="fas fa-download"></i> Download Resume
</a>
```

Simply replace the PDF file while keeping the same filename.

### 5. Add Project Images (Optional)
To display project images, update the project cards in HTML:
```html
<!-- In the .project-image div -->
<img src="assets/images/project-thumbnails/project-name.jpg" alt="Project description">
```

## Image Optimization Tips

### For Web
1. **Compression:** Use TinyPNG, ImageOptim, or Squoosh
2. **Format:** Use JPG for photos, PNG for icons/graphics
3. **Size:** Keep file size < 300KB per image
4. **Resolution:** 2x resolution for Retina displays

### For Social Media
- **Profile Picture:** 400x400px minimum
- **OG Image:** 1200x630px (Facebook, LinkedIn, Twitter)
- **Favicon:** 32-512px (various sizes)

## File Size Guidelines

| Asset Type | Max Size | Recommended |
|-----------|----------|------------|
| Favicon | 50KB | 10-20KB |
| OG Image | 500KB | 100-300KB |
| Profile Picture | 200KB | 50-100KB |
| Project Thumbnail | 150KB | 40-80KB |
| Resume PDF | 2MB | 200-500KB |

## Asset Download Sources

### Favicon Generators
- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [Favicon Maker](https://www.favicon-generator.org/)

### Image Optimization
- [TinyPNG](https://tinypng.com/)
- [ImageOptim](https://imageoptim.com/)
- [Squoosh](https://squoosh.app/)

### Stock Photos (if needed)
- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)

## Important Notes

1. **Paths:** All paths are relative. Keep folder structure as specified
2. **Naming:** Use consistent naming (lowercase, hyphens, no spaces)
3. **Formats:** Stick to JPG, PNG, PDF for maximum compatibility
4. **Backup:** Keep originals in a safe location
5. **Licensing:** Ensure you have rights to all images used

## Testing Assets

### Before Deploying

1. **Test locally:**
   ```bash
   # Open index.html in browser
   # Check all images load correctly
   # Verify favicon appears in tab
   ```

2. **Test on mobile:**
   - Check image scaling
   - Verify responsive layout
   - Test on different devices

3. **Optimize for GitHub Pages:**
   - Ensure all paths are relative
   - Check file permissions
   - Verify no absolute paths are used

## Troubleshooting

### Images Not Loading

1. **Check file paths:**
   ```
   ❌ /assets/image.jpg        (absolute path - won't work)
   ✓ assets/image.jpg           (relative path - correct)
   ✓ ./assets/image.jpg         (relative with dot - also ok)
   ```

2. **Verify file exists:**
   - Check exact filename and extension
   - Ensure no typos in path
   - Verify file actually exists in folder

3. **Browser cache:**
   - Clear browser cache (Ctrl+Shift+R)
   - Try different browser
   - Check Network tab in DevTools

### Favicon Not Showing

1. Try hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Check favicon format (must be PNG)
3. Verify file path in HTML link tag
4. Try converting to ICO format

### Large File Sizes

1. Compress images with TinyPNG
2. Resize to appropriate dimensions
3. Convert to WebP for further compression
4. Remove unnecessary metadata

---

**Assets are optional but recommended for a polished portfolio experience.**

For a quick start without custom images, the portfolio works perfectly with the default styling and content.
