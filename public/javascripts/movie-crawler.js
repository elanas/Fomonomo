/**
 * Created by josephmin on 9/13/14.
 */


var apikey = "up3wv3uvufs74w5yqh2tdpza";
var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";
// construct the uri with our apikey
var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;
var current;
var indexPop = 0;
var indexAct = 0;
var indexAni = 0;
var indexCom = 0;
var indexRom = 0;
var allJSONIndex = 0;

var favorites = [];
var popular = ["Boyhood", "Up", "The Dark Knight", "Her", "Ferris Bueller's Day Off", "The Silence of the Lambs", "Schindler's List", "Marvel's The Avengers", "The Good, the Bad and the Ugly", "Guardians of the Galaxy"];
var action = ["Lawrence of Arabia", "The Hurt Locker", "Aliens", "Crouching Tiger, Hidden Dragon", "Jurassic Park"];
var animated = ["WALL-E", "The Iron Giant", "Spirited Away", "Kung Fu Panda", "The Adventures of Tintin", "Monsters, Inc."];
var comedy = ["Monty Python and the Holy Grail", "Airplane!", "The LEGO Movie", "The Grand Budapest Hotel", "Super Troopers"];
var romance = ["Casablanca", "Sleepless in Seattle", "The Artist", "Titanic", "A Walk to Remember"];
var classic = ["The Wizard of Oz", "Citizen Kane", "Casablanca", "The Third Man", "Metropolis", "All About Eve", "A Hard Day's Night", "Modern Times", "Das Cabinet des Dr. Caligari.", "Nosferatu, a Symphony of Horror", "Laura", "Singin' in the Rain"];
var documentary = ["Man on Wire", "Life Itself", "20 Feet From Stardom", "Taxi to the Dark Side", "Murderball", "Blackfish", "The Interrupters", "Deliver Us From Evil", "Anvil! The Story of Anvil", "Inside Job", "Jiro Dreams of Sushi"];
var drama = ["Citizen Kane", "Casablanca", "The Godfather", "Metropolis", "All About Eve", "Gravity", "Sunset Boulevard", "Rear Window ","La Battaglia di Algeri", "The Maltese Falcon",
               "Boyhood", "	The Godfather, Part II", "Rashômon", "Seven Samurai", "Ladri di Biciclette",  "On the Waterfront", "Lawrence of Arabia", "	12 Years a Slave", "Vertigo",
                "Apocalypse Now", "L.A. Confidential","The Wrestler"];
var horror = ["Repulsion", "King Kong", "The Bride of Frankenstein", "Psycho", "Frankenstein", "Rosemary's Baby", "Let the Right One In", "Aliens",
              "Eyes Without a Face", "Pan's Labyrinth", "Gojira", "The Evil Dead", "The Birds", "Invasion of the Body Snatchers", "Night of the Living Dead", "Don't Look Now",
                "Freaks", "The Cabin in the Woods"];
var best2013 = ['12 Years a Slave', 'Before Midnight','Short Term 12', 'Mud','Inside Llewyn Davis','20 Feet From Stardom', 'Zero Dark Thirty','Her', 'Wadjda',
                 'American Hustle','Blackfish','Enough Said','Captain Phillips','The Square', 'Dallas Buyers Club', 'Sound City', 'Nebraska', '56 Up'];
var best2012 = ["Argo", "Marvel's The Avengers", "Skyfall", "Moonrise Kingdom ", "Looper", "Jiro Dreams of Sushi", "Wake in Fright", "How to Survive a Plague",
                "The Kid with a Bike","This Is Not a Film ",  "Monsieur Lazhar", "The Sessions", "The Cabin in the Woods", "Silver Linings Playbook",
                "The Invisible War", "Amour", "Oslo, August 31st", "Ai Weiwei: Never Sorry", "The Dark Knight Rises", "Beware Of Mr. Baker"];

