import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LeadsTable from '../../components/table_list';
import AddLead from '../../components/add_lead';
import DeleteLeadConfirmation from '../../components/delete_confirmation';
import UpdateLead from '../../components/update_lead';
import './index.scss';
import { addLead, getLeadsList, updateLead, deleteLead } from '../../redux/actions/leadAction';
class LeadsView extends Component {
	constructor(props){
		super(props);
		this.state = {
			showAddLead : false,
			showDeleteConfirmation : false,
			showUpdateLead : false,
			currentIndex : null,
			lead_data : [ 
			// 	{
      //   "id": 1,
      //   "updated_at": "2019-06-12T12:11:39.127842Z",
      //   "created_at": "2019-06-12T12:11:39.127901Z",
      //   "first_name": "Nilesh",
      //   "last_name": "Agarwal",
      //   "mobile": "9871028111",
      //   "email": "abc@gmail.com",
      //   "location_type": "City",
      //   "location_string": "India",
      //   "status": "Created",
      //   "communication": "HI how are uou?",
      //   "tags": null
			// }
			]
		}
	}

	componentDidMount(){
		this.props.getLeadsList();
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			lead_data : nextProps.leads_list
		})
	}	
	
	/**
	 * Action handler to take action on particular row
	 * @param {string} action action value can be edit, add, save and delete
	 * @param {number} index index of row 
	 */
	onActionHandler = (action, index, lead) =>{
		let lead_data  = [...this.state.lead_data];
		switch(action){
			case 'edit':
				this.props.updateLead({...lead_data[index],communication:lead},()=>{
					this.props.getLeadsList();
					this.onModalActionHandler('closeModal');
				});
				break;
			case 'delete':
				this.props.deleteLead(lead_data[index],()=>{
					this.props.getLeadsList();
					this.onModalActionHandler('closeModal');
				});				
				break;
			case 'save':                             //Adding lead here
				this.saveData(lead);
				break;
			default:
				break;
		}
		this.setState({lead_data})
	}

	
	onModalActionHandler = (action, index) =>{
		let lead_data  = [...this.state.lead_data];
		switch(action){
			case 'add':
				this.setState({showAddLead : true});
				break;
			case 'edit':
				this.setState({showUpdateLead : true, currentIndex:index});
				break;
			case 'delete':
				this.setState({showDeleteConfirmation : true, currentIndex:index})
				break;
			case 'closeModal':
				this.setState({
					showAddLead : false,
					showDeleteConfirmation : false,
					showUpdateLead : false
				});
				break;				
			default:
				break;
		}
		this.setState({lead_data})
	}

	/**
	 * Saving lead_data to local storage
	 * @param {array} lead_data complete lead_data set 
	 * @param {number} index index of row 
	 */
	saveData = (lead) =>{
		this.props.addLead(lead,()=>{
			this.props.getLeadsList();
			this.onModalActionHandler('closeModal');
		})
	}

	/**
	 * Validating name field
	 * @param {string} name name field to be validated
	 */
	validateName = name =>{
		if(name.length === 0){
			alert("Name is required field");
			return false;
		} else if(name.length > 32){
			alert("Max length for name field is 32");
		} else {
			return true;
		}
	}

	/**
	 * Validating value field based on type
	 * @param {string} type selected type
	 * @param {*} value value to be validated
	 */
	validateValue = (type,value) => {
		switch(type) {
			case 'String':
				var stringRule = /^[ A-Za-z_./-]*$/
				if(value.length > 16){
					alert('max length for value is 16')
				} else if(stringRule.test(value.trim())){
					return true;
				} else {
					alert("Value field should contains alphabets(a-z or A-Z) and (-, _ and .) special character");
				}
				break;
			case 'Double':
				if((value.match(/^-?\d*(\.\d+)?$/))){
					return true;
				} else {
					alert('Please enter valid double number')
				}
				break;
			case 'Boolean':
				if(value === 'true' || value === 'false'){
					return true;
				} else {
					alert('Value should be true/false');
				}
				break;
			default:
				break;
		}
	}

	render(){
		const { lead_data, showAddLead, showDeleteConfirmation, currentIndex, showUpdateLead } =this.state;
		return (
			<div className="main-container">
				<LeadsTable 
					lead_data={lead_data}
					// onChangeHandler = {this.onChangeHandler}
					onActionHandler = {this.onActionHandler}
					onModalActionHandler = {this.onModalActionHandler}
				/>

				
				{showAddLead &&
				 	<AddLead 
						showAddLead ={showAddLead}
						onActionHandler = {this.onActionHandler}
						onModalActionHandler = {this.onModalActionHandler}
					/>
				}
				{showDeleteConfirmation &&
					<DeleteLeadConfirmation 
						showDeleteConfirmation={showDeleteConfirmation} 
						index={currentIndex} 
						onActionHandler = {this.onActionHandler}
						onModalActionHandler = {this.onModalActionHandler}
					/>
				}
				{showUpdateLead && 
					<UpdateLead 
						showUpdateLead={showUpdateLead} 
						index={currentIndex} 
						lead={lead_data[currentIndex]}
						onActionHandler = {this.onActionHandler}
						onModalActionHandler = {this.onModalActionHandler}
					/>
				}

{/* <button id="addBtn" onClick={()=>alert('Hello')} disabled>My Button</button>
				<button type="button" onClick={()=>document.getElementById('addBtn').disabled = false} >Enable</button> */}
			</div>
		)
	}
}
const mapStateToProps = (state) => {
  return {
    leads_list : state.Lead.leads_list ? state.Lead.leads_list : [],
    // selectedId : state.Entity.selectedId && state.Entity.selectedId
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
		addLead,
		getLeadsList,
		updateLead,
		deleteLead
  },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LeadsView);
