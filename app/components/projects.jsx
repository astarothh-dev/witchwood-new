const Projects = ({ projects }) => {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-6xl tracking-tighter font-extrabold mx-auto text-center m-4 pb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg border-2 overflow-hidden">
              <img className="w-full h-48 object-cover" src={project.image} alt="Project Image" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <h2 className="text-base text-black p-2 tracking-tighter">{project.description}</h2>
                <div className="mt-2">
                  {project.authors.map((author, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2">{author}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Projects;