var pie=new d3pie("pieChart",{ 
  size:{
    canvasHeight:400,
    canvasWidth: 500
  },
  data:{
    content:[
      {
        label:"Belgium",
        value:1701596,
        color:"#FFA500"
      },
      {
        label:"Bulgaria",
        value:3446512,
        color:"#FF8C00"
      },
      {
        label:"Czechia",
        value:3913450,
        color:"#FF7F50"
      },
      {
        label:"Denmark",
        value:2849335 ,
        color:"#FF6347"
      },
      {
        label:"Germany",
        value:2193687, 
        color:"#FF4500"
      },
	  {
        label:"Estonia",
        value:2012754, 
        color:"#FFD700"
      },
      {
        label:"Greece",
        value:2193687, 
        color:"#FF4500"
      },   
      {
        label:"Spain",
        value:2193687, 
        color:"#FF4500"
      }, 
      {
        label:"France",
        value:2193687, 
        color:"#FF4500"
      },     
    ]
  },
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
