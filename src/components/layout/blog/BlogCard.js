import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

//hooks
import useCutText from '../../hooks/global/useCutText';

const BlogCard = ({ projects }) => {
	const cutText = useCutText;

	console.log(projects);

	return (
		<div className="blog__card">
			<div className="blog__card--img" style={{ backgroundImage: `url(${projects.image})` }} />
			<p className="blog__date">{projects.date}</p>
			<Link to={`/projects/${projects.id}`} className="blog__heading">
				{projects.name}
			</Link>
			<Link to={`/projects/${projects.id}`} className="blog__text">
				{cutText(projects.smallText, 150)}
			</Link>
		</div>
	);
};

BlogCard.propType = {
	projects: PropType.object
};

export default BlogCard;
