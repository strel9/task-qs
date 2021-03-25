import { useState } from 'react';

import Button from '../../components/Button/Button';

import './CreateView.css';

const CreateView = ({ setCurrentPageeApp, createNewProduct }) => {
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');

	const onChangeTitle = (e) => setTitle(e.target.value);
	const onChangePrice = (e) => setPrice(e.target.value);
	const onChangeDescription = (e) => setDescription(e.target.value);

	const INPUTS = [
		{
			type: 'text',
			placeholder: 'title',
			id: 'title',
			value: title,
			onChange: onChangeTitle
		},
		{
			type: 'number',
			placeholder: 'price',
			id: 'price',
			value: price,
			onChange: onChangePrice
		},
		{
			type: 'text',
			placeholder: 'description',
			id: 'description',
			value: description,
			onChange: onChangeDescription
		}
	];

	// const validateFields = () => {
	// 	const errors = {};
	// 	title === '' ? 'not empty' : errors;
	// };

	const handleSave = () => {
		const newProduct = {
			id: Date.now(),
			title: title,
			description: description,
			price: price,
			inCart: false
		};
		createNewProduct(newProduct);
		setCurrentPageeApp('MainView');
	};

	return (
		<div className="createView">
			<form className="form">
				<h1>Create Product</h1>

				{INPUTS.map(({ type, id, placeholder, value, onChange }, index) => (
					<input
						key={id + index}
						type={type}
						id={id}
						placeholder={placeholder}
						value={value}
						onChange={onChange}
					/>
				))}

				<Button onClick={handleSave}>Save</Button>
			</form>
		</div>
	);
};

export default CreateView;
