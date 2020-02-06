import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Collapse,
  Card,
  Form,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl
} from "react-bootstrap";
import { handleChange } from "../../actions/promoCodeActions";

class PromoCode extends Component {
  state = {
    open: false,
  };



  onChange = e => {
    this.props.handleChange(e)
  };

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? "Apply" : "Hide"}
          Promo Code
          {this.state.open === false ? " +" : " -"}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Card>
              <Row className="show-grid">
                <Col md={12}>
                  <Form>
                    <FormGroup controlId="formInLineName">
                    <FormLabel>Promo Code</FormLabel>
                    <FormControl
                    type="text"
                    value={this.props.promoCode}
                    onChange={this.onChange}
                    />
                    </FormGroup>
                    <Button
                    block
                    bsStyle="success"
                    className="btn-round"
                    disabled={this.props.isDisabled}
                    onClick={this.props.giveDiscount}
                    >
                    Apply
                    </Button>

                  </Form>
                </Col>
              </Row>
            </Card>
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode:state.promoCode.value
  });
  

export default connect(mapStateToProps,{handleChange})(PromoCode)
