import { LuLoader } from "react-icons/lu";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <LuLoader className="size-6 animate-spin text-primary" />
    </div>
  );
};
