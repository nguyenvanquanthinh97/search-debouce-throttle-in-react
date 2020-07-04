import { useState, useEffect } from 'react';

const Route = ({ path, component, children }) => {
	const [ pathname, setPathname ] = useState(window.location.pathname);
	useEffect(() => {
		const onLocationChange = () => {
			//need re-render to set fetch pathname again
			setPathname(window.location.pathname);
		};
		window.addEventListener('popstate', onLocationChange);

		//don't need to remove Event listener
		//Because it will discard duplicate event target
		//I put here, just in case :)
		return () => window.removeEventListener('popstate'.onLocationChange);
	}, []);

	return pathname === path ? children || component : null;
};

export default Route;
