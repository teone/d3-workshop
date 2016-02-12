'use strict';

var data = [3, 7, 21, 31, 35, 42];

var duration = 1000;

const update = (data) => {

  let el = d3.select(".chart")
  .selectAll("div")
  .data(data);

  el.enter()
  .append("div")
  .attr({
    class: 'bar'
  })
  .style({
    width: '0px'
  });

  el
  .exit()
  .transition()
  .duration(duration)
  .ease('bounce')
  .style({
    width: '0px'
  })
  .remove();
  
  el
  .transition()
  .duration(duration)
  .ease('bounce')
  .style({
    width: d => `${d * 10}px`
  })
  .text(d => `${d}%`);
}


update(data);

$(document).ready(() => {
  $('#addBtn').click(() => {
    data.push(Math.round(Math.random() * 50));
    update(data);
  });

  $('#rmBtn').click(() => {
    data.splice(data.length - 1, 1);
    update(data);
  });

  $('#rvBtn').click(() => {
    data = data.reverse();
    update(data);
  });
})