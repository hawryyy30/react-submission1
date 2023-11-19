import NoteList from "./NoteList";
import AddNoteForm from "../molecules/AddNoteForm";

export default function NoteBody({ onAddNote, placeholder, noteList, onArchive, onDelete }) {
	return (
		<section className='flex flex-col w-full justify-between gap-4 p-8'>
			<div id='add-note' className='flex flex-col items-center text-center  '>
				<h2 className='text-4xl font-bold '>What do you have in mind?</h2>
				<p className='pb-4'>Ideas often come in pieces. Write them down as you piece them together.</p>
			</div>
			<AddNoteForm placeholder={placeholder} onAddNote={onAddNote} />
			<div id='note-list'>
				<h3 className='text-lg font-semibold'>Your Notes</h3>
				<NoteList noteList={noteList.filter((note) => note.archived === false)} onArchive={onArchive} onDelete={onDelete} />
				<h3 className='text-lg font-semibold'>Archived</h3>
				<NoteList noteList={noteList.filter((note) => note.archived === true)} onArchive={onArchive} onDelete={onDelete} />
			</div>
		</section>
	);
}
