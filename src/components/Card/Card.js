import Button from '../Button/Button';

import './Card.css';

const Card = ({
	id,
	title,
	description,
	price,
	inCart,
	quantity,
	removeProductFromProducts,
	addProductToCart,
	getEditableProduct,
	setCurrentPageeApp,
	setCartProductQuantityIncrease,
	setCartProductQuantityDecrease,
	removeProductFromCart,
	viewCard,
	cartCard
}) => {
	const handleEdit = () => {
		setCurrentPageeApp('EditView');
		const product = { id, title, price, description, inCart };
		getEditableProduct(product);
	};
	const handleDeleteFromProducts = () => removeProductFromProducts(id);
	const handleDeleteFromCart = () => removeProductFromCart(id);
	const handleAddtoCart = () => {
		const newProductInCart = {
			id,
			title,
			description,
			price,
			// inCart: inCart,
			quantity: 1
		};
		addProductToCart(newProductInCart);
	};
	const handlePlus = () => setCartProductQuantityIncrease(id);
	const handleMinus = () => setCartProductQuantityDecrease(id);

	return (
		<div className="card">
			<div className="cardContent">
				<div className="cardTitle">{title}</div>
				<div>{description}</div>
				<div className="cardPrice">{`$${price}`}</div>
			</div>

			{viewCard && (
				<>
					<Button onClick={handleEdit}>edit</Button>
					<Button onClick={handleDeleteFromProducts}>delete</Button>
					<Button disabled={inCart} onClick={handleAddtoCart}>
						add to cart
					</Button>
				</>
			)}
			{cartCard && (
				<>
					<Button onClick={handleDeleteFromCart}>delete</Button>
					<div className="cardProductQuantity">{`quantity:${quantity}`}</div>
					<Button onClick={handlePlus}>+</Button>
					<Button disabled={quantity <= 1} onClick={handleMinus}>
						-
					</Button>
				</>
			)}
		</div>
	);
};

export default Card;
