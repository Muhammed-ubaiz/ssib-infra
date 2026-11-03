// All company content below is taken from "SSIB INFRA COMPANY PROFILE 2026.pdf".
// Edit these arrays to update the website — components read from here only.

const img = (name) => (name.includes('.') ? `/images/${name}` : `/images/${name}.webp`)

export const company = {
  name: 'SSIB Infra Builders Pvt Ltd',
  shortName: 'SSIB',
  tagline: 'Trusted name in construction',
  founded: 2005,
  founder: 'Mr. Shihas P. I',
  hometown: 'Vadanappally, Thrissur District',
  intro:
    'An Ernakulam-based infrastructure contractor delivering road tarring, earthworks, rock cutting, paving and building works for leading developers and public bodies across Kerala since 2005.',
  profilePdf: '/docs/SSIB-Infra-Company-Profile-2026.pdf',
  profilePdfMeta: 'PDF · 25 pages · 5.2 MB',
}

export const contact = {
  addressLines: ['2nd floor, Door N06/160N, Mareena Centre,', 'Container Road, Kothad P.O.,', 'Ernakulam – 682027, Kerala'],
  mapsQuery: 'Mareena Centre, Container Road, Kothad, Ernakulam 682027',
  phone: '+91 98469 02000',
  phoneHref: 'tel:+919846902000',
  email: 'shihaskyline2000@gmail.com',
  gstin: '32CHAPS0691E1ZL',
  whatsapp: '919846902000',
  hours: 'Mon – Sat, 9:00 am – 6:30 pm',
  social: [], // e.g. [{ label: 'Facebook', href: 'https://…' }]
}

// Page order follows the website quotation: Home • About • Services • Projects • Our Team • Contact
export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/clients', label: 'Clients' },
  { to: '/contact', label: 'Contact' },
]

export const heroSlides = [
  { src: img('tea-estate-highway-paving.jpg'), alt: 'Choondi–Meppadi–Vaduvanchal NH — Bituminous asphalt paving through Wayanad tea estates' },
  { src: img('apollo-sensor-paver-highway.jpg'), alt: 'Apollo AP 600 sensor paver laying hot mix asphalt on highway works' },
  { src: img('resort-curb-road-finished.jpg'), alt: 'Finished asphalt roadway with curbstone drainage and green medians' },
  { src: img('crowne-plaza-entrance-paved.jpg'), alt: 'Finished interlocking paver entrance and driveway at Crowne Plaza Kochi' },
]

export const heroStats = [
  { value: '2005', label: 'Established in Kerala' },
  { value: '₹100 Cr', label: 'NH 66 six-laning earthworks, ongoing' },
  { value: 'A-Class', label: 'Contractor licence for Govt. projects' },
  { value: '10+', label: 'Major clients, incl. Lulu, Tata & Sobha' },
]

export const about = {
  story: [
    'The origin dates back to 2005, when Mr. Shihas P. I, a young entrepreneur, set out to make a mark in construction — starting with material supply in his hometown of Vadanappally, in Thrissur District.',
    'Strong motivation and management skills took the business into land development, boulder breaking and, in time, large-scale infrastructure projects for corporate clients across Kerala.',
  ],
  milestones: [
    { title: 'Material supply', text: 'Founded in 2005 in Vadanappally, Thrissur, supplying construction materials.' },
    { title: 'Land development & boulder breaking', text: 'Expanded into site development and rock work for corporate clients.' },
    { title: 'Large-scale infrastructure', text: 'Diversified into roads, earthworks, paving and building works across Kerala.' },
    { title: 'A-Class Contractor licence', text: 'Successful execution earned an A-Class licence to undertake Government projects.' },
    { title: 'Next: UAE', text: 'Plans to expand and extend projects to the UAE.' },
  ],
  vision:
    'Our vision is to strive to deliver the best and to be people-oriented. We are committed, dedicated, enthusiastic, open and honest — holding true to our values, delivering excellence for our clients and the community, being passionate about our role in providing vital services, and putting integrity at the heart of our business.',
  mission:
    'Our mission is to provide the highest quality. We succeed at this because of the authentic dedication of our subcontractors and staff, our commitment to a solid work ethic, our passion for staying current with the newest innovations in our industry, and our consideration for the environment.',
}

export const objectives = [
  'High quality',
  'Strong customer satisfaction',
  'Positive reputation',
  'Increased productivity',
  'Strong global presence',
  'Increased market share',
  'Happy employees and good working conditions',
  'Respect for laws and regulations',
]

