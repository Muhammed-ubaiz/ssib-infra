// All company content below is taken from "SSIB INFRA COMPANY PROFILE 2026.pdf".
// Edit these arrays to update the website — components read from here only.

const img = (name) => `/images/${name}.webp`

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
  // Not in the company profile — add when confirmed (shown automatically once set).
  whatsapp: null, // e.g. '919846902000'
  hours: null, // e.g. 'Mon – Sat, 9:30 am – 6:00 pm'
  social: [], // e.g. [{ label: 'Facebook', href: 'https://…' }]
}

// Page order follows the website quotation: Home • About • Projects • Services • Contact
export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Our Services' },
  { to: '/contact', label: 'Contact Us' },
]

export const heroSlides = [
  { src: img('road-paving-aerial'), alt: 'Aerial view of a highway being paved' },
  { src: img('nh66-earthworks'), alt: 'Excavator loading a tipper on the NH 66 earthworks site' },
  { src: img('tarring-works'), alt: 'Paver and roller laying a bituminous road surface' },
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
    image: img('tarring-works'),
    alt: 'Asphalt paver and roller laying a new bituminous road surface',
  },
  {
    id: 'earthworks',
    title: 'Earth Excavation & Filling',
    short: 'Bulk earthworks',
    description:
      'Large-volume excavation, filling and site formation — including the earthworks for six-laning of NH 66 between Kappirikkad and Kodungallur.',
    highlights: ['NH 66 six-laning (₹100 Cr)', 'Sobha Marina One, Kochi', 'Chinmaya University, Piravom'],
    image: img('nh66-trucks'),
    alt: 'Tipper trucks loading on an SSIB earthworks site',
  },
  {
    id: 'rock',
    title: 'Rock Cutting',
    short: 'Controlled rock work',
    description:
      'Rock cutting and boulder breaking for site development on demanding terrain — from Smart City Kochi to the Idukki Medical College site.',
    highlights: ['Smart City, Kochi', 'Infopark, Kochi', 'Idukki Medical College'],
    image: img('rock-drill'),
    alt: 'Rock drilling rig working on a cut granite face at an SSIB site',
  },
  {
    id: 'paving',
    title: 'Paving Tiles',
    short: 'Interlock & hardscape',
    description:
      'Paving tile works for hospitality, retail and IT campuses, delivering durable, finished outdoor surfaces.',
    highlights: ['Grand Hyatt, Bolgatty', 'Lulu International Shopping Mall, Kozhikode', 'Cyber Tower, Infopark Kakkanad'],
    image: img('paving-promenade'),
    alt: 'Paved promenade with grey interlocking tiles beside water',
  },
  {
    id: 'building',
    title: 'Building Works',
    short: 'Civil construction',
    description:
      'Construction of toll buildings, institutional and support buildings, from structure to finishing.',
    highlights: ['Toll building, Shivalaya Construction', 'Central Kitchen, Lulu', 'Hidayathul Islam Madrassa'],
    image: img('toll-building'),
    alt: 'Multi-storey toll building under construction by SSIB',
  },
  {
    id: 'bitumen',
    title: 'Bitumen Mix Plants',
    short: 'In-house asphalt supply',
    description:
      'Our own bitumen batch mix plant and bitumen drum mix plant (90–120, 60–90) supply hot mix directly to our road projects.',
    highlights: ['Bitumen batch mix plant', 'Bitumen drum mix plant', 'Listed capacities: 90–120, 60–90'],
    image: img('bitumen-batch'),
    alt: 'Bitumen batch mix plant with storage tanks and tipper trucks',
  },
]

export const projectCategories = ['All', 'Road Tarring', 'Earthworks', 'Rock Cutting', 'Paving Tiles', 'Building', 'Restoration']

