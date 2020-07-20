import React from "react";
import netBankingIcon from "../../../assets/images/add_address.svg";
import downIcon from "../../../assets/images/down.svg";
import "../style.scss";

function NetBankingComponent(props) {
	const {banks, onBankSelected, onOtherBackSelected} = props;
	return (
		<div className="net-banking-container">
			<div className="title">Net Banking</div>
			<div className="bank-list-container">
				{banks.map((bank) => (
					<div key={bank.payment_method} className="bank" id={bank.payment_method} value={bank.payment_method} onClick={onBankSelected}>
						<img src={bank.image_url} className="image"/>
						<div className="name">{bank.description}</div>
					</div>
				))}
			</div>
			<div className="other-banks" onClick={onOtherBackSelected}>
				<div className="other-bank-title">Other Banks</div>
				<img src={downIcon} className="down-image"/>
			</div>
		</div>
	);
}

export {NetBankingComponent};
