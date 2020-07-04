import React, { useState } from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

const options = [
	{
		label: 'The color of red',
		value: 'red'
	},
	{
		label: 'The color of green',
		value: 'green'
	},
	{
		label: 'The shade of blue',
		value: 'blue'
	}
];

export default () => {
	const [ selectedOption, setSelectedOption ] = useState(options[0]);
	return (
		<div className="ui container" style={{ marginTop: '10px' }}>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/search">
				<Search />
			</Route>
			<Route path="/dropdown">
				<Dropdown
					options={options}
					label="Select a color"
					selected={selectedOption}
					onSelectChange={setSelectedOption}
				/>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
};
