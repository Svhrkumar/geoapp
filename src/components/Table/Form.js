import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { mapAction } from '../../redux/Reducers/mapsSlice';

const Form = () => {
	const [latLog, setLatLog] = useState({
		latitude: '',
		longitude: '',
	});
	const dispatch = useDispatch();
	const submit = (e) => {
		e.preventDefault();
		dispatch(mapAction(latLog));
	};
	return (
		<div>
			<div className='col-4'>
				<h4>Normal Form</h4>
				<form className='row g-3 needs-validation'>
					<div className='mb-3 '>
						<label for='name' className='form-label'>
							Latitude
						</label>
						<input
							type='text'
							className='form-control'
							id='name'
							name='name'
							value={latLog.latitude}
							aria-describedby='emailHelp'
							onChange={(e) =>
								setLatLog({
									...latLog,
									latitude: e.target.value,
								})
							}
						/>
					</div>
					<div className='mb-4 '>
						<label for='email' className='form-label'>
							Longitude
						</label>
						<input
							type='email'
							className='form-control'
							id='email'
							name='email'
							onChange={(e) =>
								setLatLog({
									...latLog,
									longitude: e.target.value,
								})
							}
							value={latLog.longitude}
						/>
					</div>

					<button className='btn btn-primary' onClick={submit}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Form;
