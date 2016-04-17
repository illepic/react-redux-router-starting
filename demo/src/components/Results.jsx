import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Results = React.createClass({
  render: function() {
    return <div>
      <h1>Results page</h1>
      <ul>
      {this.props.results.map(result =>
        <li key={result.get('id')}>{result.get('title')}</li>
      )}
      </ul>
    </div>
  }
});

function mapStateToProps(state) {
  return {
    results: state.get('results')
  };
}

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);
