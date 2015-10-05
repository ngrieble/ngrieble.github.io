'use strict';

React.render(React.createElement('h1', null, 'Markdown Editor!'), document.getElementById('example'));

var InputBox = React.createClass({
  displayName: 'InputBox',

  getInitialState: function getInitialState() {
    return { value: '' };
  },
  handleChange: function handleChange(event) {
    this.setState({ value: event.target.value });
  },
  render: function render() {
    var value = this.state.value;
    return React.createElement('textarea', { type: 'text', placeholder: 'Your text here', value: value, onChange: this.handleChange });
  }
});

React.render(React.createElement(InputBox, null), document.getElementById('inputBox'));

var ConvertButton = React.createClass({
  displayName: 'ConvertButton',

  handleClick: function handleClick(event) {
    // Call conversion function to display
    console.log('conversion intiated...');
  },
  render: function render() {
    return React.createElement(
      'button',
      { onClick: this.handleClick },
      'Click to convert markdown.'
    );
  }
});

React.render(React.createElement(ConvertButton, null), document.getElementById('convertButton'));