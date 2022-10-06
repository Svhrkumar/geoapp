import { Formik, useFormik, Form, Field, ErrorMessage } from 'formik';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { addUserAction } from '../redux/Reducers/userDataSlice';
import Counter from './Counter';

const initialValues = {
	name: '',
	email: '',
	channel: '',
};

const validate = (values) => {
	let errors = {};
	console.log('Validate', values);
	if (!values.name) {
		errors.name = 'Required';
	}

	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	if (!values.channel) {
		errors.channel = 'Required';
	}
	return errors;
};

const validationSchema = Yup.object({
	name: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email format').required('Required'),
	channel: Yup.string().required('Required'),
});
const YoutubeForm = () => {
	// const { users } = useSelector((store) => store.userInfo);
	const dispatch = useDispatch();
	var dispatchData;
	const [userDetails, setUserDetails] = useState({
		name: '',
		email: '',
		channel: '',
	});

	// useEffect(() => {
	// 	dispatch(addUserAction(dispatchData));
	// }, [dispatchData]);
	console.log('dispatchData', dispatchData);
	const onSubmit = (values) => {
		console.log('submit values', values);
	};
	const submit = (e) => {
		e.preventDefault();
		console.log('submited');
		dispatch(addUserAction(userDetails));
	};
	console.log('states', userDetails);

	return (
		<div className='container pt-4'>
			<div className='row'>
				<div className='col-4'>
					<h4>Normal Form</h4>
					<form className='row g-3 needs-validation'>
						<div className='mb-3 '>
							<label for='name' className='form-label'>
								Name
							</label>
							<input
								type='text'
								className='form-control'
								id='name'
								name='name'
								value={userDetails.name}
								aria-describedby='emailHelp'
								onChange={(e) =>
									setUserDetails({
										...userDetails,
										name: e.target.value,
									})
								}
							/>
						</div>
						<div className='mb-4 '>
							<label for='email' className='form-label'>
								E-Mail
							</label>
							<input
								type='email'
								className='form-control'
								id='email'
								name='email'
								onChange={(e) =>
									setUserDetails({
										...userDetails,
										email: e.target.value,
									})
								}
								value={userDetails.email}
							/>
						</div>
						<div className='mb-3 '>
							<label for='Channel' className='form-label'>
								Channel
							</label>
							<input
								type='text'
								className='form-control'
								id='Channel'
								name='channel'
								aria-describedby='emailHelp'
								onChange={(e) =>
									setUserDetails({
										...userDetails,
										channel: e.target.value,
									})
								}
								value={userDetails.channel}
							/>
						</div>
						<button className='btn btn-primary' onClick={submit}>
							Submit
						</button>
					</form>
				</div>

				<div className='col-4'>
					<h4>Formik Form With Formik</h4>
					<Formik
						initialValues={initialValues}
						onSubmit={onSubmit}
						validationSchema={validationSchema}>
						<Form className='row g-3 needs-validation'>
							<div className='mb-3 '>
								<label for='name' className='form-label'>
									Name
								</label>
								<Field
									type='text'
									className='form-control'
									id='name'
									name='name'
									aria-describedby='emailHelp'
								/>
								<ErrorMessage name='name' />
							</div>
							<div className='mb-4 '>
								<label for='email' className='form-label'>
									E-Mail
								</label>
								<Field
									type='email'
									className='form-control'
									id='email'
									name='email'
								/>
								<ErrorMessage name='email' />
							</div>
							<div className='mb-3 '>
								<label for='Channel' className='form-label'>
									Channel
								</label>
								<Field
									type='text'
									className='form-control'
									id='Channel'
									name='channel'
									aria-describedby='emailHelp'
								/>
								<ErrorMessage name='channel' />
							</div>
							<button type='submit' className='btn btn-primary'>
								Submit
							</button>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default YoutubeForm;
