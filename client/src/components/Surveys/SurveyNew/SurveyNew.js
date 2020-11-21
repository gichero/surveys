import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "../SurveyForm/SurveyForm";
import SurveyReview from "../SurveyReview/SurveyReview";

class SurveyNew extends Component {
	state = { showReview: false };
	renderContent() {
		if (this.state.showReview) {
			return (
				<SurveyReview onCancel={() => this.setState({ showReview: false })} />
			);
		}
		return (
			<SurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />
		);
	}
	render() {
		return <div className="survey">{this.renderContent()}</div>;
	}
}

export default reduxForm({
	form: "surveyForm",
})(SurveyNew);