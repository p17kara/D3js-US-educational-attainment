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

data = Array(9) [
  0: Object {
  name: "Belgium"
  value: 19912018
}
  1: Object {
  name: "Bulgaria"
  value: 20501982
}
  2: Object {
  name: "Czechia"
  value: 20679786
}
  3: Object {
  name: "Denmark"
  value: 21354481
}
  4: Object {
  name: "Germany"
  value: 22604232
}
  5: Object {
  name: "Estonia"
  value: 21698010
}
  6: Object {
  name: "Ireland"
  value: 21183639
}
  7: Object {
  name: "Greece"
  value: 19855782
}
  8: Object {
  name: "Spain"
  value: 20796128
}
  9: Object {
  name: "France"
  value: 21370368
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
