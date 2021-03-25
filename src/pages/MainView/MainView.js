// import { useMemo } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';

import './MainView.css';

const MainView = (props) => {
	const { products } = props;

	return (
		<div>
			<Navbar products={products} {...props} />

			<div className="productsList">
				{products && products.map((item) => <Card viewCard key={item.id} {...item} {...props} />)}
			</div>
		</div>
	);
};

export default MainView;
