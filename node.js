var nodes = [{x: 30, y: 50},
              {x: 50, y: 80},
              {x: 90, y: 120}]

var links = [
  {source: nodes[0], target: nodes[1]},
  {source: nodes[2], target: nodes[1]}
]

var width = 900;
var height = 900;






// var link = d3.select('svg').append("g")
//   .attr("class", "links")
//   .selectAll("line")
//  // .data(graph.links)
//  // .enter().append("line")
//   .attr("stroke-width", 50);


var node_svg = d3.select('#psl_graph').append('svg');

node_svg.attr('width', width)
		.attr('height', height);

node_svg.append('g').selectAll('circle .nodes')
    	.data(nodes)
     	.enter()
    	.append("circle")
		.attr('class', 'node')
    	.attr('r', 10)
     	.attr("cx", function(d) { return d.x; })
     	.attr("cy", function(d) { return d.y; });


node_svg.selectAll('.line')
		.data(links)
		.enter()
		.append('line')
		.attr("x1", function(d) { return d.source.x })
   		.attr("y1", function(d) { return d.source.y })
   		.attr("x2", function(d) { return d.target.x })
   		.attr("y2", function(d) { return d.target.y })
   		.style("stroke", "rgb(6,120,155)");

// Made for dragging?
     	// .call(d3.drag().on("drag", mousemove));