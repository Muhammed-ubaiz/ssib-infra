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
  {
    src: img('nh66-shivalaya-earthworks-fleet.jpg'),
    alt: 'NH 66 Six-Laning Earthworks & Hill Cutting for Shivalaya Construction Ltd',
    project: 'NH 66 Six-Laning Bulk Earthworks (₹100 Cr)',
    location: 'Kappirikkad – Kodungallur, NH 66',
    tag: 'Bulk Earthworks & Excavator Fleet',
  },
  {
    src: img('tea-estate-highway-paving.jpg'),
    alt: 'Choondi–Meppadi–Vaduvanchal NH — Bituminous asphalt paving through Wayanad tea estates',
    project: 'Choondi–Meppadi–Vaduvanchal 15 km NH',
    location: 'Wayanad, Kerala',
    tag: 'Highway Road Tarring',
  },
  {
    src: img('resort-curb-road-finished.jpg'),
    alt: 'Finished asphalt roadway with curbstone drainage and green medians',
    project: 'Finished Highway Corridor & Kerb Drainage',
    location: 'Township Infrastructure, Kerala',
    tag: 'Bituminous Macadam & Curbs',
  },
  {
    src: img('volvo-roller-compaction.jpg'),
    alt: 'Volvo asphalt vibratory compactor rolling fresh bituminous layer',
    project: 'Volvo Tandem Vibratory Compaction Fleet',
    location: 'Highway Division, Kerala',
    tag: 'Heavy Machinery & Rolling',
  },
  {
    src: img('township-road-bitumen-tarring.jpg'),
    alt: 'High-rise residential township — Bituminous road tarring and heavy rolling',
    project: 'Township Arterial Road Network',
    location: 'Ernakulam, Kerala',
    tag: 'Dense Bituminous Macadam (DBM)',
  },
  {
    src: img('crowne-plaza-entrance-paved.jpg'),
    alt: 'Finished interlocking paver entrance and driveway at Crowne Plaza Kochi',
    project: 'Crowne Plaza Kochi — Main Entrance',
    location: 'Maradu, Kochi',
    tag: 'Precision Interlocking Pavers',
  },
  {
    src: img('apollo-sensor-paver-highway.jpg'),
    alt: 'Apollo AP 600 sensor paver laying hot mix asphalt on highway works',
    project: 'Apollo AP 600 Sensor Paver Operations',
    location: 'NH Paving Division, Kerala',
    tag: 'Hot-Mix Bitumen Concrete',
  },
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
    image: img('nh66-shivalaya-hill-cutting.jpg'),
    alt: 'Heavy excavator fleet and tipper trucks executing NH 66 hill cutting and bulk earthworks for Shivalaya Construction Ltd',
  },
  {
    id: 'rock',
    title: 'Rock Cutting',
    short: 'Controlled rock work',
    description:
      'Rock cutting and boulder breaking for site development on demanding terrain — from Smart City Kochi to the Idukki Medical College site.',
    highlights: ['Smart City, Kochi', 'Infopark, Kochi', 'Idukki Medical College'],
    image: img('jcb-paving-excavation.jpg'),
    alt: 'Heavy excavation, controlled cutting and site preparation on rugged terrain',
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
    title: 'NH 66 Six-Laning Earthworks & Hill Cutting',
    location: 'Kappirikkad – Kodungallur, NH 66',
    client: 'Shivalaya Construction Ltd',
    category: 'Earthworks',
    value: '₹100 Cr',
    status: 'Current',
    image: img('nh66-shivalaya-earthworks-fleet.jpg'),
    alt: 'Massive heavy earthmoving excavator fleet executing hill cutting on NH 66 for Shivalaya Construction Ltd',
    specs: '₹100 Cr Bulk Earthworks · Multi-Excavator Heavy Tipper Fleet',
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
  {
    title: 'Sobha Marina One, Kochi',
    location: 'Marine Drive, Kochi',
    client: 'Sobha Limited',
    category: 'Earthworks',
    value: '₹6 Cr',
    status: 'Completed',
    image: img('sobha-marina-one-kochi.webp'),
    alt: 'Sobha Marina One waterfront residential landmark in Kochi with SSIB bulk earthworks and site formation',
    specs: 'Bulk Earthworks · Waterfront Site Formation & Leveling',
  },
  {
    title: 'Sobha City (Silver Estate), Thrissur',
    location: 'Thrissur, Kerala',
    client: 'Sobha Limited',
    category: 'Earthworks',
    value: '₹4 Cr',
    status: 'Completed',
    image: img('sobha-city-thrissur-roadway.jpg'),
    alt: 'Finished township asphalt roadway and interlocking walkways at Sobha City Silver Estate, Thrissur',
    specs: 'Township Bulk Earthworks · Asphalt Roadways & Hardscape',
  },
  {
    title: 'Marriott Hotels Kochi — Paving & Access',
    location: 'Kochi, Kerala',
    client: 'Marriott / Lulu Group',
    category: 'Paving Tiles',
    value: '₹1 Cr',
    status: 'Completed',
    image: img('marriott-kochi-paving-twilight.jpg'),
    alt: 'Heavy-duty interlocking paver driveway and entrance forecourt at Marriott Kochi',
    specs: 'Interlocking Paver Plazas · Arterial Entry Road Tarring',
  },
  {
    title: 'SmartCity Kochi — Rock Cutting & Site Prep',
    location: 'Kakkanad, Kochi',
    client: 'Sands Infra Build / SmartCity',
    category: 'Rock Cutting',
    value: '₹4 Cr',
    status: 'Completed',
    image: img('smartcity-kochi-gateway-road.webp'),
    alt: 'SmartCity Kochi IT township entrance gateway and campus arterial roadway',
    specs: 'Controlled Hydraulic Rock Cutting · Benching & Subgrade',
  },
  {
    title: 'UST Global, Technopark, Trivandrum',
    location: 'Technopark, Trivandrum',
    client: 'Sobha Limited',
    category: 'Road Tarring',
    value: '₹2 Cr',
    status: 'Completed',
    image: img('ust-global-technopark-trivandrum.jpg'),
    alt: 'UST Global campus at Technopark Trivandrum showing bituminous tarred road and paver walkway',
    specs: 'Campus Bituminous Road Tarring · Kerb & Paver Walkways',
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
  { name: 'Sabarimala Pamba riverbed desiltation & restoration', client: 'Tata', category: 'Restoration' },
  { name: 'Emergency flood protection embankments & boulder pitching', client: 'Tata', category: 'Earthworks' },
  { name: 'Pilgrim approach walkway grading & site formation', client: 'Tata', category: 'Civil Works' },
  { name: 'Heavy excavation machinery & tipper fleet deployment', client: 'Tata', category: 'Equipment' },
  { name: 'Marriott Courtyard entry driveways & arterial road tarring', client: 'Marriott', category: 'Road Tarring' },
  { name: 'Heavy-duty interlocking paver drop-off zones & plazas', client: 'Marriott', category: 'Paving Tiles' },
  { name: 'Subgrade formation, perimeter drainage & compaction', client: 'Marriott', category: 'Earthworks' },
  { name: 'SmartCity IT Township precision rock cutting & excavation', client: 'Smart City', category: 'Rock Cutting' },
  { name: 'Controlled hydraulic rock splitting & benching', client: 'Smart City', category: 'Rock Cutting' },
  { name: 'Campus arterial road subgrade & site leveling', client: 'Smart City', category: 'Earthworks' },
  { name: 'Crowne Plaza Kochi — Arterial access road tarring', client: 'Crowne Plaza', category: 'Road Tarring' },
  { name: 'Heavy-duty commercial service & logistics avenues', client: 'Crowne Plaza', category: 'Road Tarring' },
  { name: 'Interlocking paver guest parking & perimeter roads', client: 'Crowne Plaza', category: 'Paving Tiles' },
  { name: 'Heavy civil & highway earthworks joint operations', client: 'Galfar', category: 'Earthworks' },
  { name: 'Bulk subgrade formation, soil filling & compaction', client: 'Galfar', category: 'Earthworks' },
  { name: 'Heavy earthmoving fleet mobilization for highway packages', client: 'Galfar', category: 'Civil Works' },
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
    id: 'shivalaya',
    name: 'Shivalaya',
    brand: 'Shivalaya Construction Limited',
    subtitle: 'National Highway Infrastructure',
    logo: '/images/clients/shivalaya.png',
    badge: '/images/clients/shivalaya.png',
    location: 'NH 66 Corridor, Kerala',
    scope: 'Six-Laning Bulk Earthworks, Hill Cutting & Toll Plazas',
    value: '₹103.5 Cr',
    match: 'Shivalaya',
  },
  {
    id: 'grand-hyatt',
    name: 'Grand Hyatt',
    brand: 'Grand Hyatt Kochi Bolgatty',
    subtitle: 'Luxury Hospitality & Conventions',
    logo: '/images/clients/grand-hyatt.svg',
    badge: '/images/clients/grand-hyatt.svg',
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
    logo: '/images/clients/galfar.svg',
    badge: '/images/clients/galfar.svg',
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
    badge: '/images/clients/grand-hyatt.svg',
    location: 'Bolgatty Island, Kochi',
    overview: 'Full-scale civil infrastructure contracting across the premier 26-acre island resort & international convention centre, featuring heavy-duty road tarring, promenade paving, and site formation.',
  },
  {
    name: 'Tata',
    full: 'Tata Projects / Tata Group',
    match: 'Tata',
    logo: '/images/clients/tata.svg',
    location: 'Sabarimala, Kerala',
    overview: 'High-priority emergency riverbed restoration, riverbank protection with boulder pitching, and rapid pilgrim pathway civil infrastructure along the sacred Pamba river corridor executed in consortium with Tata Projects.',
  },
  {
    name: 'Marriott',
    full: 'Marriott Hotels & Resorts (Courtyard by Marriott)',
    match: 'Marriott',
    logo: '/images/clients/marriott.svg',
    location: 'Nedumbassery, Kochi Airport',
    overview: 'Turnkey vehicular access infrastructure, heavy-duty service road bituminous tarring, and terminal drop-off interlocking pavers for Courtyard by Marriott adjacent to Cochin International Airport (CIAL).',
  },
  {
    name: 'SmartCity Kochi',
    full: 'SmartCity Kochi (TECOM Group & Govt. of Kerala)',
    match: 'Smart City',
    logo: '/images/clients/smartcity.png',
    location: 'Kakkanad, Kochi',
    overview: 'Specialized hydraulic rock cutting, mechanical excavation, and foundational site preparation across key corporate parcels of the integrated IT business township.',
  },
  {
    name: 'Crowne Plaza',
    full: 'Crowne Plaza Hotels & Resorts (IHG)',
    match: 'Crowne Plaza',
    logo: '/images/clients/crowne-plaza.svg',
    location: 'Maradu, Kochi',
    overview: 'Renovation and complete paving of arterial access roads, multi-tier guest parking bays, and heavy logistics delivery avenues for the luxury 5-star hotel.',
  },
  {
    name: 'Galfar',
    full: 'Galfar Engineering & Contracting SAOG',
    match: 'Galfar',
    logo: '/images/clients/galfar.svg',
    location: 'Kerala & Regional Hubs',
    overview: 'Heavy civil subcontracting, bulk earthworks, and specialized machinery fleet mobilization for major highway and civil corridor projects.',
  },
  {
    name: 'Lulu Group',
    full: 'Lulu Group International',
    match: 'Lulu',
    location: 'Kochi, Kozhikode, Thrissur',
    overview: 'Longstanding infrastructure execution partner delivering road tarring, decorative paving, and deep site earthworks across flagship shopping malls and convention centers.',
  },
  {
    name: 'Sobha',
    full: 'Sobha Limited',
    match: 'Sobha',
    location: 'Kochi & Thrissur',
    overview: 'Landmark site leveling, controlled earthworks, and campus road infrastructure for Sobha City Thrissur and the Marina One waterfront complex in Kochi.',
  },
  {
    name: 'Shivalaya Construction',
    full: 'Shivalaya Construction Limited',
    match: 'Shivalaya',
    logo: '/images/clients/shivalaya.png',
    badge: '/images/clients/shivalaya.png',
    location: 'NH 66 Corridor, Kerala',
    overview: 'Mega-scale highway contracting executing bulk earthworks, subgrade formation, and toll plaza infrastructure across the Kappirikkad–Kodungallur stretch.',
  },
  {
    name: 'Sands Infra Build',
    full: 'Sands Infra Build Private Limited',
    match: 'Sands Infra Build',
    location: 'SmartCity, Kochi',
    overview: 'Large-scale rock cutting, foundational benching, and site formation for corporate IT infrastructure towers in Kakkanad.',
  },
  {
    name: 'RSDCPL',
    full: 'RS Development & Constructions India (P) Ltd, Erode',
    match: 'RS Development',
    location: 'Wayanad & Ernakulam',
    overview: 'Extensive 15 km National Highway road tarring through Choondi–Meppadi–Vaduvanchal and large-scale earthworks for Kinfra Kakkanad Infopark.',
  },
  {
    name: 'Prathien Infrastructures',
    full: 'Prathien Infrastructures, Coimbatore',
    match: 'Prathien',
    location: 'Thrissur, Kerala',
    overview: 'Execution of critical KIIFB-funded highway modernization, subbase compaction, and bituminous tarring across the Kecheri–Akkikavu corridor.',
  },
  {
    name: 'ABM Civil Ventures',
    full: 'ABM Civil Ventures',
    match: 'ABM',
    location: 'Piravom, Ernakulam',
    overview: 'Complete site formation, slope cutting, and bulk earthworks for the hillside Chinmaya University institutional campus.',
  },
  {
    name: 'EKK Infrastructure',
    full: 'EKK Infrastructure Limited',
    match: 'EKK',
    location: 'Mahe Bypass, Kerala',
    overview: 'Precision bituminous paving and heavy earthworks subcontracts for the landmark Mahe Bypass connectivity corridor.',
  },
  {
    name: 'Claysys',
    full: 'Claysys Technologies',
    match: 'Claysys',
    location: 'Infopark Phase II, Kochi',
    overview: 'Controlled hydraulic rock cutting, mechanical breaking, and foundational excavation for corporate IT office complexes.',
  },
  {
    name: 'Rightedge Infrastructures',
    full: 'Rightedge Infrastructures Pvt Ltd',
    match: 'Rightedge',
    location: 'Idukki, Kerala',
    overview: 'Mountainous terrain rock excavation, foundation leveling, and access road cutting for Idukki Government Medical College.',
  },
  {
    name: 'Kalamassery Municipality',
    full: 'Kalamassery Municipal Corporation',
    match: 'Kalamassery',
    location: 'Kalamassery, Ernakulam',
    overview: 'Public works road modernization delivering Bituminous Macadam (BM) and Bituminous Concrete (BC) tarring across over 30 municipal road networks.',
  },
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
  'Machinery',
  'Earthworks',
  'Rock Cutting',
  'Building',
]

