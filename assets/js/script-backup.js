//getting dynaic amount of sightings based on data
//but no dynamic data inside yet

const sigGridMobOuter = document.getElementById('sightings-grid-mobile-outer');



let idDis = document.querySelectorAll('.idDis');
let dateDis = document.querySelectorAll('.dateDis');
let locDis = document.querySelectorAll('.locDis');
let speDis = document.querySelectorAll('.speDis');
let notDis = document.querySelectorAll('.notDis');





let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       let response = JSON.parse(xhttp.responseText);
       //console.log(response.sightings);
        let sightingsArray = response.sightings;
       //let idOne = sightingsArray[0].id;
       //console.log(`This is the first object's ID value in the sightingsArray ${idOne}`);
    
       
       for(let i = 0; i < sightingsArray.length; i++)  {

        let theIDValue = '';
        let theDateValue = '';
        let theLocationValue = '';
        let theSpeciesValue = '';
        let theNoteValue = '';
        
        

    //start of loopoing through html elements classed and setting values
    //from sightings array data to thoes html elements
    for(let a = 0; a < idDis.length; a++) {
        theIDValue = sightingsArray[a].id;
        idDis[a].innerHTML = theIDValue;
          
    }

    for(let b = 0; b < dateDis.length; b++) {
        theDateValue = sightingsArray[b].date;
        dateDis[b].innerHTML = theDateValue;
        //shows all but last is different
        
    }

    for(let c = 0; c < locDis.length; c++) {
        theLocationValue = sightingsArray[c].location;
        locDis[c].innerHTML = theLocationValue;
        //problem, onlu showing two dates
    }

    

    for(let c = 0; c < locDis.length; c++) {
        theLocationValue = sightingsArray[c].location;
        locDis[c].innerHTML = theLocationValue;
        //problem, onlu showing two dates
    }

    for(let d = 0; d < speDis.length; d++) {
        theSpeciesValue = sightingsArray[d].species;
        speDis[d].innerHTML = theSpeciesValue;
        //problem,showing underfined
        console.log("---");
        console.log(theSpeciesValue);
        console.log("---");
    }

    for(let e = 0; e < notDis.length; e++) {
        theNoteValue = sightingsArray[e].notes;
        notDis[e].innerHTML = theNoteValue;
        //problem, onlu showing two dates
    }
    //another problem values not updating
    //end looping
    

    
    /*
    sigGridMobOuter.innerHTML += `
    <p> Hello id is ${theIDValue} </p>
    `;
    */


    //this is how we geneerate html elements
    sigGridMobOuter.innerHTML += `
    <section class="sightings-grid-mobile">
      <div class="sightings-grid-top"></div>
      <div class="stat">
        <div class="head"><h5>#</h5></div>
        <div><p class="idDis">1</p></div>
      </div><!--stat-->

      <div class="stat">
        <div class="head"><h5>Date</h5></div>
        <div><p class="dateDis">04-12-2020</p></div>
      </div><!--stat-->

      <div class="stat">
        <div class="head"><h5>Location</h5></div>
        <div><p class="locDis">Millard Pool Avon river</p></div>
      </div><!--stat-->

      <div class="stat">
        <div class="head"><h5>Species</h5></div>
        <div><p class="speDis">Bloody blue chcickern</p></div>
      </div><!--stat-->

      <div class="stat">
        <div class="head"><h5>Notes</h5></div>
        <div><p class="notDis">Lorem ipsum dolor sit amet consecm iure saepe delectus blanditiis? Quidem deleniti doloremque necessitatibus modi consequuntur!q</p></div>
      </div><!--stat-->
      
    </section><!--sighhtings-grid-mobile-->
    `
    }
    


    }
};


xhttp.open("GET", "http://localhost:75/TNATS%20project2/TNATS%20Prototype/assets/js/sightings.json", true);
xhttp.send();



//should be fine, we need a main
//wrapping container to wrap around all sightings boxes
//and then += onto or into the box of divs.






//writing a function to neaten up the code





//concept function to try up our loop code

function loopThroughDisplayArray(arr, loopVal, varCont, property) {
    for(loopVal = 0; loopVal < arr.length; loopVal++) {
    varCont = sightingsArray[loopVal].property;
    arr[loopVal].innerHTML = varCont;
    }
}


