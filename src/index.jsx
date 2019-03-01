import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = (props) => {
//   return (
//     <div>
//       Hello,
//       {props.name}
//       {props.surname}
//     </div>
//   );
// };

class Hello extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked

    })
  }

  render() {
    // BUILD AND RETURN HTML
    const { name, surname } = this.props;
    return (
      <div className={this.state.clicked ? 'clicked' : null} onClick={this.handleClick}>
        Hello,
        {name}
        {surname}
      </div>
    )
  }
}


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Christian" surname="Bell" />, root);
}