// Featured projects with genuine site photography from the company profile.
export const featuredProjects = [
  {
    title: 'NH 66 Six-Laning — Earthworks',
    location: 'Kappirikkad to Kodungallur section',
    client: 'Shivalaya Construction Limited',
    category: 'Earthworks',
    value: '₹100 Cr',
    status: 'Current',
    image: img('nh66-earthworks'),
    alt: 'Volvo excavator loading a tipper on the NH 66 earthworks site',
  },
  {
    title: 'Toll Building & Related Works',
    location: null,
    client: 'Shivalaya Construction Limited',
    category: 'Building',
    value: '₹3.5 Cr',
    status: 'Current',
    image: img('toll-building'),
    alt: 'Toll building structure under construction',
  },
  {
    title: 'Sabarimala Pamba Restoration',
    location: 'Pamba, Sabarimala',
    client: 'Tata',
    category: 'Restoration',
    value: '₹5 Cr',
    status: null,
    image: img('pamba-2'),
    alt: 'Excavators restoring the Pamba riverbed',
  },
  {
    title: 'Rock Cutting Programme',
    location: 'Smart City · Infopark · Idukki Medical College',
    client: 'Sands Infra Build · Claysys · Rightedge',
    category: 'Rock Cutting',
    value: '₹11 Cr',
    status: null,
    image: img('rock-cut-2'),
    alt: 'Freshly cut rock face at a site development project',
  },
  {
    title: 'Central Kitchen',
    location: null,
    client: 'Lulu',
    category: 'Building',
    value: null,
    status: null,
    image: img('central-kitchen'),
    alt: 'Three-storey central kitchen building with blue steel staircases',
  },
  {
    title: 'Hidayathul Islam Madrassa',
    location: 'Ponnarimangalam',
    client: null,
    category: 'Building',
    value: null,
    status: null,
    image: img('madrassa'),
    alt: 'Two-storey madrassa building with arched verandas',
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
]

// `match` links each client to its entries in allProjects (by the start of the client field).
export const clients = [
  { name: 'Lulu', match: 'Lulu' },
  { name: 'Tata', match: 'Tata' },
  { name: 'Sobha', match: 'Sobha' },
  { name: 'Sands Infra Build', match: 'Sands Infra Build' },
  { name: 'RSDCPL', full: 'RS Development & Constructions India (P) Ltd, Erode', match: 'RS Development' },
  { name: 'Prathien Infrastructures', full: 'Coimbatore', match: 'Prathien' },
  { name: 'ABM Civil Ventures', match: 'ABM' },
  { name: 'EKK Infrastructure', full: 'Perumbavoor', match: 'EKK' },
  { name: 'Claysys', match: 'Claysys' },
  { name: 'Rightedge Infrastructures', full: 'Rightedge Infrastructures Pvt Ltd', match: 'Rightedge' },
  { name: 'Shivalaya Construction', full: 'Shivalaya Construction Limited', match: 'Shivalaya' },
  { name: 'Kalamassery Municipality', match: 'Kalamassery' },
]

export const strengths = [
  {
    icon: 'BadgeCheck',
    title: 'A-Class Contractor licence',
    text: 'A track record of successful execution earned SSIB an A-Class Contractor licence to undertake Government projects.',
  },
  {
    icon: 'Truck',
    title: 'Our own machinery fleet',
    text: 'Excavators, pavers, rollers, motor graders, backhoe loaders and tipper trucks — owned and operated in-house.',
  },
  {
    icon: 'Factory',
    title: 'In-house bitumen plants',
    text: 'Our bitumen batch mix and drum mix plants keep asphalt supply for our road works under our own control.',
  },
  {
    icon: 'Handshake',
    title: 'Trusted by leading developers',
    text: 'Repeat work for Lulu, Sobha, Tata and other major names across hospitality, IT parks and highways.',
  },
  {
    icon: 'Users',
    title: 'People-oriented, with integrity',
    text: 'Committed, open and honest — the dedication of our staff and subcontractors is at the heart of our quality.',
  },
  {
    icon: 'Leaf',
    title: 'Responsible operations',
    text: 'Consideration for the environment and respect for laws and regulations guide how we work on every site.',
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

// Project gallery — genuine site photography from the company profile, grouped by work type.
export const galleryCategories = ['All', 'Earthworks', 'Rock Cutting', 'Building', 'Restoration', 'Bitumen Plant', 'Machinery']

export const gallery = [
  { src: img('nh66-earthworks'), category: 'Earthworks', caption: 'NH 66 six-laning earthworks' },
  { src: img('nh66-loading'), category: 'Earthworks', caption: 'NH 66 — excavation and loading' },
  { src: img('nh66-trucks'), category: 'Earthworks', caption: 'NH 66 — tipper fleet on site' },
  { src: img('earth-excavator'), category: 'Earthworks', caption: 'Excavation on a red-earth cutting' },
  { src: img('earth-loading'), category: 'Earthworks', caption: 'Excavator loading tippers' },
  { src: img('rock-drill'), category: 'Rock Cutting', caption: 'Rock drilling on a cut granite face' },
  { src: img('rock-cut-1'), category: 'Rock Cutting', caption: 'Rock cutting for site development' },
  { src: img('rock-cut-2'), category: 'Rock Cutting', caption: 'Finished rock-cut face' },
  { src: img('rock-breaker'), category: 'Rock Cutting', caption: 'Boulder breaking' },
  { src: img('toll-building'), category: 'Building', caption: 'Toll building under construction' },
  { src: img('toll-plaza'), category: 'Building', caption: 'Toll plaza and building works' },
  { src: img('central-kitchen'), category: 'Building', caption: 'Central Kitchen for Lulu' },
  { src: img('madrassa'), category: 'Building', caption: 'Hidayathul Islam Madrassa, Ponnarimangalam' },
  { src: img('pamba-2'), category: 'Restoration', caption: 'Sabarimala Pamba restoration' },
  { src: img('pamba-3'), category: 'Restoration', caption: 'Pamba riverbed restoration' },
  { src: img('pamba-1'), category: 'Restoration', caption: 'Excavators at work on the Pamba' },
  { src: img('pamba-flood'), category: 'Restoration', caption: 'Pamba restoration after the floods' },
  { src: img('bitumen-batch'), category: 'Bitumen Plant', caption: 'Bitumen batch mix plant' },
  { src: img('drum-mix-1'), category: 'Bitumen Plant', caption: 'Bitumen drum mix plant' },
  { src: img('drum-mix-2'), category: 'Bitumen Plant', caption: 'Drum mix plant storage tanks' },
  { src: img('drum-mix-3'), category: 'Bitumen Plant', caption: 'Drum mix plant feed conveyor' },
  { src: img('machine-grader'), category: 'Machinery', caption: 'Motor grader' },
  { src: img('fleet-trucks'), category: 'Machinery', caption: 'Tipper truck fleet' },
  { src: img('fleet-tipper'), category: 'Machinery', caption: 'Shihas & Co. tipper and excavator' },
]
