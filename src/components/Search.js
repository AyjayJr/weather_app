
const Search = () => {

	return (
		<div className='card'>
			<img 
				className='location-pin'
				src="./images/location.png" />
			<input
				className='search-bar'
				type='text'
				placeholder='Enter your location'
			/>
			<button className='search-button'></button>
		</div>
	);
};

export default Search;