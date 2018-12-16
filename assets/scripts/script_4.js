const dataset = [11,351,727 ,7,101,859 , 10,578,820  , 5,748,769, 82,521,653, 1,315,635, 4,784,383, 10,768,193, 46,527,039, 66,989,083 ];
const datasetTitles = ["Belgium", "Bulgaria", "Czechia", "Denmark", "Germany", "Estonia", "Ireland", "Greece", "Spain", "France"];


d3.select(".container")
    .append("h1")
    .text("Population");


const w = d3.max(dataset)*2;
const h = dataset.length*40;

const svg = d3.select('#chart-pie')
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
