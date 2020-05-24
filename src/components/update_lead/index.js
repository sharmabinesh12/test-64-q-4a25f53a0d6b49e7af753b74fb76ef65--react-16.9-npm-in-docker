import React, {useState} from 'react';
import './index.scss';
import { 
	Button, 
	Modal, 
	ModalHeader, 
	ModalBody, 
	ModalFooter,
	Form,
	FormGroup,
	Input,
	Label 
} from 'reactstrap';

const UpdateLead = ({
	showUpdateLead,
	index,
	lead,
	onActionHandler,
	onModalActionHandler
 }) =>{
	const [communication, setCommunication] = useState(lead.communication);

	return(
		<div className="update_lead_container">
			<Modal isOpen={showUpdateLead} toggle={()=>onModalActionHandler('closeModal')} backdrop="static">
				<ModalHeader toggle={()=>onModalActionHandler('closeModal')}>Mark Communication</ModalHeader>
				<ModalBody>
					<Form className="update_lead_form">
						<FormGroup>
							<Label for="exampleText">Communication</Label>
							<Input type="textarea" name="communication" id="exampleText" value={communication} onChange={(e)=>setCommunication(e.target.value)}/>
						</FormGroup>						
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="default" size="md" className="" onClick={()=>onModalActionHandler('closeModal')}>Cancel</Button>
					<Button color="secondary" size="md" className="update_lead_btn" onClick={()=>onActionHandler('edit',index, communication)}>Save</Button>				</ModalFooter>
			</Modal>
		</div>
	)
}
export default UpdateLead;