# Harmony AI - Your Personal AI Therapist

Harmony AI is an advanced AI-powered therapist designed to provide personalized mental health support and emotional guidance. It leverages cutting-edge voice technology and emotional AI to offer meaningful conversations, emotional assistance, and self-improvement insights.

## Project Overview
This project focuses on providing accessible and empathetic mental health support. By using real-time voice interaction, Harmony AI helps users navigate their emotions, stress, and daily challenges in a safe and confidential environment.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Authentication**: Clerk
- **AI Engine**: Hume AI (Voice & Emotional Intelligence)
- **Styling**: Tailwind CSS, Framer Motion, Lucide React
- **Language**: TypeScript

## Features
- **AI-Driven Therapy**: Engage in real-time voice sessions with an empathetic AI.
- **Emotional Insights**: Receive feedback based on emotional nuances and vocal expressions.
- **Secure & Private**: Robust authentication and data protection powered by Clerk.
- **Modern UI**: Clean, responsive design with full light/dark mode support.
- **Personalized Experience**: Tailored conversations that adapt to your emotional state.

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ayushkr2736/HarmonyAI.git
   cd HarmonyAI
   ```
2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
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
- `app/`: Main application routes and global layouts.
- `components/`: UI components (Chat, Voice Visualizer, Navigation).
- `utils/`: Helper functions for AI integration and styling.
- `public/`: Static assets and icons.
- `components/logos/`: Branding and logo components.

---
Built with ❤️ by [Ayush Rajak](https://github.com/Ayushkr2736)
