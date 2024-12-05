// images
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image8 from "/svg/appwrite-icon.svg";
import Image9 from "/svg/docker-icon.svg";
import Image3 from "/svg/nextjs-icon.svg";
import Image7 from "/svg/postgresql.svg";
import Image2 from "/svg/react.svg";
import Image5 from "/svg/sass.svg";
import Image4 from "/svg/symfony.svg";
import Image6 from "/svg/tailwindcss-icon.svg";
import Image1 from "/svg/typescript-icon.svg";

// translation
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <div id="skills" className="max-w-6xl mx-auto pt-1">
      <h2 className="my-5 text-2xl text-center uppercase tracking-widest lg:text-4xl">
        {t("my_skills")}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-5">
        {[
          {
            img: Image1,
            name: "TypeScript",
            link: "https://www.typescriptlang.org",
            alt: "logo de typescript",
          },
          {
            img: Image2,
            name: "React.js",
            link: "https://fr.react.dev",
            alt: "logo de react.js",
          },
          {
            img: Image3,
            name: "Next.js",
            link: "https://nextjs.org",
            alt: "logo de next.js",
          },
          {
            img: Image4,
            name: "Symfony",
            link: "https://symfony.com",
            alt: "logo de symfony",
          },
          {
            img: Image5,
            name: "Sass",
            link: "https://sass-lang.com",
            alt: "logo de saas",
          },
          {
            img: Image6,
            name: "TailwindCSS",
            link: "https://tailwindcss.com",
            alt: "logo de tailwindcss",
          },
          {
            img: Image7,
            name: "PostgreSQL",
            link: "https://www.postgresql.org",
            alt: "logo de postgresql",
          },
          {
            img: Image8,
            name: "Appwrite",
            link: "https://appwrite.io",
            alt: "logo de appwrite",
          },
          {
            img: Image9,
            name: "Docker",
            link: "https://docs.docker.com",
            alt: "logo de docker",
          },
        ].map((skill, index) => (
          <CardContainer className="inter-var">
            <CardBody className="relative group/card w-auto sm:w-[30rem] h-auto rounded-xl">
              <CardItem translateZ="100" className="w-full">
                <a
                  key={index}
                  href={skill.link}
                  className="hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col items-center justify-center w-full h-32 sm:h-40 xl:h-48">
                    <div className="relative w-1/4">
                      <img
                        src={skill.img}
                        className="w-full object-cover blur-2xl dark:blur-sm"
                        loading="lazy"
                        alt={skill.alt}
                      />
                      <img
                        src={skill.img}
                        loading="eager"
                        className="absolute top-0 left-0 w-full object-cover"
                        alt={skill.alt}
                      />
                    </div>
                    <h3 className="mt-4 tracking-widest text-md md:text-xl dark:text-blue-50">
                      {skill.name}
                    </h3>
                  </div>
                </a>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};
