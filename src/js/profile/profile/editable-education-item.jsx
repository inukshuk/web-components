 'use strict';
 
 import React from 'react';

 import EditableTimelineItem from '../abstract/editable-timeline-item.jsx';

 export default class EditableEducationItem extends EditableTimelineItem {
	render() {
		if(this.state.editing) {
			return <form className="profile-timeline-form-wrapper form-inline" onSubmit={this.save}>
				<div className="form-group">
					<div>
						<select className="form-control" onChange={() => {this.update();}} ref={(c) => this.startMonthInput = c} defaultValue={this.state.start_month}>
							{this.constructor.MONTHS.map(month => <option value={month} key={month}>{month}</option>)}
						</select>
					</div>
					<div>
						<input className="form-control" onChange={() => {this.update();}} ref={(c) => this.startYearInput = c} defaultValue={this.state.start_year} placeholder="Start year" />
					</div>
					<div>
						<input className="form-control" onChange={() => {this.update();}} ref={(c) => this.degreeNameInput = c} defaultValue={this.state.degree_name} placeholder="Degree name" />
					</div>
				</div>
				<div className="form-group">
					<div>
						<select className="form-control" onChange={() => {this.update();}} ref={(c) => this.endMonthInput = c} defaultValue={this.state.end_month} disabled={this.state.present}>
							{this.constructor.MONTHS.map(month => <option value={month} key={month}>{month}</option>)}
						</select>
					</div>
					<div>
						<input className="form-control" onChange={() => {this.update();}} ref={(c) => this.endYearInput = c} defaultValue={this.state.end_year} placeholder="End year" disabled={this.state.present} type="number" />
					</div>
					<div>
						<input className="form-control" onChange={() => {this.update();}} ref={(c) => this.institutionInput = c} defaultValue={this.state.institution} placeholder="Name of your institution" />
					</div>
				</div>
				<div className="form-group">
					<div className="checkbox">
						<label >
							<input 
								ref={(c) => this.presentInput = c}
								type="checkbox"
								onClick={() => {this.update();}}
								value={ this.state.present } />
							&nbsp;I currently work here
						</label>
					</div>
				</div>
				<div className="profile-timeline-form-actions">
					<a className="profile-editable-action" onClick={ () => { this.save(); }}>
						<span className="glyphicon glyphicon-ok"></span>
					</a>
					<a className="profile-editable-action" onClick={ () => { this.remove(); }}>
						<span className="glyphicon glyphicon-trash"></span>
					</a>
					<a className="profile-editable-action" onClick={ () => { this.cancel(); }}>
						<span className="glyphicon glyphicon-remove"></span>
					</a>
				</div>
			</form>;
		} else {
			return <div className="profile-timeline-wrapper">
				<div>
					{this.state.start_month && this.state.start_month.slice(0, 3) + ' '}
					{this.state.start_year}
					&nbsp;&ndash;&nbsp;
					{this.state.present ? 'present' : this.state.end_month && this.state.end_month.slice(0, 3) + ' ' + this.state.end_year }
					<br />
					{this.getDuration()}
				</div>
				<div className="profile-timeline">
					<div className="profile-timeline-point" />
					{this.state.institution}<br />
					{this.state.degree_name}
				</div>
				<div>
					<a className="profile-editable-action" onClick={() => { this.edit(); }}>
						<span className="glyphicon glyphicon-pencil"></span>
					</a>
				</div>
			</div>;
		}
	}

	static get EDITABLE_PROPERTIES() {
		return {
			start_month: 'January',
			start_year: '',
			degree_name: '',
			end_month: 'January',
			end_year: '',
			institution: '',
			present: false
		};
	}
}