// components
import { ContainerXl } from "./container";
import { DarkMode } from "./dark-mode";
import { Logo } from "./logo";
import { MenuTranslation } from "./menu-translation";
import { Navigation } from "./navigation";

export const Header = () => {
  return (
    <header id="header">
      <ContainerXl className="flex items-center justify-between p-5 lg:p-10">
        <Logo />
        <div className="flex items-center gap-x-6">
          <Navigation />
          <DarkMode />
          <MenuTranslation />
        </div>
      </ContainerXl>
    </header>
  );
};