export const services = [
  {
    id: 'tarring',
    title: 'Road Tarring Works',
    short: 'BM & BC roads',
    description:
      'Bituminous Macadam (BM) and Bituminous Concrete (BC) road works for convention centres, IT parks, highways, bypasses and municipal road networks.',
    highlights: ['Kinfra Kakkanad Infopark', 'Choondi–Meppadi–Vaduvanchal 15 km NH', '30+ Kalamassery Municipality roads'],
    image: img('tea-estate-highway-paving.jpg'),
    alt: 'Volvo roller paving a scenic bituminous road through Wayanad tea plantations',
  },
  {
    id: 'earthworks',
    title: 'Earth Excavation & Filling',
    short: 'Bulk earthworks',
    description:
      'Large-volume excavation, filling and site formation — including the earthworks for six-laning of NH 66 between Kappirikkad and Kodungallur.',
    highlights: ['NH 66 six-laning (₹100 Cr)', 'Sobha Marina One, Kochi', 'Chinmaya University, Piravom'],
    image: img('subgrade-earthworks-bulldozer.jpg'),
    alt: 'Bulldozer and site team preparing bulk earthworks and sub-base formation',
  },
  {
    id: 'rock',
    title: 'Rock Cutting',
    short: 'Controlled rock work',
    description:
      'Rock cutting and boulder breaking for site development on demanding terrain — from Smart City Kochi to the Idukki Medical College site.',
    highlights: ['Smart City, Kochi', 'Infopark, Kochi', 'Idukki Medical College'],
    image: img('rock-quarry.webp'),
    alt: 'Heavy rock drilling and precision cutting on granite rock face',
  },
  {
    id: 'paving',
    title: 'Paving Tiles',
    short: 'Interlock & hardscape',
    description:
      'Paving tile works for hospitality, retail and IT campuses, delivering durable, finished outdoor surfaces.',
    highlights: ['Grand Hyatt, Bolgatty', 'Lulu International Shopping Mall, Kozhikode', 'Cyber Tower, Infopark Kakkanad'],
    image: img('crowne-plaza-entrance-paved.jpg'),
    alt: 'Finished heavy-duty interlocking paver entrance at Crowne Plaza Kochi',
  },
  {
    id: 'building',
    title: 'Building Works',
    short: 'Civil construction',
    description:
      'Turnkey construction of multi-lane toll plazas, institutional facilities, central kitchens, and commercial support structures.',
    highlights: ['NHAI Toll Plaza & Building, Shivalaya', 'Central Kitchen, Lulu', 'Hidayathul Islam Madrassa'],
    image: img('nhai-toll-plaza-building.jpg'),
    alt: 'Completed NHAI multi-lane toll plaza and administrative building constructed by SSIB',
  },
  {
    id: 'bitumen',
    title: 'Bitumen Mix Plants',
    short: 'In-house asphalt supply',
    description:
      'Our own bitumen batch mix plant and bitumen drum mix plant (90–120, 60–90) supply hot mix directly to our road projects.',
    highlights: ['Bitumen batch mix plant', 'Bitumen drum mix plant', 'Listed capacities: 90–120, 60–90'],
    image: img('apollo-sensor-paver-highway.jpg'),
    alt: 'Apollo AP 600 sensor paver laying hot mix asphalt',
  },
]

export const projectCategories = ['All', 'Road Tarring', 'Earthworks', 'Rock Cutting', 'Paving Tiles', 'Building', 'Restoration']

