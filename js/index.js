
$( document ).ready(function() {

   $('h1').css('color', 'red')

   $('h1').css("font-weight","Bold")


});



var lyric = [


"Be, be, 'fore we came to this country // We were kings and queens, never porch monkeys // There was empires in Africa called Kush // Timbuktu, where every race came to get books // -Nas(I Can)",

"Her dreams always meant what they needed them to mean // What made them real was the action in between // She dreamt that Assata was free in their old house in Queens // The fact that they always came true was the thing // Assata had been convicted of a murder she couldn't of done // Medical evidence shown she couldn't have shot the gun // It's time for her to see the sun from the other side // Time for her daughter to be by her mother's side // Time for this beautiful woman to become soft again. // -Common(A Song for Assata)",

"But homie if you change, may you change for the better // Back when Martin King had a thing for Coretta // Wonder if she seen all the dreams he was dreamin' // Did she have a clue of all the schemes he was schemin' //  -J. Cole(Sideline Story)",

"Who said a black man in Illuminati? //  Last time I checked that was the biggest racist party // Last time I checked, we was racing with Marcus Garvey // On the freeway to Africa till I wreck my Audi // -Kendrik Lamar(HiiiPower)",

"Get Up, Stand Up, stand up for your right  // Get Up, Stand Up, stand up for your right // Get Up, Stand Up, stand up for your right // Get Up, Stand Up, don't give up the fight //  -Bob Marley(Get Up, Stand Up",

"Tell me, what has become of my rights? //  Am I invisible 'cause you ignore me? // Your proclamation promised me free liberty now // I'm tired of bein' the victim of shame // They're throwin' me in a class with a bad name // I can't believe this is the land from which I came // You know, I do really hate to say it //  The government don't wanna see // But if Roosevelt was livin' //  He wouldn't let this be, no, no. // -Michael Jackson(They Don't Care About Us)",

"There will be no pictures of pigs shooting down // Brothers in the instant replay //  here will be no pictures of pigs shooting down // Brothers in the instant replay // There will be no pictures of Whitney Young being //  Run out of Harlem on a rail with a brand new process // There will be no slow motion or still life of Roy // Wilkins strolling through Watts in a Red, Black and // Green liberation jumpsuit that he had been saving // For just the proper occasion // Green Acres, The Beverly Hillbillies, and Hooterville // Junction will no longer be so Goddamn relevant, and // Women will not care if Dick finally gets down with // Jane on Search for Tomorrow because Black people // Will be in the street looking for a brighter day // The revolution will not be televised //  -Gil Scott-Heron(The Revolution Will Not Be Tevelised",
"Wouldn't you know //  We been hurt, been down before //  Nigga, when our pride was low // Lookin' at the  //  world like, 'Where do we go?'  // Nigga, and we hate po-po //  Wanna kill us dead in the street fo sho' //  Nigga, I'm at the preacher's door //  My knees gettin' weak, and my gun might blow // But we gon' be alright  // -Kendrick Lamar(Alright)",

"Hands up, Don't Shoot // Hands up, Don't Shoot // Hands up, Don't Shoot // Hands up, Don't Shoot // Hands up, Don't Shoot // Hands up, Don't Shoot // Hands up, Don't Shoot // Hands up, Don't Shoot // Hands up, Don't Shoot // Hands up, Don't Shoot // -US(everyday)",

"Say it loud-I'm black and im proud //  Say it loud-I'm black and im proud // Say it loud-I'm black and im proud // Say it loud-I'm black and im proud // Say it loud-I'm black and im proud // Say it loud-I'm black and im proud // Say it loud-I'm black and im proud // -US(everyday via James Brown)",

"Who will Survive in America???? // Who will Survive in America???? //  Who will Survive in America???? //  Who will Survive in America???? //  Who will Survive in America???? //  Who will Survive in America???? // -Kanye West via GIl Scott-Heron (Who WIll Survive in America)" 
]

var images = [
"assets/images/1.jpg",
"assets/images/2.jpg",
"assets/images/3.jpg",
"assets/images/4.jpg",
"assets/images/5.jpg",
"assets/images/6.jpg",
"assets/images/7.jpg",
"assets/images/8.jpg",
"assets/images/9.jpg",
"assets/images/10.jpg",
"assets/images/11.jpg",
"assets/images/12.jpg",
"assets/images/13.jpg",
"assets/images/14.jpg",
"assets/images/15.jpg",
"assets/images/16.jpg",
"assets/images/17.jpg",
"assets/images/18.jpg",
"assets/images/19.jpg",
"assets/images/20.jpg",
"assets/images/22.jpg",
"assets/images/23.jpg",
"assets/images/24.jpg",
"assets/images/25.jpg",
"assets/images/26.jpg",
"assets/images/27.jpg",




]

function newLyrics(){
	var randomNumber = Math.floor(Math.random() * (lyric.length-1)); 
	var randomImage = Math.floor(Math.random()* (images.length-1));
	document.getElementById('lyricDisplay').innerHTML = lyric[randomNumber];
	document.getElementById('images').src = images[randomImage];

}


