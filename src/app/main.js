var data = [3, 7, 21, 31, 35, 42];

const handleP = () => {
  d3.select(".chart").selectAll("div")
  .data(data)
  .enter().append("div")
  .attr({
    class: 'bar'
  })
  .style('width', d => `${d * 10}px`)
  .text(d => `${d}%`);
}

handleP();