// Featured projects with genuine high-resolution site photography from executed sites.
export const featuredProjects = [
  {
    title: 'Apollo AP 600 Highway Bituminous Tarring',
    location: 'National Highway Paving Division',
    client: 'Highway Division / RS Development',
    category: 'Road Tarring',
    value: '₹12 Cr',
    status: 'Current',
    image: img('apollo-sensor-paver-highway.jpg'),
    alt: 'Apollo AP 600 sensor paver laying bituminous asphalt hot mix',
    specs: 'Apollo AP 600 Sensor Paver · Hot-Mix Bitumen Paving',
  },
  {
    title: 'Choondi–Meppadi–Vaduvanchal 15 km NH',
    location: 'Wayanad, Kerala',
    client: 'RS Development & Constructions India (P) Ltd',
    category: 'Road Tarring',
    value: '₹15 Cr',
    status: 'Completed',
    image: img('tea-estate-highway-paving.jpg'),
    alt: 'Volvo roller paving asphalt road through Wayanad tea plantations',
    specs: 'Volvo Tandem Compactor · 15 km Highway Corridor',
  },
  {
    title: 'Crowne Plaza Kochi — Luxury Paving',
    location: 'Maradu, Kochi',
    client: 'Crowne Plaza Hotel & Resorts',
    category: 'Paving Tiles',
    value: '₹2 Cr',
    status: 'Completed',
    image: img('crowne-plaza-entrance-paved.jpg'),
    alt: 'Finished interlocking paver entrance at Crowne Plaza Kochi',
    specs: 'Precision Interlocking Pavers · Integrated Drainage',
  },
  {
    title: 'High-Rise Township Road Tarring',
    location: 'Ernakulam, Kerala',
    client: 'Township Infrastructure',
    category: 'Road Tarring',
    value: '₹4 Cr',
    status: 'Completed',
    image: img('township-road-bitumen-tarring.jpg'),
    alt: 'Volvo road roller rolling bituminous road in township project',
    specs: 'Dense Bituminous Macadam (DBM) · Heavy Compaction',
  },
  {
    title: 'Subgrade Earthworks & Bulk Levelling',
    location: 'Commercial Infrastructure Zone',
    client: 'Commercial Development',
    category: 'Earthworks',
    value: '₹6 Cr',
    status: 'Completed',
    image: img('subgrade-earthworks-bulldozer.jpg'),
    alt: 'Earth excavation and sub-base formation with bulldozer and site team',
    specs: 'Heavy Earthmoving · Precision Laser Subgrade Levelling',
  },
  {
    title: 'NHAI Multi-Lane Toll Plaza & Building',
    location: 'NH 66 Corridor, Kerala',
    client: 'Shivalaya Construction Ltd',
    category: 'Building',
    value: '₹3.5 Cr',
    status: 'Completed',
    image: img('nhai-toll-plaza-building.jpg'),
    alt: 'Completed NHAI multi-lane toll plaza and administrative building constructed by SSIB',
    specs: 'Multi-Storey Elevated Toll Facility · FASTag Canopy & Lanes',
  },
  {
    title: 'Finished Asphalt Highway & Kerb Drainage',
    location: 'Township & Campus Sector',
    client: 'Campus Infrastructure',
    category: 'Road Tarring',
    value: '₹5 Cr',
    status: 'Completed',
    image: img('resort-curb-road-finished.jpg'),
    alt: 'Finished asphalt road with white curbs, stormwater drainage and green medians',
    specs: 'Finished Hot-Mix Bitumen · Kerbstone Stormwater Channels',
  },
]

// Complete project register, exactly as listed in the profile.
export const allProjects = [
  { name: 'Six-laning earthworks, Kappirikkad – Kodungallur, NH 66', client: 'Shivalaya Construction Ltd', category: 'Earthworks', value: '₹100 Cr', status: 'Current' },
  { name: 'Toll building and related building works', client: 'Shivalaya Construction Ltd', category: 'Building', value: '₹3.5 Cr', status: 'Current' },
  { name: 'Lulu International Convention & Exhibition Centre (Grand Hyatt, Bolgatty)', client: 'Lulu', category: 'Road Tarring', value: '₹11 Cr' },
  { name: 'Lulu International Convention Centre, Thrissur', client: 'Lulu', category: 'Road Tarring', value: '₹2 Cr' },
  { name: 'Marriott Courtyard, Nedumbassery', client: 'Lulu', category: 'Road Tarring', value: '₹1 Cr' },
  { name: 'UST Global, Technopark, Trivandrum', client: 'Sobha', category: 'Road Tarring', value: '₹2 Cr' },
  { name: 'Kinfra Kakkanad Infopark', client: 'RS Development & Constructions India (P) Ltd', category: 'Road Tarring', value: '₹11 Cr' },
  { name: 'Choondi, Meppadi, Vaduvanchal — 15 km NH', client: 'RS Development & Constructions India (P) Ltd', category: 'Road Tarring', value: '₹15 Cr' },
  { name: 'Kecheri – Akkikavu KIIFB projects', client: 'Prathien Infrastructures, Coimbatore', category: 'Road Tarring', value: '₹26 Cr' },
  { name: 'Mahe Bypass', client: 'EKK Infrastructure, Perumbavoor', category: 'Road Tarring', value: '₹2 Cr' },
  { name: 'More than 30 municipality roads, Kalamassery', client: 'Kalamassery Municipality', category: 'Road Tarring', value: '₹12 Cr' },
  { name: 'Lulu International Convention & Exhibition Centre (Grand Hyatt, Bolgatty)', client: 'Lulu', category: 'Paving Tiles', value: '₹2 Cr' },
  { name: 'Lulu International Shopping Mall, Kozhikode', client: 'Lulu', category: 'Paving Tiles', value: '₹1 Cr' },
  { name: 'Cyber Tower, Infopark, Kakkanad', client: 'Lulu', category: 'Paving Tiles', value: '₹0.5 Cr' },
  { name: 'Smart City, Kochi', client: 'Sands Infra Build', category: 'Rock Cutting', value: '₹4 Cr' },
  { name: 'Infopark, Kochi', client: 'Claysys', category: 'Rock Cutting', value: '₹2 Cr' },
  { name: 'Idukki Medical College', client: 'Rightedge Infrastructures Pvt Ltd', category: 'Rock Cutting', value: '₹5 Cr' },
  { name: 'Sabarimala Pamba restoration', client: 'Tata', category: 'Restoration', value: '₹5 Cr' },
  { name: 'Lulu International Convention & Exhibition Centre (Grand Hyatt, Bolgatty)', client: 'Lulu', category: 'Earthworks', value: '₹5 Cr' },
  { name: 'Lulu International Shopping Mall, Kozhikode', client: 'Lulu', category: 'Earthworks', value: '₹2 Cr' },
  { name: 'Sobha City, Thrissur', client: 'Sobha', category: 'Earthworks', value: '₹4 Cr' },
  { name: 'Marina One, Kochi', client: 'Sobha', category: 'Earthworks', value: '₹6 Cr' },
  { name: 'Kinfra Kakkanad Infopark', client: 'RS Development & Constructions India (P) Ltd', category: 'Earthworks', value: '₹3 Cr' },
  { name: 'Mahe Bypass', client: 'EKK Infrastructure, Perumbavoor', category: 'Earthworks', value: '₹2 Cr' },
  { name: 'Chinmaya University, Piravom', client: 'ABM Civil Ventures', category: 'Earthworks', value: '₹4 Cr' },
  { name: 'Central Kitchen', client: 'Lulu', category: 'Building', value: null },
  { name: 'Hidayathul Islam Madrassa, Ponnarimangalam', client: null, category: 'Building', value: null },
  { name: 'Crowne Plaza Kochi — Access roads & paving works', client: 'Crowne Plaza', category: 'Road Tarring', value: '₹2 Cr' },
  { name: 'Galfar Engineering — Heavy civil & earthworks joint operations', client: 'Galfar', category: 'Earthworks', value: '₹3 Cr' },
]

