import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import SubTotal from "./components/SubTotal/subtotal";
import PickUpSavings from "./components/pickUpSavings/pickupSavings";
import Taxes from "./components/taxes/taxes";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/itemDetails/itemDetails";
import PromoCode from "./components/promocode/promoCode";
import { connect } from "react-redux";
import { handleChange } from "./actions/promoCodeActions";

class App extends Component {
  state = {
    total: 100,
    pickUpSavings: -3.85,
    taxes: 0,
    est_total: 0,
    disabledPromoButton: false
  };

  componentDidMount() {
    this.setState(
      {
        taxes: (this.state.total + this.state.pickUpSavings) * 0.15
      },
      function() {
        this.setState({
          est_total:
            this.state.total + this.state.pickUpSavings + this.state.taxes
        });
      }
    );
  }

  giveDiscountHandler = () => {


    if (this.props.promoCode === "DISCOUNT") {
      this.setState({ est_total: this.state.est_total * 0.7 }, function() {
        this.setState({
          disabledPromoButton: true
        });
      });
    }

  };

  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <SubTotal price={this.state.total} />{" "}
          <PickUpSavings price={this.state.pickUpSavings} />
          <Taxes taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.est_total.toFixed(2)} />
          <ItemDetails price={this.state.est_total.toFixed(2)} />
          <hr />
          <PromoCode
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disabledPromoButton}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps ,
  { handleChange }
)(App);
