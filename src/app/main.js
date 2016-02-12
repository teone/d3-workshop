'use strict';

const data = [3, 7, 21, 31, 35, 42, 66, 72];

const color = d3.scale.category20c();

const update = () => {
  const width = $('.container').width();

  const xScale = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, width]);

  const container = d3.select('.chart');

  const els = container
    .selectAll('div')
    .data(data);

  els.enter()
    .append('div');

  els
    .style({
      width: d => `${xScale(d)}px`,
      height: '20px',
      'background-color': (d, i) => color(i)
    })
    .text(d => d);
};

update();

$(window).resize(() => {
  update();
});
