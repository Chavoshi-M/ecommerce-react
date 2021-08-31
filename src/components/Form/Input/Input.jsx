import './input.scss'
const Input = ({handleChange,label,...props}) => {
	return (
		 <div className='group'>
			<input className='form-input' onChange={onchange} {...props}/>
			{label&&(<label className={`${props.value.length?'shrink':''} form-input-label`}>{label}</label>)}
		 </div>
	);
}
 
export default Input;