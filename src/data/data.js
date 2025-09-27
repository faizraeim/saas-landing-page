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
    price: "$0",
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
    price: "$8",
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
    price: "$16",
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
    btn: "Subscribe",
  },
];

export const FooterData = Footer;

const Links = [
  {
    id: 0,
    title: "Company",
    links: ["About us", "Careers", "Blog", "Press"],
  },
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
