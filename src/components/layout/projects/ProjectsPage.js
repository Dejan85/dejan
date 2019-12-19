import React, { useEffect, useRef } from 'react';

// components
import ProjectsCard from './ProjectsCard';

// hooks
import useResetScroll from '../../hooks/global/useResetScroll';
import useHandleNavActiveClass from '../../hooks/projects/useHandleNavActiveClass';
import useJson from '../../hooks/global/useJson';

const ProjectPage = () => {
	const { handleNavActiveClass } = useHandleNavActiveClass();
	const { resetScroll } = useResetScroll();
	const { getJson } = useJson();
	const list = useRef();
	const [ allProjects ] = [ getJson('allprojects') ];

	useEffect(
		() => {
			return resetScroll();
		},
		[ resetScroll ]
	);

	return (
		<div className="projectPage">
			<h6 className="projectPage__h6">Portfolio...</h6>
			<h2 className="projectPage__h2">My Projects</h2>
			{/* <div className="projectPage__nav">
				<ul className="projectPage__ul" ref={list}>
					<li className="projectPage__li active2" onClick={handleNavActiveClass.bind(this, list)}>
						All
					</li>
					 <li className="projectPage__li" onClick={handleNavActiveClass.bind(this, list)}>
						Html/Css
					</li>
					<li className="projectPage__li" onClick={handleNavActiveClass.bind(this, list)}>
						Javascript
					</li>
					<li className="projectPage__li" onClick={handleNavActiveClass.bind(this, list)}>
						React/Redux
					</li>
					<li className="projectPage__li" onClick={handleNavActiveClass.bind(this, list)}>
						Node/Mongo
					</li>
					<li className="projectPage__li" onClick={handleNavActiveClass.bind(this, list)}>
						Mern
					</li> 
				</ul>
			</div> */}
			<div className="projectPage__content">
				{allProjects &&
					allProjects.map((item) => {
						return <ProjectsCard key={item.id} project={item} />;
					})}
			</div>
		</div>
	);
};

export default ProjectPage;
