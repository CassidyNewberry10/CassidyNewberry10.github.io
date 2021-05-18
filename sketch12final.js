//GRAPH 12: Median Weekly Salary by Race and Gender 
//Bar chart for demographic section
//uses the file MedianbyRace.csv

    var margin = {top:100 , bottom: 100 , left: 100, right:50},
        width = 1300 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

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
            .style("font-size" ,30)
            .attr("transform", "translate(100,0)")
            .attr("x", 230)
            .attr("y", -28)
            .text("Median Weekly Pay by Demographic");


        d3.csv("MedianbyRace.csv").then(function(data){
            data.forEach(function(d){
                d.gender= d.GenderRace;
                d.MedianWeekly = parseInt(d["MedianWeekly"].replace(/,/g, ""));
            });

            console.log(data)

            
            var data1 = d3.rollup(data,
                function(i){return d3.sum(i , function(d){
                    return d.MedianWeekly;})},
                function(d){return d.gender});
            
            console.log(data1);
         
            x.domain(data.map(function(d){
                return d.gender;
            }));

           
            y.domain([0, 900]);

        
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

            svg.selectAll(".text")        
                .data(data)
                .enter()
                .append("text")
                .attr("class","label")
                .attr("x", (function(d) { return x(d.gender) + 35; }  ))
                .attr("y", function(d) { return y(d.MedianWeekly) - 20; })
                .attr("dy", ".75em")
                .attr("font-size", 18)
                .text(function(d) { return d.MedianWeekly; });

            
            svg.append("g")
                .attr("transform", "translate(0,"+height+")")
                .style("font-size",18)
                .call(d3.axisBottom(x));

            svg.append("g")
                .style("font-size",18)
                .call(d3.axisLeft(y));

            svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "end")
                .attr("y", -90)
                .attr("x", -85)
                .attr("dy", ".75em")
                .attr("transform", "rotate(-90)")
                .text("Median Weekly Pay ($)")
                .attr("font-size", 20);

            svg.append("text")
                .style("font-size" , 20)
                .attr("transform", "translate(100,0)")
                .attr("x", 400)
                .attr("y", 445)
                .text("Demographic");

        svg.append("text")
        .style("font-size" ,15)
        .attr("transform", "translate(100,0)")
        .attr("x", -140)
        .attr("y", 460)
        .text("**This chart shows that hispanic and black women are impacted by the wage gap more than any other demographic. Black and Hispanic men are also more likely to be impacted by the wage gap.");





        })

