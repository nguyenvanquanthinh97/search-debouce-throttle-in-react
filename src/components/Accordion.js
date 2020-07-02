import React, { useState } from 'react';

const Accordion = ({ items }) => {
	const [ activeIndex, setActiveIndex ] = useState(-1);

	const onActiveClick = (index) => setActiveIndex(index);

	const renderedList = items.map(({ title, description }, index) => {
		const active = index === activeIndex ? 'active' : '';
		return (
			<React.Fragment key={title}>
				<div onClick={() => onActiveClick(index)} className={`title ${active}`}>
					<i className="dropdown icon" />
					{title}
				</div>
				<div className={`content ${active}`}>{description}</div>
			</React.Fragment>
		);
	});
	return <div className="ui styled accordion">{renderedList}</div>;
};

export default Accordion;