var best2012LongString = "Title Argo (2012) Marvel's The Avengers (2012) Skyfall (2012) Moonrise Kingdom (2012) Looper (2012) Jiro Dreams of Sushi (2012) Wake in Fright (2012) How to Survive a Plague (2012) The Kid with a Bike (2012) This Is Not a Film (2012) Monsieur Lazhar (2012) The Sessions (2012) The Cabin in the Woods (2012) Silver Linings Playbook (2012) The Invisible War (2012) Amour (2012) Oslo, August 31st (2012) Ai Weiwei: Never Sorry (2012) The Dark Knight Rises (2012) Beware Of Mr. Baker (2012) Mea Maxima Culpa: Silence In The House Of God (2012) The Island President (2012) Lincoln (2012) Undefeated (2012) The Loved Ones (2012) Searching for Sugar Man (2012) La Grande illusion (Grand Illusion) (2012) West of Memphis (2012) The Imposter (2012) Marley (2012) The Secret World of Arrietty (2012) Chasing Ice (2012) The Queen of Versailles (2012) Brooklyn Castle (2012) Django Unchained (2012) Sister (2012) Beauty and the Beast (2012) 5 Broken Cameras (2012) Marina Abramovic: The Artist Is Present (2012) I Wish (2012) Diana Vreeland: The Eye Has To Travel (2012) The House I Live In (2012) Holy Motors (2012) Safety Not Guaranteed (2012) Barbara (2012) Life of Pi (2012) Once Upon a Time in Anatolia (2012) Bernie (2012) First Position (2012) The Central Park Five (2012) Headhunters (2012) Elena (2012) Farewell, My Queen (2012) The Hunger Games (2012) Frankenweenie (2012) Turn Me On, Dammit! (2012) Side by Side (2012) Compliance (2012) The Master (2012) Footnote (2012) ParaNorman (2012) 21 Jump Street (2012) Beasts of the Southern Wild (2012) A Royal Affair (2012) Arbitrage (2012) Wreck-it Ralph (2012) Keep the Lights On (2012) In Darkness (2012) The Pirates! Band of Misfits (2012) The Well-Digger's Daughter (2012) End of Watch (2012) Chronicle (2012) The Perks of Being a Wallflower (2012) Robot & Frank (2012) Starlet (2012) Seven Psychopaths (2012) The Raid: Redemption (2012) Neil Young Journeys (2012) Polisse (2012) Bully (2012) The Turin Horse (2012) Middle of Nowhere (2012) The Big Picture (2012) Miss Bala (2012) Tabu (2012) Boy (2012) Chico & Rita (2012) Your Sister's Sister (2012) Sleepwalk With Me (2012) De rouille et d'os (Rust and Bone) (2012) Smashed (2012) Bullhead (2012) Declaration of War (2012) Easy Money (2012) The Forgiveness of Blood (2012) Goon (2012) The Snowtown Murders (2012) Comic-Con: Episode IV - A Fan's Hope (2012) The Salt of Life (2012) Crazy Horse (2012)";
var best2011LongString = "TitleThe Artist (2011)Harry Potter and the Deathly Hallows - Part 2 (2011)A Separation (2011)The Interrupters (2011)The Muppets (2011)Project Nim (2011)Poetry (2011)Le Havre (2011)Moneyball (2011)Everyday Sunshine: The Story of Fishbone (2011)Nostalgia for the Light (2011)We Were Here (2011)Bill Cunningham New York (2011)Drive (2011)Hugo (2011)Mission: Impossible Ghost Protocol (2011)Cave of Forgotten Dreams (2011)Source Code (2011)13 Assassins (2011)Midnight in Paris (2011)Born To Be Wild (2011)Win Win (2011)Tomboy (2011)50/50 (2011)The Guard (2011)Bridesmaids (2011)Pina (2011)Weekend (2011)Coriolanus (2011)Pariah (2011)Take Shelter (2011)The Descendants (2011)Of Gods and Men (2011)Silent Souls (2011)The Arbor (2011)Knuckle (2011)Being Elmo: A Puppeteer's Journey (2011)Martha Marcy May Marlene (2011)Incendies (2011)Senna (2011)Arthur Christmas (2011)Attack the Block (2011)X-Men: First Class (2011)Rango (2011)The Four Times (Le Quattro Volte) (2011)Tabloid (2011)King of Devil's Island (2011)Elite Squad: The Enemy Within (2011)Into The Abyss (2011)Winnie the Pooh (2011)Armadillo (2011)The Lion King (2011)Corman's World: Exploits Of A Hollywood Rebel (2011)Point Blank (2011)The Girl with the Dragon Tattoo (2011)Margin Call (2011)City of Life and Death (2011)The Black Power Mixtape 1967-1975 (2011)The Tree of Life (2011)Buck (2011)The Trip (2011)The Ides of March (2011)Uncle Boonmee Who Can Recall His Past Lives (2011)Beats Rhymes & Life: The Travels of a Tribe Called Quest (2011)Certified Copy (Copie Conforme) (2011)Contagion (2011)Super 8 (2011)Submarine (2011)The Hedgehog (2011)Cedar Rapids (2011)Rise of the Planet of the Apes (2011)Even the Rain (Meme La Pluie) (2011)Tinker Tailor Soldier Spy (2011)My Week with Marilyn (2011)Meek's Cutoff (2011)Terri (2011)Jane Eyre (2011)Beginners (2011)Warrior (2011)Puss in Boots (2011)Bobby Fischer Against The World (2011)The Lincoln Lawyer (2011)Circumstance (2011)Carancho (2011)A Better Life (2011)Tucker & Dale vs Evil (2011)Viva Riva! (2011)Potiche (2011)Happy, Happy (2011)The Princess Of Montpensier (2011)My Afternoons with Margueritte (2011)Mysteries of Lisbon (2011)Dolphin Tale (2011)Tyrannosaur (2011)The Time That Remains (2011)Trollhunter (2011)The Double Hour (2011)The Way (2011)Life, Above All (2011)American: The Bill Hicks Story (2011)";
var best2013LongString = "Title Gravity (2013) 12 Years a Slave (2013) Before Midnight (2013) Short Term 12 (2013) Mud (2013) Inside Llewyn Davis (2013) 20 Feet From Stardom (2013) Zero Dark Thirty (2013) Her (2013) Wadjda (2013) American Hustle (2013) Blackfish (2013) Enough Said (2013) Captain Phillips (2013) The Square (2013) Dallas Buyers Club (2013) Sound City (2013) All Is Lost (2013) Nebraska (2013) 56 Up (2013) Fruitvale Station (2013) The Act Of Killing (2013) Stories We Tell (2013) The Selfish Giant (2013) Call Me Kuchu (2013) Let The Fire Burn (2013) Frances Ha (2013) A Hijacking (2013) Muscle Shoals (2013) The Spectacular Now (2013) Cutie And The Boxer (2013) Blue Jasmine (2013) Philomena (2013) Behind the Candelabra (2013) The Hunger Games: Catching Fire (2013) The Past (2013) Lore (2013) I Am Divine (2013) The Hunt (2013) Room 237 (2013) The Crash Reel (2013) Blancanieves (2013) No (2013) War Witch (2013) Rush (2013) Blue Is The Warmest Color (2013) The Gatekeepers (2013) The World's End (2013) Star Trek Into Darkness (2013) Frozen (2013) In a World... (2013) Museum Hours (2013) The Sapphires (2013) After Tiller (2013) We Steal Secrets: The Story Of Wikileaks (2013) A Band Called Death (2013) Drug War (2013) A Touch of Sin (2013) The Great Beauty (2013) Still Mine (2013) Our Children (2013) Mother Of George (2013) Beyond The Hills (2013) Gimme The Loot (2013) The Conjuring (2013) Caesar Must Die (2013) Inequality For All (2013) A Place at the Table (2013) In the House (2013) The Way Way Back (2013) The Angels' Share (2013) This Is the End (2013) What Maisie Knew (2013) Prisoners (2013) Side Effects (2013) My Brother The Devil (2013) Fill the Void (2013) Hannah Arendt (2013) Much Ado About Nothing (2013) The Punk Singer (2013) Computer Chess (2013) Upstream Color (2013) The Attack (2013) Happy People: A Year in the Taiga (2013) Sightseers (2013) The Armstrong Lie (2013) The Patience Stone (2013) We Are What We Are (2013) At Berkeley (2013) Yossi (2013) Dirty Wars (2013) Drinking Buddies (2013) Prince Avalanche (2013) Berberian Sound Studio (2013) Seduced And Abandoned (2013) From Up On Poppy Hill (2013) Kon Tiki (2013) Blue Caprice (2013) Leviathan (2013) Laurence Anyways (2013)";
var bestofAllTime = ""

