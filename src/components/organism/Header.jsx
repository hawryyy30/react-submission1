import Input from "../atoms/Input";

export default function Header({ onType, placeholder }) {
	return (
		<header className='sticky top-0 flex items-center justify-between w-full gap-4 px-4 py-2 bg-grad bg-gradient-to-b from-white'>
			<img src='images/notes.png' width='35px' alt='' />
			<Input onType={onType} placeholder={placeholder} />
			<img className='rounded-full' src='/images/profile-picture.png' width='50px' alt='' />
		</header>
	);
}
