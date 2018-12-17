chart = {
  const svg = d3.select(DOM.svg(width, height));

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);
  
  svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", line);
  
  return svg.node();
}

height = 500
margin = ({top: 20, right: 30, bottom: 30, left: 40})

x = d3.scaleTime()
    .domain(d3.extent(data, d => d.date))
    .range([margin.left, width - margin.right])

y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top])

xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))

yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y))

line = d3.line()
    .defined(d => !isNaN(d.value))
    .x(d => x(d.date))
    .y(d => y(d.value))
data = Array(1280) [
0: Object {date: 2007-04-23, value: 93.24}
  1: Object {date: 2007-04-24, value: 95.35}
  2: Object {date: 2007-04-25, value: 98.84}
  3: Object {date: 2007-04-26, value: 99.92}
  4: Object {date: 2007-04-29, value: 99.8}
  5: Object {date: 2007-05-01, value: 99.47}
  6: Object {date: 2007-05-02, value: 100.39}
  7: Object {date: 2007-05-03, value: 100.4}
  8: Object {date: 2007-05-04, value: 100.81}
  9: Object {date: 2007-05-07, value: 103.92}
  10: Object {date: 2007-05-08, value: 105.06}
  11: Object {date: 2007-05-09, value: 106.88}
  12: Object {date: 2007-05-09, value: 107.34}
  13: Object {date: 2007-05-10, value: 108.74}
  14: Object {date: 2007-05-13, value: 109.36}
  15: Object {date: 2007-05-14, value: 107.52}
  16: Object {date: 2007-05-15, value: 107.34}
  17: Object {date: 2007-05-16, value: 109.44}
  18: Object {date: 2007-05-17, value: 110.02}
  19: Object {date: 2007-05-20, value: 111.98}
	]
