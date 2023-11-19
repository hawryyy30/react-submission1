export default function Button({ onSubmit, children, type }) {
	return (
		<button type='submit' onClick={onSubmit} className={`rounded-sm ${type} px-2 py-1`}>
			{children}
		</button>
	);
}
