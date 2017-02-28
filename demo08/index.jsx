"use strict";

var Hello = React.createClass({
    getInitialState: function () {
        return {
            opacity: 1.0
        };
    },

    componentDidMount: function () {
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 100);
    },


});

ReactDOM.render(
    // { <Hello name="world"/>,}
    document.getElementById('example')
);

var a=(b)=>{console.log(b)};
Math.max(...[12,24356,457,0.12,0]);

