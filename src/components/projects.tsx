import { useGetProjectsModal } from "@/hooks/use-get-projects-modal"; // Importez le hook
import { useTranslation } from "react-i18next";

// composants
import { ContainerXl } from "./container";

// UI
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// images
import { ResponsiveModal } from "@/components/responsive-modal"; // Importez votre modal
import { useState } from "react";
import { Loader } from "./loader";
import { Button } from "./ui/button";
import Image5 from "/images/brunch-delice.avif";
import Image2 from "/images/budgetApp.avif";
import Image4 from "/images/burgerHouse.avif";
import Image1 from "/images/crm.png";
import Image3 from "/images/hash.avif";

export const Projects = () => {
  const { t } = useTranslation();

  // Initialisez l'état de la modal et les données du projet
  const { isOpen, open, close } = useGetProjectsModal();
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    image: string;
    href: string;
    description: string;
  } | null>(null);

  // Exemple de données de projet
  const projects = [
    {
      title: "Edge",
      image: Image1,
      href: "https://crm-eta-ruby.vercel.app",
      descriptionKey: "crm_description",
    },
    {
      title: "Budget App",
      image: Image2,
      href: "https://budget-app-beige.vercel.app",
      descriptionKey: "budget_app_description",
    },
    {
      title: "Forge Pass",
      image: Image3,
      href: "https://hashage-password.vercel.app",
      descriptionKey: "forge_pass_description",
    },
    {
      title: "Burger House",
      image: Image4,
      href: "https://burger-lrgt.vercel.app",
      descriptionKey: "burger_house_description",
    },
    {
      title: "Brunch Delice",
      image: Image5,
      href: "https://brunch-delice.vercel.app",
      descriptionKey: "brunch_delice_description",
    },
  ];

  // Fonction pour ouvrir la modal et définir le projet sélectionné
  const openModalWithProject = (project: {
    title: string;
    image: string;
    href: string;
    descriptionKey: string;
  }) => {
    setSelectedProject({
      title: project.title,
      image: project.image,
      href: project.href,
      description: t(project.descriptionKey), // Traduit la description avec la clé
    });
    open(); // Ouvrir la modal
  };

  return (
    <ContainerXl className="mb-10">
      <div id="projects">
        <h2 className="my-5 text-2xl text-center uppercase tracking-widest lg:text-4xl">
          {t("my_projects")}
        </h2>
        <div className="grid grid-cols-1 gap-3 w-full h-full md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="relative w-96 h-96 overflow-hidden group cursor-pointer lg:first-of-type:col-span-2 lg:first-of-type:w-full"
              onClick={() => openModalWithProject(project)} // Ouvrir la modal avec les infos du projet
            >
              <CardContent>
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover z-0 brightness-75 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </CardContent>
              <CardHeader className="absolute border-none bottom-0 left-2 p-4">
                <CardTitle className="text-white text-xl font-bold tracking-wide">
                  {project.title}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal Responsive */}
      <ResponsiveModal open={isOpen} onOpenChange={close}>
        <div className="flex flex-col items-center gap-y-5 p-7">
          {selectedProject ? (
            <>
              <h2 className="text-xl font-bold">{selectedProject.title}</h2>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-auto object-cover rounded-lg mb-4 lg:max-w-3xl "
              />
              <p className="text-center">{selectedProject.description}</p>
              <Button asChild>
                <a href={selectedProject.href} target="blank">
                  {t("learn_more")}
                </a>
              </Button>
            </>
          ) : (
            <Loader />
          )}
        </div>
      </ResponsiveModal>
    </ContainerXl>
  );
};
