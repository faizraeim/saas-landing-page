import {
  RiChatAiLine,
  RiCloudLine,
  RiFileChartLine,
  RiFileTextLine,
  RiGroupLine,
  RiLink,
  RiLock2Line,
  RiSpeakAiLine,
  RiStickyNoteAddLine,
} from "@remixicon/react";

const Navbar = {
  logo: "Biccas",
  links: [
    { id: 1, link: "Home", path: "/" },
    { id: 2, link: "Products", path: "../pages/products" },
    { id: 3, link: "Blog", path: "../pages/blog" },
    { id: 4, link: "About Us", path: "../pages/about-us" },
    { id: 5, link: "FAQ", path: "../pages/faq" },
  ],
  buttons: ["Login", "Sign Up"],
};

export const NavbarData = Navbar;

const BrandsLogos = [
  { id: 1, name: "unspalsh", path: "/src/assets/unsplash.png" },
  { id: 2, name: "notion", path: "/src/assets/notion.png" },
  { id: 3, name: "intercom", path: "/src/assets/intercome.png" },
  { id: 4, name: "descript", path: "/src/assets/descript.png" },
  { id: 1, name: "grammarly", path: "/src/assets/grammarly.png" },
];

export { BrandsLogos };

const Plans = [
  {
    id: 0,
    title: "Choose Plan That's Right For You",
    subtitle: "Choose plan that works best for you, feel free to contact us",
    duration: {
      monthly: "Bil Monthly",
      yearly: "Bil Yearly",
    },
  },
  {
    id: 1,
    name: "Free",
    desc: "Have a go and test your superpowers",
    price: [0, 0],

    features: [
      "2 Users",
      "2 Files ",
      "Public Share and Comments",
      "Chat Support",
      "New income apps",
    ],
    btn: "Signup for Free",
  },
  {
    id: 2,
    name: "Pro",
    desc: "Experiment the power of infinite possibilities",
    price: [8, 10],
    features: [
      "4 Users",
      "All Apps",
      "Unlimited editable exports",
      "Folders and collaboration",
      "All incoming apps",
    ],
    btn: "Go to Pro",
  },
  {
    id: 3,
    name: "Business",
    desc: "Unveil new superpowers and join the Design League",
    price: [16, 20],
    features: [
      "All the features of pro plan",
      "Account success manager",
      "Single Sign-On (SSO)",
      "Co-conception program",
      "Collaboration Soon",
    ],
    btn: "Go to Business",
  },
];

export const PlansData = Plans;

const Testimonials = [
  {
    title: "People are Saying About Biccas",
    desc: "Everything you need to accept to payment and grow your money of manage anywhere on planet",
    thoughts: [
      {
        id: 1,
        name: "Aria Zinanrio",
        comment:
          "“I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍”",
        img: [
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
          "https://randomuser.me/api/portraits/women/1.jpg",
        ],
      },
    ],
  },
];

export const TestimonialsData = Testimonials;

const Form = [
  {
    title: "Get Started",
    label: ["Email", "Message"],
    placeholder: ["Enter your email", "Enter you message"],
    btn: "Request Demo",
    link: "or Start Free Trial",
  },
];

export const FormData = Form;

const Footer = [
  {
    logo: "Biccas",
    desc: "Get started now try our product",
    placeholder: "Enter your email here",
    btn: "",
  },
];

export const FooterData = Footer;

const Links = [
  {
    id: 1,
    title: "Support",
    links: ["Help centre", "Account information", "About", "Contact us"],
  },
  {
    id: 2,
    title: "Help and Solution",
    links: [
      "Talk to support",
      "Support docs",
      "System Status",
      "Covid respond",
    ],
  },
  {
    id: 3,
    title: "Product",
    links: ["Update", "Security", "Beta test", "Pricing product"],
  },
];

export const FooterLinks = Links;

const Copyright = [
  {
    text: "© 2025 Biccas. All rights reserved",
    terms: "Terms · Privacy Policy",
  },
];

export const CopyrightData = Copyright;

// FAQ Page

const FaqData = [
  {
    title: `Things, you probably wonder.`,
    faqs: [
      {
        id: "1",
        question: "What is Biccas?",
        answer:
          "Biccas is a leading e-wallet application that allows users to manage their finances, make payments, and transfer money easily and securely.",
      },
      {
        id: "2",
        question: "How do I create an account?",
        answer:
          "To create an account, simply download the Biccas app from the App Store or Google Play, and follow the on-screen instructions to sign up.",
      },
      {
        id: "3",
        question: "Is Biccas safe to use?",
        answer:
          "Yes, Biccas uses advanced security measures, including encryption and two-factor authentication, to ensure that your financial information is protected.",
      },
      {
        id: "4",
        question: "Can I link my bank account to Biccas?",
        answer:
          "Yes, you can link your bank account to Biccas for easy transfers and payments. We support a wide range of banks and financial institutions.",
      },
      {
        id: "5",
        question: "Are there any fees for using Biccas?",
        answer:
          "Biccas offers a free basic plan with no fees. However, certain premium features and transactions may incur fees. Please refer to our pricing page for more details.",
      },
      {
        id: "6",
        question: "How do I contact customer support?",
        answer:
          "You can contact our customer support team through the app, via email at",
      },
    ],
  },
];

