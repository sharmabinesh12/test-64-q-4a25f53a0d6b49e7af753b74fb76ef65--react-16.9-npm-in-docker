import React from 'react';
import './index.scss';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
 

const DeleteLeadConfirmation = ({
	showDeleteConfirmation,
	index,
	onActionHandler,
	onModalActionHandler
 }) =>{

	return(
		<div className="add_lead_container">
			<Modal isOpen={showDeleteConfirmation} toggle={()=>onModalActionHandler('closeModal')} backdrop="static">
				<ModalHeader toggle={()=>onModalActionHandler('closeModal')}>Do you wish to delete this lead?</ModalHeader>
				<ModalBody className="delete_lead_form">
					<Button color="danger" size="md" className="delete_lead_btn" onClick={()=>onActionHandler('delete',index)}>Delete</Button>
					<Button color="secondary" size="md" className="cancel_lead_btn" onClick={()=>onModalActionHandler('closeModal')}>Cancel</Button>
				</ModalBody>
			</Modal>
		</div>
	)
}
export default DeleteLeadConfirmation;