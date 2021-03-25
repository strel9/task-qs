import Button from '../Button/Button';

// import './Navbar.css';

const Navbar = (props) => {
	const {
		cart,
		currentProductPage,
		paginationIncrease,
		paginationDecrease,
		inputSearchValue,
		onChangeSearch,
		setCurrentPageeApp
	} = props;

	const handleChangeSearch = (value) => onChangeSearch(value);
	const handleCreate = () => setCurrentPageeApp('CreateView');
	const handlePaginationDecrease = () => paginationDecrease();
	const handlePaginationIncrease = () => paginationIncrease();
	const handleCart = () => setCurrentPageeApp('Cart');

	return (
		<div className="navbar">
			<div>
				<Button onClick={handleCreate}>create</Button>
			</div>

			<div className="pagination">
				<Button disabled={currentProductPage === 1} onClick={handlePaginationDecrease}>
					prev
				</Button>
				<Button onClick={handlePaginationIncrease}>next</Button>
			</div>

			<input
				placeholder="Search"
				onChange={(e) => handleChangeSearch(e.target.value)}
				value={inputSearchValue}
			/>

			<Button onClick={handleCart}>
				cart items:
				<span>{cart && cart.length}</span>
			</Button>
		</div>
	);
};

export default Navbar;
