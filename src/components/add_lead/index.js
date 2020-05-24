import React, { Component } from 'react';
import './index.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
 
const typeOptions = ['City','State', 'Country'];
class AddLead extends Component  {
	state = {
		lead : {
			location_type : 'City'
		},
		add_btn_enabled : false
	}
	onChangeHandler = (e) =>{
		let targetElem = e.target; 
		let lead  = {...this.state.lead};
		lead[targetElem.name] = e.target.value;
		this.validateLeadData(lead);
		this.setState({lead})
	}

	validateLeadData = lead =>{
		// let saveBtnElm = document.getElementById('addBtn');
		if(lead.first_name && lead.last_name && lead.email && lead.mobile && lead.location_type && lead.location_string){
			// saveBtnElm.disabled = false;
			// saveBtnElm.classList.remove('disabled');
			this.setState({add_btn_enabled : true})
		} else {
			// saveBtnElm.disabled = true;
			// saveBtnElm.classList.add('disabled');
		}
	}
	// onAdd = () =>{
	// 	debugger
	// }
	render(){
		const { showAddLead, onActionHandler, onModalActionHandler } = this.props;
		const { lead, add_btn_enabled } = this.state;
		return(
			// <div className="add_lead_container">
				<Modal isOpen={showAddLead} toggle={()=>onModalActionHandler('closeModal')} backdrop="static">
					<ModalHeader toggle={()=>onModalActionHandler('closeModal')}>Add Lead</ModalHeader>
					<ModalBody>
						<Form className="add_lead_form">
							<Row form>
								<Col md={6}>
									<FormGroup className="">
										<Label>First Name*</Label>
										<Input type="text" name="first_name" onChange={(e)=>this.onChangeHandler(e)} value={lead.first_name}/>
									</FormGroup>
								</Col>
								<Col md={6}>
									<FormGroup>
										<Label>Last Name*</Label>
										<Input type="text" name="last_name" onChange={(e)=>this.onChangeHandler(e)} value={lead.last_name}/>
									</FormGroup>
								</Col>
							</Row>

							<Row form>
								<Col md={6}>
									<FormGroup>
										<Label>Email Address*</Label>
										<Input type="email" name="email" onChange={(e)=>this.onChangeHandler(e)} value={lead.email}/>
									</FormGroup>
								</Col>
								<Col md={6}>
									<FormGroup>
										<Label>Mobile*</Label>
										<Input type="tel" name="mobile" onChange={(e)=>this.onChangeHandler(e)} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={lead.mobile}/>
									</FormGroup>
								</Col>
							</Row>
							<Row form>
								<Col md={6}>
									<FormGroup>
										<Label>Location Type*</Label>
										<Input type="select" onChange={e=>this.onChangeHandler(e)} name="location_type">
											{typeOptions.map(type=><option value={lead.location_type} selected="City">{type}</option>)}
										</Input>
									</FormGroup>
								</Col>
								<Col md={6}>
									<FormGroup>
										<Label>Location String*</Label>
										<Input type="text" name="location_string" onChange={(e)=>this.onChangeHandler(e)} value={lead.location_string} />
									</FormGroup>
								</Col>
							</Row>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="default" size="md" className="close_lead_btn" onClick={()=>onModalActionHandler('closeModal')}>Close</Button>
						<Button color="secondary" size="md" className="add_lead_btn" onClick={()=>onActionHandler('save',null, lead)} id="add_lead_btnId" disabled={!add_btn_enabled}>Save</Button>
						{/* <button color="secondary" size="md" className="add_lead_btn" onClick={()=>this.onAdd('save',null, lead)} id="add_lead_btnId" disabled>Save</button> */}
						{/* <button id="addBtn" onClick={()=>alert('Hello')} disabled>My Button</button> */}

					</ModalFooter>
				</Modal>
			// </div>
		)
	}
}
export default AddLead;