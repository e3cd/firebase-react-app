import React from "react";

const ProjectDetails = props => {
  console.log(props);
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            minima modi at fugiat fuga quasi voluptas ut labore cum perspiciatis
            dolorum, architecto in ab perferendis deserunt animi sed praesentium
            iure.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Anon</div>
          <div>1/1/2019</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
