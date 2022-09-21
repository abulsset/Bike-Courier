
        // Tess Luba - July 2022
        
        // variables
        const svgNS = "http://www.w3.org/2000/svg";        
        let timingInterval = 1;
        let ballNumber = 0;
        const minCircleRadius = 10;
	    const maxCircleRadius = 30;
        let score = 0;
        
        // create bike
        function makeBicycle(){
            let svg = document.getElementById("board");
            let bicycle = document.createElementNS(svgNS, "image");
            bicycle.setAttribute("href", "inversebicycle.png");
            bicycle.setAttribute("height", "100");
            bicycle.setAttribute("width", "100");
            bicycle.setAttribute("x", "650");
            bicycle.setAttribute("y", "400");
            bicycle.setAttribute("id", "bike");
            svg.appendChild(bicycle);
        }

        // create ball
        function makeBall(){
            let svg = document.getElementById("board");
            let ball = document.createElementNS( svgNS, "circle" );
            let radius = Math.floor(Math.random() * (maxCircleRadius-minCircleRadius) + minCircleRadius);
            ball.setAttribute("r", radius);
            ball.setAttribute("fill", "red");
            ball.setAttribute("id", "ball" + ballNumber);
            ball.setAttribute("class", "ball");
            cx = 1;
		    ball.setAttribute("cx", cx);
            cy = Math.floor(Math.random() * (300) + 200);
		    ball.setAttribute("cy", cy);
            ballNumber = ballNumber + 1;
            svg.appendChild(ball);  
        }
        
        // Create a stationary road background
        function makeRoad() {
            let svg = document.getElementById("board");	
            let background = document.createElementNS( svgNS, "rect" );
            background.setAttribute("fill", "black");
            background.setAttribute("x", "0");
            background.setAttribute("y", "200");
            background.setAttribute("width", "800");
            background.setAttribute("height", "300");
            svg.appendChild(background);        
	}      
        // calculate if bike and vall collide
        function calculateCollide(){
            for (var i=0; i<=10000000; i++) {
                let ball = document.getElementById("ball" + i);
                let bike = document.getElementById("bike");

                let bikeRadius = 50;

                let ballRadius = ball.getAttribute("r");
                ballRadius = parseInt(ballRadius);
                //console.log(ballRadius);

                let bikeX = bike.getAttribute("x");
                bikeX = parseInt(bikeX);
                bikeX = bikeX+50;

                let ballX = Number(ball.getAttribute("cx"));
                ballX = parseInt(ballX);

                let bikeY = bike.getAttribute("y");
                bikeY = parseInt(bikeY);
                bikeY = bikeY+50;


                let ballY = Number(ball.getAttribute("cy"));
                ballY = parseInt(ballY);

                let xDistance = bikeX-ballX;
                let yDistance = Math.abs(bikeY-ballY);
                let distance = Math. sqrt(xDistance**2 + yDistance**2);

                if (distance < bikeRadius){
                    document.getElementById("board").remove();
                    document.getElementById("score").style.display="none";
                    let finalScore = score;
                    document.getElementById("finalScore").innerHTML = "GAME OVER!<br>Final Score: " + finalScore;
                    document.getElementById("instructions").style.display="none";

                }
                if (ballX > 800 && ballX <802){
                    score = score + 1;
                }
                document.getElementById("score").innerHTML = "Score: " + score;
            }
        
        }
    
        // create road lines
        function makeLines() {
                let svg = document.getElementById("board");	
                let line0 = document.createElementNS( svgNS, "rect" )
                line0.setAttribute("fill", "white");
                line0.setAttribute("x", "0");
                line0.setAttribute("y", "400");
                line0.setAttribute("width", "100");
                line0.setAttribute("height", "5");
                line0.setAttribute("id", "line0");
                svg.appendChild(line0);

                let line1 = document.createElementNS( svgNS, "rect" )
                line1.setAttribute("fill", "white");
                line1.setAttribute("x", "0");
                line1.setAttribute("y", "300");
                line1.setAttribute("width", "100");
                line1.setAttribute("height", "5");
                line1.setAttribute("id", "line1");
                svg.appendChild(line1);

                let line2 = document.createElementNS( svgNS, "rect" )
                line2.setAttribute("fill", "white");
                line2.setAttribute("x", "200");
                line2.setAttribute("y", "300");
                line2.setAttribute("width", "100");
                line2.setAttribute("height", "5");
                line2.setAttribute("id", "line2");
                svg.appendChild(line2);

                let line3 = document.createElementNS( svgNS, "rect" )
                line3.setAttribute("fill", "white");
                line3.setAttribute("x", "400");
                line3.setAttribute("y", "300");
                line3.setAttribute("width", "100");
                line3.setAttribute("height", "5");
                line3.setAttribute("id", "line3");
                svg.appendChild(line3);

                let line4 = document.createElementNS( svgNS, "rect" )
                line4.setAttribute("fill", "white");
                line4.setAttribute("x", "600");
                line4.setAttribute("y", "300");
                line4.setAttribute("width", "100");
                line4.setAttribute("height", "5");
                line4.setAttribute("id", "line4");
                svg.appendChild(line4);

                let line5 = document.createElementNS( svgNS, "rect" )
                line5.setAttribute("fill", "white");
                line5.setAttribute("x", "200");
                line5.setAttribute("y", "400");
                line5.setAttribute("width", "100");
                line5.setAttribute("height", "5");
                line5.setAttribute("id", "line5");
                svg.appendChild(line5);

                let line6 = document.createElementNS( svgNS, "rect" )
                line6.setAttribute("fill", "white");
                line6.setAttribute("x", "400");
                line6.setAttribute("y", "400");
                line6.setAttribute("width", "100");
                line6.setAttribute("height", "5");
                line6.setAttribute("id", "line6");
                svg.appendChild(line6);

                let line7 = document.createElementNS( svgNS, "rect" )   
                line7.setAttribute("fill", "white");
                line7.setAttribute("x", "600");
                line7.setAttribute("y", "400");
                line7.setAttribute("width", "100");
                line7.setAttribute("height", "5");
                line7.setAttribute("id", "line7");
                svg.appendChild(line7);

                let line8 = document.createElementNS( svgNS, "rect" )   
                line8.setAttribute("fill", "white");
                line8.setAttribute("x", "800");
                line8.setAttribute("y", "400");
                line8.setAttribute("width", "100");
                line8.setAttribute("height", "5");
                line8.setAttribute("id", "line8");
                svg.appendChild(line8);

                let line9 = document.createElementNS( svgNS, "rect" )
                line9.setAttribute("fill", "white");
                line9.setAttribute("x", "800");
                line9.setAttribute("y", "300");
                line9.setAttribute("width", "100");
                line9.setAttribute("height", "5");
                line9.setAttribute("id", "line9");
                svg.appendChild(line9);
                        
                let stopsign = document.createElementNS (svgNS, "polygon");
                stopsign.setAttribute("fill", "red");
                stopsign.setAttribute("stroke", "black")
                stopsign.setAttribute("points", "727,111 711,127 688,127 672,111 672,88 688,72 711,72 727,88")
                svg.appendChild(stopsign);

                let pole = document.createElementNS (svgNS, "line");
                pole.setAttribute("stroke", "black");
                pole.setAttribute("x1", "699");
                pole.setAttribute("y1", "127");
                pole.setAttribute("x2", "699");
                pole.setAttribute("y2", "200");
                svg.appendChild(pole);
        
        }

      
        // move bike around
        document.onkeydown = function (event){
            let bike = document.getElementById("bike");
            let y = bike.getAttribute("y");
            y = parseInt(y);
            if (event.keyCode === 38){
                    if (y<190){
                        y = y;
                    } else {
                        y = y - 5;
                    }
                    bike.setAttribute("y", y);
            } else if (event.keyCode === 40) {
                    if (y>410){
                        y = y;
                    } else {
                        y = y + 5;
                    }
                    bike.setAttribute("y", y);
            } else {
                y = y; 
            }
        }
        
        

        
        window.addEventListener("load", function() {
            document.getElementById("start").addEventListener("click", function(event) {

                
                document.getElementById("board").style.display="block";
                document.getElementById("start").style.display="none";
                document.getElementById("score").style.display="block";
                document.getElementById("instructions").style.display="block";
                //generate balls
                setInterval(function() {
                    makeBall();  
                }, Math.floor(Math.random()*5000));

                // make balls move
                setInterval(function() {
                
                for (var i=0; i<=10000000; i++) {
                    let ball = document.getElementById("ball"+i);           
                    let cx = ball.getAttribute("cx");
                    cx = parseInt(cx);
                    cx = cx + 1;     
                    ball.setAttribute("cx", cx);
                    
                }
            }, timingInterval);
            makeRoad();
            makeLines();
            makeBicycle(); 

           // make road lines move
            setInterval(function() {
            
                for (var i=0; i<=9; i++) {
                    let line = document.getElementById("line"+i);
                                
                    let x = line.getAttribute("x");
                    x = parseInt(x);
                    if (x>800){
                        x = -200;
                    } else{ 
                        x = x + 1;
                    }          
                    line.setAttribute("x", x);
                    
                }
			}, timingInterval);  


        setInterval(function() {   
            calculateCollide();
        }, timingInterval);     


            });
          
        },1000/30); 
    