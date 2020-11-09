const sigGridMobOuter = document.getElementById('sightings-grid-mobile-outer');
let sightingsTable = document.getElementById('sightings-table');


let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       let response = JSON.parse(xhttp.responseText);
       
        let sightingsArray = response.sightings;

       //for(let i = 0; i < sightingsArray.length; i++)  {
        for(let i = 0; i < Math.min(sightingsArray.length, 3); i++)  {
        //OMG I DONT NEED OTHER LOOPS INSIDE THIS LOOP YAY.
        //see script-backup tyo how i was doing it before
        //i was looping and setting innnerhtml to varuable such a pain
        sightingsTable.innerHTML += `
        <tr>
          <td class='idDisT'>${sightingsArray[i].id}</td>
          <td class="dateDisT">${sightingsArray[i].date}</td>
          <td class="locDisT">${sightingsArray[i].location}</td>
          <td class="speDisT">${sightingsArray[i].species}</td>
          <td class='notDisT'>${sightingsArray[i].notes}</td>
      </tr>
        `


       sigGridMobOuter.innerHTML += `
    <section class="sightings-grid-mobile">
      <div class="sightings-grid-top"></div>
      <div class="stat">
        <div class="head"><h5>#</h5></div>
        <div><p>${sightingsArray[i].id}</p></div>
      </div><!--stat-->

      <div class="stat">
        <div class="head"><h5>Date</h5></div>
        <div><p>${sightingsArray[i].date}</p></div>
      </div><!--stat-->

      <div class="stat">
        <div class="head"><h5>Location</h5></div>
        <div><p>${sightingsArray[i].location}</p></div>
      </div><!--stat-->

      <div class="stat">
        <div class="head"><h5>Species</h5></div>
        <div><p>${sightingsArray[i].species}</p></div>
      </div><!--stat-->

      <div class="stat">
        <div class="head"><h5>Notes</h5></div>
        <div><p>${sightingsArray[i].notes} </p></div>
      </div><!--stat-->
      
    </section><!--sighhtings-grid-mobile-->
    `
    }

    }
};


xhttp.open("GET", "http://localhost:75/TNATS%20project2/TNATS%20Prototype/assets/js/sightings.json", true);
xhttp.send();



