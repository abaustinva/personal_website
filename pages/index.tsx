import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { useEffect, useState } from "react";

import { title, subtitle } from "@/components/primitives";
import { LinkedInIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { GlassCard } from "@/components/GlassCard";

export default function IndexPage() {
  const [showContent, setShowContent] = useState(false);
  const [text, setText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const fullText = "howdy!";
  const emoji = "🤠";

  useEffect(() => {
    // Type out the text one character at a time
    if (text.length < fullText.length) {
      const typing = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 150);

      return () => clearTimeout(typing);
    }

    // Show emoji after text is complete
    if (text === fullText && !showEmoji) {
      const emojiTimer = setTimeout(() => {
        setShowEmoji(true);
      }, 150);

      return () => clearTimeout(emojiTimer);
    }

    // After emoji is shown, show the rest of the content
    if (showEmoji) {
      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 500);

      return () => clearTimeout(contentTimer);
    }
  }, [text, showEmoji]);

  return (
    <DefaultLayout showContent={showContent}>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <GlassCard className="flex flex-col items-center text-center p-8 md:p-12 min-h-[400px] justify-center">
          <div className="inline-block max-w-3xl text-center justify-center">
            <span className={title()}>&nbsp;</span>

            <div className="flex items-center justify-center">
              <span
                className={`${title({ color: "violet" })} text-3xl sm:text-4xl sm:text-7xl inline-block pb-2`}
                style={{ marginBottom: "" }}
              >
                {text}
              </span>
              {showEmoji && (
                <span
                  className={`${title()} text-3xl md:text-4xl sm:text-7xl inline-block ml-2 pb-2`}
                  style={{ marginBottom: "" }}
                >
                  {emoji}
                </span>
              )}
            </div>

            <div
              className={`transition-opacity duration-1000 ease-in-out ${showContent ? "opacity-100" : "opacity-0"}`}
            >
              <span className={`${title()} text-3xl sm:text-4xl sm:text-7xl`}>
                my name is Austin, and i&apos;m an incoming cloud engineer @
                aws.
              </span>
              <div
                className={`${subtitle({ class: "mt-3" })} text-base md:text-md md:text-3xl`}
              >
                I&apos;m currently a senior Computer Science major @ Texas A&M
                University!
              </div>
              <div
                className={`${subtitle({ class: "mt-3" })} text-base md:text-md md:text-3xl`}
              >
                I love playing basketball, watching sitcoms, and setting up
                hackathons!
              </div>
            </div>
          </div>

          <div
            className={`flex gap-4 transition-opacity duration-1000 ease-in-out ${showContent ? "opacity-100" : "opacity-0"}`}
          >
            <Link
              isExternal
              className={buttonStyles({
                color: "secondary",
                radius: "md",
                variant: "shadow",
                size: "md",
              })}
              href={"/about"}
            >
              About
            </Link>
            <Link
              isExternal
              className={buttonStyles({
                variant: "shadow",
                radius: "md",
                size: "md",
              })}
              href="https://linkedin.com/in/abaustinva"
            >
              <LinkedInIcon size={24} />
              LinkedIn
            </Link>
          </div>
        </GlassCard>
      </section>
    </DefaultLayout>
  );
}
