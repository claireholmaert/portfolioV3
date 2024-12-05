// react
import { useState } from "react";

// components
import { Switch } from "@/components/ui/switch";

// hooks
import { useTheme } from "@/hooks/use-theme";

// icons
import { HiMoon, HiSun } from "react-icons/hi2";

export const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newIsDark = !prev;
      setTheme(newIsDark ? "dark" : "light");
      return newIsDark;
    });
  };

  return (
    <div className="flex items-center gap-x-1">
      <HiSun className="size-6 invisible dark:text-amber-500 dark:visible " />
      <Switch checked={isDark} onCheckedChange={toggleTheme} />
      <HiMoon className="size-6 visible text-blue-500 dark:invisible" />
    </div>
  );
};
