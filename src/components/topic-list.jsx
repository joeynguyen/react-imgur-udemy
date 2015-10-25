var React = require('react');
var TopicStore = require('../stores/topic-store');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            topics: []
        }
    },
    componentWillMount: function() {
        TopicStore.getTopics()
            .then(function() {
                // We have successfully fetched topics
                // topics are available TopicStore.topics
                this.setState({topics: TopicStore.topics})
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
