// import './Button.css';

const Button = ({ children, onClick, className, disabled, active, invert, ...attrs }) => {
	const onClickAction = (e) => {
		if (disabled) {
			e.preventDefault();
		} else {
			return onClick(e);
		}
	};

	return (
		<button disabled={disabled} className="button" onClick={onClickAction} {...attrs}>
			{children}
		</button>
	);
};

export default Button;
