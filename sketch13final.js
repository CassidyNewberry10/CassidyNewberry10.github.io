
var margin = {top:20 , bottom: 100 , left: 20, right:250},
        width =1200 - margin.left - margin.right,
        height = 1000 - margin.top - margin.bottom;

        //scales

    var svg =d3.select("body").append("svg")
                .attr("width", width +margin.left +margin.right)
                .attr("height" , height +margin.top +margin.bottom)
                .append("g")
                .attr("transform", "translate (" +margin.left +","+ margin.top + ")");

const titleText = 'Unemployment Rate By Gender in 2020';



const render = data => {
    //Set Data Values
    const xValue = d => d.Month;
    const yValue = d => d.Rate;
    const genderValue = d => d.Gender;


    const margin = {top: 100, right: 200, bottom: 100, left: 100};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

  
    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, xValue))
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, yValue)])
        .range([innerHeight, 0]);

    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const yAxis = d3.axisLeft(yScale);

    g.append('g')
        .call(yAxis);

    const xAxis = d3.axisBottom(xScale);

    g.append('g').call(xAxis)
        .attr('transform', `translate(0,${innerHeight})`)
        .attr("font-size", 15);

    //State Legend
    let colorScale = d3.scaleOrdinal()
        .domain(d3.map(data, function(d){return d.Gender;}).keys())
        .range(["darkblue", "purple"]);

    

    const genderVals = d3.map(data, function(d){return d.Gender;}).keys();

    const lineGenerator= d3.line()
        .x(d=> xScale(xValue(d)))
        .y(d=> yScale(yValue(d)));


    g.append('path')
        .attr('class', 'line-path')
        .attr('d', lineGenerator(data));
   
  
    // X Axis Label
    g.append('text')
        .attr('class', 'title')
        .attr("font-size", 25)
        .attr('y', height-125)
        .attr('x', 500)
        .text('Month');

    // Y Axis Label
    g.append('text')
        .attr('class', 'title')
        .attr("font-size", 25)
        .attr('y', -75)
        .attr('x', -500)
        .attr("transform", "rotate(-90)")
        .text('Rate of Unemployment (%)');

    g.selectAll('circle').data(data)
        .enter().append('circle')
        .attr('cy', d=> yScale(yValue(d)))
        .attr('cx', d=> xScale(xValue(d)))
        .attr('r', d=> 5)
        .attr("fill", d => colorScale(genderValue(d)));

    g.append('circle')
    .attr('cx',990)
    .attr('cy', 300)
    .attr('r', 20)
    .style('fill', 'darkblue');

    g.append('circle')
    .attr('cx',990)
    .attr('cy', 350)
    .attr('r', 20)
    .style('fill', 'purple');

    g.append('text')
        .attr('class', 'title')
        .attr("font-size", 20)
        .attr('y', 310)
        .attr('x', 1010)
        .text('Male');

    g.append('text')
        .attr('class', 'title')
        .attr("font-size", 20)
        .attr('y', 360)
        .attr('x', 1010)
        .text('Female');

    g.append('text')
        .attr('class', 'title')
        .attr("font-size", 20)
        .attr('y', 270)
        .attr('x', 970)
        .text('Color Scale');

};

d3.csv('unemployment2020.csv').then(data => { 
    data.forEach(d =>{
        d.Rate= +d.Rate;
        d.Gender= d.Gender;
        d.Month = +d.Month;
    })
   render(data);
});