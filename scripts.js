window.addEventListener("load",function(){
    let takeoff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let up = this.document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    let rocket = document.getElementById("rocket");
    let rocketY = document.getElementById("rocket").offsetTop;
    const originalY = document.getElementById("rocket").offsetTop;
    const originalX = document.getElementById("rocket").offsetLeft;
    let rocketX = document.getElementById("rocket").offsetLeft;

    takeoff.addEventListener('click', event => {
     let response = this.confirm("Confirm that the shuttle is ready for takeoff.")
        if(response){
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = '10,000';
        }
         });

    landing.addEventListener('click', event => {
        this.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed';
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = '0';
        this.document.getElementById("rocket").style.top = originalY;
        this.document.getElementById("rocket").style.left = originalX;

    });

    missionAbort.addEventListener('click', event => {
    let response = this.confirm("Confirm that you want to abort the mission.")
        if(response){
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = '0';
            this.document.getElementById("rocket").style.top = originalY;
            this.document.getElementById("rocket").style.left = originalX;
        }


    });
    up.addEventListener('click', event => {
       let currentHeight = Number(spaceShuttleHeight.innerHTML.replace (/,/g, ''));
       let newHeight = currentHeight + 10000;
       spaceShuttleHeight.innerHTML = newHeight.toLocaleString("en-US");
       if (rocketY > 0) {
       rocketY = rocketY - 10;
       this.document.getElementById("rocket").style.top = rocketY + 'px';
    }

    });
    down.addEventListener('click', event => {
        let currentHeight = Number(spaceShuttleHeight.innerHTML.replace (/,/g, ''));
        if (currentHeight >= 10000) {
        let newHeight = currentHeight - 10000;
        spaceShuttleHeight.innerHTML = newHeight.toLocaleString("en-US");
        }
        if (rocketY <= shuttleBackground.clientHeight - rocket.clientHeight) {
        rocketY = rocketY + 10;
        this.document.getElementById("rocket").style.top = rocketY + 'px';
        }
 
     });

     left.addEventListener('click', event => {
        if (rocketX > 0) {
        rocketX = rocketX - 10;
        this.document.getElementById("rocket").style.left = rocketX + 'px';
        }
 
     });
     right.addEventListener('click', event => {
        if (rocketX < shuttleBackground.clientWidth - rocket.clientWidth) {
        rocketX = rocketX + 10;
        this.document.getElementById("rocket").style.left = rocketX + 'px';
        }
 
     });
});
