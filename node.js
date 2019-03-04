"use strict";

$(document).ready(function() {
    main();
});

function main() {
	var nodes = window.pslviz.nodes;

	var links = window.pslviz.links;

	var width = 2000;
	var height = 2000;


	var tip = d3.tip()
  			.attr('class', 'd3-tip')
 			
   			.html(function(d) {
    			return "Group: " + d.group ;
  			});


	var color = d3.scaleOrdinal(d3.schemeAccent);
	var svg = d3.select("#psl_graph")
			.append("svg")
    		.attr("width", width)
    		.attr("height", height);

    svg.call(tip);
	// https://medium.com/@sxywu/understanding-the-force-ef1237017d5
	// https://medium.com/@bryony_17728/d3-js-two-v-4-network-charts-compared-8d3c66b0499c
	// https://bl.ocks.org/heybignick/3faf257bbbbc7743bb72310d03b86ee8
	// https://beta.observablehq.com/@mbostock/disjoint-force-directed-graph
	// https://bl.ocks.org/mbostock/950642


	// https://bost.ocks.org/mike/selection/ (See how select works)

	var chargeForce = d3.forceManyBody()
			.strength(function() { return -30; })
			.distanceMin(1)
			.distanceMax(10000);

   var linkForce = d3.forceLink()
         .id(function(d) { return d.groundAtoms; })
         .strength(function(link) { return 0.001; });

	// Need to make so I wont have to have specific x and y value (Used to create a force graph)
	var simulation = d3.forceSimulation()
					.force('charge', chargeForce)  // causes all elements to attract or repel one another
  	  			    .force('center', d3.forceCenter(width / 2, height / 2))  // centering your elements as a whole about a center point (So it doesnt disappear off the page)
  	  			    .force("link", linkForce);



	// Tried getting different color for nodes but not working?
	// var color = d3.scaleOrdinal().range(d3.schemeCategory20);

	// var svg = d3.select('#psl_graph')
	// 				.append('svg')
	// 				.attr('width', width)
	// 				.attr('height', height)
	//Adding the nodes data into the svg

	var node_svg = svg
					.selectAll('g')  
					.data(nodes)
					.enter()
					.append('g'); //g is used to group SVG shapes together. (In this case node and link)

   // Adding all link data into
	var link = svg.selectAll(".link")
         .data(links)
         .enter()
         .append("line")
         .attr("class", "link");

   // Adding all the node_svg data into circle
	var circles =  node_svg.append('circle')
         .attr("fill", function(d) { return color(d.group); })
         .attr('r', 30)
         .attr("data-atom", function(node) { return node.groundAtoms; })
         .attr("data-type", function(node){return node.type})
         .call(d3.drag()
         .on("start", dragstarted)
         .on("drag", dragged)
         .on("end", dragended))
       	 .on('mouseover', tip.show)
      	 .on('mouseout', tip.hide)
;
         // .attr("fill", function(d) { return color(d.group); });
	// console.log(circles);



//turning ticks on

simulation.nodes(nodes);
//including the link
simulation.force("link")
      	  .links(links);

simulation.on("tick", ticked);


//This function is called to update position of node-link
function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });


   
   circles
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
  };

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
};

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
};

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
};

}
