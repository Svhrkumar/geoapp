import React, { useState } from 'react';
import './header.css';
const Header = () => {
	return (
		<div>
			<nav class='navbar bg-light '>
				<div class='container-fluid'>
					<a class='navbar-brand'>Geo Maps</a>
					<form class='d-flex' role='search'>
						<input
							class='form-control me-2'
							type='search'
							placeholder='Search'
							aria-label='Search'
						/>
						<button class='btn btn-outline-success' type='submit'>
							Search
						</button>
					</form>
				</div>
			</nav>
			;
		</div>
	);
};

export default Header;
