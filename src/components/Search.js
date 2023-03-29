import { useState } from 'react';

const Search = (props) => {
	const [location, setLocation] = useState('');

	const inputHandler = (e) => {
		setLocation(e.target.value);
	};

	const buttonHandler = (e) => {
		e.preventDefault();
		props.onSubmit(location);
	};


	return (
			<form>
			<img 
				className='location-pin'
				src="./images/location.png" />
			<input
				className='search-bar'
				type='text'
				placeholder='Enter your location'
				value={location}
				onChange={inputHandler}
			/>
			<button
				className='search-button'
				onClick={buttonHandler}
			>
			</button>
			</form>
	);
};

export default Search;