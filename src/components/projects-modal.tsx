"use client";

import { useGetProjectsModal } from "@/hooks/use-get-projects-modal";
import { ResponsiveModal } from "./responsive-modal";


export const ProjectsModal = () => {
    const { isOpen, setIsOpen } = useGetProjectsModal();
    return (
        <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
          <ProjectsModal />
        </ResponsiveModal>
      );
}