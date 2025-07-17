# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is an Astro-based waitlist landing page for Aegis, a construction protection company. The site features a modern waitlist signup form and team showcase, integrated with Supabase for data storage.

## Key Commands
- `npm run dev` - Start development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run astro` - Access Astro CLI commands

## Architecture & Structure
- **Framework**: Astro with TypeScript support
- **Database**: Supabase integration for waitlist storage
- **Styling**: Tailwind CSS 4.0 with Vite integration
- **Layout**: Single layout component (`src/layouts/Layout.astro`) used across pages
- **Pages**: 
  - `/` - Waitlist landing page
  - `/creators` - Team showcase page
- **Components**:
  - `WaitlistForm.astro` - Email collection with validation
  - `CreatorCard.astro` - Team member display
- **Assets**: Static assets in `public/` directory including logo and team photos
- **Global Styles**: Located in `src/styles/global.css`

## Current Implementation Details
- **Waitlist Landing Page**: Modern design with email collection form
- **Team Showcase**: Displays 5 team members from `CREATORS.json`
- **Supabase Integration**: Email storage with validation and duplicate prevention
- **Color Scheme**: Black background with amber/yellow accents
- **Typography**: Montserrat font family loaded from local files
- **Contact Email**: contact.aegisbuild@gmail.com

## Configuration Files
- **Environment Variables**: `.env.example` shows required Supabase credentials
- **Database Schema**: `database_schema.sql` contains table creation SQL
- **Team Data**: `CREATORS.json` contains editable team member information
- **Setup Guide**: `SETUP.md` provides detailed setup instructions

## Database Schema
- **waitlist table**: Stores email addresses with timestamps
- **RLS enabled**: Row Level Security for data protection
- **Email validation**: Prevents duplicates and invalid formats

## Supabase Setup Required
1. Create Supabase project
2. Run SQL from `database_schema.sql`
3. Copy credentials to `.env` file
4. Add team photos to `public/team/` directory

## Key Features
- Email collection with client-side validation
- Duplicate email prevention
- Success/error state handling
- Mobile-responsive design
- Team member showcase
- Navigation between pages