import React, { Component } from "react";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

let styles = {
  pickupSavings: {
    textDecoration: "underline"
  },
  totalSavings: {
    color: "red",
    fontWeight: 800
  }
};

class PickUpSavings extends Component {
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <p>adsjnsam adssa,kdm akdns,ad dms,a d sdms d kadm s</p>
      </Tooltip>
    );
    return (
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div style={styles.pickupSavings}>Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col style={styles.totalSavings} md={6}>
          {`$ ${this.props.price}`}
        </Col>
      </Row>
    );
  }
}

export default PickUpSavings;
