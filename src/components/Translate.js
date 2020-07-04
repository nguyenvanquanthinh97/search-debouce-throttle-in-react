import React, { useState } from 'react';

import Dropdown from './Dropdown';
import Convert from './Convert';

const languages = [
	{
		label: 'English',
		value: 'en'
	},
	{
		label: 'Vietnamese',
		value: 'vi'
	},
	{
		label: 'Afrikaans',
		value: 'af'
	},
	{
		label: 'Arabic',
		value: 'ar'
	},
	{
		label: 'Hindi',
		value: 'hi'
	}
];

const Translate = (props) => {
	const [ selectedLanguage, setSelectedLanguage ] = useState(languages[0]);
	const [ text, setText ] = useState('');

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Input text to translate: </label>
					<input value={text} onChange={(e) => setText(e.target.value)} />
				</div>
			</div>
			<Dropdown
				selected={selectedLanguage}
				options={languages}
				onSelectChange={setSelectedLanguage}
				label="Choose a language"
			/>
			<hr />
			<Convert language={selectedLanguage} text={text} />
		</div>
	);
};

export default Translate;