var actionLongString = "Title Metropolis (1927) The Adventures of Robin Hood (1938) King Kong (1933) Seven Samurai (Shichinin no Samurai) (1954) The Treasure of the Sierra Madre (1948) Up (2009) Lawrence of Arabia (1962) Apocalypse Now (1979) The Good, the Bad and the Ugly (1966) The Dark Knight (2008) The 39 Steps (1935) Jaws (1975) WALL-E (2008) The Searchers (1956) Harry Potter and the Deathly Hallows - Part 2 (2011) Star Trek (2009) The Wild Bunch (1969) The Terminator (1984) Badlands (1974) The Hurt Locker (2009) Star Wars: Episode V - The Empire Strikes Back (1980) The French Connection (1971) Aliens (1986) Kumonosu Jô (Throne of Blood) (Macbeth) (1957) True Grit (2010) Once Upon a Time in the West (1968) The LEGO Movie (2014) Marvel's The Avengers (2012) Aguirre, der Zorn Gottes (Aguirre, the Wrath of God) (1972) Dr. No (1962) Who Framed Roger Rabbit (1988) Chicken Run (2000) Skyfall (2012) The Lord of the Rings: The Two Towers (2002) Gojira (1956) Spartacus (1960) Casino Royale (2006) A Fistful of Dollars (Per un Pugno di Dollari) (1964) The Princess Bride (1987) Ghostbusters (1984) Iron Man (2008) Back to the Future (1985) Looper (2012) Goldfinger (1964) The Bourne Ultimatum (2007) No Country for Old Men (2007) The Right Stuff (1983) Babe (1995) Crouching Tiger, Hidden Dragon (2001) Guardians of the Galaxy (2014) Star Wars: Episode IV - A New Hope (1977) Catch Me If You Can (2002) The Lord of the Rings: The Return of the King (2003) Jurassic Park (1993) Close Encounters of the Third Kind (1977) Spider-Man 2 (2004) From Russia With Love (1964) The Seventh Seal (Det Sjunde inseglet) (1957) Paths of Glory (1957) X-Men: Days of Future Past (2014) The Fugitive (1993) Apollo 13 (1995) Raiders of the Lost Ark (1981) One False Move (1992) The Bridge on the River Kwai (1957) All Is Lost (2013) The Secret of Roan Inish (1995) Wallace & Gromit: The Curse of the Were-Rabbit (2005) Ran (1985) Hero (2004) Yellow Submarine (1968) The Twilight Samurai (Tasogare Seibei) (2004) Saving Private Ryan (1998) Dawn Of The Planet Of The Apes (2014) Full Metal Jacket (1987) The Town (2010) The Departed (2006) Drive (2011) Superman (1978) Three Kings (1999) Diva (1981) Enter the Dragon (1973) The Straight Story (1999) Mission: Impossible Ghost Protocol (2011) In the Line of Fire (1993) Ten Canoes (2007) Source Code (2011) Captain America: The Winter Soldier (2014) The Dark Knight Rises (2012) The Hunt for Red October (1990) 13 Assassins (2011) Mountain Patrol: Kekexili (2006) Blindsight (2006) Mad Max (1979) Fantastic Mr. Fox (2009) Supercop (1992) District 9 (2009) Midnight Run (1988) How to Train Your Dragon 2 (2014) The Great Escape (1963)";
var animationLongString = "Title Toy Story 2 (1999) Snow White and the Seven Dwarfs (1937) Toy Story 3 (2010) Up (2009) Finding Nemo (2003) Pinocchio (1940) Toy Story (1995) WALL-E (2008) The Incredibles (2004) Ratatouille (2007) The LEGO Movie (2014) Fantasia (1940) How to Train Your Dragon (2010) The Iron Giant (1999) Who Framed Roger Rabbit (1988) Chicken Run (2000) Spirited Away (2001) Monsters, Inc. (2001) Waltz with Bashir (2008) Persepolis (2007) Wallace & Gromit: The Curse of the Were-Rabbit (2005) Yellow Submarine (1968) The Nightmare Before Christmas (1993) Antz (1998) Ernest & Célestine (2014) Bambi (1942) Fantastic Mr. Fox (2009) Aladdin (1992) How to Train Your Dragon 2 (2014) The Secret World of Arrietty (2012) The Triplets of Belleville (2003) The Little Mermaid (1989) Princess Mononoke (Mononoke-hime) (1999) Coraline (2009) James and the Giant Peach (1996) Ponyo (2009) A Bug's Life (1998) The Simpsons Movie (2007) Mary and Max (2009) Beauty and the Beast (2012) Frozen (2013) The Wind Rises (2014) Shrek 2 (2004) Arthur Christmas (2011) Bolt (2008) Rango (2011) Tangled (2010) Shrek (2001) Frankenweenie (2012) Winnie the Pooh (2011) Kung Fu Panda (2008) Millennium Actress (Sennen joyû) (2001) The Illusionist (L'illusionniste) (2010) The Lion King (2011) The Secret of Kells (2010) ParaNorman (2012) Tarzan (1999) My Dog Tulip (2010) Howl's Moving Castle (2005) Wreck-it Ralph (2012) Cloudy With a Chance of Meatballs (2009) The Pirates! Band of Misfits (2012) Tokyo Godfathers (2003) Mulan (1998) Lilo & Stitch (2002) The Emperor's New Groove (2000) Tim Burton's Corpse Bride (2005) Anastasia (1997) The Princess and the Frog (2009) Metropolis (Metoroporisu) (2002) Puss in Boots (2011) Akira (2001) Chico & Rita (2012) Despicable Me (2010) Hercules (1997) Brave (2012) Kung Fu Panda 2 (2011) From Up On Poppy Hill (2013) Paprika (2006) South Park: Bigger, Longer and Uncut (1999) Monsters University (2013) Fantasia 2000 (2000) Waking Life (2001) The Prince of Egypt (1998) Mr. Peabody & Sherman (2014) A Cat in Paris (2012) Chicago 10 (2008) Dr. Seuss' Horton Hears a Who! (2008) Panique au village (A Town Called Panic) (2009) Madagascar 3: Europe's Most Wanted (2012) Charlotte's Web (2006) Surf's Up (2007) The Wild Thornberrys Movie (2002) Ice Age (2002) Pooh's Heffalump Movie (2005) The Adventures of Tintin (2011) Cars (2006) Over the Hedge (2006) Happy Feet (2006) Despicable Me 2 (2013)";
var comedyLongString = "Title All About Eve (1950) A Hard Day's Night (1964) Modern Times (1936) Singin' in the Rain (1952) Toy Story 2 (1999) It Happened One Night (1934) Dr. Strangelove Or How I Learned to Stop Worrying and Love the Bomb (1964) Toy Story 3 (2010) The Philadelphia Story (1940) Up (2009) Finding Nemo (2003) The Rules of the Game (1950) Toy Story (1995) Roman Holiday (1953) Cool Hand Luke (1967) The Gold Rush (1925) Annie Hall (1977) Monty Python and the Holy Grail (1975) The Artist (2011) Mary Poppins (1964) It's a Wonderful Life (1946) City Lights (1931) Before Midnight (2013) The Discreet Charm Of The Bourgeoisie (Le Charme Discret de la Bourgeoisie) (1972) Airplane! (1980) His Girl Friday (1940) The Incredibles (2004) Ratatouille (2007) La Dolce Vita (1960) The LEGO Movie (2014) Manhattan (1979) Bringing Up Baby (1938) Who Framed Roger Rabbit (1988) Chicken Run (2000) Big (1988) 8 1/2 (1963) Before Sunrise (1995) Some Like It Hot (1959) The Princess Bride (1987) Sideways (2004) One Flew Over the Cuckoo's Nest (1975) Monsters, Inc. (2001) Ghostbusters (1984) Lolita (1962) Bull Durham (1988) Amadeus (1984) Moonrise Kingdom (2012) The Muppets (2011) Back to the Future (1985) Enough Said (2013) Groundhog Day (1993) Repo Man (1984) Brazil (1985) The Grand Budapest Hotel (2014) The Player (1992) The Taste of Others (2000) Monty Python's Life of Brian (1979) Sense and Sensibility (1995) All About My Mother (1999) Mafioso (1964) The Band's Visit (Bikur Ha-Tizmoret) (2007) The Truman Show (1998) Lost In Translation (2003) Broadcast News (1987) Say Anything... (1989) Le Havre (2011) Moneyball (2011) We Are the Best! (2014) Wallace & Gromit: The Curse of the Were-Rabbit (2005) The Apartment (1960) Monsieur Lazhar (2012) Juno (2007) Yellow Submarine (1968) The Sessions (2012) Do the Right Thing (1989) Risky Business (1983) This Is Spinal Tap (1984) The Man Without a Past (2002) Being There (1979) Young Frankenstein (1974) Silver Linings Playbook (2012) Antz (1998) Superman (1978) Three Kings (1999) Bullets Over Broadway (1994) Elaine Stritch: Shoot Me (2014) American Graffiti (1973) Before Sunset (2004) Eternal Sunshine Of The Spotless Mind (2004) Ten Canoes (2007) Up in the Air (2009) Four Weddings and a Funeral (1994) My Fair Lady (1964) Shakespeare in Love (1998) The Station Agent (2003) Big Night (1996) American Splendor (2003) In the Loop (2009) Fantastic Mr. Fox (2009) Supercop (1992)";
var best2010LongString = "Title Toy Story 3 (2010) The Social Network (2010) True Grit (2010) How to Train Your Dragon (2010) Inside Job (2010) Waste Land (2010) Animal Kingdom (2010) A Prophet (Un prophete) (2010) Last Train Home (2010) The King's Speech (2010) The Town (2010) Marwencol (2010) 127 Hours (2010) The Kids Are All Right (2010) Restrepo (2010) Exit Through The Gift Shop (2010) Winter's Bone (2010) Ajami (2010) A Film Unfinished (2010) Mother (Madeo) (2010) The Fighter (2010) Another Year (2010) Best Worst Movie (2010) No One Knows About Persian Cats (Les Chats Persans) (2010) Carlos (2010) Black Swan (2010) The Tillman Story (2010) Samson and Delilah (2010) The Secret in Their Eyes (El Secreto de Sus Ojos) (2010) Inception (2010) Tangled (2010) Vincere (2010) Let Me In (2010) Fish Tank (2010) Boxing Gym (2010) Lourdes (2010) Joan Rivers: A Piece Of Work (2010) Dogtooth (Kynodontas) (2010) The Illusionist (L'illusionniste) (2010) The Secret of Kells (2010) Lebanon (Levanon) (2010) Client 9: The Rise and Fall of Eliot Spitzer (2010) Blue Valentine (2010) My Dog Tulip (2010) The Father of My Children (Le pere de mes enfants) (2010) Waiting for Superman (2010) Alamar (To the Sea) (2010) Rabbit Hole (2010) Winnebago Man (2010) Unstoppable (2010) Buried (2010) Rare Exports: A Christmas Tale (2010) Cropsey (2010) Easy A (2010) White Material (2010) Terribly Happy (Frygtelig lykkelig) (2010) Please Give (2010) Scott Pilgrim vs. the World (2010) The Ghost Writer (2010) The Square (2010) Get Low (2010) Looking for Eric (2010) Red Riding Trilogy (2010) Farewell (L'affaire Farewell) (2010) Despicable Me (2010) The Art Of The Steal (2010) Kisses (2010) Harry Potter and the Deathly Hallows - Part 1 (2010) The Good, the Bad, and the Weird (2010) Four Lions (2010) North Face (Nordwand) (2010) Catfish (2010) The Other Guys (2010) Casino Jack And The United States Of Money (2010) The Disappearance of Alice Creed (2010) Cyrus (2010) Mesrine: Public Enemy #1 (2010) Mademoiselle Chambon (2010) Fair Game (2010) Mesrine: Killer Instinct (L'instinct de mort) (2010) City Island (2010) Solitary Man (2010) Made in Dagenham (2010) I Am Love (2010) Kick-Ass (2010) Countdown to Zero (2010) Night Catches Us (2010) Cairo Time (2010) Oceans (Disneynature's Oceans) (2010) Nowhere Boy (2010) Mother and Child (2010) Tiny Furniture (2010) The Girl on the Train (La Fille du RER) (2010) How I Ended This Summer (2010) Greenberg (2010) Red Hill (2010) Nanny McPhee Returns (2010) OSS 117: Rio ne répond plus (Lost in Rio) (2010) Let it Rain (Parlez-moi de la pluie) (2010) Outside the Law (Hors-la-loi) (2010)";


