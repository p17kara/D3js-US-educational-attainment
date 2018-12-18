var chart = c3.generate({
  bindto: d3.select('.chart'),
  data: {
    columns: [
      ['Frequency of participation in cultural or sport activities in 2015', 68.1, 28.6, 70.2, 85.3, 73.3, 69.8, 69.1, 46.9, 58.5, 77.7]
    ]
  }
});
