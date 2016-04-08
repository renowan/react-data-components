import React, { Component } from 'react';

class SearchField extends Component {

  constructor(...props) {
    super(...props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>
        <input
          className="form-control input-sm"
          id={this.props.id}
          type="search"
          value={this.props.value}
          onChange={this.onChange}
        />
        </label>
        {' '}

      </div>
    );
  }

}

// <a href="javascript:void(0)" className="btn btn-default">検索</a>

module.exports = SearchField;
