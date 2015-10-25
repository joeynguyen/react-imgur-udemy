var React = require('react');
var Api = require('../utils/api');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            topics: []
        }
    },
    componentWillMount: function() {
        Api.get('topics/defaults')
            .then(function(data) {
                this.setState({
                    topics: data.data
                });
            }.bind(this));
    },
    render: function() {
        return <div className="list-group">
            Topic List
            <ul>
                {this.renderTopics()}
            </ul>
        </div>
    },
    renderTopics: function() {
        return this.state.topics.map(function(topic) {
            return <li>{topic.name}</li>
        });
    }
});
