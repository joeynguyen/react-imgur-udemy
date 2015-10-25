var React = require('react');
var Header = require('./header');
var TopicList = require('./topic-list');

module.exports = React.createClass({
    render: function() {
        return <div>
            <Header />
            {this.content()}
        </div>
    },
    content: function() {
        if(this.props.children) {
            // for nested routes under root
            return this.props.children;
        } else {
            // for root URL
            return <TopicList />
        }
    }
});