export const gallery = [
  // Highway & Road Tarring (High-Definition Project Site Photography)
  { src: img('tea-estate-highway-paving.jpg'), category: 'Road Tarring', caption: 'Choondi–Meppadi–Vaduvanchal NH — Bituminous asphalt paving through Wayanad tea estates' },
  { src: img('ust-global-technopark-trivandrum.jpg'), category: 'Road Tarring', caption: 'UST Global, Technopark, Trivandrum — Bituminous campus road tarring & interlocking paver walkways (Sobha)' },
  { src: img('sobha-city-thrissur-roadway.jpg'), category: 'Road Tarring', caption: 'Sobha City (Silver Estate), Thrissur — Finished township bituminous roadway and landscaped curb walkways' },
  { src: img('sobha-city-thrissur-aerial.jpg'), category: 'Road Tarring', caption: 'Sobha City (Silver Estate), Thrissur — Aerial corridor of residential villa estate roadways' },
  { src: img('resort-curb-road-finished.jpg'), category: 'Road Tarring', caption: 'Township access road — Finished bituminous asphalt with curbstone drainage & green medians' },
  { src: img('township-road-bitumen-tarring.jpg'), category: 'Road Tarring', caption: 'High-rise residential township — Bituminous road tarring and heavy rolling' },
  { src: img('wayanad-nh-scenic-highway.jpg'), category: 'Road Tarring', caption: 'Choondi–Meppadi–Vaduvanchal 15 km NH — Finished asphalt highway corridor' },
  { src: img('resort-tarring-fleet.jpg'), category: 'Road Tarring', caption: 'Campus roadway tarring — Tipper trucks and bituminous paving crew in action' },
  { src: img('township-road-grading-inspection.jpg'), category: 'Road Tarring', caption: 'Township road formation — Site engineers inspecting subgrade rolling' },
  { src: img('parking-bay-tarring.jpg'), category: 'Road Tarring', caption: 'Commercial parking bays — Bituminous asphalt surface layer compaction' },
  { src: img('resort-driveway-tarring.jpg'), category: 'Road Tarring', caption: 'Resort driveway paving — Hot mix asphalt application and rolling team' },

  // Precision Paving Tiles
  { src: img('crowne-plaza-entrance-paved.jpg'), category: 'Paving Tiles', caption: 'Crowne Plaza Kochi — Main entrance interlock paving with border landscaping' },
  { src: img('marriott-kochi-paving-twilight.jpg'), category: 'Paving Tiles', caption: 'Marriott Kochi — Heavy-duty interlocking paver entrance driveway and architectural forecourt' },
  { src: img('marriott-kochi-entrance-plaza.jpg'), category: 'Paving Tiles', caption: 'Marriott Kochi — Drop-off portico interlocking paver plaza and arterial access roadway' },
  { src: img('crowne-plaza-paving-finished.jpg'), category: 'Paving Tiles', caption: 'Crowne Plaza Kochi — Finished heavy-duty interlocking paver roadway' },
  { src: img('campus-drainage-pavers.jpg'), category: 'Paving Tiles', caption: 'Commercial campus — Interlocking paving blocks with stormwater drainage integration' },
  { src: img('commercial-parking-interlock.jpg'), category: 'Paving Tiles', caption: 'Commercial convention complex — Heavy-duty interlocking paver installation' },
  { src: img('crowne-plaza-driveway.jpg'), category: 'Paving Tiles', caption: 'Crowne Plaza Kochi — Architectural interlock entrance approach' },
  { src: img('crowne-plaza-paving-prep.jpg'), category: 'Paving Tiles', caption: 'Subgrade and sand bedding preparation for interlocking paver installation' },

  // Heavy Machinery & Specialized Paver Fleet
  { src: img('apollo-sensor-paver-highway.jpg'), category: 'Machinery', caption: 'Apollo AP 600 sensor paver laying hot mix asphalt on highway works' },
  { src: img('volvo-roller-compaction.jpg'), category: 'Machinery', caption: 'Volvo asphalt vibratory compactor rolling fresh bituminous layer' },
  { src: img('nh66-shivalaya-volvo-shihas-fleet.jpg'), category: 'Machinery', caption: 'SSIB owned fleet — Volvo excavator and Tata Prima heavy tipper on NH 66 corridor' },
  { src: img('nh66-shivalaya-nhai-tippers.jpg'), category: 'Machinery', caption: 'Heavy-duty tippers on active NHAI duty executing bulk earthmoving' },
  { src: img('nh66-shivalaya-volvo-excavator-action.jpg'), category: 'Machinery', caption: 'High-reach Volvo excavator executing vertical bank cutting on highway corridor' },
  { src: img('jcb-paving-excavation.jpg'), category: 'Machinery', caption: 'JCB backhoe loader leveling and preparing roadway alignment' },
  { src: img('road-roller-access-way.jpg'), category: 'Machinery', caption: 'Tandem road roller executing sub-base leveling on site access corridor' },

  // Earthworks (NH 66 Six-Laning, Sobha & SmartCity Landmark Sites)
  { src: img('nh66-shivalaya-earthworks-fleet.jpg'), category: 'Earthworks', caption: 'NH 66 Six-Laning — Multi-excavator and tipper fleet cutting laterite hill for Shivalaya Construction Ltd' },
  { src: img('sobha-marina-one-kochi.webp'), category: 'Earthworks', caption: 'Sobha Marina One, Kochi — Waterfront bulk earthworks, site leveling and campus formation' },
  { src: img('smartcity-kochi-gateway-road.webp'), category: 'Earthworks', caption: 'SmartCity Kochi IT Township — Campus arterial road subgrade formation and site leveling' },
  { src: img('nh66-shivalaya-hill-cutting.jpg'), category: 'Earthworks', caption: 'NH 66 Kappirikkad–Kodungallur — Massive hill excavation, benching and subgrade formation' },
  { src: img('nh66-shivalaya-excavator-loading.jpg'), category: 'Earthworks', caption: 'NH 66 Highway Corridor — Heavy hydraulic excavator loading excavated soil into tipper truck' },
  { src: img('nh66-shivalaya-mass-excavation.jpg'), category: 'Earthworks', caption: 'NH 66 Earthworks Section — Bench cutting and mass earth excavation operations' },
  { src: img('nh66-shivalaya-earthmoving-haulage.jpg'), category: 'Earthworks', caption: 'NH 66 Corridor — Heavy tipper fleet haulage along fresh cut highway alignment' },
  { src: img('nh66-shivalaya-tipper-front.jpg'), category: 'Earthworks', caption: 'NH 66 Site Logistics — Heavy-duty Tata tipper and excavator clearing highway alignment' },
  { src: img('subgrade-earthworks-bulldozer.jpg'), category: 'Earthworks', caption: 'Subgrade formation and bulk earthworks with bulldozer and engineering team' },

  // Controlled Rock Cutting & Site Preparation
  { src: img('smartcity-kochi-twin-towers.jpg'), category: 'Rock Cutting', caption: 'SmartCity Kochi (Sands Infra Build) — Controlled hydraulic rock cutting & foundational site preparation for twin IT towers' },

  // Commercial & Institutional Building Works
  { src: img('nhai-toll-plaza-building.jpg'), category: 'Building', caption: 'NHAI Toll Plaza & Administrative Building — Multi-lane elevated toll facility on NH 66 corridor' },
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
    image: img('township-road-bitumen-tarring.jpg'),
  },
  {
    num: '02',
    title: 'Civil Engineering',
    category: 'Bulk Earth Excavation & Filling',
    description: 'Large-scale bulk excavation, earth cutting, grading, and site formation driven by our owned fleet of hydraulic excavators, graders, and tippers.',
    highlights: ['NH 66 Six-Laning (₹100 Cr)', 'Sobha Marina One', 'Chinmaya University'],
    image: img('nh66-shivalaya-hill-cutting.jpg'),
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
    image: img('crowne-plaza-paving-finished.jpg'),
  },
  {
    num: '05',
    title: 'Project Management',
    category: 'Controlled Rock Works & Logistics',
    description: 'Controlled rock cutting, boulder breaking, and site leveling under rigorous engineering oversight and synchronized equipment fleet dispatch.',
    highlights: ['Smart City Kochi', 'Infopark Kakkanad', 'Idukki Medical College'],
    image: img('jcb-paving-excavation.jpg'),
  },
  {
    num: '06',
    title: 'Renovation & Development',
    category: 'Restoration & Asphalt Supply',
    description: 'High-speed ecological flood restoration and in-house hot mix asphalt production from our own batch mix and drum mix plants.',
    highlights: ['Sabarimala Pamba Restoration', 'Bitumen Batch Mix Plant', 'Drum Mix Plant (90–120 TPH)'],
    image: img('resort-tarring-fleet.jpg'),
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
    image: img('nh66-shivalaya-earthworks-fleet.jpg'),
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
    image: img('crowne-plaza-entrance-paved.jpg'),
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
    image: img('wayanad-nh-scenic-highway.jpg'),
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
    image: img('smartcity-kochi-gateway-road.webp'),
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

