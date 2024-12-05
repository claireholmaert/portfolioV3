// images
import Image from "/images/girl3d.webp";

// translation
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center gap-y-5 px-7 lg:px-0">
      <p className="mt-20 lg:text-lg">{t("hello")}</p>
      <h1 className="p-2 text-4xl xl:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-amber-200 dark:to-amber-500 dark:bg-clip-text dark:text-transparent">
        Claire HOLMAËRT
      </h1>
      <p className=" text-center lg:text-lg">{t("description")}</p>
      <div className="relative w-1/2">
        <img
          src={Image}
          className="w-full object-cover blur-2xl"
          loading="lazy"
          alt="image flou en 3d d'une fille avec des lunettes derrière une table, posé dessus il y a un ordinateur de la marque apple avec une tasse de café et des journaux derrière l'ordinateur"
        />
        <img
          src={Image}
          className="absolute w-full inset-0 object-cover"
          loading="eager"
          alt="image 3d d'une fille avec des lunettes derrière une table, posé dessus il y a un ordinateur de la marque apple avec une tasse de café et des journaux derrière l'ordinateur"
        />
      </div>
    </div>
  );
};