export const FaqPageData = FaqData;

// Products Page

const products = [
  {
    id: 1,
    name: "Task / Project Management",
    description: "Create, assign, and track tasks with multiple views.",
    features: ["Kanban / List / Board views", "Gantt charts", "Timelines"],
    includedIn: ["Pro", "Business"],
    icon: RiStickyNoteAddLine,
  },
  {
    id: 2,
    name: "Collaboration & Team Workspaces",
    description: "Work together with your team in real time.",
    features: [
      "Shared workspaces",
      "Real-time editing",
      "Mentions & notifications",
    ],
    includedIn: ["Free", "Pro", "Business"],
    icon: RiGroupLine,
  },
  {
    id: 3,
    name: "Cloud Storage",
    description: "Securely store, share, and manage files in the cloud.",
    features: ["2 TB storage", "Version control", "Access permissions"],
    includedIn: ["Pro", "Business"],
    icon: RiCloudLine,
  },
  {
    id: 4,
    name: "Analytics & Reporting",
    description: "Track your performance and generate detailed reports.",
    features: ["Custom dashboards", "Exportable charts", "Daily insights"],
    includedIn: ["Pro", "Business"],
    icon: RiFileChartLine,
  },
  {
    id: 5,
    name: "Engagement & Communication",
    description: "Stay connected and engage with your audience.",
    features: ["Chat & messaging", "Notifications", "Comment threads"],
    includedIn: ["Free", "Pro", "Business"],
    icon: RiChatAiLine,
  },
  {
    id: 6,
    name: "Publishing & Content",
    description: "Plan, collaborate, and publish engaging content.",
    features: ["Content calendar", "Approval workflows", "Scheduled posts"],
    includedIn: ["Pro", "Business"],
    icon: RiFileTextLine,
  },
  {
    id: 7,
    name: "User & Security Management",
    description: "Manage users, roles, and enterprise security.",
    features: ["Roles & permissions", "Single Sign-On (SSO)", "Audit logs"],
    includedIn: ["Business"],
    icon: RiLock2Line,
  },
  {
    id: 8,
    name: "Integrations & API",
    description: "Connect Taskio with your favorite apps.",
    features: ["Slack", "Google Drive", "Public API"],
    includedIn: ["Pro", "Business"],
    icon: RiLink,
  },
  {
    id: 9,
    name: "Consulting & Support",
    description: "Get expert guidance and premium support services.",
    features: ["Free consulting", "Success manager", "Training sessions"],
    includedIn: ["Business"],
    icon: RiSpeakAiLine,
  },
];

export { products };

// Blog Page Data

const blogPosts = [
  {
    id: 1,
    title: "10 Proven Productivity Hacks for Remote Teams",
    summary:
      "Discover simple yet effective ways to keep your team motivated, organized, and focused while working remotely.",
    author: "Sarah Khan",
    date: "2025-03-12",
    category: "Productivity",
    image: "https://picsum.photos/600/300",
    readTime: "6 min",
  },
  {
    id: 2,
    title: "Why Daily Analytics Can Save You Hours Every Week",
    summary:
      "Learn how actionable insights from your dashboard can simplify reporting and improve decisions.",
    author: "Alex Johnson",
    date: "2025-03-08",
    category: "Analytics & Data",
    image: "https://picsum.photos/601/301",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Collaboration in 2025: The Rise of Virtual Workspaces",
    summary:
      "Explore how digital collaboration tools are reshaping modern teams and productivity.",
    author: "Faiz Rahimi",
    date: "2025-03-02",
    category: "Collaboration",
    image: "https://picsum.photos/602/302",
    readTime: "5 min",
  },
  {
    id: 4,
    title: "From Chaos to Clarity: Managing Projects with Gantt Charts",
    summary:
      "A beginner’s guide to using Gantt charts effectively for better project planning.",
    author: "Ayesha Noor",
    date: "2025-02-27",
    category: "Project Management",
    image: "https://picsum.photos/603/303",
    readTime: "7 min",
  },
  {
    id: 5,
    title: "Cloud Storage vs. Local Storage: What’s Best for Your Business?",
    summary:
      "Breaking down the pros and cons of cloud solutions in modern SaaS environments.",
    author: "Michael Lee",
    date: "2025-02-20",
    category: "Cloud Storage",
    image: "https://picsum.photos/604/304",
    readTime: "5 min",
  },
  {
    id: 6,
    title: "The Hidden Power of Engagement Analytics",
    summary:
      "How monitoring audience interaction can guide better product decisions.",
    author: "Lina Rehman",
    date: "2025-02-14",
    category: "Analytics & Data",
    image: "https://picsum.photos/605/305",
    readTime: "6 min",
  },
];
export { blogPosts };

// Login Page Data