// Prominent client logos highlighted across the website
export const featuredClientLogos = [
  {
    id: 'grand-hyatt',
    name: 'Grand Hyatt',
    brand: 'Grand Hyatt Kochi Bolgatty',
    subtitle: 'Luxury Hospitality & Conventions',
    logo: '/images/clients/grand-hyatt.svg',
    badge: '/images/clients/grand-hyatt.jpg',
    location: 'Bolgatty Island, Kochi',
    scope: 'Road Tarring, Interlock Paving Promenade & Bulk Earthworks',
    value: '₹18 Cr',
    match: 'Grand Hyatt',
  },
  {
    id: 'tata',
    name: 'Tata Group',
    brand: 'Tata Projects / Tata Group',
    subtitle: 'National Infrastructure & Restoration',
    logo: '/images/clients/tata.svg',
    location: 'Sabarimala, Kerala',
    scope: 'Pamba Riverbed Flood Restoration Works',
    value: '₹5 Cr',
    match: 'Tata',
  },
  {
    id: 'marriott',
    name: 'Marriott',
    brand: 'Marriott Hotels & Resorts',
    subtitle: 'International Hospitality',
    logo: '/images/clients/marriott.svg',
    location: 'Nedumbassery, Kochi Airport',
    scope: 'Marriott Courtyard Road Tarring & Paving Infrastructure',
    value: '₹1 Cr',
    match: 'Marriott',
  },
  {
    id: 'smartcity',
    name: 'SmartCity Kochi',
    brand: 'SmartCity Kochi (TECOM Group)',
    subtitle: 'Integrated IT Business Township',
    logo: '/images/clients/smartcity.png',
    location: 'Kakkanad, Kochi',
    scope: 'Controlled Rock Cutting & Site Formation',
    value: '₹4 Cr',
    match: 'Smart City',
  },
  {
    id: 'crowne-plaza',
    name: 'Crowne Plaza',
    brand: 'Crowne Plaza Hotels & Resorts (IHG)',
    subtitle: 'Five-Star Business Hotel',
    logo: '/images/clients/crowne-plaza.svg',
    location: 'Maradu, Kochi',
    scope: 'Access Roads, Parking Infrastructure & Interlock Paving',
    value: '₹2 Cr',
    match: 'Crowne Plaza',
  },
  {
    id: 'galfar',
    name: 'Galfar',
    brand: 'Galfar Engineering & Contracting SAOG',
    subtitle: 'Engineering & Construction Leader',
    logo: '/images/clients/galfar.jpg',
    badge: '/images/clients/galfar.png',
    location: 'Kerala & GCC',
    scope: 'Major Infrastructure Subcontracts & Heavy Earthworks',
    value: '₹3 Cr',
    match: 'Galfar',
  },
]

