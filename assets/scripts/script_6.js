var pie=new d3pie("pieChart",{ 
  size:{
    canvasHeight:400,
    canvasWidth: 500
  },
  data:{
    content:[
      {
        label:"2004",
        value:1701596,
        color:"#FFA500"
      },
      {
        label:"2006",
        value:3446512,
        color:"#FF8C00"
      },
      {
        label:"2008",
        value:3913450,
        color:"#FF7F50"
      },
      {
        label:"2010",
        value:2849335 ,
        color:"#FF6347"
      },
      {
        label:"2012",
        value:2193687, 
        color:"#FF4500"
      },
	  {
        label:"2014",
        value:2012754, 
        color:"#FFD700"
      },
    ]
  },
  labels:{
    outer:{
      pieDistance:35
    },
    mainLabel:{
      font:"verdana",
      color:"#6473ce",
      fontSize: 13
    },
    percentage:{
      color:"#fff",
      font:"verdana",
      decimalPlaces: 0,
      fontSize: 15
    },
    lines:{
      enabled:!0,
      color:"#ccc"
    }
  },
  effects:{
    pullOutSegmentOnClick:{
      effect:"linear",
      speed:400,
      size:8
    }
  }
});
