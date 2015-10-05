React.render(
  React.createElement('h1', null, 'Markdown Editor!'),
  document.getElementById('example')
);

var InputBox = React.createClass({
  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    return <textarea type="text" placeholder="Your text here" value={value} onChange={this.handleChange} />;
  }
});

React.render(
    <InputBox />,
    document.getElementById('inputBox')
);

var ConvertButton = React.createClass({
  handleClick: function(event) {
    // Call conversion function to display
    console.log('conversion intiated...');
  },
  render: function() {
    return (
      <button onClick={this.handleClick}>
        Click to convert markdown.
      </button>
    );
  }
});

React.render(
  <ConvertButton />,
  document.getElementById('convertButton')
);
