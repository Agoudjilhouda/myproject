/*function getMiddle(s)
{
  var i;
  var j=0;
  for(i in s ){
    j++;
  }
  if(j%2!=0){
    return s[j/2];
  }
  else{
  var b= j/2;
  k=[s[b-1],s[b]];
   return k;
}} 
console.log(getMiddle("test"));*/

/*function accum(s){
    var i=0;
   let result="";
    for( i=0;i<s.length ; i++){
       
        for(var j=0;j<=i;j++){
            if(j==0){
               
                result += s[i];
                result= result.toUpperCase();
              
    }
              else{
                result += s[i];}
           
                
                   
              }
              result+='-';
       
    }
    return result;
} console.log(accum("test"));*/




/*function repeatStr (n, s) {
    var i=0;
   let result="";
    for( i=0;i<n ; i++){
        for(  var j=0;j<s.length ; j++){
            result+=s[j];
        }}
       console.log(result);
    return result;
  }
 console.log(repeatStr(3, "*")); 

 /*function repeatStr (n, s){
    var text 
    var result=s.repeat(n)
    return result;
 }
 console.log(repeatStr(3, "*"));*/


/* function findSmallestInt(args) {
   var min;
   min=args[0]
   for(var i=1; i<args.length ;i++){
     if(min>args[i]){
       min=args[i];
     }
   }
   return min;
 }
 console.log(findSmallestInt([78,56,232,12,8]))*/

/*
  function sumTwoSmallestNumbers(numbers) {  
    //Code here
    min1=Infinity;
    min2=Infinity;
    for(var i=0;i<numbers.length;i++){
        if(min1>numbers[i]){
            min1=numbers[i];
        } if(min2>numbers[i+1]){
        min2=numbers[i+1];}
    }
        return min1+min2;
    
  }
  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]
    ));

*/

/*var btn=document.querySelector(".btn1")

 
  btn.addEventListener('click',getname);
function getname(){
 var name12=document.getElementById("p12").value
   document.querySelector(".demo").innerHTML= ` Your name is ${name12} `
}

*/
/*
var targetInput = document.getElementById("country"),
  results = document.getElementById("autocomplete-result"),
  countryList = ["it ends with us",
    "you made a fool of death with your beauty",
    "you and me on vacation",
    "reminders of him",
    "an offer from a gentleman"
  ], matches = [],resultsCursor = 0;
//focus the input
targetInput.focus();
 
//add event listner for input keydown
targetInput.addEventListener('keydown' , function(event){
    if (event.keyCode == '13' ){
      event.preventDefault();
    }
});
//add eventlistner for the input keyup
targetInput.addEventListener('keyup', function (event) {
  /*
  key code
  - enter 13 
  - arrow up 38 
  -  arrow down 40
  */
 /*
  results.innerHtml = "";
  toggelResults("hide");
  if (this.value.length > 0) {
    matches = getmatches(this.value);
    if (matches.length > 0) {
      displaymatches(matches);
    }
  }
  if (results.classList.contains("visible")) {
    switch (event.keyCode) {
      case 13:
        targetInput.value = results.children[resultsCursor].innerHTML;
        toggelResults("hide");
        resultsCursor =0 ;
        break;
      case 38:
        if (resultsCursor>0){
          resultsCursor--;
          moveCursor(resultsCursor)
        }
        break;
      case 40:
        if(resultsCursor<(matches.length)){
          resultsCursor++;
          moveCursor(resultsCursor);
        }
        break;
    }
  }
}
);
//define a function for toggling the results list 
function toggelResults(action) {
  if (action == "show") {
    results.classList.add("visible");
  }
  else if (action == "hide") {
    results.classList.remove("visible");
  }
}

// define a function for checking if the input value matches the country names
function getmatches(inputText) {
  var machesList = [];
  for (var i = 0; i < countryList.length; i++) {
    if (countryList[i].toLowerCase().indexOf(inputText.toLowerCase()) != -1) {
      machesList.push(countryList[i]);
    }
  }
  return machesList;
}

//define a function for displaying autocomplete results
function displaymatches(machesList) {
  var j = 0;
  while (j < machesList.length) {
    results.innerHTML += '<li class = "result" >' + machesList[j] + '</li>';
    j++;
  }
  //the first child get a class of 'highlighted'
  moveCursor(resultsCursor);
  //show the results
  toggelResults("show");
}
//define a function for moving a cursor in the results list
function moveCursor( pos){
  for( var x =0 ; x < results.children.length ; x++){
    results.children[x].classList.remove('highlighted');
  }
  results.children[pos].classList.add('highlighted');
}
<form action="">
<label for="search">search for the book you want</label>
<input type="search ..." id="country" name="country" placeholder="trype here .." width="100%">
</form>
<ul id="autocomplete-result"></ul>
</div>
*/



/*

let suggestions = [ "it ends with us" ,
"you made a fool of death with your beauty",
"you and me on vacation",
"reminders of him" ,
"an offer from a gentleman"
];
const searchinput = document.getElementById("search");
const searchwrapper = document.querySelector(".wrapper");
const resultswrapper = document.querySelector(".results");

searchinput.addEventListener('keyup' , () => {
let results = [];
let input = searchinput.value;
if(input.lenght){
  results = searchable.filter((item) => {
   return item.toLoweCase.includes(input.toLowerCase());//if it contain the input that we wort then return it
  });
  
}
renderresults(results);
});
 function renderresults(results){
  if(!results.lenght){
    return searchwrapper.classList.remove('show');
  }
  let content = results.map((items) => {
    return `<li>${item}</li>`;
    })
    .join('');

  searchWrapper.classList.add('show');
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}
*/



let searchable = [
  'Elastic',
  'PHP',
  'Something about CSS',
  'How to code',
  'JavaScript',
  'Coding',
  'Some other item',
];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
  let results = [];
  let input = searchInput.value;
  if (input.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }
  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    return searchWrapper.classList.remove('show');
  }

  const content = results
    .map((item) => {
      return `<li> ${item}</li>`;
    })
    .join('');

  searchWrapper.classList.add('show');
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}

