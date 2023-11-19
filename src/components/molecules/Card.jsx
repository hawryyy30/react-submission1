import Button from "../atoms/Button";

export default function Card({ id, archived, title, date, content, onArchive, onDelete }) {
	const onClickArchive = () => onArchive(id);
	const onClickDelete = () => onDelete(id);
	return (
		<div className='flex flex-col justify-between min-w-full gap-2 p-4 my-2 border-2 border-black border-solid rounded-md note-card'>
			<div className='flex flex-col justify-between gap-2 content'>
				<h2 className='text-2xl font-bold truncate note-title'>{title}</h2>
				<p className='text-sm font-bold'>{date}</p>
				<p className='max-h-full overflow-y-scroll text-justify note-body '>{content}</p>
			</div>
			<div className='flex self-end gap-2 p-2 control justify-self-end'>
				<Button onSubmit={onClickArchive} type='bg-black text-white'>
					{archived ? "Unarchive" : "Archive"}
				</Button>
				<Button onSubmit={onClickDelete} type='bg-white text-black border border-2 border-solid border-black'>
					Remove
				</Button>
			</div>
		</div>
	);
}