var longStringWithYearsToDB = function (longString) {
    var dirtyArr = longString.split(')');
    var arr = [];
    for (var i = 0; i < dirtyArr.length; i++) {
        var s = dirtyArr[i].substring(0, dirtyArr[i].indexOf('('));
        arr.push(s);
    }
    console.log(arr);


    count = 0;
    var interval = setInterval(function () {
        $.ajax({
            url: moviesSearchUrl + '&q=' + encodeURI(arr[count]),
            dataType: "jsonp",
            success: function (data) {
                console.log(JSON.stringify(data.movies[0]));
                $.ajax({
                    type: 'POST',
                    url: '/movies',
                    dataType: "jsonp",
                    data: data.movies[0],
                    success: function () {
                        console.log('posted!')
                    },
                    error: function (err) {
                        console.log('failure');
                    }
                })
            }
        });
        count++;
        if (count === arr.length) clearInterval(interval);
        console.log(count);
    }, 1000)
};
//longStringWithYearsToDB(best2010LongString);


var all = [popular, action, animated, comedy, romance];
var popJSON = [];
var actJSON = [];
var aniJSON = [];
var comJSON = [];
var romJSON = [];
var allJSON = [popJSON, actJSON, aniJSON, comJSON, romJSON];

$(document).ready(function() {
    // send off the query
    current = popular[0];
    $.ajax({
    url: moviesSearchUrl + '&q=' + encodeURI(current),
    dataType: "jsonp",
    success: searchCallback
    });
});
// callback for when we get back the results
function searchCallback(data) {
    var movies = data.movies;
    var movie = $(movies).first()[0];
    popJSON.push(movie);
//    $("div.movie-title").text(popJSON[0].title);
//    $("img.poster-image").attr("src", popJSON[0].posters.detailed.toString().substring(0, popJSON[0].posters.detailed.toString().length - 7) + "ori.jpg");
//    $("div.movie-rating2").text("%" + popJSON[0].ratings.critics_score);
}


