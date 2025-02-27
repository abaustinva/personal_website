import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { useEffect, useState } from 'react';

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { LinkedInIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-3xl text-center justify-center">
          <span className={title()}>&nbsp;</span>
          {/* This content shows immediately */}
          <span className={`${title({ color: "violet" })} text-3xl md:text-4xl lg:text-7xl`} 
                style={{ marginBottom: '1rem' }}>
            howdy!&nbsp;
          </span>
          <span className={`${title()} text-3xl md:text-4xl lg:text-7xl`} 
                style={{ marginBottom: '1rem' }}>
            🤠&nbsp;
          </span>
          <br />
          {/* Content that fades in */}
          <div className={`transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
            <span className={`${title()} text-3xl md:text-4xl lg:text-7xl`}>
              my name is Austin, and i'm a incoming cloud engineer @AWS.
            </span>
            <div className={`${subtitle({ class: "mt-4" })} text-base md:text-lg lg:text-3xl`}>
              I'm currently a senior Computer Science major @Texas A&M University!
            </div>
            <div className={`${subtitle({ class: "mt-4" })} text-base md:text-lg lg:text-3xl`}>
              I love playing basketball, watching the show Friends, and setting up hackathons!
            </div>
          </div>
        </div>

        {/* Buttons that fade in */}
        <div className={`flex gap-4 transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <Link
            isExternal
            className={buttonStyles({
              color: "secondary",
              radius: "lg",
              variant: "shadow",
              size: "lg",
            })}
            href={'/about'}
          >
            About
          </Link>
          <Link
            isExternal
            className={buttonStyles({ 
              variant: "shadow", 
              radius: "lg", 
              size: "lg" 
            })}
            href="https://linkedin.com/in/abaustinva"
          >
            <LinkedInIcon size={24} />
            LinkedIn
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}