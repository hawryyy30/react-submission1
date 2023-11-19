import Button from "../atoms/Button";

export default function Card({ id,archived , title, date, content, onArchive, onDelete }) {
		const onClickArchive = () => onArchive(id);
		const onClickDelete = () => onDelete(id);
	return (
		<div className=' min-w-full note-card flex flex-col justify-between border-2 border-solid border-black p-4 my-2 gap-2 rounded-md '>
			<div className='flex flex-col justify-between content gap-2'>
				<h2 className='note-title font-bold text-2xl truncate'>{title}</h2>
				<p className='font-bold text-sm'>{date}</p>
				<p className='max-h-full note-body overflow-y-scroll text-justify '>{content}</p>
			</div>
			<div className='control flex justify-self-end self-end gap-2 p-2'>
				<Button onSubmit={onClickArchive} type='bg-black text-white'>{archived? "Unarchive": "Archive"}</Button>
				<Button onSubmit={onClickDelete} type='bg-white text-black border border-2 border-solid border-black'>Remove</Button>
			</div>
		</div>
	);
}


