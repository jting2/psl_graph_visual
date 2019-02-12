var nodes = [{x: 30, y: 50},
              {x: 50, y: 80},
              {x: 90, y: 120}]

var width = 900;
var height = 900;

var node_svg = d3.select('#psl_graph').append('svg');



node_svg.attr('width', width)
		.attr('height', height);

node_svg.selectAll("g")
    	.data(nodes)
     	.enter()
    	.append("svg:circle")
     	.attr("class", "nodes")
     	.attr("cx", function(d) { return d.x; })
     	.attr("cy", function(d) { return d.y; })