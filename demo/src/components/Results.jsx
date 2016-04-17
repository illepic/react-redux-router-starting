import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actionCreators from '../action_creators';

// "Dumb" component
export const Results = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      <h1>Results page</h1>
      <ul>
      {this.props.results.map(result =>
        <li key={result.get('id')}>{result.get('title')}</li>
      )}
      </ul>
      <button ref="next"
              className="next"
              onClick={this.props.dostuff}>
        Do thing
      </button>
    </div>
  }
});

function mapStateToProps(state) {
  return {
    results: state.get('results')
  };
}

// "Connected" component, NOTE: any action_creators with same name as props
// are automatically lined up!
export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);
