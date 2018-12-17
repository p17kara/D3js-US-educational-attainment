chart = {
  const arcs = pie(data);

  const svg = d3.select(DOM.svg(width, height))
      .attr("text-anchor", "middle")
      .style("font", "12px sans-serif");

  const g = svg.append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);
  
  g.selectAll("path")
    .data(arcs)
    .enter().append("path")
      .attr("fill", d => color(d.data.name))
      .attr("stroke", "white")
      .attr("d", arc)
    .append("title")
      .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

  const text = g.selectAll("text")
    .data(arcs)
    .enter().append("text")
      .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
      .attr("dy", "0.35em");
  
  text.append("tspan")
      .attr("x", 0)
      .attr("y", "-0.7em")
      .style("font-weight", "bold")
      .text(d => d.data.name);
  
  text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
      .attr("x", 0)
      .attr("y", "0.7em")
      .attr("fill-opacity", 0.7)
      .text(d => d.data.value.toLocaleString());

  return svg.node();
}

data = Array(18) [
  0: Object {
  name: "<5"
  value: 19912018
}
  1: Object {
  name: "5-9"
  value: 20501982
}
  2: Object {
  name: "10-14"
  value: 20679786
}
  3: Object {
  name: "15-19"
  value: 21354481
}
  4: Object {
  name: "20-24"
  value: 22604232
}
  5: Object {
  name: "25-29"
  value: 21698010
}
  6: Object {
  name: "30-34"
  value: 21183639
}
  7: Object {
  name: "35-39"
  value: 19855782
}
  8: Object {
  name: "40-44"
  value: 20796128
}
  9: Object {
  name: "45-49"
  value: 21370368
}
  10: Object {
  name: "50-54"
  value: 22525490
}
  11: Object {
  name: "55-59"
  value: 21001947
}
  12: Object {
  name: "60-64"
  value: 18415681
}
  13: Object {
  name: "65-69"
  value: 14547446
}
  14: Object {
  name: "70-74"
  value: 10587721
}
  15: Object {
  name: "75-79"
  value: 7730129
}
  16: Object {
  name: "80-84"
  value: 5811429
}
  17: Object {
  name: "≥85"
  value: 5938752
}
]
color = d3.scaleOrdinal()
    .domain(data.map(d => d.name))
    .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())
height = Math.min(width, 500)
arc = d3.arc()
    .innerRadius(0)
    .outerRadius(Math.min(width, height) / 2 - 1)
arcLabel = {
  const radius = Math.min(width, height) / 2 * 0.8;
  return d3.arc().innerRadius(radius).outerRadius(radius);
pie = d3.pie()
    .sort(null)
    .value(d => d.value)
