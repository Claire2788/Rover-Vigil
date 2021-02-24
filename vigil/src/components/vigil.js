import React from 'react';
import './todo.css'
// import trashIcon from '../assets/trash-alt-regular.svg';

const Vigil = ({ vigilObject, deleteVigil }) => {
	const { _id, vigil } = vigilObject;

	return (
		<div className="list-group-item">
			<div className="todo-content">
				<h4>{vigil}</h4>
				<div className="d-flex icons">
					<button className="action-buttons btn btn-danger" onClick={deleteVigil.bind(_id,_id)}>
						Delete 
					</button>
				</div>
			</div>
		</div>
	);
};

export default Vigil;

// <img style={{color: 'black'}} src={trashIcon} alt="far fa-trash-alt font awesome icon" />
