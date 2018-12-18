//Donut chart example
nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true)     //Display pie labels
      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
      .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
      .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
      ;

    d3.select("#chart2 svg")
        .datum(exampleData())
        .transition().duration(350)
        .call(chart);

  return chart;
});

//Pie chart example data. Note how there is only a single array of key-value pairs.
function exampleData() {
  return  [
      { 
        "label": "Belgium",
        "value" : 608182
      } ,
      { 
        "label": "Bulgaria",
        "value" : 325182
      } ,
      { 
        "label": "Czechia",
        "value" : 213984
      } ,
      { 
        "label": "Denmark",
        "value" : 173993
      } ,
      { 
        "label": "Germany",
        "value" : 163688
      } ,
      { 
        "label": "Estonia",
        "value" : 162591
      } ,
      { 
        "label": "Ireland",
        "value" : 144449
      } ,
      { 
        "label": "Greece",
        "value" : 139981
      } , 
      { 
        "label": "Spain",
        "value" : 115490
      } ,
      { 
        "label": "France",
        "value" : 112486
      }
    ];
}
