import { Link } from "@heroui/link"; // Importing Link component from HeroUI library
import { Snippet } from "@heroui/snippet"; // Importing Snippet component from HeroUI library
import { Code } from "@heroui/code"; // Importing Code component from HeroUI library
import { button as buttonStyles } from "@heroui/theme"; // Importing button styles from HeroUI theme

import { siteConfig } from "@/config/site"; // Importing site configuration
import { title, subtitle } from "@/components/primitives"; // Importing title and subtitle styles from primitives
import { GithubIcon } from "@/components/icons"; // Importing GithubIcon component
import DefaultLayout from "@/layouts/default"; // Importing DefaultLayout component

// IndexPage component definition
export default function IndexPage() {
  return (
    // Using DefaultLayout component to wrap the page content
    <DefaultLayout>
      {/* Main section with flexbox layout */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {/* Container for the main content */}
        <div className="inline-block max-w-3xl text-center justify-center">
          {/* Empty span for spacing */}
          <span className={title()}>&nbsp;</span>
          {/* "howdy!" text with violet color and responsive font size */}
          <span className={`${title({ color: "violet" })} text-3xl md:text-4xl lg:text-7xl`} style={{ marginBottom: '1rem' }}>howdy!&nbsp;</span>
          {/* Cowboy emoji with responsive font size */}
          <span className={`${title()} text-3xl md:text-4xl lg:text-7xl`} style={{ marginBottom: '1rem' }}>🤠&nbsp;</span>
          <br />
          {/* Introduction text with responsive font size */}
          <span className={`${title()} text-3xl md:text-4xl lg:text-7xl`}>
            my name is Austin, and i'm a incoming cloud engineer @AWS.
          </span>
          {/* Subtitle with additional information and responsive font size */}
          <div className={`${subtitle({ class: "mt-4" })} text-base md:text-lg lg:text-3xl`}>
            I'm currently a senior Computer Science major @Texas A&M University!
          </div>
          {/* Subtitle with hobbies and responsive font size */}
          <div className={`${subtitle({ class: "mt-4" })} text-base md:text-lg lg:text-3xl`}>
            I love playing basketball, watching the show Friends, and setting up hackathons!
          </div>
        </div>

        {/* Container for the buttons */}
        <div className="flex gap-4">
          {/* "About" button with primary color, full radius, shadow variant, and large size */}
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "lg",
              variant: "shadow",
              size: "lg",
            })}
            href={'/about'}
          >
            About
          </Link>
          {/* "GitHub" button with bordered variant, full radius, large size, and GitHub icon */}
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "lg", size: "lg" })}
            href='https://github.com/abaustinva'
          >
            <GithubIcon size={30} />
            GitHub
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}