//all.forEach(function(genre) {
//    genre.forEach(function (title) {
//        // send off the query
//        $.ajax({
//            url: moviesSearchUrl + '&q=' + encodeURI(title),
//            dataType: "jsonp",
//            success: function (data) {
//                console.log(JSON.stringify(data.movies[0]));
//                if (console.log(data.movies.length));
//                $.ajax({
//                    type: 'POST',
//                    url: '/movies',
//                    dataType: "jsonp",
//                    data: data.movies[0],
//                    success: function () {
//                        console.log('posted!')
//                    },
//                    error: function (err) {
//                        console.log('failure');
//                    }
//                })
//            }
//        });
//    });
//});

//
//count = 0;
//var interval = setInterval(function () {
//    $.ajax({
//        url: moviesSearchUrl + '&q=' + encodeURI(best2011[count]),
//        dataType: "jsonp",
//        success: function (data) {
//            console.log(JSON.stringify(data.movies[0]));
//            $.ajax({
//                type: 'POST',
//                url: '/movies',
//                dataType: "jsonp",
//                data: data.movies[0],
//                success: function () {
//                    console.log('posted!')
//                },
//                error: function (err) {
//                    console.log('failure');
//                }
//            })
//        }
//    });
//    count++;
//    if (count === best2011.length) clearInterval(interval);
//    console.log(count);
//}, 1000)