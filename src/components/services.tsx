// icons
import {
  HiBugAnt,
  HiChartBar,
  HiCloud,
  HiPencil,
  HiSwatch,
  HiWrenchScrewdriver,
} from "react-icons/hi2";

// translation
import { useTranslation } from "react-i18next";

// components
import { ContainerXl } from "./container";

export const Services = () => {
  const { t } = useTranslation();

  return (
    <ContainerXl className="flex flex-col items-center gap-y-5 my-10">
      <h2 className="text-2xl text-center uppercase tracking-widest lg:text-4xl">
        {t("my_services")}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 place-items-center dark:text-customGray">
        <div className="w-32 h-32 bg-blue-100 rounded-full flex flex-col items-center justify-center dark:bg-amber-100">
          <HiPencil className="w-8 h-8" />
          {t("creation")}
        </div>
        <div className="w-32 h-32 bg-blue-200 rounded-full flex flex-col items-center justify-center dark:bg-amber-200">
          <HiSwatch className="w-8 h-8" />
          {t("redesign")}
        </div>
        <div className="w-32 h-32 bg-blue-300 rounded-full flex flex-col items-center justify-center dark:bg-amber-300">
          <HiChartBar className="w-8 h-8" />
          {t("seo")}
        </div>
        <div className="w-32 h-32 bg-blue-400 rounded-full flex flex-col items-center justify-center dark:bg-amber-400">
          <HiBugAnt className="w-8 h-8" />
          {t("debug")}
        </div>
        <div className="w-32 h-32 bg-blue-500 rounded-full flex flex-col items-center justify-center dark:bg-amber-500">
          <HiCloud className="w-8 h-8" />
          {t("hosting")}
        </div>
        <div className="w-32 h-32 bg-blue-600 rounded-full flex flex-col items-center justify-center dark:bg-amber-600">
          <HiWrenchScrewdriver className="w-8 h-8" />
          {t("maintenance")}
        </div>
      </div>
    </ContainerXl>
  );
};
