# Frontend Assessment - Next.js Application

A modern Next.js frontend application featuring a professional banking-style landing page built with Tailwind CSS, CSS Modules, and dynamic parameter-based styling.

## 🚀 Features

- **Professional Hero Landing Page** - Modern banking/fintech design with smooth animations
- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Modules** - Scoped CSS styling with easy customization
- **Parameter-Based Styling** - Dynamic color and text size selection
- **Image Optimization** - Built-in Next.js image component
- **Responsive Design** - Mobile-first approach (desktop, tablet, mobile)
- **ESLint** - Code quality and consistency
- **Fixed Navigation** - Header stays on top while scrolling
- **Animated Elements** - Floating gradient blob and card slide animations

## 📋 Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── layout.jsx              # Root layout component
│   │   ├── page.jsx                # Home page (landing page with Header + Hero)
│   │   ├── page.module.css         # CSS modules for home page
│   │   ├── example/
│   │   │   ├── page.jsx            # Example page for image usage
│   │   │   └── example.module.css  # Example styles
│   │   └── globals.css             # Global styles with Tailwind
│   └── components/
│       ├── Header.jsx              # Fixed navigation header
│       ├── Header.module.css       # Header styles (EDITABLE)
│       ├── Hero.jsx                # Hero section component
│       ├── Hero.module.css         # Hero styles (EDITABLE)
│       ├── Card.jsx                # Reusable card component
│       ├── Card.module.css         # Card styles
│       ├── Button.jsx              # Reusable button component
│       └── Button.module.css       # Button styles
├── public/                         # Static assets (add images here)
├── package.json                    # Project dependencies
├── next.config.js                  # Next.js configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── .eslintrc.json                  # ESLint configuration
├── README.md                       # This file
└── CUSTOMIZATION_GUIDE.md          # Detailed customization guide
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks

## 🎨 Landing Page Design

The home page is a professional banking/fintech landing page featuring:

- **Hero Section**: Eye-catching headline with smooth animations
- **Gradient Blob Animation**: Floating background element with blur effects
- **Call-to-Action**: Primary and secondary button styles
- **Mockup Card**: Interactive card display showing product features
- **Fixed Navigation**: Header that stays visible while scrolling
- **Responsive Layout**: Automatically adapts to all screen sizes

### Styling Specifications Used

- **Background**: `#000d12` (Dark navy blue)
- **Primary Gradient**: `#00b4fd` to `#003ace` (Blue gradient)
- **Gradient Blob**: 398.87px × 398.87px with 100px blur
- **Fixed Header**: 15px backdrop blur with 70% opacity
- **Animations**: Smooth floating and slide-up effects
- **Text Colors**: White and semi-transparent white for contrast

## 🎨 Styling Approach

### 1. **Tailwind CSS** (Utility Classes)
   Use in components for quick, responsive styling:
   ```jsx
   <div className="bg-blue-500 text-white p-4 rounded-lg">
     Button with Tailwind
   </div>
   ```

### 2. **CSS Modules** (Scoped Styling)
   For component-specific styles:
   ```jsx
   import styles from './component.module.css'
   <div className={styles.container}>Content</div>
   ```

### 3. **Parameter-Based Styling** (Dynamic Styles)
   Use state and conditional classes for dynamic styling:
   ```jsx
   const [color, setColor] = useState('primary')
   const colorClass = color === 'primary' ? 'bg-blue-500' : 'bg-green-500'
   <div className={colorClass}>Dynamic Content</div>
   ```

### 4. **Inline Styles** (When Needed)
   For highly dynamic values:
   ```jsx
   <div style={{ backgroundColor: dynamicColor }}>Content</div>
   ```

## 🎯 Pages Available

### Home Page (`/`)
The main landing page with professional banking design. Features:
- Hero section with animations
- Fixed navigation header
- Call-to-action buttons
- Responsive mockup card
- Animated gradient blob

