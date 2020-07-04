import React from 'react';

const Link = ({ to, children, className }) => {
	const onLinkClick = (event) => {
		console.log(event);
		if(event.ctrlKey || event.metaKey) {
			return;
		}

		event.preventDefault();
		window.history.pushState({}, '', to);

		const locationChange = new PopStateEvent('popstate');
		window.dispatchEvent(locationChange);
		return;
	};

	return (
		<a onClick={onLinkClick} href={to} className={className}>
			{children}
		</a>
	);
};

export default Link;
