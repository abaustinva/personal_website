import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar"; // Importing components from HeroUI library
import { Button } from "@heroui/button"; // Importing Button component from HeroUI library
import { Kbd } from "@heroui/kbd"; // Importing Kbd component from HeroUI library
import { Link } from "@heroui/link"; // Importing Link component from HeroUI library
import { Input } from "@heroui/input"; // Importing Input component from HeroUI library
import { link as linkStyles } from "@heroui/theme"; // Importing link styles from HeroUI theme
import NextLink from "next/link"; // Importing Next.js Link component
import clsx from "clsx"; // Importing clsx for conditional class names

import { siteConfig } from "@/config/site"; // Importing site configuration
import { ThemeSwitch } from "@/components/theme-switch"; // Importing ThemeSwitch component
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons"; // Importing icons

// Navbar component definition
export const Navbar = () => {
  return (
    // HeroUINavbar component with maxWidth and position properties
    <HeroUINavbar maxWidth="2xl" position="sticky" className="">
      {/* NavbarContent for the left side of the navbar */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        {/* NavbarBrand with logo and site name */}
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-6" href="/">
            <Logo className="w-10 h-10" /> {/* Logo component with increased size */}
            <p className="font-bold text-xl">ACME</p> {/* Site name with increased font size */}
          </NextLink>
        </NavbarBrand>
        {/* Navigation items */}
        <div className="hidden md:flex gap-6 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium text-xl" // Conditional class names for active state and increased font size
                )}
                color="foreground"
                href={item.href}
              >
                {item.label} {/* Navigation item label */}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      {/* NavbarContent for the right side of the navbar */}
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        {/* Social media and theme switch icons */}
        <NavbarItem className="hidden md:flex gap-4">
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <DiscordIcon className="text-default-500 w-6 h-6" /> {/* Discord icon with increased size */}
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500 w-6 h-6" /> {/* GitHub icon with increased size */}
          </Link>
          <ThemeSwitch /> {/* Theme switch component */}
        </NavbarItem>

        {/* Buy me a Coffee button */}
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-lg font-normal text-default-600 bg-default-100" // Button with increased font size
            href="https://venmo.com/abaustinva" // Replace with your Venmo link
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security reasons
            variant="flat"
          >
            ☕ Buy me a Coffee
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* NavbarContent for mobile view */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500 w-6 h-6" /> {/* GitHub icon with increased size */}
        </Link>
        {/* Buy me a Coffee button for mobile view */}
        <Link
          isExternal
          href="https://venmo.com/abaustinva" // Replace with your Venmo link
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security reasons
          className="text-lg"
        >
          ☕
        </Link>
        <ThemeSwitch /> {/* Theme switch component */}
        <NavbarMenuToggle /> {/* Navbar menu toggle for mobile view */}
      </NavbarContent>

      {/* Navbar menu for mobile view */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg" // Increased font size
              >
                {item.label} {/* Menu item label */}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};