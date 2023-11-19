import {useState} from "react"
import {toast} from "react-toastify"

export default function Input({ onType, placeholder,maxLength }) {

    const [inputValue,setInputValue] = useState('');
	function onSearchType(e) {
		if (maxLength && e.target.value.length > maxLength) {
			toast.error("Title can not exceed 50 characters")
		}
        else{
			setInputValue(e.target.value)
			onType(e.target.value, maxLength - e.target.value.length);
        }
	}

	return (

		<input
			type='text'
			className=' w-full rounded-md p-2 border-solid border-2 border-black focus:outline-none'
			placeholder={placeholder}
            value={inputValue}
			onChange={onSearchType}
            
		/>
	);

}



