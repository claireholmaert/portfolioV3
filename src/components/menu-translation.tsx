"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useTranslation } from "react-i18next";

import FlagEN from "/images/flag-england.webp";
import FlagFR from "/images/flag-french.webp";

import { cn } from "@/lib/utils";

export function MenuTranslation() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center gap-x-2">
            <img
              src={i18n.language === "en" ? FlagEN : FlagFR}
              className="max-w-10 rounded-full"
              alt={`Current language: ${i18n.language.toUpperCase()}`}
            />
            <span>{i18n.language.toUpperCase()}</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col p-3 gap-y-1">
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "w-full cursor-pointer"
              )}
              onClick={() => changeLanguage("en")}
              aria-label="Switch to English"
            >
              <img
                src={FlagEN}
                className="max-w-10 rounded-full mr-2"
                alt="English flag"
              />
              <span>English</span>
            </NavigationMenuLink>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "w-full cursor-pointer"
              )}
              onClick={() => changeLanguage("fr")}
              aria-label="Passer au français"
            >
              <img
                src={FlagFR}
                className="max-w-10 rounded-full mr-2"
                alt="French flag"
              />
              <span>Français</span>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
