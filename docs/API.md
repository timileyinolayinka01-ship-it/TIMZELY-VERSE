# Timzely Logo AI - API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All authenticated endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Authentication
- `POST /auth/signup` - Create a new account
- `POST /auth/login` - Login with email and password
- `POST /auth/google-login` - Login with Google

### Logos
- `POST /logos/generate` - Generate logo concepts
- `GET /logos/my-logos` - Get user's logos
- `PUT /logos/:logoId` - Update logo
- `DELETE /logos/:logoId` - Delete logo
- `POST /logos/:logoId/export` - Export logo in different formats

### Users
- `GET /users/profile` - Get user profile
- `PUT /users/profile` - Update user profile
- `GET /users/credits` - Get user credits
- `POST /users/credits/purchase` - Purchase credits

### Admin
- `GET /admin/analytics` - Get dashboard analytics
- `GET /admin/users` - Get all users
- `PUT /admin/users/:userId` - Update user status

## Response Format
All responses are in JSON format:
```json
{
  "message": "Success message",
  "data": {}
}
```

## Error Handling
Error responses include appropriate HTTP status codes and error messages:
```json
{
  "error": "Error message"
}
```
