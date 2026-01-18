export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "home",
      href: "/",
    },
    {
      label: "resume",
      href: "/resume.pdf",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      label: "quotes",
      href: "/hot_takes",
    },
    {
      label: "about",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "home",
      href: "/",
    },
    {
      label: "resume",
      href: "/resume.pdf",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      label: "quotes",
      href: "/hot_takes",
    },
    {
      label: "about",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/abaustinva",
    discord: "https://discord.gg/9b6yyZKmH4",
    instagram: "https://instagram.com/abaustinva",
    linkedin: "https://linkedin.com/in/abaustinva",
  },
};
