import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../../actions/actionCreators";

class StripePay extends Component {
	render() {
		// debugger;

		return (
			<StripeCheckout
				name="Barua"
				description="5$ for 5 email credits"
				amount={500}
				token={(token) => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="btn">Add Credits</button>
			</StripeCheckout>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(null, actions)(StripePay);
