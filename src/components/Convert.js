import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GOOGLE_API_TRANSLATE_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({ language, text }) => {
	const [ translate, setTranslate ] = useState('');
	const [ debounceText, setDebounceText ] = useState(text);

	useEffect(
		() => {
			const id = setTimeout(() => setDebounceText(text), 750);
			return () => clearTimeout(id);
		},
		[ text ]
	);

	useEffect(
		() => {
			const translateText = async () => {
				const { data } = await axios.post(
					'https://translation.googleapis.com/language/translate/v2',
					{},
					{
						params: {
							q: debounceText,
							target: language.value,
							key: GOOGLE_API_TRANSLATE_KEY
						}
					}
				);
				setTranslate(data.data.translations[0].translatedText);
			};
			translateText();
		},
		[ language, debounceText ]
	);
	return <div className="ui header">{translate}</div>;
};

export default Convert;
