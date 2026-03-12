/**TCD Campus Map - Buildings Data
 FOR ADMIN:
 * Each building entry contains:
 *   id - unique slug identifier
 *   name  - display name
 *   shortDesc - brief description for map popup
 *   hours- opening hours (if applicable)
 *   categories  - array of category keys (see CATEGORIES below)
 *   coords- [latitude, longitude] — adjust via https://www.latlong.net/
 *   image - path to building image (replace placeholder when ready)
 *   pageUrl  - link to individual building subpage (add when subpages are built)
 
 * CATEGORIES (keys): academic | student-services | administrative | heritage | facilities | accessibility
 */
const CATEGORIES = {
  academic: {
    label: "Academic",
    colour: "#1A6BB5",
  },
  "student-services": {
    label: "Student Services",
    colour: "#8B2FC9",
  },
  administrative: {
    label: "Administrative",
    colour: "#0E8A6E",
  },
  heritage: {
    label: "Heritage and Cultural",
    colour: "#6B3FA0",
  },
  facilities: {
    label: "Facilities",
    colour: "#C97A1A",
  },
  accessibility: {
    label: "Accessibility",
    colour: "#C0392B",
  },
};

const BUILDINGS = [
  /* A */
  {
    id: "academic-registry",
    name: "Academic Registry",
    shortDesc: "Central hub for student academic records, exam administration and graduation ceremonies.",
    hours: "Mon-Fri 09:00-17:00",
    categories: ["student-services", "administrative"],
    coords: [53.3441, -6.2554],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-academic-registry",
  },
  {
    id: "aras-an-phiarsaigh",
    name: "Aras an Phiarsaigh",
    shortDesc: "Administrative building housing several college offices and departments.",
    hours: "Mon-Fri 09:00-17:00",
    categories: ["student-services", "administrative"],
    coords: [53.3436, -6.2590],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-aras-an-phiarsaigh",
  },
  {
    id: "arts-building",
    name: "Arts Building",
    shortDesc: "Home to humanities and social sciences departments. Houses the Disability Service and Equality, Diversity and Inclusion office on level 2 (Room 2054).",
    hours: "Mon-Fri 08:00-22:00",
    categories: ["academic", "accessibility"],
    coords: [53.3432, -6.2574],
    image: "images/arts.jpg",
    pageUrl: "artsbuilding.html",
  },
  {
    id: "atrium",
    name: "Atrium",
    shortDesc: "Modern social and study space at the heart of the campus for student life.",
    hours: "Mon-Fri 08:00-22:00",
    categories: ["student-services", "facilities"],
    coords: [53.3446, -6.2570],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-atrium",
  },
  /* B */
  {
    id: "berkeley-library",
    name: "Berkeley Library",
    shortDesc: "The main college library offering extensive collections, study spaces and digital resources.",
    hours: "Mon-Fri 08:00-22:00 | Sat-Sun 10:00-18:00",
    categories: ["academic"],
    coords: [53.3437, -6.2566],
    image: "images/bekerley.jpg",
    pageUrl: "#placeholder-berkeley-library",
  },
  {
    id: "tbsi",
    name: "Biomedical Sciences Institute (TBSI)",
    shortDesc: "State-of-the-art research facility focused on translational biomedical science.",
    hours: "Mon-Fri 08:00-18:00",
    categories: ["academic"],
    coords: [53.3423, -6.2528],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-tbsi",
  },
  {
    id: "buttery",
    name: "Buttery",
    shortDesc: "Popular campus cafe and social hub serving food and drinks throughout the day.",
    hours: "Mon-Fri 08:00-20:00",
    categories: ["facilities"],
    coords: [53.3441, -6.2583],
    image: "images/buttery.jpg",
    pageUrl: "#placeholder-buttery",
  },
  /* C */
  {
    id: "campanile",
    name: "Campanile",
    shortDesc: "Trinity's iconic 30-metre bell tower, the symbolic centrepiece of Front Square.",
    hours: "Accessible during campus open hours",
    categories: ["heritage"],
    coords: [53.3445, -6.2580],
    image: "images/campanile.jpg",
    pageUrl: "#placeholder-campanile",
  },
  {
    id: "chapel",
    name: "Chapel",
    shortDesc: "A beautifully preserved 18th-century chapel used for services and ceremonies.",
    hours: "Daily 08:00-18:00",
    categories: ["heritage"],
    coords: [53.3448, -6.2585],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-chapel",
  },
  /* D */
  {
    id: "students-hall",
    name: "Students Union",
    shortDesc: "The official representative body for all 20,000+ students at Trinity College Dublin.",
    hours: "Mon-Fri 09:00-17:00",
    categories: ["student-services"],
    coords: [53.3445, -6.2591],
    image: "images/students.union.jpg",
    pageUrl: "#placeholder-union",
  },
  /* E */
  {
    id: "exam-hall",
    name: "Exam Hall (Public Theatre)",
    shortDesc: "The Examination Hall, also known as the Public Theatre, hosts exams and major ceremonies.",
    hours: "Event-dependent",
    categories: ["heritage", "administrative"],
    coords: [53.3447, -6.2577],
    image: "images/exam.hall.jpg",
    pageUrl: "#placeholder-exam-hall",
  },

  /* G */
  {
    id: "gmb",
    name: "Graduates Memorial Building (GMB)",
    shortDesc: "Victorian building housing the Philosophical Society and other student societies.",
    hours: "Variable - check society schedules",
    categories: ["student-services"],
    coords: [53.3449, -6.2592],
    image: "images/graduate.memorial.jpg",
    pageUrl: "#placeholder-gmb",
  },
  /* H */
  {
    id: "hamilton-building",
    name: "Hamilton Building",
    shortDesc: "Modern building housing mathematics and computer science departments.",
    hours: "Mon-Fri 08:00-18:00",
    categories: ["academic"],
    coords: [53.3421, -6.2483],
    image: "images/hamilton.jpg",
    pageUrl: "#placeholder-hamilton-building",
  },
  {
    id: "hamilton-library",
    name: "Hamilton Library",
    shortDesc: "Specialist library supporting science and engineering faculties.",
    hours: "Mon-Fri 09:00-21:00 | Sat 10:00-17:00",
    categories: ["academic"],
    coords: [53.3420, -6.2482],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-hamilton-library",
  },
  {
    id: "health-sciences-centre",
    name: "Health Sciences Centre",
    shortDesc: "Integrates medical, dental and health science education and research.",
    hours: "Mon-Fri 08:00-18:00",
    categories: ["academic"],
    coords: [53.3418, -6.2538],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-health-sciences-centre",
  },
 
  /* J */
  {
    id: "james-ussher-library",
    name: "James Ussher Library",
    shortDesc: "Modern library facility providing study spaces and access to digital collections.",
    hours: "Mon-Fri 08:00-22:00 | Sat-Sun 10:00-18:00",
    categories: ["academic"],
    coords: [53.3430, -6.2560],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-james-ussher-library",
  },
  /* K */
  {
    id: "kinsella-hall",
    name: "Kinsella Hall",
    shortDesc: "24-hour study space providing round-the-clock access for students.",
    hours: "24 hours, 7 days a week",
    categories: ["facilities"],
    coords: [53.3428, -6.2572],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-kinsella-hall",
  },
  /* L */
  {
    id: "lecky-library",
    name: "Lecky Library",
    shortDesc: "Part of the Library Complex, specialising in arts, humanities and social sciences.",
    hours: "Mon-Fri 08:00-22:00 | Sat-Sun 10:00-18:00",
    categories: ["academic"],
    coords: [53.3431, -6.2558],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-lecky-library",
  },
  {
    id: "lloyd-institute",
    name: "Lloyd Institute",
    shortDesc: "Houses the School of Computer Science and Statistics.",
    hours: "Mon-Fri 08:00-18:00",
    categories: ["academic"],
    coords: [53.3454, -6.2503],
    image: "images/lloyd.jpg",
    pageUrl: "#placeholder-lloyd-institute",
  },
  {
    id: "luce-hall",
    name: "Luce Atrium",
    shortDesc: "Area for socializing and studying. Is a part of Business School.",
    hours: "Mon-Fri 09:00-23:00",
    categories: ["facilities"],
    coords: [53.3439, -6.2580],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-luce-hall",
  },
  /* M */
  {
    id: "microbiology-building",
    name: "Microbiology Building",
    shortDesc: "Research and teaching facility for the School of Microbiology.",
    hours: "Mon-Fri 08:00-18:00",
    categories: ["academic"],
    coords: [53.3450, -6.2507],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-microbiology-building",
  },
  {
    id: "museum-building",
    name: "Museum Building",
    shortDesc: "Victorian Venetian-Gothic gem housing geology, engineering and natural history collections.",
    hours: "Mon-Fri 09:00-17:00",
    categories: ["academic", "heritage"],
    coords: [53.3441, -6.2552],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-museum-building",
  },
  /* O */
  {
    id: "old-library",
    name: "Old Library",
    shortDesc: "Early 18th-century library renowned for its magnificent Long Room housing the Book of Kells.",
    hours: "09:30-17:00 | Mon-Sun",
    categories: ["heritage"],
    coords: [53.3438, -6.2576],
    image: "images/old.library.jpg",
    pageUrl: "#placeholder-old-library",
  },
  {
    id: "oreilly-institute",
    name: "O'Reilly Institute",
    shortDesc: "Houses research groups in computer science, electronics and telecommunications.",
    hours: "Mon-Fri 08:00-18:00",
    categories: ["academic"],
    coords: [53.3452, -6.2494],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-oreilly-institute",
  },
  /* P */
  {
    id: "parsons-building",
    name: "Parsons Building",
    shortDesc: "Home to the School of Engineering, containing workshops and research laboratories.",
    hours: "Mon-Fri 08:00-18:00",
    categories: ["academic"],
    coords: [53.3417, -6.2526],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-parsons-building",
  },
  {
    id: "pavilion-bar",
    name: "Pavilion Bar (The Pav)",
    shortDesc: "Beloved outdoor bar and social venue overlooking the cricket pitch on College Park.",
    hours: "Mon-Fri 12:00-23:00 | Sat 12:00-22:00",
    categories: ["facilities"],
    coords: [53.3430, -6.2522],
    image: "images/pav.jpg",
    pageUrl: "#placeholder-pavilion-bar",
  },
  {
    id: "printing-house",
    name: "Printing House",
    shortDesc: "18th-century Doric temple-fronted building, one of Trinity's most distinctive landmarks.",
    hours: "External viewing only",
    categories: ["heritage"],
    coords: [53.3449, -6.2571],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-printing-house",
  },
  {
    id: "printing-house-square",
    name: "Printing House Square",
    shortDesc: "Home to the disAbility Service hub, supporting students with disabilities across campus.",
    hours: "Mon-Fri 09:00-17:00",
    categories: ["student-services", "accessibility"],
    coords: [53.3450, -6.2567],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-printing-house-square",
  },
  {
    id: "provosts-house",
    name: "Provost's House",
    shortDesc: "Official residence of the Provost of Trinity College, a fine Georgian mansion.",
    hours: "Not open to the public",
    categories: ["administrative", "heritage"],
    coords: [53.3451, -6.2581],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-provosts-house",
  },
  /* R */
  {
    id: "regent-house",
    name: "Regent House",
    shortDesc: "The ceremonial entrance to Trinity College, used for formal college occasions.",
    hours: "Mon-Fri 09:00-17:00",
    categories: ["administrative"],
    coords: [53.3453, -6.2597],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-regent-house",
  },
  {
    id: "rubrics",
    name: "Rubrics",
    shortDesc: "The oldest surviving buildings on campus, dating to around 1700, now student accommodation.",
    hours: "Residential - no public access",
    categories: ["heritage"],
    coords: [53.3446, -6.2600],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-rubrics",
  },
  /* S */
  {
    id: "samuel-beckett-theatre",
    name: "Samuel Beckett Theatre",
    shortDesc: "Purpose-built theatre hosting drama productions, performances and cultural events.",
    hours: "Event-dependent",
    categories: ["heritage"],
    coords: [53.3442, -6.2601],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-samuel-beckett-theatre",
  },
  {
    id: "school-nursing-midwifery",
    name: "School of Nursing and Midwifery",
    shortDesc: "Dedicated facility for nursing and midwifery education, training and research.",
    hours: "Mon-Fri 08:00-18:00",
    categories: ["academic"],
    coords: [53.3416, -6.2557],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-school-nursing-midwifery",
  },
  {
    id: "science-gallery",
    name: "Science Gallery",
    shortDesc: "International science and art venue presenting free exhibitions for a young adult audience.",
    hours: "Tue-Fri 12:00-20:00 | Sat-Sun 10:00-18:00",
    categories: ["heritage"],
    coords: [53.3428, -6.2534],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-science-gallery",
  },
  {
    id: "sniam",
    name: "SNIAM (School of Natural Sciences)",
    shortDesc: "Facility supporting natural sciences teaching laboratories and research programmes.",
    hours: "Mon-Fri 08:00-18:00",
    categories: ["academic"],
    coords: [53.3456, -6.2506],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-sniam",
  },
  {
    id: "sports-centre",
    name: "Sports Centre",
    shortDesc: "Modern sports complex offering gym facilities, courts and a wide range of fitness classes.",
    hours: "Mon-Fri 07:00-22:00 | Sat-Sun 09:00-20:00",
    categories: ["facilities"],
    coords: [53.3462, -6.2498],
    image: "images/sports.jpg",
    pageUrl: "#placeholder-sports-centre",
  },
  /* T */
  {
    id: "trinity-business-school",
    name: "Trinity Business School",
    shortDesc: "Award-winning modern building housing business education and research at Trinity.",
    hours: "Mon-Fri 08:00-22:00",
    categories: ["academic"],
    coords: [53.3420, -6.2560],
    image: "images/business.school.jpg",
    pageUrl: "#placeholder-trinity-business-school",
  },
  /* W */
  {
    id: "watts-building",
    name: "Watts Building",
    shortDesc: "Houses various research departments and academic offices.",
    hours: "Mon-Fri 09:00-17:00",
    categories: ["academic"],
    coords: [53.3419, -6.2490],
    image: "images/placeholders/placeholder.svg",
    pageUrl: "#placeholder-watts-building",
  }
];

/* Make available globally */
if (typeof module !== "undefined") {
  module.exports = { BUILDINGS, CATEGORIES };
}


