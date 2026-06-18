# Timzely Logo AI

A modern AI-powered logo generation web application that allows businesses to create professional logo concepts automatically.

## Features

✨ **Core Features:**
- User authentication (Sign Up, Login, Google Login)
- AI-powered logo generation using multiple design styles
- Multiple logo styles: Minimalist, Modern, Luxury, Tech, Vintage, Corporate
- Color palette selection and customization
- Font selection and customization
- Logo editor with drag-and-drop functionality
- Export logos in PNG, SVG, PDF, and transparent background formats
- Dark and light mode support
- Mobile responsive design
- Logo history and favorites management
- Download center
- Credit-based system for premium generations
- Admin dashboard for user management and analytics

## Tech Stack

### Frontend
- **Framework:** React.js / Next.js
- **Styling:** Tailwind CSS
- **State Management:** Redux/Context API
- **Animation:** Framer Motion
- **UI Components:** Shadcn/ui, Radix UI

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL / MongoDB
- **ORM:** Prisma / Sequelize

### Services
- **Authentication:** Firebase Auth / NextAuth.js
- **AI Integration:** OpenAI API / Stable Diffusion / Flux
- **Storage:** Cloudinary / AWS S3
- **Payment:** Stripe
- **Email:** SendGrid / Nodemailer

## Project Structure

```
Timzely-Logo-AI/
├── frontend/          # React/Next.js frontend application
├── backend/           # Node.js/Express backend API
├── docs/              # Documentation
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL or MongoDB
- API Keys: OpenAI, Stripe, Firebase

### Installation

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Backend:**
```bash
cd backend
npm install
npm run dev
```

## API Documentation

See `/docs/API.md` for detailed API endpoints and authentication flows.

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT
