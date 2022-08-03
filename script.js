

const MOCK_DATA = [
  {
    "id": "1",
    "name": "Lura Senger",
    "email": "Xander_Collier@yahoo.com"
  },
  {
    "id": "2",
    "name": "Wilburn Weber",
    "email": "Bennett_Kreiger11@yahoo.com"
  },
  {
    "id": "3",
    "name": "Tyrique Hahn",
    "email": "Juston.Altenwerth@yahoo.com"
  },
  {
    "id": "4",
    "name": "Lenny Bailey",
    "email": "Guiseppe_Hegmann@yahoo.com"
  },
  {
    "id": "5",
    "name": "Vladimir Keeling",
    "email": "Louisa_Walsh18@hotmail.com"
  },
  {
    "id": "6",
    "name": "Kellie Crona",
    "email": "Chandler_Abernathy@yahoo.com"
  },
  {
    "id": "7",
    "name": "Carolina White",
    "email": "Royal50@hotmail.com"
  },
  {
    "id": "8",
    "name": "Alfredo Conn",
    "email": "Clarabelle34@hotmail.com"
  },
  {
    "id": "9",
    "name": "Stan Shanahan",
    "email": "Lamar.McClure@hotmail.com"
  },
  {
    "id": "10",
    "name": "Marvin Fay",
    "email": "Osbaldo58@hotmail.com"
  },
  {
    "id": "11",
    "name": "Torrance Rau",
    "email": "Orin45@gmail.com"
  },
  {
    "id": "12",
    "name": "Harold Gutmann MD",
    "email": "Alyce.Stracke37@yahoo.com"
  },
  {
    "id": "13",
    "name": "Taryn Torphy",
    "email": "Dean_Breitenberg71@hotmail.com"
  },
  {
    "id": "14",
    "name": "Bryana Lang",
    "email": "Tatum.Ullrich@yahoo.com"
  },
  {
    "id": "15",
    "name": "Nyasia Green DDS",
    "email": "Dino83@gmail.com"
  },
  {
    "id": "16",
    "name": "Nasir Gerhold",
    "email": "Lilian_Bashirian8@hotmail.com"
  },
  {
    "id": "17",
    "name": "Raymundo Ritchie PhD",
    "email": "Antwan.Schoen15@yahoo.com"
  },
  {
    "id": "18",
    "name": "Delmer Marvin",
    "email": "Kiera62@yahoo.com"
  },
  {
    "id": "19",
    "name": "Rachel Wilkinson",
    "email": "Foster_Conroy@gmail.com"
  },
  {
    "id": "20",
    "name": "Gladys Howell",
    "email": "Constance.Labadie10@yahoo.com"
  },
  {
    "id": "21",
    "name": "Ciara Klocko",
    "email": "Harvey76@yahoo.com"
  },
  {
    "id": "22",
    "name": "Quentin O'Kon",
    "email": "Amely_Cummings2@yahoo.com"
  },
  {
    "id": "23",
    "name": "Ms. Gabriella Kunde",
    "email": "Lorenza_Cummerata@hotmail.com"
  },
  {
    "id": "24",
    "name": "Gerald Reilly",
    "email": "Lia_Konopelski@gmail.com"
  },
  {
    "id": "25",
    "name": "Brody Carter I",
    "email": "Colten.Wilderman90@hotmail.com"
  },
  {
    "id": "26",
    "name": "Alanis Klocko",
    "email": "Johathan.Champlin69@gmail.com"
  },
  {
    "id": "27",
    "name": "Caroline Miller",
    "email": "Delaney.Kozey74@gmail.com"
  },
  {
    "id": "28",
    "name": "Ms. Merritt McClure",
    "email": "Wendy.Zieme@gmail.com"
  },
  {
    "id": "29",
    "name": "Jovani Schoen",
    "email": "Norval_Zieme@hotmail.com"
  },
  {
    "id": "30",
    "name": "Berniece Bradtke",
    "email": "Okey.Fisher39@hotmail.com"
  },
  {
    "id": "31",
    "name": "Hanna Gottlieb",
    "email": "Edna62@hotmail.com"
  },
  {
    "id": "32",
    "name": "Christiana Bergnaum",
    "email": "Donnie.Paucek22@gmail.com"
  },
  {
    "id": "33",
    "name": "Reid Stehr",
    "email": "Hiram69@gmail.com"
  },
  {
    "id": "34",
    "name": "Evans Ward",
    "email": "Liliane72@hotmail.com"
  },
  {
    "id": "35",
    "name": "Miss Enos Davis",
    "email": "Kolby.Grady@hotmail.com"
  },
  {
    "id": "36",
    "name": "Mathew Lueilwitz",
    "email": "Mariah.Hagenes@yahoo.com"
  },
  {
    "id": "37",
    "name": "Romaine Robel",
    "email": "Sheila19@yahoo.com"
  },
  {
    "id": "38",
    "name": "Immanuel Aufderhar",
    "email": "Aileen32@hotmail.com"
  },
  {
    "id": "39",
    "name": "Julius Reilly Jr.",
    "email": "Santa89@yahoo.com"
  },
  {
    "id": "40",
    "name": "Linnea Borer",
    "email": "Jarrett_Hegmann2@hotmail.com"
  },
  {
    "id": "41",
    "name": "Misael Abernathy IV",
    "email": "Robbie42@yahoo.com"
  },
  {
    "id": "42",
    "name": "Mr. Gerda Jerde",
    "email": "Gustave36@hotmail.com"
  },
  {
    "id": "43",
    "name": "Easton Daugherty",
    "email": "Malcolm.Schuster11@hotmail.com"
  },
  {
    "id": "44",
    "name": "Leanna Gutkowski",
    "email": "Chelsea9@gmail.com"
  },
  {
    "id": "45",
    "name": "Rollin Trantow",
    "email": "Marques_Hickle26@gmail.com"
  },
  {
    "id": "46",
    "name": "Heaven Luettgen",
    "email": "Lonnie.Greenfelder95@hotmail.com"
  },
  {
    "id": "47",
    "name": "Gilda Huel",
    "email": "Stephania.Hintz@gmail.com"
  },
  {
    "id": "48",
    "name": "Javon Walker",
    "email": "Lamar_Bailey39@yahoo.com"
  },
  {
    "id": "49",
    "name": "Stewart King",
    "email": "Chasity_Jenkins82@gmail.com"
  },
  {
    "id": "50",
    "name": "Cortez Lueilwitz",
    "email": "Lelia.Mitchell43@gmail.com"
  },
  {
    "id": "51",
    "name": "Ora Kilback",
    "email": "Matt25@gmail.com"
  },
  {
    "id": "52",
    "name": "Lera Macejkovic",
    "email": "Jamal.Donnelly45@hotmail.com"
  },
  {
    "id": "53",
    "name": "Asa Gottlieb",
    "email": "Carolyne.Langosh@yahoo.com"
  },
  {
    "id": "54",
    "name": "Avery Nienow",
    "email": "Hudson_Bernhard47@yahoo.com"
  },
  {
    "id": "55",
    "name": "Dr. Katrine Ryan",
    "email": "Colten40@gmail.com"
  },
  {
    "id": "56",
    "name": "Florida Kulas",
    "email": "Alejandra_Bernhard@yahoo.com"
  },
  {
    "id": "57",
    "name": "Mauricio Gerlach",
    "email": "Vincenza_Gusikowski84@hotmail.com"
  },
  {
    "id": "58",
    "name": "Chadrick Simonis",
    "email": "Reymundo.Doyle@gmail.com"
  },
  {
    "id": "59",
    "name": "Beau Jenkins",
    "email": "Cletus65@hotmail.com"
  },
  {
    "id": "60",
    "name": "Camilla Cole",
    "email": "Eda48@yahoo.com"
  },
  {
    "id": "61",
    "name": "Abagail MacGyver",
    "email": "Jevon.Koch@hotmail.com"
  },
  {
    "id": "62",
    "name": "Ludwig Prohaska",
    "email": "Eldon_DuBuque37@yahoo.com"
  },
  {
    "id": "63",
    "name": "Berenice Hane",
    "email": "Lonnie3@gmail.com"
  },
  {
    "id": "64",
    "name": "Abel Durgan",
    "email": "Marlee.Weimann42@gmail.com"
  },
  {
    "id": "65",
    "name": "Tate Kuhlman",
    "email": "Hope31@yahoo.com"
  },
  {
    "id": "66",
    "name": "Mrs. Hermina Daniel",
    "email": "Murphy59@yahoo.com"
  },
  {
    "id": "67",
    "name": "Marcelino Nienow",
    "email": "Estefania_Dibbert97@hotmail.com"
  },
  {
    "id": "68",
    "name": "Raphaelle Connelly",
    "email": "Josie.Legros70@yahoo.com"
  },
  {
    "id": "69",
    "name": "Mina Heaney",
    "email": "Pete.Hermann79@hotmail.com"
  },
  {
    "id": "70",
    "name": "Jaida Torp",
    "email": "Jonatan82@yahoo.com"
  },
  {
    "id": "71",
    "name": "Megane Fadel",
    "email": "Dandre82@yahoo.com"
  },
  {
    "id": "72",
    "name": "Angelo Schimmel V",
    "email": "Frederic54@hotmail.com"
  },
  {
    "id": "73",
    "name": "Jaren Ferry DDS",
    "email": "Kristian.Kilback@yahoo.com"
  },
  {
    "id": "74",
    "name": "Annette O'Connell",
    "email": "Domenica.Christiansen@gmail.com"
  },
  {
    "id": "75",
    "name": "Elenor Rohan PhD",
    "email": "Alvera.Huel48@yahoo.com"
  },
  {
    "id": "76",
    "name": "Linnie Beier",
    "email": "Reece_Berge@gmail.com"
  },
  {
    "id": "77",
    "name": "Maybelle Lehner",
    "email": "Arlo.Hagenes@gmail.com"
  },
  {
    "id": "78",
    "name": "Hailie Haag",
    "email": "Edythe.Lind59@hotmail.com"
  },
  {
    "id": "79",
    "name": "Marcelina Schuppe",
    "email": "Kip.Cummerata77@gmail.com"
  },
  {
    "id": "80",
    "name": "Ezra Lang",
    "email": "Garret.Swaniawski@hotmail.com"
  },
  {
    "id": "81",
    "name": "Carey Kiehn",
    "email": "Sabrina70@gmail.com"
  },
  {
    "id": "82",
    "name": "Carole Aufderhar",
    "email": "Efrain.Schamberger77@hotmail.com"
  },
  {
    "id": "83",
    "name": "Fanny Beatty",
    "email": "Ewald28@yahoo.com"
  },
  {
    "id": "84",
    "name": "Mina Lubowitz",
    "email": "Vincenzo.Herman@gmail.com"
  },
  {
    "id": "85",
    "name": "Anabelle Thiel",
    "email": "Amely.Renner@hotmail.com"
  },
  {
    "id": "86",
    "name": "Gerry Homenick",
    "email": "Ada_Von54@hotmail.com"
  },
  {
    "id": "87",
    "name": "Domenico Maggio",
    "email": "Freeman.Stamm@yahoo.com"
  },
  {
    "id": "88",
    "name": "Mauricio Bradtke III",
    "email": "Alford83@yahoo.com"
  },
  {
    "id": "89",
    "name": "Bulah Yost III",
    "email": "Nicolas_Schimmel6@yahoo.com"
  },
  {
    "id": "90",
    "name": "Orville Dibbert DDS",
    "email": "Bryana_Herzog@yahoo.com"
  },
  {
    "id": "91",
    "name": "Autumn Osinski",
    "email": "Davin8@hotmail.com"
  },
  {
    "id": "92",
    "name": "Levi Gibson",
    "email": "Deangelo69@gmail.com"
  },
  {
    "id": "93",
    "name": "Reva McKenzie",
    "email": "Bret40@hotmail.com"
  },
  {
    "id": "94",
    "name": "Jensen Pfannerstill",
    "email": "Dax_Marquardt@hotmail.com"
  },
  {
    "id": "95",
    "name": "Tyrese Larson MD",
    "email": "Cecelia85@yahoo.com"
  },
  {
    "id": "96",
    "name": "Dayne Sanford",
    "email": "Tyrique_Waters16@hotmail.com"
  },
  {
    "id": "97",
    "name": "Jeramy Steuber",
    "email": "Catalina.Stehr24@yahoo.com"
  },
  {
    "id": "98",
    "name": "Madge Bogisich",
    "email": "Joey.Marquardt50@gmail.com"
  },
  {
    "id": "99",
    "name": "Casimer MacGyver",
    "email": "Julius.Bednar96@yahoo.com"
  },
  {
    "id": "100",
    "name": "Arlene Kassulke",
    "email": "Josiane_Smith@yahoo.com"
  }
];