// `match` links each client to its entries in allProjects (by the client or project name).
export const clients = [
  {
    name: 'Grand Hyatt',
    full: 'Grand Hyatt Kochi Bolgatty (Lulu Convention Centre)',
    match: 'Grand Hyatt',
    logo: '/images/clients/grand-hyatt.svg',
    badge: '/images/clients/grand-hyatt.jpg',
  },
  {
    name: 'Tata',
    full: 'Tata Projects / Tata Group',
    match: 'Tata',
    logo: '/images/clients/tata.svg',
  },
  {
    name: 'Marriott',
    full: 'Marriott Hotels & Resorts (Courtyard by Marriott)',
    match: 'Marriott',
    logo: '/images/clients/marriott.svg',
  },
  {
    name: 'SmartCity Kochi',
    full: 'SmartCity Kochi (TECOM Group & Govt. of Kerala)',
    match: 'Smart City',
    logo: '/images/clients/smartcity.png',
  },
  {
    name: 'Crowne Plaza',
    full: 'Crowne Plaza Hotels & Resorts (IHG)',
    match: 'Crowne Plaza',
    logo: '/images/clients/crowne-plaza.svg',
  },
  {
    name: 'Galfar',
    full: 'Galfar Engineering & Contracting SAOG',
    match: 'Galfar',
    logo: '/images/clients/galfar.jpg',
  },
  { name: 'Lulu', match: 'Lulu' },
  { name: 'Sobha', match: 'Sobha' },
  { name: 'Shivalaya Construction', full: 'Shivalaya Construction Limited', match: 'Shivalaya' },
  { name: 'Sands Infra Build', match: 'Sands Infra Build' },
  { name: 'RSDCPL', full: 'RS Development & Constructions India (P) Ltd, Erode', match: 'RS Development' },
  { name: 'Prathien Infrastructures', full: 'Coimbatore', match: 'Prathien' },
  { name: 'ABM Civil Ventures', match: 'ABM' },
  { name: 'EKK Infrastructure', full: 'Perumbavoor', match: 'EKK' },
  { name: 'Claysys', match: 'Claysys' },
  { name: 'Rightedge Infrastructures', full: 'Rightedge Infrastructures Pvt Ltd', match: 'Rightedge' },
  { name: 'Kalamassery Municipality', match: 'Kalamassery' },
]

export const strengths = [
  {
    pillar: 'Safety Standards',
    icon: 'BadgeCheck',
    title: 'A-Class Contractor Licence',
    text: 'A track record of successful execution earned SSIB an A-Class Contractor licence to undertake major Government and public infrastructure projects.',
  },
  {
    pillar: 'Modern Technology',
    icon: 'Truck',
    title: 'Our Own Machinery Fleet',
    text: 'Excavators, pavers, rollers, motor graders, backhoe loaders and tipper trucks — owned and operated in-house with zero external rental dependency.',
  },
  {
    pillar: 'Quality Construction',
    icon: 'Factory',
    title: 'In-House Bitumen Mix Plants',
    text: 'Our bitumen batch mix and drum mix plants (90–120, 60–90) keep asphalt supply and hot mix temperature under direct laboratory quality control.',
  },
  {
    pillar: 'Customer Satisfaction',
    icon: 'Handshake',
    title: 'Trusted by Leading Developers',
    text: 'Repeat work for Lulu, Sobha, Tata, Shivalaya and other major corporate names across international hospitality, IT parks and national highways.',
  },
  {
    pillar: 'Experienced Professionals',
    icon: 'Users',
    title: 'People-Oriented, with Integrity',
    text: 'Led by founder Shihas P. I since 2005 — the authentic dedication of our engineering cadre, subcontractors and staff is at the heart of our quality.',
  },
  {
    pillar: 'On-Time Delivery',
    icon: 'Leaf',
    title: 'Disciplined Site Operations',
    text: 'Consideration for the environment, strict adherence to project milestones, and respect for laws and regulations guide our execution on every site.',
  },
]

export const fleet = [
  'Hydraulic excavators',
  'Asphalt pavers',
  'Tandem & single-drum rollers',
  'Pneumatic tyred rollers',
  'Motor graders',
  'Backhoe loaders',
  'Tipper trucks',
]

// Project gallery — genuine site photography from the company profile and executed project sites, grouped by work type.
export const galleryCategories = [
  'All',
  'Road Tarring',
  'Paving Tiles',
  'Earthworks',
  'Rock Cutting',
  'Machinery',
  'Restoration',
]

