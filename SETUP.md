# Aegis Waitlist Setup Guide

## 🚀 Quick Start

### 1. Supabase Setup

1. **Create a Supabase project** at [supabase.com](https://supabase.com)
2. **Run the database schema** by copying the SQL from `database_schema.sql` and pasting it into your Supabase SQL editor
3. **Copy your credentials** from Project Settings > API in your Supabase dashboard
4. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your Supabase credentials.

### 2. Team Photos

Add team member photos to the `public/team/` directory:
- `sarah.jpg`
- `michael.jpg`
- `emma.jpg`
- `david.jpg`
- `lisa.jpg`

Or update the photo paths in `CREATORS.json`.

### 3. Customize Team Information

Edit `CREATORS.json` to update team member information:
- Names
- Email addresses  
- Descriptions
- Photo paths

### 4. Run the Project

```bash
npm run dev
```

## 📖 Features

### Pages
- **`/`** - Waitlist landing page
- **`/creators`** - Team showcase page

### Components
- **`WaitlistForm`** - Handles email collection with validation
- **`CreatorCard`** - Displays team member information

### Database
- **`waitlist`** table stores emails with timestamps
- Email validation and duplicate prevention
- Row Level Security (RLS) enabled

## 🎨 Customization

### Colors
The site uses Aegis branding:
- Background: Black (`bg-black`)
- Primary accent: Amber (`bg-amber-400`, `text-amber-300`)
- Text: White and gray variations

### Typography
- Font: Montserrat (loaded from `public/fonts/`)
- Defined in `src/styles/global.css`

## 🔧 Technical Stack

- **Framework**: Astro
- **Database**: Supabase
- **Styling**: Tailwind CSS
- **TypeScript**: For type safety

## 📧 Email Collection

The waitlist form:
- Validates email format
- Prevents duplicate submissions
- Shows success/error states
- Stores data in Supabase

## 🛠️ Troubleshooting

### Common Issues

1. **"Missing Supabase environment variables"**
   - Check your `.env` file exists and has correct values
   - Verify variable names start with `PUBLIC_`

2. **Database connection errors**
   - Ensure you've run the SQL schema in Supabase
   - Check your project URL and anon key are correct

3. **Team photos not showing**
   - Add actual image files to `public/team/`
   - Or update paths in `CREATORS.json`
   - Fallback avatars will show if images fail to load

## 🔒 Security

- RLS is enabled on the waitlist table
- Only allows public inserts and reads
- Environment variables are properly prefixed for client-side use
- Email validation prevents invalid submissions