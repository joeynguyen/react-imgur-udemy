var React = require('react');
var Api = require('../utils/api');

module.exports = React.createClass({
    render: function() {
        return <div className="list-group">
            Topic List
            <ul>
                {this.getTopics()}
            </ul>
        </div>
    },
    getTopics: function() {
        var list = [];
        Api.get('topics/defaults')
            .then(function(data) {
                var categories = data.data;
                categories.map(function(item) { list.push(item.name) });
                console.log(list);
            })
    }
});
