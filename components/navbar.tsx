import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedInIcon, InstagramIcon } from "@/components/icons";

interface NavbarProps {
  showContent?: boolean;
}

export const Navbar = ({ showContent = true }: NavbarProps) => {
  const [isBrandMenuOpen, setIsBrandMenuOpen] = useState(false);

  // Styles for the liquid glass pills
  const glassPanelStyles =
    "bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-full px-6 py-2 transition-transform duration-300";

  return (
    <HeroUINavbar
      className={`bg-transparent backdrop-blur-none border-none transition-opacity duration-1000 ease-in-out ${showContent ? "opacity-100" : "opacity-0"} pt-4`}
      maxWidth="xl"
      position="sticky"
    >
      {/* Panel 1: Brand/Logo (Left) with Dropdown */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <div className="relative group">
          <button
            className={`${glassPanelStyles} cursor-pointer hover:scale-105 hover:bg-white/20 flex items-center outline-none`}
            type="button"
            onClick={() => setIsBrandMenuOpen(!isBrandMenuOpen)}
          >
            <NavbarBrand className="gap-3 max-w-fit">
              <div className="flex justify-start items-center gap-2">
                <p className="font-bold text-xl text-white select-none">
                  <span className="hidden md:inline">austin abraham</span>
                  <span className="md:hidden">austin</span>
                </p>
                {/* Chevron/Indicator */}
                <svg
                  className={`w-4 h-4 text-white/70 transition-transform duration-300 ${isBrandMenuOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </div>
            </NavbarBrand>
          </button>

          {/* Dropdown Panel */}
          <div
            className={`
                absolute top-full left-0 mt-2 p-2 
                bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl
                flex flex-col gap-2 min-w-[180px]
                transition-all duration-300 origin-top-left
                ${isBrandMenuOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"}
            `}
          >
            <Link
              isExternal
              className="flex items-center gap-3 text-white/80 hover:text-white px-4 py-2 hover:bg-white/10 rounded-xl transition-colors"
              href={siteConfig.links.linkedin}
              title="LinkedIn"
            >
              <LinkedInIcon size={20} />
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>
            <Link
              isExternal
              className="flex items-center gap-3 text-white/80 hover:text-white px-4 py-2 hover:bg-white/10 rounded-xl transition-colors"
              href={siteConfig.links.github}
              title="GitHub"
            >
              <GithubIcon size={20} />
              <span className="text-sm font-medium">GitHub</span>
            </Link>
            <Link
              isExternal
              className="flex items-center gap-3 text-white/80 hover:text-white px-4 py-2 hover:bg-white/10 rounded-xl transition-colors"
              href={siteConfig.links.instagram}
              title="Instagram"
            >
              <InstagramIcon size={20} />
              <span className="text-sm font-medium">Instagram</span>
            </Link>
          </div>
        </div>
      </NavbarContent>

      {/* Panel 2: Navigation (Center/Right) */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <div
          className={`${glassPanelStyles} flex gap-4 items-center hover:scale-105`}
        >
          <div className="hidden md:flex gap-4">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium text-lg text-white/90 hover:text-white transition-colors",
                  )}
                  color="foreground"
                  href={item.href}
                  rel={item.rel}
                  target={item.target}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </div>
          <div className="w-px h-6 bg-white/20 mx-2 hidden md:block" />{" "}
          {/* Divider */}
          <NavbarItem className="hidden md:flex gap-3">
            <ThemeSwitch className="text-white/80 hover:text-white" />
          </NavbarItem>
          <div className="w-px h-6 bg-white/20 mx-2 hidden md:block" />{" "}
          {/* Divider */}
          <NavbarItem className="hidden md:flex">
            <Button
              isExternal
              as={Link}
              className="text-sm font-normal text-white bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-4 h-8 min-w-0"
              href="https://venmo.com/abaustinva"
              rel="noopener noreferrer"
              target="_blank"
              variant="flat"
            >
              ☕ Coffee
            </Button>
          </NavbarItem>
        </div>
      </NavbarContent>

      {/* Mobile Menu Toggle (Right) */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <div className={glassPanelStyles}>
          <NavbarMenuToggle className="text-white" />
        </div>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-black/80 backdrop-blur-xl pt-6">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="text-white text-2xl"
                color="foreground"
                href={item.href}
                rel={
                  item.label === "resume" ? "noopener noreferrer" : undefined
                }
                size="lg"
                target={item.label === "resume" ? "_blank" : undefined}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
