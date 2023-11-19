import React from "react";
import Header from "../organism/Header";
import NoteBody from "../organism/NoteBody";
import Footer from "../organism/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { getInitialData } from "../../utils";

export default class NoteApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getInitialData(),
			unfilteredNotes: getInitialData(),
		};

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onArchiveHandler = this.onArchiveHandler.bind(this);
		this.onSearchHandler = this.onSearchHandler.bind(this);
		this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
	}

	onAddNoteHandler(note){
		this.setState((prevState)=>{
			return{
				notes : [note, ...prevState.notes, ],
				unfilteredNotes : [note, ...prevState.unfilteredNotes, ]
			}
		})
	}

	onSearchHandler(text){
		if(text.length !== 0 ){
			this.setState(()=>{
				return{
					notes : this.state.unfilteredNotes
					.filter(unfilteredNote => unfilteredNote.title
						.toLowerCase()
						.includes(text.toLowerCase())
					|| unfilteredNote.body
						.toLowerCase()
						.includes(text.toLowerCase())
					)
					
				}
			})
		} else {
			this.setState(()=>{
				return{
					notes: this.state.unfilteredNotes
				}
			})
			
		}

	}

	onDeleteHandler(id) {
		const confirmed = confirm("Are you sure you want to delete this note?");
		if (confirmed !== true) {
			toast.error("Note not deleted");
			return;
		}

		this.setState((prevState) => {
			return {
				notes: prevState.notes.filter((note) => note.id !== id),
				unfilteredNotes: prevState.unfilteredNotes.filter((note) => note.id !== id),
			};
		});
		toast.success("Note deleted!");
	}

	onArchiveHandler(id) {
		const note = this.state.unfilteredNotes.find((note) => note.id === id);
		const movedNote = { ...note, archived: !note.archived };
		if (movedNote.archived) {
			toast.success("Note archived!");
		} else {
			toast.success("Note unarchived!");
		}

		this.setState((prevState) => {
			return {
				notes: [...prevState.notes.filter((note) => note.id !== id), movedNote],
				unfilteredNotes: [...prevState.unfilteredNotes.filter((note) => note.id !== id), movedNote],
			};
		});
	}

	render() {
		return (
			<main className=" min-h-screen flex flex-col justify-between">
				<Header onType={this.onSearchHandler} placeholder='Type keywords to search notes' />
				<NoteBody
					noteList={this.state.notes}
					textAreaPlaceholder='Today we learn about geometry....'
					placeholder='Math Notes....'
					onArchive={this.onArchiveHandler}
					onDelete={this.onDeleteHandler}
					onAddNote={this.onAddNoteHandler}
				/>
				<Footer />
				<ToastContainer
					position='top-right'
					autoClose={1000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</main>
		);
	}
}
