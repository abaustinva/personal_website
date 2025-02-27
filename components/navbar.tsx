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
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
  LinkedInIcon,
  InstagramIcon,
} from "@/components/icons";

interface NavbarProps {
  showContent?: boolean;
}

export const Navbar = ({ showContent = true }: NavbarProps) => {
  return (
    <HeroUINavbar 
      maxWidth="xl" 
      position="sticky" 
      className={`transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-6" href="/">
            <p className="font-bold text-xl">austin</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden md:flex gap-6 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium text-xl"
                )}
                color="foreground"
                href={item.href}
                target={item.target}
                rel={item.rel}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden md:flex gap-4">
          <Link isExternal href={siteConfig.links.linkedin} title="LinkedIn">
            <LinkedInIcon className="text-default-500 w-6 h-6" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500 w-6 h-6" />
          </Link>
          <Link isExternal href={siteConfig.links.instagram} title="Instagram">
            <InstagramIcon className="text-default-500 w-6 h-6" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-lg font-normal text-default-600 bg-default-100"
            href="https://venmo.com/abaustinva"
            target="_blank"
            rel="noopener noreferrer"
            variant="flat"
          >
            ☕ Buy me a Coffee
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        
        <Link isExternal href={siteConfig.links.github} title="GitHub">
          <GithubIcon className="text-default-500 w-6 h-6" />
        </Link>
        <Link isExternal href={siteConfig.links.instagram} title="Instagram">
          <InstagramIcon className="text-default-500 w-6 h-6" />
        </Link>
        <Link
          isExternal
          href="https://venmo.com/abaustinva"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg"
        >
          ☕
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : "foreground"
                }
                href={item.href}
                target={item.label === "resume" ? "_blank" : undefined}
                rel={item.label === "resume" ? "noopener noreferrer" : undefined}
                size="lg"
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