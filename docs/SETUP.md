# Timzely Logo AI - Setup Guide

## Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL database
- API Keys: OpenAI, Firebase, Stripe, Cloudinary

## Installation

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with required variables:
```bash
cp .env.example .env
```

4. Update `.env` with your credentials

5. Run database migrations:
```bash
npm run migrate
```

6. Start development server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_key
```

4. Start development server:
```bash
npm run dev
```

5. Open http://localhost:3000 in your browser

## Database Setup

1. Create PostgreSQL database:
```bash
createdb timzely_logo_ai
```

2. Run Prisma migrations:
```bash
prisma migrate dev
```

## Environment Variables

See `backend/.env.example` for all required environment variables.

## Testing

```bash
# Backend tests
cd backend
npm run test

# Frontend tests
cd frontend
npm run test
```
