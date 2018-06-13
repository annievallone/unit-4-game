
 $(document).ready(function() {
//To begin the game set each player health back to default 
var health = {
    vaderhealth: 150,
    obiwanhealth: 200,
    bobahealth: 100,
}
//setting the battle people   
var battleWarriors = {fighter: "", opponent: ""};
//setting everyone's health
var warriorHealth = {fighterHealth: "", opponentHealth: ""}

// set play to true
var play = true;

$("#vaderhealth").text(health.vaderhealth);
$("#obiwanhealth").text(health.obiwanhealth);
$("#bobahealth").text(health.bobahealth);

//setting variable for determining if we have both competitors 
var warriorsFull = false;

//Choosing your competitors 
//when the name button is clicked 

$(".name").click(function() {
    //if both competitors are already picked do nothing 
    if (warriorsFull) {
        return;
    }
    //create a new variable grabbing the data name for the button 
    //clicked and prepend a hash so it can be used to find the correct class
    var dataId = "#" + $(this).attr("data-name");
//Cloning the above referenced class to the id player so that it 
//moves the player card on the screen 
    $(dataId).clone().appendTo(".player");
    //hides the original card
    $(this).parents(".grab").hide();
//if the object key fighter is empty grab the atribute data-name and 
// and apply it to the object 
    if (battleWarriors.fighter === "") {
        battleWarriors.fighter = $(this).attr("data-name");
        //if fighter has data and opponent is empty grab data-name and 
        //apply it to opponent 
    } else if (battleWarriors.opponent === "") {
        battleWarriors.opponent = $(this).attr("data-name");
        warriorsFull = true;
    } else {
        return;
    }
    //if both warriors are chosen display the fight button 
    if(warriorsFull) {
        $(".fight").html("<button class='btn btn-primary fight'> FIGHT!</button>")
        getHealth()
        return battleWarriors;
    }
})
  //sets health for battle warriors by grabbing the attribute data-name 
  //off the the click and uses that to see which warrior to get 
  //health from by comparing the first character of the string 
  //This does not work - I need to figure out how to update the health object 
  //my need to set the values 
        function getHealth() {
            var getFighter = (battleWarriors.fighter).substring(0,1);
            // console.log(getFighter);
            for (var key in health) {
             if (health.hasOwnProperty(key)) {
                 var subkey = (key).substring(0,1);
                 if (getFighter == subkey) {
                    warriorHealth.fighterHealth = (health[key])
                     
                 }
                 
             }
         }
         var getOpponent = (battleWarriors.opponent).substring(0,1);
         for (var key in health) {
            if (health.hasOwnProperty(key)) {
                var subkey = (key).substring(0,1);
                if (getOpponent == subkey) {
                    warriorHealth.opponentHealth = (health[key])
                    
                }
            }
        }
        }

//when fight button is clicked 
$(".fight").click(function() {
    if (play) {
//set fighter attack damage 
var figherDamage = Math.round(Math.sqrt(warriorHealth.fighterHealth)) || 0;
figherDamage++;
console.log(figherDamage);
warriorHealth.opponentHealth = (warriorHealth.opponentHealth - figherDamage);

var opponentDamage = Math.round(Math.sqrt(warriorHealth.opponentHealth)) || 0;
warriorHealth.fighterHealth = (warriorHealth.fighterHealth - opponentDamage)
// $("#vaderhealth").text(warriorHealth.fighterHealth)

$("#" + battleWarriors.fighter + "health").text(warriorHealth.fighterHealth);
console.log($("#" + battleWarriors.fighter + "health"))
$("#" + battleWarriors.opponent + "health").text(warriorHealth.opponentHealth);
 if (warriorHealth.fighterHealth <= 0) {
     $(".fight").html("<p class='fight'> You Loose!</p>");
     $("replay").html("<button class='btn btn-primary replay'>Replay!</button>");
     play = false;
    
 }
    else if (warriorHealth.opponentHealth <= 0) {
        $(".fight").html("<p class='fight' style='color: white'>You Win!</p>");
        $(".replay").html("<button class='btn btn-primary replay'>Replay!</button>");
        play = false;

 }
    }
    })

    $(".replay").click(function() {
        health = {
            vaderhealth: 150,
            obiwanhealth: 200,
            bobahealth: 100,
        };
        battleWarriors = {fighter: "", opponent: ""};
        play = true;
       
        $(".player").html("<div></div>");
        $(".opponent").html("<div></div>");
        $(".fight").html("<div></div>");
        $(".grab").show();
        $(".replay").html("<div></div>")

    });
});

//set warrior attack and defend damage 
//add check to see if either goes to 0 then you loose or win 
//add reset 
   //when the object battleWarriors is full show the button fight
        //Code: Opponent: To set attack damage get square root of health set to a var 
        //Code: reduce fighter and opponent health by var 
        //Code: Compare to see if either health is <= 0 if so stop 
        //if fighter is <=0 display you loose else you win 

        //When the fight butn clicked randomly ticket down someones health
        //Code: Fighter: to set attack starting damage get the square root of the health 
        //create a for loop to iterate up from there set to a var 
