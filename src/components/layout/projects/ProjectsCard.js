import React from 'react';
import { Link } from 'react-router-dom';

//hooks
import useCutText from '../../hooks/global/useCutText';

const ProjectsCard = ({ project }) => {
	return (
		<div className="projectPage__card">
			<div className="projectPage__card--img" style={{ backgroundImage: `url(${project.image})` }} />
			<div className="projectPage__card--text">
				<Link to={`/projects/${project.id}`} className="projectPage__card--link">
					{project.name}
				</Link>
				<Link to={`/projects/${project.id}`} className="projectPage__card--p">
					{useCutText(project.smallText, 300)}
				</Link>
			</div>
		</div>
	);
};

export default ProjectsCard;
