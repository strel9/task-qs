import { useEffect, useState } from 'react';

import MainView from '../pages/MainView/MainView';
import CreateView from '../pages/CreateView/CreateView';
import EditView from '../pages/EditView/EditView';
import Cart from '../pages/Cart/Cart';

import './App.css';

function App() {
	const [products, setProducts] = useState();
	const [cart, setCart] = useState();
	const [currentPageApp, setCurrentPageeApp] = useState('MainView');
	const [currentProductPage, setCurrentProductPage] = useState(1);
	const [inputSearchValue, setInputSearchValue] = useState('');
	const [editableProduct, setEditableProduct] = useState(null);

	const baseURL = 'http://localhost:3000/';

	useEffect(() => {
		fetch(`${baseURL}products?_page=${currentProductPage}&_limit=10`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
			});
	}, [currentProductPage]);

	useEffect(() => {
		fetch(`${baseURL}cart`)
			.then((res) => res.json())
			.then((data) => {
				setCart(data);
			});
	}, []);

	const getCompareText = (arr) =>
		arr.filter((item) => item.title.toLowerCase().includes(inputSearchValue.toLowerCase()));

	const onChangeSearch = (value) => {
		setInputSearchValue(value);
		setProducts(getCompareText(products));
	};
	const paginationIncrease = () => setCurrentProductPage(currentProductPage + 1);

	const paginationDecrease = () => setCurrentProductPage(currentProductPage - 1);

	const createNewProduct = (newProd) => {
		const newProducts = [...products, newProd];
		setProducts(newProducts);
	};

	const removeProductFromProducts = (currentID) => {
		const newProducts = products.filter((item) => item.id !== currentID);
		setProducts(newProducts);
	};
	const removeProductFromCart = (currentID) => {
		const newCart = cart.filter((item) => item.id !== currentID);
		setCart(newCart);
	};
	const setCartProductQuantityIncrease = (id) => {
		const newCart = cart.map((item) =>
			item.id == id ? Object.assign({}, item, { quantity: item.quantity + 1 }) : item
		);
		setCart(newCart);
	};
	const setCartProductQuantityDecrease = (id) => {
		const newCart = cart.map((item) =>
			item.id == id ? Object.assign({}, item, { quantity: item.quantity - 1 }) : item
		);
		setCart(newCart);
	};

	const addProductToCart = (newProductInCart) => {
		const newProducts = products.map((item) =>
			item.id == newProductInCart.id ? Object.assign({}, item, { inCart: true }) : item
		);
		setProducts(newProducts);

		const newCart = [...cart, newProductInCart];
		setCart(newCart);
	};

	const getEditableProduct = (product) => {
		setEditableProduct(product);
	};
	const editProduct = (newProduct) => {
		const newProducts = products.map((item) =>
			item.id == newProduct.id ? Object.assign({}, item, newProduct) : item
		);

		setProducts(newProducts);
		setCurrentPageeApp('MainView');
	};

	return (
		<div className="App">
			{currentPageApp === 'MainView' && (
				<MainView
					setCurrentPageeApp={setCurrentPageeApp}
					currentProductPage={currentProductPage}
					cart={cart}
					products={products}
					inputSearchValue={inputSearchValue}
					onChangeSearch={onChangeSearch}
					paginationIncrease={paginationIncrease}
					paginationDecrease={paginationDecrease}
					removeProductFromProducts={removeProductFromProducts}
					addProductToCart={addProductToCart}
					getEditableProduct={getEditableProduct}
				/>
			)}

			{currentPageApp === 'CreateView' && (
				<CreateView
					setCurrentPageeApp={setCurrentPageeApp}
					products={products}
					createNewProduct={createNewProduct}
				/>
			)}

			{currentPageApp === 'EditView' && (
				<EditView products={products} editableProduct={editableProduct} editProduct={editProduct} />
			)}

			{currentPageApp === 'Cart' && (
				<Cart
					cart={cart}
					products={products}
					removeProductFromProducts={removeProductFromProducts}
					addProductToCart={addProductToCart}
					setCartProductQuantityIncrease={setCartProductQuantityIncrease}
					setCartProductQuantityDecrease={setCartProductQuantityDecrease}
					removeProductFromCart={removeProductFromCart}
				/>
			)}
		</div>
	);
}

export default App;
