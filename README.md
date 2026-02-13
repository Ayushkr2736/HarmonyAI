# Harmony AI

Harmony AI is a cutting-edge platform designed to provide personalized, AI-driven mental health guidance and professional insights. By leveraging advanced emotional AI and voice technology, it helps users navigate their thoughts and career paths with clarity and confidence.

## Project Overview
This project aims to bridge the gap between AI and personal development. It provides a real-time, voice-enabled interface for users to discuss their goals, challenges, and aspirations, receiving empathetical and data-driven insights.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Authentication**: Clerk
- **AI Engine**: Hume AI (Voice & Emotional Intelligence)
- **Styling**: Tailwind CSS, Framer Motion, Lucide React
- **Language**: TypeScript

## Features
- **AI Wellness Coaching**: Interactive voice-based guidance sessions.
- **Dynamic Insights**: Get immediate feedback and personal insights.
- **Secure User Management**: Robust authentication powered by Clerk.
- **Premium Design**: Modern, responsive UI with seamless Dark/Light mode integration.
- **Empathetic AI**: Powered by Hume AI to understand and respond to emotional nuances.

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd harmony-ai
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   Create a `.env.local` file with the following:
   ```env
   HUME_API_KEY=your_api_key
   HUME_SECRET_KEY=your_secret_key
   NEXT_PUBLIC_HUME_CONFIG_ID=your_config_id
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```

## Folder Structure
- `app/`: Contains the main application routes and global layouts.
- `components/`: Reusable UI components including the Chat interface and Navigation.
- `utils/`: Helper functions for authentication and API integrations.
- `public/`: Static assets and public icons.
- `components/logos/`: Brand-specific logo components.
