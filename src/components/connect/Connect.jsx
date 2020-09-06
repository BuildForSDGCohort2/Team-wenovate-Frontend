import React from "react";
import PropTypes from "prop-types";
import "./connect.css";

const Connect = (props) => {
	const { title = "Discussions", value = 99 } = props;
	return (
		<div className="connect">
			<div className="connect-title">
				<p>{title}</p>
				<span>{value}+</span>
			</div>
			<div className="connect-note">
				<i style={{ color: "blue" }}>Timmy78</i> recently made a post on
				lovestock farming that you might be interested in
			</div>
			<button>Join more</button>
		</div>
	);
};

Connect.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
};

export default Connect;
