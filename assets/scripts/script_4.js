const dataset = [36.5,41.4, 99.9 , 57.3];
const datasetTitles = ["Belgium", "United States"];


d3.select(".container")
    .append("h2")
    .text("Minimum wages");


const w = d3.max(dataset)*2;
const h = dataset.length*40;

const svg = d3.select(".container")
                .append("svg")
                .attr("width", w)
                .attr("height", h);


svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", (d, i) => i*40)
    .attr("height", (d, i) => 35)
    .attr("class", "bar")
    .append("title")
    .text((d, i) => datasetTitles[i]);

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text((d) => d)
    .attr("y", (d, i) => i * 40 + 25)
    .attr("class", "data-point");



svg.selectAll("rect")
    .transition()
    .duration(1000)
    .delay((d, i) => 1000 + i*200)
    .attr("width", (d, i) => d*1.5);


svg.selectAll("text")
    .transition()
    .duration(1000)
    .delay((d, i) => 1000 + i*200)
    .style("opacity", 1)
    .attr("x", (d, i) => d*1.5 + 5);
