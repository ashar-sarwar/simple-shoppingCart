import React, { Component } from "react";
import { Button, Collapse, Media, Card, Row, Col } from "react-bootstrap";

class ItemDetails extends Component {
  state = {
    open: false
  };
  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? "See" : "Hide"} item details
          {this.state.open === false ? " +" : " -"}
        </Button>
        <Collapse in={this.state.open} >
          <div>
            <Card >
              <Media>
                <img
                  width={100}
                  height={100}
                  src="https://images-na.ssl-images-amazon.com/images/I/81LOiUChUrL._SX679_.jpg"
                />
                <Media.Body>
                  <p>Some old Qmobile phone</p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>{`$ ${this.props.price}`}</strong>
                      <br />
                      <strong className="price-strike">{`$ ${this.props.price}`}</strong>
                    </Col>
                    <Col md={6}>Qty: 1</Col>
                  </Row>
                </Media.Body>
              </Media>
            </Card>
          </div>
        </Collapse>
        {/* 
          
            <Card>
            
              
               
              
            </Media>
            </Card>
          </div>
        */}
      </div>
    );
  }
}

export default ItemDetails;
