//GRAPH 7: Average Base Salary In IT By Gender
//this is the third bar chart in the small mutiples 
//this uses the file AvgSd.csv 
    var margin = {top:50 , bottom: 100 , left: 100, right:50},
        width = 430 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

        //scales
        var x = d3.scaleBand()
                .range([0,width])
                .padding(0.3);

        var y =d3.scaleLinear()
                .range([height, 0]);
        var svg =d3.select("body").append("svg")
                .attr("width", width +margin.left +margin.right)
                .attr("height" , height +margin.top +margin.bottom)
                .append("g")
                .attr("transform", "translate (" +margin.left +","+ margin.top + ")");

        //title
        svg.append("text")
            .style("font-size" ,18)
            .attr("transform", "translate(100,0)")
            .attr("x", -100)
            .attr("y", -28)
            .text("Average Base Salary in Software Engineering");


        d3.csv("AvgSd.csv").then(function(data){
            data.forEach(function(d){
                d.gender= d.Gender;
                d.AverageBasePay = parseInt(d["AverageBasePay"].replace(/,/g, ""));
            });

            console.log(data)

            
            var data1 = d3.rollup(data,
                function(i){return d3.sum(i , function(d){
                    return d.AverageBasePay;})},
                function(d){return d.gender});
            
            console.log(data1);
         
            x.domain(data.map(function(d){
                return d.gender;
            }));

           
            y.domain([0, 110000]);

        
            svg.selectAll(".bar")
                .data(data1)
                .enter().append("rect")
                .attr("class","bar")
                .attr("x", function(d){
                    return x(d[0]);
                })
                .attr("width", x.bandwidth())
                .attr("y",function(d){
                    return y(d[1]);
                })
                .attr("height", function(d){
                    return height - y(d[1])
                });

            
            svg.append("g")
                .attr("transform", "translate(0,"+height+")")
                .style("font-size",16)
                .call(d3.axisBottom(x));

            svg.append("g")
                .style("font-size",16)
                .call(d3.axisLeft(y));

            svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "end")
                .attr("y", -90)
                .attr("x", -85)
                .attr("dy", ".75em")
                .attr("transform", "rotate(-90)")
                .text("Average Base Salary ($)")
                .attr("font-size", 18);

            svg.append("text")
                .style("font-size" ,18)
                .attr("transform", "translate(100,0)")
                .attr("x", -50)
                .attr("y", 5)
                .text("106,371");

            svg.append("text")
                .style("font-size" ,18)
                .attr("transform", "translate(100,0)")
                .attr("x", 80)
                .attr("y", 40)
                .text("94,701");

            svg.append("text")
                .style("font-size" ,15)
                .attr("transform", "translate(100,0)")
                .attr("x", -175)
                .attr("y", 400)
                .text("**This is a significant case and the difference is stark.");

            svg.append("text")
                .style("font-size" ,15)
                .attr("transform", "translate(100,0)")
                .attr("x", -175)
                .attr("y", 420)
                .text("Men make on average $11,670 more.");

        })
