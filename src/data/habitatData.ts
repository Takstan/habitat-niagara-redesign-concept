import { DonationOption, VolunteerRole, ReStoreLocation, CommunityStory } from '../types';

export const DONATION_TIERS: DonationOption[] = [
  {
    amount: 35,
    label: 'Safety Gear & Tools',
    impactDescription: 'Outfits a community volunteer with hard hat, CSA safety glasses, high-visibility vest, and work gloves for a day on the build site.',
    itemIcon: 'Hammer',
  },
  {
    amount: 75,
    label: 'Drywall & Insulation',
    impactDescription: 'Provides eco-friendly thermal insulation and drywall panels for a child’s bedroom, ensuring lower heating costs year-round.',
    itemIcon: 'Layers',
  },
  {
    amount: 150,
    label: 'EnergyStar Window',
    impactDescription: 'Purchases a certified high-efficiency double-pane window that helps a Niagara family reduce lifetime utility bills.',
    itemIcon: 'Maximize2',
  },
  {
    amount: 300,
    label: 'Front Entry Door & Hardware',
    impactDescription: 'Installs an insulated weather-sealed front door with secure deadbolt hardware, creating a warm, safe welcoming entrance.',
    itemIcon: 'DoorClosed',
  },
  {
    amount: 500,
    label: 'Foundation & Framing Pack',
    impactDescription: 'Funds the lumber, hurricane ties, and structural framing elements that give a local family an enduring, stable foundation.',
    itemIcon: 'Home',
  },
];

export const VOLUNTEER_ROLES: VolunteerRole[] = [
  {
    id: 'build-crew',
    title: 'Construction Build Crew Volunteer',
    category: 'build',
    commitment: 'Full Day (8:00 AM – 3:30 PM)',
    location: 'Active Build Sites (Welland & St. Catharines)',
    description: 'Work alongside skilled site leaders and future homeowners. Tasks include subflooring, wall raising, framing, siding, painting, and landscaping.',
    requirements: ['Age 16+ (16-17 with guardian waiver)', 'No previous construction experience needed', 'Steel-toed boots required (safety gear provided)'],
    spotsAvailable: 8,
  },
  {
    id: 'restore-associate',
    title: 'ReStore Retail & Customer Ambassador',
    category: 'restore',
    commitment: 'Flexible 4-hour shifts',
    location: 'St. Catharines, Fonthill, or Grimsby ReStores',
    description: 'Help welcome customers, assist at checkout, merchandise donated home decor and furniture, test electronics, and support store displays.',
    requirements: ['Friendly, community-oriented attitude', 'Ability to stand for shift duration', 'Minimum age 16'],
    spotsAvailable: 12,
  },
  {
    id: 'salvage-team',
    title: 'Kitchen Salvage & Deconstruction Crew',
    category: 'salvage',
    commitment: 'Project-based (Weekdays or Saturdays)',
    location: 'Niagara-wide residential properties',
    description: 'Join our professional salvage team to carefully dismantle and salvage gently used kitchen cabinets, appliances, and fixtures for resale at the ReStore.',
    requirements: ['Comfortable using basic hand and power tools', 'Teamwork and careful disassembly', 'Lifting up to 40 lbs'],
    spotsAvailable: 5,
  },
  {
    id: 'youth-coop',
    title: 'Youth Build & Student Co-op Ambassador',
    category: 'youth',
    commitment: 'Semester-long or Summer Co-op',
    location: 'Niagara Technical Build Sites',
    description: 'Earn high school volunteer hours or co-op credits learning practical framing, drywall, woodworking, and non-profit community leadership.',
    requirements: ['Enrolled in Ontario secondary school', 'Passion for community engagement', 'Parental/school agreement'],
    spotsAvailable: 6,
  },
  {
    id: 'events-committee',
    title: 'Community Events & Outreach Volunteer',
    category: 'committee',
    commitment: 'Monthly meetings + event dates',
    location: 'Niagara Region Community Venues',
    description: 'Help coordinate signature events including the Habitat Niagara Annual Golf Tournament, Women Build, and Home Dedication ceremonies.',
    requirements: ['Strong communication and organizing skills', 'Passion for affordable housing advocacy'],
    spotsAvailable: 4,
  },
];

