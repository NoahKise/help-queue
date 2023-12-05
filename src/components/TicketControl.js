import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter < 5 ? prevState.counter + 1 : 1
    }));
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.counter === 1) {
      currentlyVisibleState = <TicketList />;
      buttonText = "Add Ticket";
    } else if (this.state.counter === 2){
      currentlyVisibleState = <Question1 />;
      buttonText = "Yes";
    } else if (this.state.counter === 3){
      currentlyVisibleState = <Question2 />;
      buttonText = "Yes";
    } else if (this.state.counter === 4){
      currentlyVisibleState = <Question3 />;
      buttonText = "Yes";
    } else if (this.state.counter === 5){
      currentlyVisibleState = <NewTicketForm />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList />;
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;