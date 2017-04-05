//variables
var output = document.getElementById("output");
var input = document.getElementById("input");
var addBorder = document.getElementsByClassName("addBorder");
//Create an array of objects that represents famous people
var famous =[
   {
   title: "Mr.",
   name: "Nikola Tesla",
   bio: "Nikola Tesla was a Serbian American inventor, electrical engineer, mechanical engineer, physicist, and futurist best known for his contributions to the design of the modern alternating current (AC) electricity supply system.",
   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/689px-N.Tesla.JPG",
   lifespan: {
   birth: 1747,
   death: 1797
     }
  },
  {
  title: "Philosopher",	
  name: "Aristotle",
  bio: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
  image: "http://www.thefamouspeople.com/profiles/images/aristotle-17.jpg",
  lifespan: {
  birth: 384 ,
  death: 322 
     }
  },
  {
  title: "Theologian",
  name: "Erasmus",
  bio: "When I get a little money I buy books; and if any is left I buy food and clothes.",
  image: "http://kingofwallpapers.com/erasmus/erasmus-001.jpg",
  lifespan: {
  birth: 1466,
  death: 1536
     }
  },
  {
  title: "Dr.",
  name: "Martin Luther King Jr.",
  bio: "Martin Luther King Jr. was an American Baptist minister and activist who was a leader in the African-American Civil Rights Movement.",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg",
  lifespan: {
  birth: 1929,
  death: 1968	
    }
  },
  {
  title: "President",
  name: "George Washington",
  bio: "George Washington was the first President of the United States, the Commander-in-Chief of the Continental Army during the American Revolutionary War, and one of the Founding Fathers of the United States.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/740px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
  lifespan: {
  birth: 1732 ,
  death: 1799
    }  
  }
]

for (var i= 0; i<famous.length; i++) {
    newPerson="";
  	newPerson+=`<div class="personContainer" id="person-${i}">`
  	newPerson+= `<header> ${famous[i].name} -${famous[i].title}</header>`
	  newPerson+= `<section class="bio"> ${famous[i].bio}  </section>`
  	newPerson+= `<image src=${famous[i].image} </section>`
  	newPerson+= `<footer> ${famous[i].lifespan.birth} - ${famous[i].lifespan.death}  </footer>`
  	newPerson+=`</div>`
    output.innerHTML += newPerson;  
}

// when you click in the element 
//add for loop statment to loop through the array to check 
//if any element has the class selected if so it will deleted if not it will add it 
document.body.addEventListener("click",function(event){
	if (event.target.className==="personContainer"){
		var selectChildren = event.target.parentNode.children;
		//loop through all the children of the parent node
		for (var i= 0; i<selectChildren.length; i++) {
			//if any one has the bodred class it delete it 
			if (selectChildren[i].classList.contains("addBorder") ){
				selectChildren[i].classList.remove("addBorder");
			}
		}
		//then add the border to what you click in 
		event.target.classList.add("addBorder");
	}
});

//if you click in the bio class which is inside the card 
//it will grap the data to the input element and focus in it .
document.body.addEventListener("click",function(event){
	if (event.target.className==="bio"){
		input.value = event.target.innerHTML;
		input.focus();
    writethis();
	} 
});

function writethis(){
  input.addEventListener("keyup",function(event){
  var selectedElement =document.getElementsByClassName("addBorder");

  console.log("selectedElement",selectedElement[0].children[1].innerHTML)
  var target= selectedElement[0].children[1];
  target.innerText= input.value;
  }) 
};



//to clear text box when press enter
input.addEventListener("keypress",function(event){
	if(event.keyCode === 13){
		input.value = "";
	}
});