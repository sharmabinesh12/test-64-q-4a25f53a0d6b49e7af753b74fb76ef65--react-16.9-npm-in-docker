import React from 'react';
import './index.scss';

const LeadsTable = ({
	lead_data,
	onActionHandler,
	onModalActionHandler
}) =>{
	return(
		<div className="lead-container">
			<div className="add_lead_modal">
				<button type="button" onClick={()=>onModalActionHandler('add')} className="add_lead_modal_btn">Add Lead</button>
			</div>
			
			<table className="leads_table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Mobile Num</th>
						<th>Location Type</th>
						<th>Location String</th>
						<th>Acton</th>
					</tr>
				</thead>
				<tbody>
					{lead_data.map((item,index) =>{
						return(
							<tr>
								<td>
									<span>{`${item.first_name} ${item.last_name}`}</span>
								</td>
								<td>
									<span>{item.email}</span>
								</td>
								<td>
									<span>{item.mobile}</span>
								</td>
								<td>
									<span>{item.location_type}</span>
								</td>
								<td>
									<span>{item.location_string}</span>
								</td>
								<td>
									<div className="action-box">
										<button type="button" onClick={()=>onModalActionHandler('edit',index)} className="update_lead_modal_btn">Mark Update</button>
										<button type="button" onClick={()=>onModalActionHandler('delete',index)} className="delete_lead_modal_btn">Delete</button>
									</div>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
export default LeadsTable;