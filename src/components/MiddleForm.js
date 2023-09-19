import React from 'react';
import { useState } from 'react';
import FinalForm from './FinalForm';
import '../App.css';

function MiddleForm() {
	const[age, setAge] = useState('age');
	const[phone, setPhone] = useState({value: '',
										isTouched: false});
	const[dev, setDev] = useState('');

	// validate age
	const errorAgeMessage = () => {
		setAge('age');
	}

	//validate US phone number
	const phoneErrorMessage = () => {
		let phoneOneRegex = /^1?[- ]?\((\d{3})\)[- ]?(\d{3})[- ]?(\d{4})$/;
		let phoneTwoRegex = /^1?[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;

		return phoneOneRegex.test(phone.value) || phoneTwoRegex.test(phone.value) ?
				null :
				setPhone({value: '', isTouched: false});
	}

	//validate form
	const formValid = () => {
		return (
			age === 'good' &&
			phone.value &&
			dev.length > 1
		)
	}

	//continue with the form
	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Just one more to finish!')
	}

	return (
		<div>
			<header>
				<h3>Part 2 of 3</h3>
			</header>

			<main>
				<form className='form' onSubmit={handleSubmit}>
					{/* Age selecctor */}
					<label htmlFor='age' >
						Select your range age:
					</label>
					<select id='age'
							value={age}
							onChange={(e) => setAge(e.target.value)}
							required >
						<option value='age'>age</option>
						<option value='kiddo' >Kiddo under 18</option>
						<option value='good'>18 or more</option>
					</select>
					{age === 'kiddo' ?
						errorAgeMessage() :
						null }
					<p>
						* You must be at least 18 years old.
					</p>
					<hr />

					{/* Phone input */}
					<label htmlFor='phone' >
						Phone number:
					</label>
					<input id='phone'
							type='text'
							value={phone.value}
							placeholder='Type your US phone number'
							onChange={(e) => setPhone({...phone, value: e.target.value})}
							onBlur={() => setPhone({...phone, isTouched: true})}
							required />
					{phone.isTouched && phone.value.length > 0 ?
						phoneErrorMessage() :
						null}
					<p>
						* This is intentionally a 'text' type input. You must write a valid US phone number such as: 555-555-5555, (555)555-5555, (555) 555-5555, 555 555 5555, 5555555555, 1 555 555 5555, 1 555-555-5555, 1 (555) 555-5555, 1(555)555-5555...
					</p>
					<hr />

					{/* Yes or no input */}
					<label>Are you a dev?</label>
					<input className='radio' type="radio"
							name="dev"
							value="yes"
							id="yes"
							checked={dev === 'yes'}
							onChange={(e) => setDev(e.target.value)} />
					<label className='inputText' htmlFor="yes">Yes</label>

					<input className='radio' type="radio"
							name="dev"
							value="no"
							id="no"
							checked={dev === 'no'}
							onChange={(e) => setDev(e.target.value)} />
					<label className='inputText' htmlFor="no">No</label>

					<p>
						* Please select one option.
					</p>
				</form>

				{/* Conditional rendering in order to continue with the form */}
				{!formValid() ?
					null :
					<FinalForm />}
			</main>
		</div>
  )
}

export default MiddleForm;