export default function TextArea({ onContentChange, value }) {
	const onContentType = (e) => {
		onContentChange(e.target.value);
	};

	return (
		<textarea
			placeholder='Today we learn about geometery.....'
			className=' rounded-md p-1 h-40 border-2 border-solid border-black focus:outline-none'
			onChange={onContentType}
			id='text'>
			{value}
		</textarea>
	);
}
