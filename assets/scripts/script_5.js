var data = [
  {country: "Belgium", walking: 0, cycling: 0, aerobic: 0, strength: 0},
  {country: "Bulgaria", walking: 91.4, cycling: 10.0, aerobic: 10.8, strength: 10.5},
  {country: "Czechia", walking:  92.2, cycling:  35.5, aerobic: 34.7, strength: 19.3},
  {country: "Denmark", walking:  79.1, cycling:  47.1, aerobic: 73.8, strength: 48.3}
];

var series = d3.stack()
    .keys(["walking", "cycling", "aerobic", "strength"])
    .offset(d3.stackOffsetDiverging)
    (data);

var svg = d3.select("svg"),
    margin = {top: 20, right: 30, bottom: 30, left: 60},
    width = +svg.attr("width"),
    height = +svg.attr("height");

var x = d3.scaleBand()
    .domain(data.map(function(d) { return d.data; }))
    .rangeRound([margin.left, width - margin.right])
    .padding(0.1);

var y = d3.scaleLinear()
    .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
    .rangeRound([height - margin.bottom, margin.top]);

var z = d3.scaleOrdinal(d3.schemeCategory10);

svg.append("g")
  .selectAll("g")
  .data(series)
  .enter().append("g")
    .attr("fill", function(d) { return z(d.key); })
  .selectAll("rect")
  .data(function(d) { return d; })
  .enter().append("rect")
    .attr("width", x.bandwidth)
    .attr("x", function(d) { return x(d.data); })
    .attr("y", function(d) { return y(d[1]); })
    .attr("height", function(d) { return y(d[0]) - y(d[1]); })

svg.append("g")
    .attr("transform", "translate(0," + y(0) + ")")
    .call(d3.axisBottom(x));

svg.append("g")
    .attr("transform", "translate(" + margin.left + ",0)")
    .call(d3.axisLeft(y));

function stackMin(serie) {
  return d3.min(serie, function(d) { return d[0]; });
}

function stackMax(serie) {
  return d3.max(serie, function(d) { return d[1]; });
}
