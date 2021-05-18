//GRAPH 3: Base Pay by Age and Gender
//This is the first scatter plot 
//This graph uses BasePayAgeGender.csv

    var margin = {top:100 , bottom: 100 , left: 20, right:250},
        width =1200 - margin.left - margin.right,
        height = 1000 - margin.top - margin.bottom;

        //scales

    var svg =d3.select("body").append("svg")
                .attr("width", width +margin.left +margin.right)
                .attr("height" , height +margin.top +margin.bottom)
                .append("g")
                .attr("transform", "translate (" +margin.left +","+ margin.top + ")");

const titleText = 'Base Salary by Age and Gender';

const render = data => {
    const xValue = d => d.Age;
    const yValue = d => d.BasePay;
    const Gender= d => d.Gender;
    const margin = {top: 20, right: 20, bottom: 20, left: 100};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;


    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, xValue))
        .range([0, width]);

    const yScale = d3.scaleLinear()
                .range([height, 0]);

    yScale.domain([-9500, 180000]);


    const genderVals = d3.map(data, function(d){return d.Gender;}).keys();

    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    
    const yAxis = d3.axisLeft(yScale);

    g.append('g')
        .call(yAxis)
        .attr("font-size", 18);

   
    const xAxis = d3.axisBottom(xScale);

    g.append('g').call(xAxis)
        .attr('transform', `translate(0,${innerHeight})`)
        .attr("font-size", 20);

    g.append('text')
        .attr('class', 'title')
        .attr("font-size", 20)
        .attr('y', -50)
        .attr('x', 350)
        .text(titleText);

    g.append('text')
        .attr('class', 'title')
        .attr("font-size", 18)
        .attr('y', 50)
        .attr('x', 150)
        .text("**Hover over to see each circles value");

    g.append('text')
        .attr('class', 'title')
        .attr("font-size", 20)
        .attr('y', 825)
        .attr('x', 450)
        .text('Age');

    g.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("y", -100)
        .attr("x", -300)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Base Salary ($)")
        .attr("font-size", 18);

    const div = d3
        .select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);


    //this section adds hovering tools
    g.selectAll(".dot").data(data)
      .enter().append('circle')
      .attr('cy', d=> yScale(yValue(d)))
      .attr('cx', d=> xScale(xValue(d)))
      .attr('r', d=> 5)
      .style("fill", function(d) {
            if (d.Gender == "Female") {return "purple"}
            else { return "blue" }
        ;})
      .on("mouseover", (event, d) => {
            div.transition()
                .duration(200)
                .style("opacity", .9);
            div.html(`Gender : ${d.Gender} <br/> Base Salary : ${d["BasePay"]}`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 20) + "px");
        })
        .on("mouseout", _ => {
            div.transition()
                .duration(500)
                .style("opacity", 0);
        })
        .on("mousemove", event => {
            div.style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 20) + "px")
        })


    g.append('circle')
    .attr('cx',990)
    .attr('cy', 300)
    .attr('r', 20)
    .style('fill', 'blue');

    g.append('circle')
    .attr('cx',990)
    .attr('cy', 350)
    .attr('r', 20)
    .style('fill', 'purple');

    g.append('text')
        .attr('class', 'title')
        .attr("font-size", 20)
        .attr('y', 310)
        .attr('x', 1015)
        .text('Male');

    g.append('text')
        .attr('class', 'title')
        .attr("font-size", 20)
        .attr('y', 360)
        .attr('x', 1015)
        .text('Female');

    g.append('text')
        .attr('class', 'title')
        .attr("font-size", 20)
        .attr('y', 270)
        .attr('x', 970)
        .text('Color Scale');

    svg.append("text")
        .style("font-size" ,15)
        .attr("transform", "translate(100,0)")
        .attr("x", -50)
        .attr("y", 875)
        .text("**This chart used a random 50% of the dataset. Here we can see that all of the highest values are blue, and many of the lower values are purple. The top 10 base salaries are all blue dots.");
 
};

d3.csv('BasePayAgeGender.csv').then(data => { 
    data.forEach(d =>{
        d.Age= +d.Age;
        d.BasePay= +d.BasePay;
        d.Gender= d.Gender
    })
   render(data);
});
