import React from 'react';

import BasicTable from '../components/Table/BasicTable';

import YoutubeForm from '../components/YoutubeForm';

const FormPage = () => {
	return (
		<div className='container'>
			<YoutubeForm />
			<BasicTable />
		</div>
	);
};

export default FormPage;
