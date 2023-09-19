import React from "react";
import { useState } from "react";
import '../App.css';

function FinalForm () {
	const[range, setRange] = useState('3');
	const[comment, setComment] = useState('');

	// check the range
	const rangeErrorMessage = () => {
		return (
			<div>
				{/* comments */}
				<label htmlFor="comment" >
				Comments:
				</label>
				<textarea id='comment'
						type='text'
						name="comment"
						placeholder={'Type minimum 12 characters'}
						value={comment}
						onChange={(e) => setComment(e.target.value)} />
			</div>
		)
	}

	// activate button or not
	const formValid = () => {
		return (
			(range === '3') ||
			(range !== '3' && comment.length >= 12)
		)
	}

	// submit the form
	const handleSubmit = (e) => {
		alert('You succesfully finish this form!');
	}

	return (
		<div>
			<header>
				<h3>Part 3 of 3</h3>
			</header>

			<main>
				<form className="form" onSubmit={handleSubmit} >
					{/* rate the form */}
					<label htmlFor="range" >
						Please rate this form: {range}
					</label>
					<input className="range" id='range'
							type='range'
							value={range}
							min='1'
							max='3'
							onChange={(e) => setRange(e.target.value)}
							required />
					<p>
						* Notice that if your rate is less than 3 you must submit a comment.
					</p>
					{range === '3' ? null : rangeErrorMessage()}

					{/* Finally the button */}
					<button type='submit'
							disabled={!formValid()} >
						Submit
					</button>
				</form>
			</main>
		</div>
	)
}

export default FinalForm;