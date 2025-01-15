import React from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      imageUrl: "https://arkon.digital/nkosi-home_lowres.509bc073.jpg",
      altText: "Project 1",
    },
    {
      id: 2,
      imageUrl: "https://arkon.digital/diamond-home_lowres.743726b6.jpg",
      altText: "Project 2",
    },
    {
      id: 3,
      imageUrl: "https://arkon.digital/museum-home_lowres.001eca3f.jpg",
      altText: "Project 3",
    },
  ];

  return (
    <div className="flex w-screen gap-5 py-5 px-14 bg-[#151518]">
      {/* Heading */}
      <div className="w-1/4 pr-4">
        <h2 className="text-lg font-[Font2] pb-2">Featured Portfolio</h2>
        <p className="text-sm font-[Font3] leading-tight">
          Designed and developed these showcase projects with Figma, Spline,
          React, and ThreeJs in 2024.
        </p>
        <p className="text-sm font-[Font3] leading-tight pt-2">
          Various 3D elements/scenes are tailor-made to create more absorbing
          user experiences. Click to view each project in detail.
        </p>
      </div>

      {/* Projects */}
      <div className="w-3/4 pl-8">
        <div className="w-full h-[0.1rem] bg-cyan-300 mb-4"></div>
        <div className="grid w-full h-40 grid-cols-3 gap-4">
          {projects.map((project) => (
            <img
              key={project.id}
              className="w-full h-44 object-contain transition-transform hover:scale-95"
              src={project.imageUrl}
              alt={project.altText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
