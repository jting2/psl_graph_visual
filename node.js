$(document).ready(function() {
    main();
});

function main() {
	var nodes = window.pslviz.nodes;

	var links = window.pslviz.links;

	var width = 900;
	var height = 900;


//https://medium.com/@sxywu/understanding-the-force-ef1237017d5
//https://medium.com/@bryony_17728/d3-js-two-v-4-network-charts-compared-8d3c66b0499c
//https://bl.ocks.org/heybignick/3faf257bbbbc7743bb72310d03b86ee8
//https://beta.observablehq.com/@mbostock/disjoint-force-directed-graph


	// var link = d3.select('svg').append("g")
	//   .attr("class", "links")
	//   .selectAll("line")
	//  // .data(graph.links)
	//  // .enter().append("line")
	//   .attr("stroke-width", 50);

//Need to make so I wont have to have specific x and y value (Used to create a force graph)
	var simulation = d3.forceSimulation()
					.force('charge', d3.forceManyBody())	//causes all elements to attract or repel one another
  	  			    .force('center', d3.forceCenter(width / 2, height / 2)) //centering your elements as a whole about a center point (So it doesnt disappear off the page)
  	  			    .force("link", d3.forceLink().id(function(d) { return d.id; })); //pushes linked elements to be a fixed distance apart
  				



//Tried getting different color for nodes but not working?
	// var color = d3.scaleOrdinal().range(d3.schemeCategory20);


	//Adding the nodes data into the svg
	var node_svg = d3.select('#psl_graph').attr('width', width)
			.attr('height', height)
					.append('svg')

					.selectAll('g')  
					.data(nodes)
					.enter()
					.append('g'); //g is used to group SVG shapes together. (In this case node and link)

//adding all link data into 
	var link = d3.select('#psl_graph')
				 .append('svg')
				 .selectAll("line")
 			 	 .data(links).enter().append("line");

//Adding all the node_svg data into circle
	var circles =  node_svg.append('circle')
					.attr('r', 10);
					// .attr("fill", function(d) { return color(d.group); });
	console.log(circles);



//turning ticks on

simulation.nodes(nodes)
      	  .on("tick", ticked);

//including the link
simulation.force("link")
      	  .links(links);

//This function is called to update position of node-link
function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node_svg
        .attr("cx", function(d) {
          return d.x;
        })
        .attr("cy", function(d){
        	return d.y;
        });
  };





	// node_svg.selectAll('.line')
	// 		.data(links)
	// 		.enter()
	// 		.append('line')
	// 		.attr("x1", function(d) { return d.source.x })
	//    		.attr("y1", function(d) { return d.source.y })
	//    		.attr("x2", function(d) { return d.target.x })
	//    		.attr("y2", function(d) { return d.target.y })
	//    		.style("stroke", "rgb(6,120,155)");

	// Made for dragging?
	     	// .call(d3.drag().on("drag", mousemove));
}