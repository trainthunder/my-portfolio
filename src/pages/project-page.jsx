import React from "react";
import ProjectPageHeader from "../components/project-page/project-page-header";
import { BurgerMenuProvider } from "../context/burger-menu-context";
import ProjectPageBurgerMenu from "../components/project-page/project-page-burger-menu";
import ProjectPageMain from "../components/project-page/project-page-main";

function ProjectPage() {
  return (
    <BurgerMenuProvider>
      <div className="w-full h-full bg-white overflow-clip">
        <ProjectPageHeader />
        <ProjectPageBurgerMenu />
        <ProjectPageMain />
      </div>
    </BurgerMenuProvider>
  );
}

export default ProjectPage;
