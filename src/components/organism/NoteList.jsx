import Card from "../molecules/Card";
import {showFormattedDate } from "../../utils/index";
import EmptyState from "../molecules/EmptyState";

export default function NoteList({ noteList, onArchive, onDelete }) {
	return (
		<section className='note-list w-100 gap-2 p-4 '>
			{noteList.length !== 0 ? (
				noteList.map((note, index) => {
					return <Card archived={note.archived} id={note.id} onArchive={onArchive} onDelete={onDelete} key={index} title={note.title} date={showFormattedDate(note.createdAt)} content={note.body} />;
				})
			) : (
				<EmptyState />
			)}
		</section>
	);
}