### Example Page (`/example`)
Template page showing best practices for:
- Adding and optimizing images
- Using Next.js Image component
- CSS Modules styling
- Parameter-based styling
- Responsive layouts

Visit `http://localhost:3000/example` to see the template.

## 🖼️ Adding Your Images

### Step 1: Prepare Your Images
Place images in the `/public` folder:
```
public/
├── hero-image.jpg
├── card-image.png
└── logos/
    ├── brand1.svg
    └── brand2.svg
```

### Step 2: Reference in Components
```jsx
// Using Next.js Image (recommended)
import Image from 'next/image'

<Image
  src="/hero-image.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority
/>

// Or using regular img tag
<img src="/hero-image.jpg" alt="Description" />
```

### Step 3: Replace Placeholders
Update the image paths in:
- `src/components/Hero.jsx` - For hero mockup image
- `src/components/Hero.module.css` - For background images
- Any other components using placeholder images

## 🎯 Key Components in Home Page

1. **Header** - Uses CSS modules for gradient styling
2. **Parameter-Based Color Selection** - Dynamic card background colors
3. **Dynamic Text Sizing** - Changeable text sizes via buttons
4. **Image Gallery** - Responsive grid with image cards
5. **CSS Modules Demo** - Shows scoped styling
6. **Button Showcase** - Tailwind component utilities
7. **Footer** - CSS module styling

## 🔧 Customization

This project is designed to be **easily customizable**. All styling properties are clearly labeled and can be modified without touching code structure.

### Quick Customization
- **Background colors**: Edit in `src/components/Hero.module.css`
- **Gradient colors**: Change the linear gradient values
- **Text content**: Update in `src/components/Hero.jsx`
- **Navigation links**: Modify `navigationItems` in `src/components/Header.jsx`
- **Button styles**: Edit button CSS in component modules

### Detailed Guide
See **[CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)** for:
- Step-by-step customization instructions
- How to add your own images
- Color reference and CSS variables
- Common customization tasks
- Best practices for image optimization

### Key Customizable Files
1. **Hero Section**: `src/components/Hero.module.css`
   - Background color, gradient colors, animations
   - Font sizes, text colors
   - Button styles

2. **Header Navigation**: `src/components/Header.jsx` & `Header.module.css`
   - Navigation menu items
   - Logo text
   - Header background and transparency

3. **Content**: `src/components/Hero.jsx`
   - Heading and description text
   - Button labels
   - Trusted brands list

## 📱 Responsive Breakpoints

Tailwind CSS responsive prefixes:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

Example: `<div className="text-sm md:text-base lg:text-lg">`

## 🚀 Deployment

### Vercel (Recommended):
```bash
npm install -g vercel
vercel
```

### Docker:
```bash
docker build -t frontend-app .
docker run -p 3000:3000 frontend-app
```

## 📝 Notes

- All styling uses modern CSS features (CSS Grid, Flexbox, CSS Variables)
- The landing page includes professional animations and transitions
- Fully responsive with mobile-first design approach
- All components are modular and reusable
- Easy to customize without modifying component logic
- Uses placeholder mockup (replace with your actual product images)
- Header remains fixed for better UX
- CSS Modules provide scoped, collision-free styling
- Compatible with all modern browsers

## 🎓 Learning Resources

### Best Practices Implemented
✅ Component-based architecture
✅ CSS Modules for scoping
✅ Responsive design patterns
✅ Accessibility considerations
✅ Performance optimization with Next.js Image
✅ SEO-friendly metadata
✅ Clean, maintainable code structure

### Next Steps
1. Replace placeholder images with your actual images
2. Update text content and brand information
3. Add more pages by creating folders in `src/app/`
4. Customize colors and fonts in CSS modules
5. Add interactivity with React state management
6. Deploy to Vercel or your hosting provider

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables
Create `.env.local` if needed:
```
NEXT_PUBLIC_API_URL=your_api_url
```
