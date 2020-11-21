import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "../formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../../actions/actionCreators";
import "./SurveyReview.scss";

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const reviewFieldsList = _.map(formFields, ({ label, name }) => {
		return (
			<div key={name}>
				<label className="label">{label}</label>
				<div className="values">{formValues[name]}</div>
			</div>
		);
	});
	return (
		<div className="survey_container">
			<div>
				<p>Please confirm your entries...</p>
			</div>

			{reviewFieldsList}
			<button className="btn" id="survey_btns" onClick={onCancel}>
				Back
			</button>
			<button
				onClick={() => submitSurvey(formValues, history)}
				className="btn"
				id="survey_btns"
			>
				Send Survey
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
