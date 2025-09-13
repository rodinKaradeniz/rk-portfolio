import CocktailsImg from "@/assets/images/cocktails.jpg";
import DaytradingImg from "@/assets/images/daytrading.jpg";

// Project Images
import ByOthersImg from "@/assets/images/projects/by_others.png";
import CerenDImg from "@/assets/images/projects/ceren_demirci.png";
import CIYANOImg from "@/assets/images/projects/ciyano.png";
import MarketVistaImg from "@/assets/images/projects/market_vista.png";
import RokarAfricaImg from "@/assets/images/projects/rokar_africa.png";
import RokarGlobalImg from "@/assets/images/projects/rokar_global.png";
import GinnyImg from "@/assets/images/projects/ginny_the_bartender.jpg";

export const emailAddress = "mrodin.karadeniz@gmail.com";

export const sources = [
  [
    {
      name: "music",
      href: "https://pixabay.com/music/traditional-jazz-jazz-vibrant-upbeat-246219/",
    },
  ],
];

export const icons = {
  hamburger: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6h16" />
      <path d="M7 12h13" />
      <path d="M10 18h10" />
    </svg>
  ),
  music: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-music"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M9 17v-13h10v13" />
      <path d="M9 8h10" />
    </svg>
  ),
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M16.5 7.5l0 .01" />
    </svg>
  ),
  x: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  ),
  github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  ),
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100%"
      height="100%"
      viewBox="0 0 30 30"
    >
      <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
    </svg>
  ),
  copy: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-copy"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
      <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
    </svg>
  ),
  arrowupright: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 7l-10 10" />
      <path d="M8 7l9 0l0 9" />
    </svg>
  ),
  check: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-check"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  ),
  arrow_left: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M5 12l6 6" />
      <path d="M5 12l6 -6" />
    </svg>
  ),
  arrow_right: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    </svg>
  ),
};

export const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const projects = [
  {
    title: "Ginny the Bartender",
    type: "Web & Mobile App",
    description:
      "A web and mobile app that allows users to create and share cocktails, and search for cocktails by name or ingredients.",
    year: 2025,
    demo: "https://ginny-the-bartender.vercel.app/",
    image: GinnyImg,
  },
  {
    title: "Rokar Africa",
    type: "Company Website",
    description:
      "A company website that showcases the company's products and services on agriculture, recycling, and sustainable development.",
    year: 2024,
    demo: "https://rokarafrica.com",
    image: RokarAfricaImg,
  },
  {
    title: "Rokar Global",
    type: "Company Website",
    description:
      "A company website that showcases the company's products and services on construction and property management.",
    year: 2024,
    demo: "https://rokarglobal.com",
    image: RokarGlobalImg,
  },
  {
    title: "CIYANO",
    type: "Company Website",
    description:
      "A company website that showcases the company's products and services on environment-friendly packaging.",
    year: 2025,
    demo: "https://ciyano.com",
    image: CIYANOImg,
  },
  {
    title: "MarketVista",
    type: "Company Website",
    description:
      "A company website that showcases the company's products and services on real-time shelf data platform.",
    year: 2025,
    demo: "https://marketvista.com",
    image: MarketVistaImg,
  },
  {
    title: "By Others Corp.",
    type: "Company Website",
    description:
      "Specializing in the design, fabrication, and installation of high-quality building envelope systems for commercial and institutional projects.",
    year: 2025,
    demo: "https://by-others.ca/",
    image: ByOthersImg,
  },
  {
    title: "Ceren D.",
    type: "Personal Website",
    description:
      "A portfolio website for a PhD candidate, showcasing her research and publications.",
    year: 2025,
    demo: "https://ceren-demirci.vercel.app/",
    image: CerenDImg,
  },
];

export const services = [
  {
    title: "App & Web Development",
    desc: "I design and build responsive, high-performance websites tailored to your unique goals. Whether you need a portfolio, an e-commerce platform, or a dynamic web app, I ensure your digital presence is impactful and functional.",
    tools: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    image: CocktailsImg,
  },
  {
    title: "AI & Machine Learning",
    desc: "I develop intelligent systems and algorithms to automate processes, uncover patterns in data, and make predictions. From personalized recommendations to data-driven business solutions, I bring AI to life for your specific needs.",
    tools: [
      "Neural Networks",
      "Deep Learning",
      "LLMs",
      "Natural Language Processing",
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "Hugging Face",
      "NLTK",
    ],
    image: DaytradingImg,
  },
  {
    title: "Prompt Engineering",
    desc: "I specialize in crafting and optimizing prompts for AI models, ensuring they deliver accurate and contextually relevant outputs. This helps businesses leverage AI effectively for customer interactions, content generation, and automation.",
    tools: ["OpenAI", "Llama 2", "LangChain", "Hugging Face"],
    image: CocktailsImg,
  },
  {
    title: "Quantitative Finance",
    desc: "I develop algorithms and environments for trading. With expertise in creating automated trading systems, I help optimize trading performance and generate actionable insights in financial markets.",
    tools: ["Python", "Pandas", "NumPy", "PyTorch", "Backtrader", "MetaTrader"],
    image: DaytradingImg,
  },
  {
    title: "Data Analytics",
    desc: "I transform raw data into actionable insights, helping you make informed decisions. From building dashboards to conducting predictive analysis, I make data work for you.",
    tools: ["Python", "Pandas", "Power BI", "Tableau"],
    image: CocktailsImg,
  },
  {
    title: "Programming & Robotics Education",
    desc: "As an experienced instructor on coding and robotics concepts, I empower learners with practical knowledge in programming and robotics. From coding fundamentals to advanced concepts, I tailor lessons to your skill level and goals, making complex topics accessible and enjoyable.",
    tools: [
      "Python",
      "LEGO Spike Prime",
      "EV3 Mindstorms",
      "Scratch",
      "Arduino",
      "JavaScript",
    ],
    image: CocktailsImg,
  },
];

export const socialMediaIcons = [
  {
    icon: icons.linkedin,
    href: "https://www.linkedin.com/in/m-rodin-karadeniz/",
  },
  {
    icon: icons.github,
    href: "https://github.com/rodinKaradeniz",
  },
  {
    icon: icons.instagram,
    href: "https://www.instagram.com/rodinkaradeniz/",
  },
  {
    icon: icons.x,
    href: "https://x.com/rodink98",
  },
];
