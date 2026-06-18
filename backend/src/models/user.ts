export interface IUser {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  credits: number;
  isPremium: boolean;
}

export interface ILogo {
  id: string;
  userId: string;
  businessName: string;
  slogan: string;
  industry: string;
  imageUrl: string;
  svgUrl: string;
  style: string;
  colors: string[];
  createdAt: Date;
  updatedAt: Date;
  isFavorite: boolean;
}
