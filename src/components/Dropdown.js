import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectChange, label }) => {
	const [ open, setOpen ] = useState(false);
	const refDropdown = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			if (refDropdown.current.contains(event.target)) return;
			setOpen(false);
		};
		document.body.addEventListener('click', onBodyClick);

		return () => document.body.removeEventListener('click', onBodyClick);
	}, []);

	const renderedOptions = options.map((option) => {
		if (selected.value === option.value) return null;
		return (
			<div className="item" onClick={() => onSelectChange(option)} key={option.value}>
				{option.label}
			</div>
		);
	});

	const activeClassName = (className) => (open ? className : '');

	return (
		<div ref={refDropdown} onClick={() => setOpen(!open)} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div className={`ui selection dropdown ${activeClassName('visible active')}`}>
					<i className="dropdown icon" />
					<div className="text">{selected.label}</div>
					<div className={`menu ${activeClassName('visible transition')}`}>{renderedOptions}</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
