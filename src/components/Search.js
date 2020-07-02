import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = (props) => {
	const [ term, setTerm ] = useState('reactjs');
	const [ results, setResults ] = useState([]);

	useEffect(
		() => {
			const search = async () => {
				const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
					params: {
						action: 'query',
						list: 'search',
						origin: '*',
						format: 'json',
						srsearch: term
					}
				});

				setResults(data.query.search);
			};
			if (term && results.length === 0) {
				search();
			} else {
				const id = setTimeout(() => {
					if (term) {
						search();
					}
				}, 1000);
				return () => clearTimeout(id);
			}
		},
		[ term ]
	);

	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className="item">
				<div className="content">
					<a
						rel="noopener noreferrer"
						className="ui button right floated"
						target="_blank"
						href={`https://en.wikipedia.org?query=${result.pageid}`}
					>
						GO
					</a>
					<div className="header">{result.title}</div>
					<div dangerouslySetInnerHTML={{ __html: result.snippet }} />
				</div>
			</div>
		);
	});

	return (
		<div className="ui form">
			<label>Search</label>
			<input onChange={(e) => setTerm(e.target.value)} value={term} type="text" />
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};

export default Search;