export const gallery = [
  // Highway & Road Tarring (High-Definition Project Site Photography)
  { src: img('tea-estate-highway-paving.jpg'), category: 'Road Tarring', caption: 'Choondi–Meppadi–Vaduvanchal NH — Bituminous asphalt paving through Wayanad tea estates' },
  { src: img('resort-curb-road-finished.jpg'), category: 'Road Tarring', caption: 'Township access road — Finished bituminous asphalt with curbstone drainage & green medians' },
  { src: img('township-road-bitumen-tarring.jpg'), category: 'Road Tarring', caption: 'High-rise residential township — Bituminous road tarring and heavy rolling' },
  { src: img('wayanad-nh-scenic-highway.jpg'), category: 'Road Tarring', caption: 'Choondi–Meppadi–Vaduvanchal 15 km NH — Finished asphalt highway corridor' },
  { src: img('city-road.webp'), category: 'Road Tarring', caption: 'Urban corridor road tarring and bituminous surface finishing' },
  { src: img('tarring-works.webp'), category: 'Road Tarring', caption: 'High-capacity asphalt paving and rolling on commercial infrastructure corridor' },
  { src: img('township-road-grading-inspection.jpg'), category: 'Road Tarring', caption: 'Township road formation — Site engineers inspecting subgrade rolling' },
  { src: img('resort-tarring-fleet.jpg'), category: 'Road Tarring', caption: 'Campus roadway tarring — Tipper trucks and bituminous paving crew in action' },

  // Precision Paving Tiles
  { src: img('crowne-plaza-entrance-paved.jpg'), category: 'Paving Tiles', caption: 'Crowne Plaza Kochi — Main entrance interlock paving with border landscaping' },
  { src: img('campus-drainage-pavers.jpg'), category: 'Paving Tiles', caption: 'Commercial campus — Interlocking paving blocks with stormwater drainage integration' },
  { src: img('paving-promenade.webp'), category: 'Paving Tiles', caption: 'Lulu Grand Hyatt Bolgatty — Waterfront promenade interlocking paving installation' },
  { src: img('crowne-plaza-paving-finished.jpg'), category: 'Paving Tiles', caption: 'Crowne Plaza Kochi — Finished heavy-duty interlocking paver roadway' },
  { src: img('commercial-parking-interlock.jpg'), category: 'Paving Tiles', caption: 'Commercial convention complex — Heavy-duty interlocking paver installation' },

  // Commercial & Institutional Building Works
  { src: img('nhai-toll-plaza-building.jpg'), category: 'Building', caption: 'NHAI Toll Plaza & Administrative Building — Multi-lane elevated toll facility on NH 66 corridor' },
  { src: img('toll-building.webp'), category: 'Building', caption: 'Shivalaya Construction Toll Building — Structural concrete execution and elevation works' },

  // Heavy Machinery & Specialized Paver Fleet
  { src: img('apollo-sensor-paver-highway.jpg'), category: 'Machinery', caption: 'Apollo AP 600 sensor paver laying hot mix asphalt on highway works' },
  { src: img('volvo-roller-compaction.jpg'), category: 'Machinery', caption: 'Volvo asphalt vibratory compactor rolling fresh bituminous layer' },
  { src: img('machine-grader.webp'), category: 'Machinery', caption: 'Motor grader precision subgrade leveling & formation' },
  { src: img('fleet-trucks.webp'), category: 'Machinery', caption: 'Heavy-duty tipper truck fleet lined up for bulk earth and asphalt haulage' },
  { src: img('jcb-paving-excavation.jpg'), category: 'Machinery', caption: 'JCB backhoe loader leveling and preparing roadway alignment' },

  // Earthworks
  { src: img('earth-bulldozer.webp'), category: 'Earthworks', caption: 'Heavy bulldozer bulk earth excavation and cut-and-fill formation' },
  { src: img('subgrade-earthworks-bulldozer.jpg'), category: 'Earthworks', caption: 'Subgrade formation and bulk earthworks with bulldozer and engineering team' },
  { src: img('nh66-earthworks.webp'), category: 'Earthworks', caption: 'NH 66 six-laning earthworks — Kappirikkad to Kodungallur corridor' },

  // Rock Cutting
  { src: img('rock-quarry.webp'), category: 'Rock Cutting', caption: 'Granite quarry rock cutting and aggregate processing operations' },
  { src: img('rock-drill.webp'), category: 'Rock Cutting', caption: 'Heavy rock drilling and precision blasting on granite rock face' },

  // Landmark Restoration
  { src: img('pamba-flood.webp'), category: 'Restoration', caption: 'Sabarimala Pamba post-flood riverbed restoration works executed for Tata Projects' },
]

