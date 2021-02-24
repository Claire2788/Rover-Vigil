import React, { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import axios from 'axios';
import {  getCookie, signout, } from '../auth/Helpers';
import Vigil from './vigil';

const Vigils = ({ history }) => {
	// Signup State
	const [ values, setValues ] = useState({
		vigil: '',
		vigils: [],
		loading: true,
	});

	const { vigil, vigils, loading } = values;

	const token = getCookie('token');

	useEffect(() => {
		loadVigils();
	}, []);

	const loadVigils = () => {
		axios({
			method: 'GET',
			url: `/api/vigils`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then((response) => {
				// console.log('PRIVATE PROFILE UPDATE', response)
				const vigils = response.data.todos;
				setValues({ ...values, vigils, vigil: '', loading: false });
			})
			.catch((error) => {
				// console.log('LOAD TODOS ERROR', error.response.data.error);
				if (error.response.status === 401) signout(() => history.push('/'));
			});
	};

	// Get user input from form
	const handleChange = (e) => setValues({ ...values, vigil: e.target.value });

	const addVigil = (e) => {
		e.preventDefault();
		axios({
			method: 'POST',
			url: `/api/vigils/new`,
			data: { vigil },
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then((response) => {
				setValues({ ...values, vigil: ' ' });
				toast.success(response.data.message);
			})
			.then(loadVigils)
			.catch((error) => {
				toast.error(error.response.data.error);
			});
	};

	const deleteVigil = (id) => {
		axios({
			method: 'DELETE',
			url: `/api/vigils/${id}`,
			data: { vigil },
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then((response) => {
				toast.success(response.data.message);
			})
			.then(loadVigils)
			.catch((error) => {
				toast.error(error.response.data.error);
			});
	};

  const editVigil = (id) => {
		axios({
			method: 'PUT',
			url: `/api/vigils/${id}`,
			data: { vigil },
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then((response) => {
        setValues({ ...values, vigil: ' ' });
				toast.success(response.data.message);
			})
			.then(loadVigils)
			.catch((error) => {
				toast.error(error.response.data.error);
			});
	};

	const vigilForm = () => (
		<form onSubmit={addVigil}>
			<div className="form-group">
				<label className="text-muted">Complete a Vigil</label>
				<input onChange={handleChange} value={vigil} type="text" required className="form-control" />
			</div>
		</form>
	);

	return (
		<div className="col-md-6 offset-md-3">
			<ToastContainer />
			<h1 className="p-5 text-center">Your Vigil List</h1>
			{vigilForm()}

			{loading === true ? (
				<h1 className="pt-5 text-center ">Loading...</h1>
			) : vigils.length === 0 ? (
				<React.Fragment>
					<h3 className="pt-5 text-center">No Todos!</h3>
					<p className="lead text-center">Add a todo by completing the form</p>
				</React.Fragment>
			) : (
				<ul className="list-group list-group-flush">
					{vigils.map((vigilObject) => (
						<Vigil
							vigilObject={vigilObject}
							key={vigilObject._id}
							deleteVigil={deleteVigil}
						/>
					))}
				</ul>
        
			)}
		</div>
	);
};

export default Vigils;
