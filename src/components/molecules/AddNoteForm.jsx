import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default class AddNoteForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			formData: {
				id: +new Date(),
				title: "",
				body: "",
				archived: false,
				createdAt: new Date(),
			},
			maxLength: 50,
		};

		this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
		this.onContentChangeHandler = this.onContentChangeHandler.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onTitleChangeHandler = (text, length) => {
		this.setState(() => {
			return {
				formData: {
					...this.state.formData,
					title: text,
				},
				maxLength: length,
			};
		});
	};

	onContentChangeHandler = (text) => {
		this.setState(() => {
			return {
				formData: {
					...this.state.formData,
					body: text,
				},
			};
		});
	};

	onFormSubmit = (e) => {
		e.preventDefault();

		if (this.state.formData.title.length <= 0) {
			toast.error("Title can not be empty");
			return;
		}
		this.props.onAddNote(this.state.formData);
		toast.success("New note was added");
	};

	render() {
		return (
			<form className='flex flex-col w-full min-w-full gap-2 p-4 ' action=''>
				<p className='text-xs font-bold text-right'>Character left: {this.state.maxLength}</p>
				<Input onType={this.onTitleChangeHandler} placeholder={this.props.placeholder} maxLength={50} />
				<TextArea onContentChange={this.onContentChangeHandler} />
				<Button onSubmit={this.onFormSubmit} type='bg-black text-white'>
					Memo it !
				</Button>
			</form>
		);
	}
}
