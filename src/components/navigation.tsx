import { useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

// icons
import {
  HiAcademicCap,
  HiChatBubbleLeftEllipsis,
  HiInboxStack,
  HiOutlineAcademicCap,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineInboxStack,
} from "react-icons/hi2";

// translation
import { useTranslation } from "react-i18next";

const routes = [
  {
    key: "projects",
    href: "/#projects",
    icon: HiOutlineInboxStack,
    activeIcon: HiInboxStack,
  },
  {
    key: "skills",
    href: "/#skills",
    icon: HiOutlineAcademicCap,
    activeIcon: HiAcademicCap,
  },
  {
    key: "contact",
    href: "/#contact",
    icon: HiOutlineChatBubbleLeftEllipsis,
    activeIcon: HiChatBubbleLeftEllipsis,
  },
];

export const Navigation = () => {
  const location = useLocation();

  const { t } = useTranslation();

  return (
    <nav>
      <ul className="flex items-center gap-x-5">
        {routes.map((item, index) => {
          const isActive = location.pathname + location.hash === item.href;
          const Icon = isActive ? item.activeIcon : item.icon;
          return (
            <li key={index}>
              <HashLink to={item.href} className="flex items-center gap-x-1">
                <Icon className="size-6" />
                <span className="hidden lg:flex">{t(item.key)}</span>
              </HashLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
