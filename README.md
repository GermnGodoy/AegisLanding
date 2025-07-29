# Aegis - Construction Safety Landing Page

[![Vercel Deployment](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://aegis-landing-delta.vercel.app)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?logo=astro)](https://astro.build)
[![Powered by Supabase](https://img.shields.io/badge/Database-Supabase-3ECF8E?logo=supabase)](https://supabase.com)

**Aegis** is a construction protection software landing page developed during the MPD (Master Product Development) phase of the CDTM program in collaboration with Grupo Rover. This waitlist landing page showcases our team and allows potential users to join the early access program for our construction safety platform.

🔗 **Live Site**: [https://aegis-landing-delta.vercel.app](https://aegis-landing-delta.vercel.app)

![Aegis Logo](https://github.com/user-attachments/assets/01c21202-9826-4896-84e7-f08f4df5b4fa)

## 📖 About the Project

This project was developed as part of the CDTM (Center for Digital Technology and Management) program's MPD phase, where interdisciplinary teams work on real-world challenges. Our team collaborated with Grupo Rover to create a digital solution for construction safety and protection.

### Team Members

- **JinHao Zhang** - Data Scientist
- **Germán Godoy** - Mathematician and Physicist  
- **Luis Alvarez** - Economist
- **Daniel Poncelas** - AI Engineer
- **Inés Gonzalez** - Business Analyst

## 🚀 Features

- **Waitlist Registration**: Email collection with validation and duplicate prevention
- **Team Showcase**: Meet the team behind Aegis with LinkedIn integration
- **Modern Design**: Clean, professional interface with Aegis branding
- **Mobile Responsive**: Optimized for all device sizes
- **Real-time Database**: Powered by Supabase with Row Level Security
- **TypeScript Support**: Full type safety throughout the application

## 🛠️ Technical Stack

- **Framework**: [Astro](https://astro.build) - Modern static site generator
- **Database**: [Supabase](https://supabase.com) - PostgreSQL with real-time features
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com) - Utility-first CSS framework
- **Language**: TypeScript - For enhanced developer experience
- **Hosting**: [Vercel](https://vercel.com) - Seamless deployment and hosting
- **Fonts**: Montserrat - Professional typography

## 📂 Project Structure

```
aegis-landing/
├── public/                    # Static assets
│   ├── fonts/                # Montserrat font files
│   ├── *.jpg                 # Team member photos
│   └── favicon.svg           # Site favicon
├── src/
│   ├── components/           # Reusable components
│   │   ├── WaitlistForm.astro    # Email collection form
│   │   ├── CreatorCard.astro     # Team member display
│   │   └── Navigation.astro      # Site navigation
│   ├── layouts/
│   │   └── Layout.astro          # Main layout template
│   ├── lib/
│   │   └── supabase.ts           # Supabase configuration
│   ├── pages/
│   │   ├── index.astro           # Landing page (/)
│   │   └── creators.astro        # Team page (/creators)
│   └── styles/
│       └── global.css            # Global styles and fonts
├── CREATORS.json             # Team member data
├── database_schema.sql       # Supabase database setup
├── SETUP.md                 # Detailed setup instructions
└── CLAUDE.md                # AI assistant project context
```

## 🔧 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account

### 1. Clone and Install

```bash
git clone https://github.com/your-username/aegis-landing.git
cd aegis-landing
npm install
```

### 2. Database Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Run the SQL from `database_schema.sql` in your Supabase SQL editor
3. Get your project credentials from Project Settings > API

### 3. Environment Configuration

```bash
cp .env.example .env
```

Add your Supabase credentials to `.env`:

```env
PUBLIC_SUPABASE_URL=your_supabase_project_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site in action!

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Access Astro CLI commands

## 🎨 Customization

### Updating Team Information

Edit `CREATORS.json` to modify team member details:

```json
{
  "name": "Your Name",
  "email": "your.email@cdtm.com",
  "description": "Your Role",
  "photo": "/your-photo.jpg",
  "linkedin": "https://linkedin.com/in/your-profile"
}
```

### Brand Colors

The site uses Aegis brand colors defined in Tailwind:

- **Background**: Black (`bg-black`)
- **Primary Accent**: Amber (`bg-amber-400`, `text-amber-300`)
- **Text**: White and gray variations (`text-white`, `text-gray-300`)

### Typography

Montserrat font is loaded locally from `public/fonts/` and defined in `src/styles/global.css`.

## 🗄️ Database Schema

The `waitlist` table structure:

| Column     | Type      | Description                    |
|------------|-----------|--------------------------------|
| id         | UUID      | Primary key (auto-generated)  |
| email      | VARCHAR   | User email (unique)            |
| name       | VARCHAR   | User name (optional)           |
| created_at | TIMESTAMP | Registration timestamp         |
| updated_at | TIMESTAMP | Last update timestamp          |

Features:
- **Row Level Security (RLS)** enabled
- **Email validation** and duplicate prevention
- **Automatic timestamps** with triggers
- **Indexed** for performance

## 🚀 Deployment

The site is automatically deployed to Vercel. For manual deployment:

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting provider
3. Set environment variables in your hosting dashboard

## 🔒 Security Features

- **Row Level Security**: Database access is controlled via RLS policies
- **Environment Variables**: Sensitive data properly configured for client-side use
- **Email Validation**: Client and server-side validation prevents invalid submissions
- **HTTPS**: All connections secured via HTTPS

## 📧 Contact

For questions about this project or Aegis:

- **Email**: contact.aegisbuild@gmail.com
- **LinkedIn**: Connect with our team members via the [creators page](https://aegis-landing-delta.vercel.app/creators)

## 🤝 CDTM & Grupo Rover Collaboration

This project represents the collaboration between:

- **CDTM Program**: Interdisciplinary technology and management education
- **Grupo Rover**: Industry partner providing real-world construction challenges
- **Our Team**: Five diverse students bringing expertise in data science, mathematics, economics, AI, and business analysis

## 📄 License

This project was developed as part of the CDTM academic program in collaboration with Grupo Rover.

---

Built with ❤️ by the Aegis team during CDTM MPD phase