console.log("Pagination demo in progress ...");
const ITEMS_PER_PAGE = 5;
const TOTAL_PAGES = MOCK_DATA.length / ITEMS_PER_PAGE;
const MOCK_DATA_LENGTH = MOCK_DATA.length;



let pageNumbersGenerator = function dynamicPagesCalc(pageNumber){

  console.log("Total Pages :: ", TOTAL_PAGES);
  console.log(" pageNumber ",pageNumber);
  console.log(" ITEMS_PER_PAGE",ITEMS_PER_PAGE);
  
 let paginationElement = document.getElementById("paginationDiv");

               //Remove all the existing child anchor nodes items
               while (paginationElement.firstChild) {
                paginationElement.removeChild(paginationElement.lastChild);
              }

 if(pageNumber <= 3) {

  let index = 0;

  while(++index < ITEMS_PER_PAGE)
  { console.log(index);
    let anchorElement = document.createElement("a");
    anchorElement.setAttribute("href","#");
    anchorElement.innerText = ""+index; 
    anchorElement.addEventListener('click', clickHandler);
    paginationElement.appendChild(anchorElement);
    };

       // Last >>
       let anchorElement2 = document.createElement("a");
       anchorElement2.setAttribute("href","#");
       anchorElement2.innerHTML = "Last &raquo;";
       anchorElement2.addEventListener('click', clickHandler);
       paginationElement.appendChild(anchorElement2);

 }

  if(pageNumber > 3 && pageNumber < ( TOTAL_PAGES - 2 )){

    let anchorElement = document.createElement("a");
    anchorElement.setAttribute("href","#");
    anchorElement.innerHTML = "&laquo; First";
    anchorElement.addEventListener('click', clickHandler);
    paginationElement.appendChild(anchorElement);


          [pageNumber-2,pageNumber-1,pageNumber,pageNumber+1,pageNumber+2].forEach((i) => {
          console.log(i);
          let anchorElement = document.createElement("a");
          anchorElement.setAttribute("href","#");
          anchorElement.innerText = ""+i; 
          anchorElement.addEventListener('click', clickHandler);
          paginationElement.appendChild(anchorElement);
          });

             // Last >>
             let anchorElement2 = document.createElement("a");
             anchorElement2.setAttribute("href","#");
             anchorElement2.innerHTML = "Last &raquo;";
             anchorElement2.addEventListener('click', clickHandler);
             paginationElement.appendChild(anchorElement2);       

  } 

  if(pageNumber >= ( TOTAL_PAGES - 2 )) {


    let anchorElement = document.createElement("a");
    anchorElement.setAttribute("href","#");
    anchorElement.innerHTML = "&laquo; First";
    anchorElement.addEventListener('click', clickHandler);
    paginationElement.appendChild(anchorElement);

    let index = TOTAL_PAGES - ITEMS_PER_PAGE;

    while(index <= TOTAL_PAGES){
      console.log(index);
      let anchorElement = document.createElement("a");
      anchorElement.setAttribute("href","#");
      anchorElement.innerText = ""+index; 
      anchorElement.addEventListener('click', clickHandler);
      paginationElement.appendChild(anchorElement);
      index++;
      }
  
    }

}

