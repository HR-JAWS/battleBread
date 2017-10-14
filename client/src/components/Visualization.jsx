import React from 'react';
import { connect } from 'react-redux';
import {
  visboard
} from '../actions.js';

class Vis extends React.Component {
  constructor () {
    super();

    this.state = {
      margin: {top: 130, right: 100, bottom: 0, left: 80},
      width: 384,
      height: 384,
      svg: null
    }
  }

  componentDidUpdate() {
    const svg = d3.select(".vis").append("svg").attr("width", this.state.width + this.state.margin.left + this.state.margin.right)
          .attr("height", this.state.height + this.state.margin.top + this.state.margin.bottom)
          .style("position", 'absolute')
          .style("margin-left", this.state.margin.left + "px")
          .style("z-index", "100")
        .append("g")
          .attr("transform", `translate(${this.state.margin.left}, ${this.state.margin.top})`)

    if(this.props.visboard) {
      var x = d3.scaleBand()
          .domain(d3.range(this.props.visboard.length))
          .range([0, this.state.width]);

      var y = d3.scaleBand()
          .domain(d3.range(this.props.visboard.length))
          .range([0, this.state.height]);

      var color = d3.scaleSequential(d3.interpolateBlues)
          .domain([0, 26]);

      var row = svg.selectAll(".row")
          .data(this.props.visboard)
        .enter().append("g")
          .attr("class", "row")
          .attr("transform", (d, i) => `translate(0,${y(i)})`);
      row.selectAll(".cell")
          .data(d => d)
        .enter().append("rect")
          .attr("x", (d, i) => x(i))
          .attr("width", x.bandwidth())
          .attr("height", y.bandwidth())
          .style("fill", d => color(d))
          .style("fill-opacity", '0.7')

    }
  }

  render () {
    return (
      <div className='vis'></div>
      )
  }
};
const mapStateToProps = ({ board }) => ({visboard: board.visboard});
export default connect(mapStateToProps)(Vis);
