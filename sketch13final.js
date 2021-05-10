
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
    const yValue = d => d.MaleRate;
    const yValue2 = d => d.FemaleRate;

    const genderValue = d => d.Gender;


    const margin = {top: 100, right: 200, bottom: 100, left: 100};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;


  
    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, xValue))
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, 16])
        .range([innerHeight, 0]);

    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const yAxis = d3.axisLeft(yScale);

    g.append('g')
        .call(yAxis)
        .attr("font-size", 18);

    const xAxis = d3.axisBottom(xScale);

    g.append('g').call(xAxis)
        .attr('transform', `translate(0,${innerHeight})`)
        .attr("font-size", 18);

    //State Legend
    let colorScale = d3.scaleOrdinal()
        .domain(d3.map(data, function(d){return d.Gender;}).keys())
        .range(["blue", "purple"]);

    

    const genderVals = d3.map(data, function(d){return d.Gender;}).keys();

    const lineGenerator= d3.line()
        .x(d=> xScale(xValue(d)))
        .y(d=> yScale(yValue(d)));

    const lineGenerator2= d3.line()
        .x(d=> xScale(xValue(d)))
        .y(d=> yScale(yValue2(d)));


    g.append('path')
        .attr('class', 'line-path')
        .attr('d', lineGenerator(data));

    g.append('path')
        .attr('class', 'line-path2')
        .attr('d', lineGenerator2(data));


   
  
    // X Axis Label
    g.append('text')
        .attr('class', 'title')
        .attr("font-size", 25)
        .attr('y', height-125)
        .attr('x', 425)
        .text('Month');

    // Y Axis Label
    g.append('text')
        .attr('class', 'title')
        .attr("font-size", 25)
        .attr('y', -75)
        .attr('x', -500)
        .attr("transform", "rotate(-90)")
        .text('Rate of Unemployment (%)');



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

    g.append('text')
        .attr('class', 'title')
        .attr("font-size", 25)
        .attr('y', -50)
        .attr('x', 350)
        .text('Unemployment Rates (2020)');



};

d3.csv('unemployment20202.csv').then(data => { 
    data.forEach(d =>{
        d.MaleRate= +d.MaleRate;
        d.FemaleRate= +d.FemaleRate;
        d.Gender= d.Gender;
        d.Month = +d.Month;
    })
   render(data);
});