//Pagination
let clickHandler = function loadTableData(event) {

  let pageSize = ITEMS_PER_PAGE;
  console.log(event.target);
  console.log(event.target.innerText);
  let pageNumber = 0;

  if(event.target.innerText.includes("First")){
    pageNumber = 1;
  }else if(event.target.innerText.includes("Last")){
    pageNumber = MOCK_DATA_LENGTH / ITEMS_PER_PAGE;
  }else {
    pageNumber = parseInt(event.target.innerText);
  }
  
  
 var mockDataSlice = MOCK_DATA.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

      const tableBody = document.getElementById('tableContent');
     
      //Remove all the existing child items
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.lastChild);
      }

    let txt = '';
    for (let i = 0; i < mockDataSlice.length; i++) {
    
        txt = txt + `<tr><td>${mockDataSlice[i].id}</td>
                     <td>${mockDataSlice[i].name}</td><td>${mockDataSlice[i].email}</td>`;
                              
     }                                                     

    tableBody.innerHTML = txt;

  pageNumbersGenerator(pageNumber);
}




  console.log(MOCK_DATA);

/**
 *     <h1> Pagination Demo </h1>
    <div class="pagination">
        <a href="#">First</a>
        <a href="#">Previous</a>
        <a href="#">1</a>
        <a class="active" href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="https://www.facebook.com" target="_blank">6</a>
        <a href="#">7</a>
        <a href="#">8</a>
        <a href="#">9</a>
        <a href="#">10</a>
        <a href="#">Last</a>
      </div>
 * 
 * 
 */

 /**
  * An IIFE function to initialize the web page elements.
  * 
  */

 (function (){
    console.log("   *****  Initializing ..... *****   ");

    /* Adding the h1 tag for page name */
     let h1Element = document.createElement("h1");
     h1Element.innerText = "Pagination App"
     document.body.append(h1Element); 

   /**
    *  Adding description to webpage.
    */  
   let paraElement = document.createElement("p");
   paraElement.innerText = " A simple app to demonstrate the pagination functionality. ";
   document.body.appendChild(paraElement);


   /**
    * 
        <table>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        </table>
    * 
    */

    





        let rootDivElement = document.createElement("div");
        rootDivElement.classList.add("pagination-custom");
        //rootDivElement.classList.add("custom-div");
     
        let rowDivElement = document.createElement("div");
        rowDivElement.classList.add("row");

        // let responsiveMakingDiv = document.createElement("div");
        // responsiveMakingDiv.setAttribute("class","col-sm-12 col-md-10 col-lg-10");

        
       let tableColDiv = document.createElement("div");
         //Table responsive
         tableColDiv.setAttribute("class","container");
        
        let tableElement = document.createElement("table");
        // Add bootstarp class attribute to table
        tableElement.setAttribute("class","table");
        // For Zebra strip pattern.
        tableElement.classList.add("table-striped");
   


        let tableHeadElement = document.createElement("thead");
        tableHeadElement.setAttribute("class","thead-dark");
        let tableBodyElement = document.createElement("tbody");
        tableBodyElement.setAttribute("id","tableContent");

        let tableRowElement = document.createElement("tr");
        
        ["Id","Name","Email"].forEach((i) => {
            let thElement = document.createElement("th");
            thElement.innerText = i;
            tableRowElement.appendChild(thElement);
            thElement.setAttribute("scope","col");
        });

        let initialDataItems = MOCK_DATA.slice(0,ITEMS_PER_PAGE);
        initialDataItems.forEach((obj) => {
            let trElement = document.createElement("tr");

            let tdElement1 = document.createElement("td");
            tdElement1.innerText = obj.id;
            let tdElement2 = document.createElement("td");
            tdElement2.innerText = obj.name;
            let tdElement3 = document.createElement("td");
            tdElement3.innerText = obj.email;

            trElement.append(tdElement1, tdElement2, tdElement3);
            tableBodyElement.appendChild(trElement);

        })

        tableHeadElement.appendChild(tableRowElement);
        tableElement.appendChild(tableHeadElement);
        tableElement.appendChild(tableBodyElement);

        tableColDiv.appendChild(tableElement);
       // responsiveMakingDiv.appendChild(tableColDiv);
        //rowDivElement.appendChild(tableColDiv);
        //rootDivElement.appendChild(rowDivElement);


       /**
         * 
         * <div class="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a class="active" href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
    */
    
      let paginationDiv = document.createElement("div");
      paginationDiv.setAttribute("class","block center");
      paginationDiv.setAttribute("Id","paginationDiv");

      [1,2,3,4,5,6].forEach((i) => {
       console.log(i);
       let anchorElement = document.createElement("a");
       anchorElement.setAttribute("href","#");
       if(i === 1){
        anchorElement.innerHTML = "&laquo; First";
       } else if(i === 6 ) {
        anchorElement.innerHTML = "Last &raquo;";
       } else {
        anchorElement.innerText = ""+i; 
       }

       anchorElement.addEventListener('click', clickHandler);
       paginationDiv.appendChild(anchorElement);
      });

      //tableColDiv.appendChild(paginationDiv);

      rootDivElement.append(paginationDiv, tableColDiv);
      document.body.append(rootDivElement);

     // document.body.appendChild(tableColDiv);

 })();







// fetch("https://dog.ceo/api/breeds/image/random")
// .then((response) => {
//     console.log(response);
//     return response.json();  // response.json() returns a Promise. This is asynchronous and main difference between XMLHTTP request object get method , onload() which is synchronous.
// }).then((responseData) => {
//     console.log(responseData);
// }).catch((error) => {
//      console.log(error);
// });