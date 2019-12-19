import React from 'react';

// hooks
import useJson from '../../hooks/global/useJson';

// Components
import BlogCard from './BlogCard';

const Blog = () => {
	const { getJson } = useJson();
	const projects = getJson('blog');

	return (
		<div className="blog">
			<div className="blog__container">
				<h6 className="blog__h6">News about new project...</h6>
				<h2 className="blog__h2">My Blog</h2>
				{/* <p className="blog__p">
					Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
				</p> */}
				<div className="blog__content">
					{projects &&
						projects.map((item) => {
							return <BlogCard key={item.id} projects={item} />;
						})}
				</div>
			</div>
		</div>
	);
};

export default Blog;
