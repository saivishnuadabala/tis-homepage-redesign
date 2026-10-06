// All copy is taken from tis.edu.in so the redesign keeps the school's voice.

export const contact = {
  helpline: "+91-98379 83791",
  helplineHref: "tel:+91-9837983791",
  email: "info@tis.edu.in",
  landlines: ["0135-2699444", "0135-2699666"],
  address: "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)",
  mapHref: "https://maps.app.goo.gl/maBF8syXueQkw31E6",
  applyHref: "https://admission.tis.edu.in",
  virtualTourHref: "https://tis.edu.in/virtual-tour/",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Campus", href: "#campus" },
  { label: "Sports", href: "#sports" },
  { label: "Rankings", href: "#rankings" },
  { label: "Parents", href: "#parents" },
  { label: "Contact", href: "#contact" },
];

export const heroStudents = [
  {
    src: "/images/student-basketball.webp",
    alt: "TIS students playing basketball",
    width: 900,
    height: 1405,
  },
  {
    src: "/images/student-science.webp",
    alt: "TIS student working with a microscope",
    width: 900,
    height: 933,
  },
  {
    src: "/images/student-dance.webp",
    alt: "TIS student performing classical dance",
    width: 900,
    height: 1312,
  },
];

export const stats = [
  { value: 22, suffix: "", label: "Acre pollution-free campus" },
  { value: 16, suffix: "+", label: "Olympic sports" },
  { value: 24, suffix: "×7", label: "Medical assistance" },
  { value: 6, suffix: ":1", label: "Student teacher ratio" },
];

export const pillars = [
  {
    title: "Academic excellence",
    body: "Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.",
    image: "/images/student-writing.webp",
  },
  {
    title: "Boarding & day school",
    body: "We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally.",
    image: "/images/student-art.webp",
  },
  {
    title: "Leadership & innovation",
    body: "Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.",
    image: "/images/student-shooting.webp",
  },
];

export const campusLife = [
  {
    quote: "We feel supported in what we do and nudged further to do more",
    body: "At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way.",
    image: "/images/music.webp",
    alt: "Students in a guitar class",
  },
  {
    quote: "Tulas helped me thrive and become the best version of myself",
    body: "When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine.",
    image: "/images/assembly.webp",
    alt: "Students at a morning drill on the sports ground",
  },
];

export const sports = [
  "Archery",
  "Cycling",
  "Hockey",
  "Swimming",
  "Taekwondo",
  "Football",
  "Shooting Range",
  "Horse Riding",
  "Billiards",
  "Squash",
  "Volleyball",
  "Basketball",
  "Cricket",
  "Lawn Tennis",
  "Badminton",
  "Table Tennis",
];

export const sportsGallery: { src: string; alt: string; cutout?: boolean }[] = [
  { src: "/images/archery.webp", alt: "Students at archery practice" },
  { src: "/images/horse-riding.webp", alt: "Students horse riding" },
  { src: "/images/student-taekwondo.webp", alt: "Student in a taekwondo stance", cutout: true },
];

export const rankings = [
  {
    rank: "#1",
    region: "Dehradun",
    detail: "Co-Educational Boarding School in Dehradun",
    source: "Education Today",
  },
  {
    rank: "#2",
    region: "Uttarakhand",
    detail: "Co-Educational Boarding School in North India",
    source: "Education Today",
  },
  {
    rank: "#1",
    region: "North India",
    detail: "Co-Educational Boarding School in North India",
    source: "Outlook",
  },
  {
    rank: "#4",
    region: "India",
    detail: "Co-Educational Boarding School in India",
    source: "Education Today",
  },
];

export const awards = [
  { src: "/images/award-best-residential.webp", alt: "TIS awarded Best Boarding School in Uttarakhand" },
  {
    src: "/images/award-top-10.webp",
    alt: "TIS awarded Top 10 Best Boarding School of India by Education Today",
  },
  { src: "/images/award-uttarakhand-icon.webp", alt: "TIS awarded at the Uttarakhand Icon Awards 2024" },
];

export const campusVisitors = [
  "Sakshi Malik",
  "Vishesh Bhriguvanshi",
  "Abhishek Verma",
  "Aditi Gopichand Swami",
  "Ojus Devtale",
  "Laxmi Agarwal",
  "Saurabh Joshi",
  "Arushi Nishank",
  "Shri Dharmendra Pradhan Ji",
  "Dr Ramesh Pokhriyal Nishank Ji",
  "Shri Bhagat Singh Koshyari Ji",
  "Shri Trivendra Singh Rawat Ji",
];

export const testimonials = [
  {
    name: "Tashi Tsering",
    relation: "F/O Jigmet Skaldon",
    quote:
      "I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.",
    avatar: "/images/parent-tashi.webp",
  },
  {
    name: "Namita Agarwal",
    relation: "M/O Krishna Agarwal",
    quote:
      "Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.",
    avatar: "/images/parent-namita.webp",
  },
  {
    name: "Sandeep Kumar",
    relation: "F/O Aryan",
    quote:
      "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.",
    avatar: "/images/parent-sandeep.webp",
  },
];

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/tulasinternationalschool/" },
  { label: "Facebook", href: "https://www.facebook.com/tulasinternationalschool/" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw" },
  { label: "LinkedIn", href: "https://www.linkedin.com/school/tulas-international-school/" },
];
