import React from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
	{
		title: 'What is React ?',
		description: 'React is a javascript frontend framework'
	},
	{
		title: 'Why use React ?',
		description: 'React is a favorite JS frontend framework among engineers'
	},
	{
		title: 'How do you use React ?',
		description: 'You use react by creating components'
	}
];

export default () => {
	return (
		<div className="ui container" style={{ marginTop: '10px' }}>
			{/* <Accordion items={items} /> */}
			<Search />
		</div>
	);
};
