import React, { Component } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'

class helpFooter extends Component{
    constructor(props){
        super(props);
      }

     
      render() {
          return (
              <div>
                <ButtonToolbar>
                    {['top'].map(placement => (
                        <OverlayTrigger
                        trigger="click"
                        key={placement}
                        placement={placement}
                        overlay={
                            <Popover
                            id={`popover-positioned-${placement}`}
                            title={`Popover ${placement}`}
                            >
                            <strong>Need Help?</strong> {this.props.message}
                            </Popover>
                        }
                        >
                        <Button variant="secondary">Popover on {placement}</Button>
                        </OverlayTrigger>
                    ))}
                </ButtonToolbar>;
              </div>
          );
      }
}

export default helpFooter;
