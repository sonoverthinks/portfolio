import connectDB from "@/mongoose/connectDB";
import Project from "@/mongoose/models/Project";
import Title from "@/components/Title";

const Portfolio = ({ allProjects }) => {
  return (
    <div className="px-3 relative mt-[70px] w-full max-w-[800px] h-auto flex flex-col gap-3">
      <div className="flex flex-col gap-2 mt-3">
        {allProjects.reverse().map((project) => {
          return (
            <Title key={project.customID} data={project} source="project" />
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  await connectDB();
  const project = {
    _id: 0,
    // _v: 0,
    content: 0,
  };
  const results = await Project.find({}, project);

  const allProjects = results.map((project) => {
    const projectObj = project.toObject();
    projectObj.createdAt = projectObj.createdAt.toLocaleDateString("en-US");
    return projectObj;
  });

  return {
    props: { allProjects },
  };
};

export default Portfolio;
