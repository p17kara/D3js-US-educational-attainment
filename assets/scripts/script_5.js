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
