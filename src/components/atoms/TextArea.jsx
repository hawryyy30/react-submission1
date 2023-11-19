export default function TextArea({ onContentChange, value }) {
	const onContentType = (e) => {
		onContentChange(e.target.value);
	};

	return (
		<textarea
			placeholder='Today we learn about geometery.....'
			className='h-40 p-1 border-2 border-black border-solid rounded-md focus:outline-none'
			onChange={onContentType}
			id='text'>
			{value}
		</textarea>
	);
}
