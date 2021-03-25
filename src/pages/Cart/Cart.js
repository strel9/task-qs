import Card from '../../components/Card/Card';

import './Cart.css';

const Cart = (props) => {
	const { cart } = props;

	const totalPrice = cart.reduce((sum, elem) => sum.price + elem.price * elem.quantity);

	return (
		<div>
			<span>{`Price of all products:${totalPrice}`}</span>
			<div className="cart">
				{cart && cart.map((item) => <Card cartCard key={item.id} {...item} {...props} />)}
			</div>
		</div>
	);
};

export default Cart;
