import { useState } from 'react';

import Button from '../../components/Button/Button';

import './EditView.css';

const EditView = (props) => {
	const {
		editableProduct: { id, title, price, description, inCart },
		editProduct
	} = props;

	const [newTitle, setTitle] = useState(title);
	const [newPrice, setPrice] = useState(price);
	const [newDescription, setDescription] = useState(description);

	const onChangeTitle = (e) => setTitle(e.target.value);
	const onChangePrice = (e) => setPrice(e.target.value);
	const onChangeDescription = (e) => setDescription(e.target.value);

	const handleSave = (e) => {
		const newProduct = {
			id: id,
			title: newTitle,
			description: newDescription,
			price: newPrice,
			inCart: inCart
		};

		editProduct(newProduct);
	};

	return (
		<div className="editView">
			<form className="form">
				<h1>Edit Product</h1>

				<input
					type="text"
					id="title"
					placeholder="title"
					name="title"
					value={newTitle}
					onChange={onChangeTitle}
				/>
				<input
					type="number"
					id="price"
					placeholder="price"
					name="price"
					value={newPrice}
					onChange={onChangePrice}
				/>
				<input
					type="text"
					id="description"
					placeholder="description"
					name="description"
					value={newDescription}
					onChange={onChangeDescription}
				/>

				<Button onClick={handleSave}>Save</Button>
			</form>
		</div>
	);
};

export default EditView;