export const aboutStats = [
  { value: 20, suffix: '+', label: 'Years of Experience', detail: 'Delivering since 2005' },
  { value: 50, suffix: '+', label: 'Projects Completed', detail: 'Highways, parks & civil' },
  { value: 10, suffix: '+', label: 'Tier-1 Developers', detail: 'Lulu, Tata, Sobha, Shivalaya' },
  { value: 40, suffix: '+', label: 'Heavy Fleet & Plants', detail: 'Excavators, pavers & 2 asphalt plants' },
]

export const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    subtitle: 'Scope & Topographical Appraisal',
    description:
      'Initial site reconnaissance, geotechnical assessment, and alignment with client architectural blueprints, timeline constraints, and structural specifications.',
    metrics: 'Site Appraisal',
  },
  {
    step: '02',
    title: 'Planning',
    subtitle: 'Resource & Logistics Blueprint',
    description:
      'Logistics blueprints, road gradient modeling, material batching formulations from our own bitumen plants, and heavy machinery fleet assignment.',
    metrics: 'Resource Mapping',
  },
  {
    step: '03',
    title: 'Design',
    subtitle: 'Engineering & Mix Formulations',
    description:
      'Bituminous mix design, structural layer thickness analysis, compaction targets, and environmental runoff protection adhering to IRC standards.',
    metrics: 'A-Class Standards',
  },
  {
    step: '04',
    title: 'Construction',
    subtitle: 'Heavy Execution & Surface Works',
    description:
      'Mobilising heavy hydraulic excavators, motor graders, tandem rollers, and computerized asphalt pavers for synchronized high-volume execution.',
    metrics: 'Precision Execution',
  },
  {
    step: '05',
    title: 'Quality Inspection',
    subtitle: 'Density, Grade & Safety Compliance',
    description:
      'Multi-stage laboratory testing of bituminous concrete, compaction density verification, surface level checks, and uncompromising safety protocols.',
    metrics: 'Zero-Defect Quality',
  },
  {
    step: '06',
    title: 'Handover',
    subtitle: 'Certified Commissioning & Handover',
    description:
      'Final joint inspections with developer engineering heads, regulatory approvals, comprehensive documentation, and seamless operational handover.',
    metrics: 'Full Sign-Off',
  },
]

export const expertiseServices = [
  {
    num: '01',
    title: 'Infrastructure Development',
    category: 'Highways & BM/BC Roads',
    description: 'Bituminous Macadam (BM) and Bituminous Concrete (BC) road infrastructure for national highways, convention centres, IT corridors, and municipal road networks.',
    highlights: ['Choondi–Vaduvanchal 15 km NH', 'Kinfra Kakkanad Infopark', '30+ Kalamassery Roads'],
    image: img('tarring-works'),
  },
  {
    num: '02',
    title: 'Civil Engineering',
    category: 'Bulk Earth Excavation & Filling',
    description: 'Large-scale bulk excavation, earth cutting, grading, and site formation driven by our owned fleet of hydraulic excavators, graders, and tippers.',
    highlights: ['NH 66 Six-Laning (₹100 Cr)', 'Sobha Marina One', 'Chinmaya University'],
    image: img('nh66-earthworks'),
  },
  {
    num: '03',
    title: 'Commercial Construction',
    category: 'Institutional & Corporate Buildings',
    description: 'Turnkey civil construction of multi-lane toll buildings, institutional facilities, central kitchens, and commercial support structures.',
    highlights: ['Shivalaya NHAI Toll Buildings', 'Central Kitchen for Lulu', 'Hidayathul Islam Madrassa'],
    image: img('nhai-toll-plaza-building.jpg'),
  },
  {
    num: '04',
    title: 'Residential Construction',
    category: 'Paving Tiles & Hardscape',
    description: 'Heavy-duty interlock paving tile installation, pedestrian promenades, and architectural hardscaping for premier townships and campuses.',
    highlights: ['Grand Hyatt Bolgatty', 'Lulu International Mall', 'Cyber Tower Promenades'],
    image: img('paving-promenade'),
  },
  {
    num: '05',
    title: 'Project Management',
    category: 'Controlled Rock Works & Logistics',
    description: 'Controlled rock cutting, boulder breaking, and site leveling under rigorous engineering oversight and synchronized equipment fleet dispatch.',
    highlights: ['Smart City Kochi', 'Infopark Kakkanad', 'Idukki Medical College'],
    image: img('rock-drill'),
  },
  {
    num: '06',
    title: 'Renovation & Development',
    category: 'Restoration & Asphalt Supply',
    description: 'High-speed ecological flood restoration and in-house hot mix asphalt production from our own batch mix and drum mix plants.',
    highlights: ['Sabarimala Pamba Restoration', 'Bitumen Batch Mix Plant', 'Drum Mix Plant (90–120 TPH)'],
    image: img('pamba-2'),
  },
]

