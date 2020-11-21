import React from "react";
import "./SurveyField.scss";

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div className="form_items">
			<label>{label}</label>
			<div className="error_text">{touched && error}</div>
			<input className="input" {...input} />
		</div>
	);
};
