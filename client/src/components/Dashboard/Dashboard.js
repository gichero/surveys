/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SurveysList from "./SurveysList/SurveysList";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<SurveysList />
			<div>
				<Link to="/surveys/new" className="btn_float">
					<FontAwesomeIcon icon={faPlus} className="float" />
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