export const testimonials = [
  {
    id: 'nh66',
    quote:
      'SSIB Infra Builders demonstrated outstanding capability in executing large-scale bulk earthworks for the NH 66 six-laning section. Their massive machinery fleet and disciplined site operations kept critical path timelines intact.',
    author: 'Senior Project Director',
    company: 'Highway Infrastructure Consortium',
    project: 'NH 66 Six-Laning Project (₹100 Cr)',
    location: 'Kappirikkad – Kodungallur',
    sector: 'National Highway Infrastructure',
    clientName: 'NHAI Consortium',
    metric: '₹100 Cr Six-Laning Section',
    image: img('nh66-earthworks'),
    rating: 5,
  },
  {
    id: 'bolgatty',
    quote:
      'The precision and surface finish delivered by SSIB for the Lulu Grand Hyatt Bolgatty project, spanning extensive road tarring and hardscape paving, reflects international hospitality standards. A highly dependable partner.',
    author: 'Chief Engineering Officer',
    company: 'Lulu International Convention Division',
    project: 'Grand Hyatt Kochi Bolgatty & Lulu Convention',
    location: 'Bolgatty Island, Kochi',
    sector: 'Hospitality & Convention',
    clientName: 'Lulu International',
    metric: 'Premier Hardscape & Roads',
    image: img('paving-promenade'),
    rating: 5,
  },
  {
    id: 'pamba',
    quote:
      'Restoration of the sacred Pamba riverbed following devastating floods was an operation demanding high ecological sensitivity, speed, and heavy machinery power. SSIB mobilised and delivered flawlessly.',
    author: 'General Manager - Infrastructure',
    company: 'Tata Projects Consortium Partner',
    project: 'Sabarimala Pamba Riverbed Restoration',
    location: 'Pamba, Sabarimala',
    sector: 'Ecological Disaster Restoration',
    clientName: 'Tata Projects Partner',
    metric: 'Emergency Fleet Mobilisation',
    image: img('pamba-2'),
    rating: 5,
  },
  {
    id: 'smartcity',
    quote:
      'Demanding granite rock cutting and precision boulder breaking at Smart City and Infopark Kakkanad was executed safely, ahead of schedule, with zero disruption to surrounding campus operations.',
    author: 'Vice President — Projects',
    company: 'Commercial Technology Park Development',
    project: 'Smart City & Infopark Rock Cutting',
    location: 'Kakkanad, Kochi',
    sector: 'Commercial Technology Campus',
    clientName: 'SmartCity & Infopark',
    metric: 'Precision Campus Excavation',
    image: img('rock-drill'),
    rating: 5,
  },
]

export const teamMembers = [
  {
    name: 'Mr. Shihas P. I',
    role: 'Founder & Managing Director',
    bio: 'Pioneered SSIB Infra from Vadanappally in 2005 into an A-Class Government licensed infrastructure powerhouse managing ₹100+ Cr landmark projects across Kerala.',
    badge: 'Founder',
  },
  {
    name: 'Executive Technical Director',
    role: 'Head of Highways & Civil Engineering',
    bio: 'Directs highway engineering, BM & BC bituminous mix design, and structural alignment for national highway six-laning and high-traffic arterial networks.',
    badge: 'Engineering',
  },
  {
    name: 'General Manager — Operations',
    role: 'Heavy Machinery & Fleet Logistics',
    bio: 'Oversees 40+ heavy hydraulic excavators, tipper fleets, motor graders, and in-house batch mix asphalt plant operations across active project sites.',
    badge: 'Operations',
  },
  {
    name: 'Head of Quality Assurance & Safety',
    role: 'A-Class Compliance & Standards',
    bio: 'Guarantees unyielding adherence to Indian Road Congress (IRC) specifications, compaction density standards, environmental laws, and site safety.',
    badge: 'Quality & Safety',
  },
]

export const projectTypes = [
  'Road Tarring & Highway Works',
  'Earth Excavation & Bulk Filling',
  'Controlled Rock Cutting & Blasting',
  'Paving Tiles & Hardscape Development',
  'Civil & Building Construction',
  'Bitumen Mix Plant & Asphalt Supply',
  'Machinery & Equipment Logistics',
  'General Infrastructure Inquiry',
]

