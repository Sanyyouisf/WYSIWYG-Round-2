//variables
var output = $('#output');
var input = $('#input');
var addBorder = $('.addBorder');
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


//Create a DOM element for each of the objects inside the container
$.each (famous, function (index,value) {
    index += 1;
    $("#output").append(`<div class="card">`);
    $(".card:nth-of-type(" + index + ")").append(`<header><h1>${value.title} ${value.name} </h1></header>`);
    $(".card:nth-of-type(" + index + ")").append(`<section class="bio"><span> ${value.bio}  </section>`);
    $(".card:nth-of-type(" + index + ")").append(`<image src=${value.image} >`);
    $(".card:nth-of-type(" + index + ")").append(`<footer> <p>Born: ${value.lifespan.birth} <br>Died:  ${value.lifespan.death}</p> </footer>`);
});

var bioSection = $(".addBorder .bio").text();

// when you click in the elementremove the border from all the sibling 
//and then add the border to the card you click on
// and focus in the text input  

$(".card").on("click",function(){
  $(this).siblings().removeClass("addBorder");
  $(this).addClass("addBorder");
  $(input).focus();
  $("#input").val($(".addBorder .bio").text());
});

//when writing in the text box 
//the person's biography should be immediately bound to what you are typing, letter by letter.
$(input).keyup(function(){
  var inputValue = $(input).val();
  var bioSection = $(".addBorder .bio").text(); 
  // $(".addBorder .bio").text( (bioSection)+ (inputValue));
    $(".addBorder .bio").text(inputValue);
});


//when press inter key the text input should be blank
$(input).keyup(function(event){
  if (event.keyCode === 13 ){
    $(this).val('');  
    $(".card").removeClass("addBorder");    
  }
});



