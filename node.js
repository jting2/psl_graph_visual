var nodes = [{x: 30, y: 50},
              {x: 50, y: 80},
              {x: 90, y: 120}]

var width = 900;
var height = 900;






var link = d3.select('svg').append("g")
  .attr("class", "links")
  .selectAll("line")
 // .data(graph.links)
 // .enter().append("line")
  .attr("stroke-width", 50);


var node_svg = d3.select('#psl_graph').append('svg');

node_svg.attr('width', width)
		.attr('height', height);

node_svg.append("g")
		.attr('class', 'node')
		.selectAll('circle')
    	.data(nodes)
     	.enter()
    	.append("circle")
    	.attr('r', function(d,i){return 10 + 10*i})
     	.attr("cx", function(d) { return d.x; })
     	.attr("cy", function(d) { return d.y; })



// Made for dragging?
     	// .call(d3.drag().on("drag", mousemove));