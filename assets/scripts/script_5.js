var data = [{
  "country": "Belgium",
  "EUR/month": 1,501.82,
}, {
  "country": "Bulgaria",
  "EUR/month": 184.07,
}, {
  "country": "Czechia",
  "EUR/month": 331.71,
}, {
  "country": "Germany",
  "EUR/month":  1,440.00,
}, {
  "country": "Estonia",
  "EUR/month": 390.00,
}, {
  "country": "Ireland",
  "EUR/month": 1,461.85,
}, {
  "country": "Greece",
  "EUR/month": 683.76,
}, {
  "country": "Spain",
  "EUR/month": 756.70,
}, {
  "country": "France",
  "EUR/month": 1,457.52,
}, {
  "country": "Croatia",
  "EUR/month": 395.61,
}];


chart = {
  const svg = d3.select(DOM.svg(width, height));
  
  svg.append("g")
      .attr("fill", "steelblue")
    .selectAll("rect").data(data).enter().append("rect")
      .attr("x", d => x(d.name))
      .attr("y", d => y(d.value))
      .attr("height", d => y(0) - y(d.value))
      .attr("width", x.bandwidth());
  
  svg.append("g")
      .call(xAxis);
  
  svg.append("g")
      .call(yAxis);
  
  return svg.node();
}
data = Array(26) [
  0: Object {name: "E", value: 0.12702}
  1: Object {name: "T", value: 0.09056}
  2: Object {name: "A", value: 0.08167}
  3: Object {name: "O", value: 0.07507}
  4: Object {name: "I", value: 0.06966}
  5: Object {name: "N", value: 0.06749}
  6: Object {name: "S", value: 0.06327}
  7: Object {name: "H", value: 0.06094}
  8: Object {name: "R", value: 0.05987}
  9: Object {name: "D", value: 0.04253}
  10: Object {name: "L", value: 0.04025}
  11: Object {name: "C", value: 0.02782}
  12: Object {name: "U", value: 0.02758}
  13: Object {name: "M", value: 0.02406}
  14: Object {name: "W", value: 0.0236}
  15: Object {name: "F", value: 0.02288}
  16: Object {name: "G", value: 0.02015}
  17: Object {name: "Y", value: 0.01974}
  18: Object {name: "P", value: 0.01929}
  19: Object {name: "B", value: 0.01492}
  
  data = (await require("@observablehq/alphabet"))
  .slice()
  .sort((a, b) => b.frequency - a.frequency)
  .map(({letter, frequency}) => ({name: letter, value: frequency}))
  
  x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.left, width - margin.right])
    .padding(0.1)

y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top])

xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x)
        .tickSizeOuter(0))

yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
height = 500

margin = ({top: 20, right: 0, bottom: 30, left: 40})
