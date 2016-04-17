import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const Landing = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <h1>Hello</h1>
  }
});

