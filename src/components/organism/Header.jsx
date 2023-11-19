import Input from "../atoms/Input";

export default function Header({ onType, placeholder }) {
	return (
		<header className=' gap-4  flex justify-between  py-2 px-4 items-center sticky top-0 w-full bg-grad bg-gradient-to-b from-white'>
			<img src='images/notes.png' width='35px' alt='' />
			<Input onType={onType} placeholder={placeholder} />
			<img className='rounded-full' src='/images/profile-picture.png' width='50px' alt='' />
		</header>
	);
}
