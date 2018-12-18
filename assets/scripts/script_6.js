var data = [
  {country: "Germany", 2006: 78.4, 2015: 73.3},
  {country: "France", 2006: 70.0, 2015: 77.7},
  {country: "Spain", 2006:  65.6, 2015:  58.5},
  {country: "Greece", 2006:  47.9, 2015:  46.9}
];

var series = d3.stack()
    .keys(["2006", "2015"])
    .offset(d3.stackOffsetDiverging)
    (data);

var svg = d3.select("svg"),
    margin = {top: 20, right: 30, bottom: 30, left: 60},
    width = +svg.attr("width"),
    height = +svg.attr("height");

var x = d3.scaleBand()
    .domain(data.map(function(d) { return d.country; }))
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
    .attr("x", function(d) { return x(d.data.country); })
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

var chart = c3.generate({
  bindto: d3.select('.chart'),
  data: {
    columns: [
      ['Frequency of participation in cultural or sport activities in 2015', 68.1, 28.6, 70.2, 85.3, 73.3, 69.8, 69.1, 46.9, 58.5, 77.7]
    ]
  }
});