export const RESTORE_LOCATIONS: ReStoreLocation[] = [
  {
    id: 'st-catharines',
    name: 'St. Catharines ReStore',
    address: '447 Bunting Road',
    city: 'St. Catharines',
    postalCode: 'L2M 3Y2',
    phone: '(905) 685-7365',
    hours: {
      weekdays: '9:00 AM – 5:00 PM',
      saturday: '9:00 AM – 5:00 PM',
      sunday: 'Closed',
    },
    features: ['Donation Drop-off Bay', 'Full Furniture & Appliance Gallery', 'Salvage Pickup Fleet Depot'],
  },
  {
    id: 'fonthill',
    name: 'Fonthill (Pelham) ReStore',
    address: '2498 Highway 20 East',
    city: 'Fonthill',
    postalCode: 'L0S 1E6',
    phone: '(905) 892-4663',
    hours: {
      weekdays: '9:00 AM – 5:00 PM',
      saturday: '9:00 AM – 5:00 PM',
      sunday: 'Closed',
    },
    features: ['Eco-friendly Home Décor', 'Architectural Salvage', 'Free Loading Assistance'],
  },
  {
    id: 'grimsby',
    name: 'Grimsby ReStore',
    address: '185 South Service Road',
    city: 'Grimsby',
    postalCode: 'L3M 4H6',
    phone: '(905) 309-7365',
    hours: {
      weekdays: '9:00 AM – 5:00 PM',
      saturday: '9:00 AM – 5:00 PM',
      sunday: 'Closed',
    },
    features: ['Cabinetry & Millwork Showroom', 'Hardware & Lighting Section', 'Donation Drive-thru'],
  },
];

export const COMMUNITY_STORIES: CommunityStory[] = [
  {
    id: 'martens-family',
    family: 'The Martens Family',
    municipality: 'Welland',
    yearBuilt: 2024,
    homeDetails: '3-Bedroom Energy-Efficient Raised Bungalow',
    quote: 'Our children now have a safe yard to play in and quiet rooms to study. Habitat didn’t give us a handout; they gave us a hand up and a community we love.',
    story: 'Sarah, a working single mother of three, spent years juggling escalating rental costs in substandard housing. By completing 500 sweat equity hours alongside local volunteers, her family earned a zero-down, geared-to-income mortgage.',
    tags: ['500 Sweat Equity Hours', 'EnergyStar Certified', 'Welland Community'],
  },
  {
    id: 'al-mansoor-family',
    family: 'The Al-Mansoor Family',
    municipality: 'St. Catharines',
    yearBuilt: 2023,
    homeDetails: '4-Bedroom Accessible Semi-Detached Home',
    quote: 'Holding the keys on dedication day was the proudest moment of our lives. We built this home alongside our neighbours nail by nail.',
    story: 'Newcomers to Canada who became essential healthcare workers in Niagara. Their accessible home design allows their youngest daughter, who uses mobility aids, to navigate independently.',
    tags: ['Accessible Design', 'Volunteer Built', 'St. Catharines'],
  },
  {
    id: 'dias-family',
    family: 'The Dias Family',
    municipality: 'Thorold',
    yearBuilt: 2022,
    homeDetails: 'Net-Zero Ready 3-Bedroom Home',
    quote: 'The financial education workshops gave us the confidence to manage our finances responsibly. The stability has changed our children’s trajectory.',
    story: 'Working in local manufacturing, Carlos and Elena partnered with Habitat Niagara to build equity and security. Today, their eldest son is attending Brock University with peace of mind.',
    tags: ['Financial Literacy', 'Net-Zero Ready', 'Thorold Community'],
  },
];

export const ACCEPTED_RESTORE_ITEMS = [
  { category: 'Furniture', examples: 'Couches, dressers, dining sets, desks, nightstands (clean, no rips/stains)' },
  { category: 'Appliances', examples: 'Refrigerators, stoves, washers, dryers, microwaves (in clean working order)' },
  { category: 'Building Materials', examples: 'Unopened tiles, clean lumber, drywall sheets, trim, insulation' },
  { category: 'Cabinetry & Fixtures', examples: 'Complete kitchen cabinets, vanity tops, sinks, faucets, light fixtures' },
  { category: 'Doors & Windows', examples: 'Exterior/interior doors with jambs, vinyl double-pane windows' },
  { category: 'Tools & Hardware', examples: 'Hand tools, power tools, lawn equipment, screws, nails, hinges' },
];

export const NIAGARA_MUNICIPALITIES = [
  { name: 'St. Catharines', builds: 28, status: 'Active Builds & ReStore' },
  { name: 'Welland', builds: 22, status: 'Active 5-Home Project' },
  { name: 'Niagara Falls', builds: 12, status: 'Completed Communities' },
  { name: 'Thorold', builds: 6, status: 'Completed Communities' },
  { name: 'Port Colborne', builds: 4, status: 'Future Build Exploration' },
  { name: 'Grimsby', builds: 3, status: 'ReStore Location & Outreach' },
  { name: 'Pelham / Fonthill', builds: 2, status: 'ReStore Location & Outreach' },
  { name: 'Fort Erie', builds: 3, status: 'Community Partnered' },
];
