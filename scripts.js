$(document).ready(function(){

/* Hi!  This is where you get to program the magic island adventure! 

   Stuff in between the slash-stars are called "comments" ... that means
   the computer ignores them!  So we can write any thing we want!! 
   HAHAHAHAHA...
*/


/* These are variable declarations.  A variable is a box that stores information about
   what's going on in the game!  For instance, how tall the player is, whether or not they have
   a key, whether or not a door is open, etc.  Here we use "var" to tell the browser to create
   a new variable, and we set it to the initial value */


/* This is how tall the player is!  We start them at 4 ft tall, and then
   they grow and shrink when they eat cookies. */
var person_height = 4;


/* We need to set has_wings to true once the player finds some wings!
   That way, when they jump off the cliff, they can fly...
 */
var has_wings = false;


/* This is the number of trees in the endless forest */
var tree_count = 0;  




/*this is the first thing that happens when a player starts the game... */
function the_beginning(){
    change_image("http://top.freewallpaper-s.net/rwx/Magic_Island.jpg");
    change_title('Chapter 1: The Mysterious Island');
    change_text("(it's very mysterious)");
    change_buttons({
        "Continue...": introduction /* this "introduction" references the function introduction we create below... */
    });
}


/* this is the "introduction" we referenced above!  When the player clicks "Continue....", this code runs! */
function introduction(){
    change_title('');
    change_text("You are at the center of a mysterious island.  You don't really remember how you got here... there's this hazy memory of your friend Fred bonking you on the back of the head with a gigantic plush Power Ranger doll... Your mom always told you not to play with Power Rangers.  Anyway, what are you going to do?");
    change_buttons({"Stumble forward dizzily": island_center});
}



function island_center() {
   change_image('http://www.nativenewsnetwork.com/image-files/run-to-the-east-film.gif');
    change_title('');
    change_text('You are in the middle of an island.  To the west are some cliffs.  To your east is a empty plaza with a table in the middle of it.  North of you is a mountain wall with a hole in it.  South of you is a forest. You are really glad you brought your compass along today. Where are you going to go?');
    change_buttons({"Go west": cliffs, "Go east": plaza, "Go north": hole, "Go south": forest});
}



function cliffs() {
    change_image('http://www.theproducersperspective.com/wp-content/uploads/2013/01/cliff-lr-4.jpg');
    change_text('You are overlooking some cliffs.  Seagulls circle lazily.  The waves gently roll back and forth.   You can smell the salt.  What do you want to do?');
    change_buttons({'I believe I can fly!': fly, "Carefully climb down the cliffs": not_done, "Go back": island_center});
}



function fly() {
    if (has_wings) { /* if the player has wings...  */
        
        change_text('You are flying!  YAYYYYYY!!!!! You escape from the island and go home!  You beat the game!');
        
        change_buttons({'Start over': the_beginning});
        
    } else { /*  sadly, they don't have wings... */
        
       change_image('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVep9hWIHQ8N7iYIrL84JU8VHcsAlDz0BYG8q8bZNsf-v3iU8VAA');
       change_text("You believe you can fly... but you can't.");
       change_buttons({'Start over': the_beginning});
    }
}


function not_done() {
    change_image('http://blog.sysomos.com/wp-content/uploads/2010/05/question-mark.jpg');
    change_text("...and.... ...and.... I don't know what happens next!  It hasn't been written yet!  This game isn't finished!  Oh noes!  It's up to you to decide what happens... go into the javascript code, and write whatever you think should happen!");
  change_buttons({'Start over': the_beginning});
}



function plaza() {
    change_image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBtqK0rPGxJZTpXtFB3_Oy_PRKXEfsfawN6nWjG6ZKwE3ScbVAg');
    change_text('You go over to the plaza... there is a table with red and blue oreo cookies.  You never eat both halves of an oreo cookie.  Which half are you going to eat?');
    show_cookie_buttons();
}
                
function show_cookie_buttons() {
    change_buttons({'Eat the red half': shrink, 'Eat the blue half': grow, "Go back": island_center});
}

function shrink() {
	 /* This means, take the person's current height, subtract 1, and store it back in the person's height: */
    person_height -= 1;
    
    change_text('You eat a red half, and your height shrinks a little bit!!  You are now ' + person_height + ' feet tall.');
    
    if (person_height == 0) {
        change_image('http://www.meaningfulmama.com/wp-content/uploads/2012/05/super-mario-bros-game-over.png');
       change_text("Oops, now you are zero feet tall... you don't exist any more.  lolwut.  game over, doofus.");
        
        /* We reset the height back to 4 so if they start over and get
           back here, they are the right height again */
        person_height = 4;
        change_buttons({'Start over': the_beginning});
    }
    else {
        show_cookie_buttons();
    }
}

function grow() {
	/* This means, take the person's current height, add 1, and store it back in the person's height: */
    person_height += 1;
    
    change_text('You eat a blue half, and your height grows a little bit!!  You are now ' + person_height + ' feet tall.');
    show_cookie_buttons();
}


function hole() {
    change_image('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ73MNjK24zhAdmt8rMGZbqywoG42uY-Zf_wbqGhEvp9SRezXZM');
    change_text('There is a small hole in the mountain....');
    change_buttons({'Enter hole': enter, "Go back": island_center});
}

function enter() {
    if (person_height < 3) {
        change_text('With your shrunken height, you squeeze into the cave...');
        change_buttons({"Continue...": not_done});
    } else {
       change_text('OUCH!!! You banged your head on the ceiling.  You are too big to enter the hole!   In fact, you are ' + person_height + ' feet tall.  I wonder if there is a way to get shorter....');
    }
}

function forest() {
	change_image('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJKMfuNGOzBd15jqulaWyfT80fhryPYH1Uux-n5ph1VA2eLiiFkQ');
	change_text('You are at the entrance to the forest.  In front of you is a sign that says "Endless Forest".')
  
  /* If the player is short, they got lost in the endless forest.  If the player is tall, they can walk over it */
	if (person_height < 10) { /* too short... */
		change_buttons({"Go back": island_center, "Go forward": endless});
	} else {
		change_buttons({"Go back": island_center, "Go forward": shrubs});
	}
}


function endless() {
  tree_count += 2;
  text = 'You are in a forest.  There is a lot of trees.  Lots ';
  for (var i = 0; i < tree_count; i++) {
    text += 'and lots ';
  }
  text += "of trees.  You don't really like trees, not since the Treehouse Incident.  You prefer short bushes.  You remember a little nervously that this is called the 'Endless Forest'."
  change_text(text);
  change_buttons({"Go back": forest, "Go forward": endless});
}

function shrubs() {
	change_image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwMoWBhFB54M_5jm4QRk-0JME08NV6xm4xPeoSy6MNo2VnJJ0bQ');
	change_text("You walk through the forest, but honestly, it isn't too impressive... just a bunch of tiny shrubs!" + 
	" Or maybe it's just that you're really tall.... hmmm.  In the distance, you see a castle...");
	change_buttons({"Walk towards the castle": not_done, "Go back": forest});
}
    




/* Here are the functions that change the title, the text, the buttons, and the image */

function change_title(new_title) {
  $('h1 span').remove();
  var new_txt = $('<span>' + new_title + '</span>');
  $('h1').append(new_txt);
  new_txt.hide();
  new_txt.fadeIn(200);
}

function change_text(new_text) {
  $('p.text span').remove();
  var new_txt = $('<span>' + new_text + '</span>');
  $('p.text').append(new_txt);
  new_txt.hide();
  new_txt.fadeIn(200);
}

function change_image(new_image_url) {
  $('img').attr('src', new_image_url);
}

function change_buttons(buttons) {
    button_div = $('div.buttons')
    button_div.empty();
    for (btn_name in buttons) {
        var new_button = $('<span></span>');
        new_button.text(btn_name);
        new_button.click(buttons[btn_name]);
        button_div.append(new_button);
        button_div.append(' '); /* so that the buttons wrap if they are too long */
    }
}

/* Once we have defined all our functions, we call the_beginning to
   start things off! */
the_beginning();

});
