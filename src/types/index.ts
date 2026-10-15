export interface DonationOption {
  amount: number;
  label: string;
  impactDescription: string;
  itemIcon: string;
}

export interface VolunteerRole {
  id: string;
  title: string;
  category: 'build' | 'restore' | 'salvage' | 'youth' | 'committee';
  commitment: string;
  location: string;
  description: string;
  requirements: string[];
  spotsAvailable: number;
}

export interface ReStoreLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  features: string[];
}

export interface CommunityStory {
  id: string;
  family: string;
  municipality: string;
  yearBuilt: number;
  homeDetails: string;
  quote: string;
  story: string;
  tags: string[];
}
