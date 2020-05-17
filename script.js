
       // Page Elements
       // const COPYBUTTON = document.querySelector("#b2");
        const QUOTEBOX = document.querySelector(".quotes");
        const BUTTON = document.querySelector("#b1");
        const ANIMELISTDROPDOWN = document.querySelector(".dropdown");
        const RADIOBUTTONS = document.querySelectorAll('input[type=radio]:checked');


        /************************* Stored quotes ************************/

        var jojo = [" One last all-or-nothing gambit!...  Yeah! It's my final move!... Listen up! This is something you're going to have to do for yourself! ... Hmmmmhmmmmhmmmhmmm.... RUN FOR YOUR LIIIIIIIVES! ~Joseph Joestar performing the Joestar family secret technique. ", 
        " Right about now, you’re probably wondering who I am. Allow me to elucidate ya! The name is Robert E. O. Speedwagon! I had a hunch Jonathan’s run of trouble might not be done, so I followed him back home. I like you, Jonathan, so I’m gonna offer up this little tidbit pro bono: living in the gutter, you learn to spot lowlifes pretty quick if you want to see tomorrow. I’ve trained my nose to sort out the bad ones from the good just from a sniff. This fellow reeks of brimstone and blood worse than anyone I’ve ever laid eyes on!” – Speedwagon",
        " Suppose that you were sitting down at this table. The napkins are in front of you, which napkin would you take? The one on your ‘left’? Or the one on your ‘right’? The one on your left side? Or the one on your right side? Usually you would take the one on your left side. That is ‘correct’ too. But in a larger sense on society, that is wrong. Perhaps I could even substitute ‘society’ with the ‘Universe’. The correct answer is that ‘It is determined by the one who takes his or her own napkin first.’ …Yes? If the first one takes the napkin to their right, then there’s no choice but for others to also take the ‘right’ napkin. The same goes for the left. Everyone else will take the napkin to their left, because they have no other option. This is ‘society’… Who are the ones that determine the price of land first? There must have been someone who determined the value of money, first. The size of the rails on a train track? The magnitude of electricity? Laws and Regulations? Who was the first to determine these things? Did we all do it, because this is a Republic? Or was it Arbitrary? NO! The one who took the napkin first determined all of these things! The rules of this world are determined by that same principle of ‘right or left?’! In a Society like this table, a state of equilibrium, once one makes the first move, everyone must follow! In every era, this World has been operating by this napkin principle. And the one who ‘takes the napkin first’ must be someone who is respected by all. It’s not that anyone can fulfill this role… Those that are despotic or unworthy will be scorned. And those are the ‘losers’. In the case of this table, the ‘eldest’ or the ‘Master of the party’ will take the napkin first… Because everyone ‘respects’ those individuals. ~ Funny Valentine, 23rd President of the United States."];

        var pokemon = [" There are bad ways to win-- and good ways to lose. What's interesting and troubling is that it's not always clear which is which. A flipped coin doesn't always land heads or tails. Sometimes it may never land at all... ",
                        "I see now that one’s birth is irrelevant. It’s what you do that determines who you are.” – Mewtwo",
                        "We do have a lot in common. The same earth, the same air, the same sky. Maybe if we started looking at what’s the same, instead of looking at what’s different, well, who knows? – Meowth"];

        var psychoPass = [" “In order to measure a person’s worth, you must do more than push them. The real way to test their worth is to give them power. When they gain the freedom to act outside the boundaries of law and ethics, you can sometimes see their souls.” – Shogo Makishima",
         "“When you entrust so much of your everyday life to those electronic devices, the argument that you arent a cyborg isn’t very convincing.” – Toyohisa Senguji",
         " “When a man faces fear, his soul is tested. What he was born to seek… what he was born to achieve… his true nature will become clear.” – Shogo Makishima"];

        var durarara = [" “You know how they have parameters in games? Like, you’re good at magic, but your combat skills blow, or you’re a great fighter, but you lack in the brains department.” – Izaya Orihara", 
        "Reality is such a pain. And for those of us who get fed up with that kind of reality, we simply choose to make a new one. We create little walls, and separate the trash from the stuff we like, and when that’s all done we keep the things we care about and kick the rest to the curb. You’d be amazed how well it works! A whole world made out of just moe, tsundere, and BL, it’s the best discovery ever! If you ask me, that really is the best way to separate reality, from fiction.” – Erika Karisawa ",
        "“I love clichés, I love predictable scripts, I love it when they paste over problems and I love it when they force a happy ending too. What’s wrong with working towards that?” – Ryuugamine Mikado"];

        var rand = [ "Waiting... Please retry", 
        "rand2", 
        "Imagine reading a post, but over the course of it the quality seems to deteriorate and it gets wose an wose, where the swenetence stwucture and gwammer rewerts to a pwoint of uttew non swence, an u jus dont wanna wead it anymwore (o´ω｀o) awd twa wol owdewl iws jus awfwul (´･ω･`);. bwt tw powost iwswnwt obwer nyet, it gwos own an own an own an own. uwu wanyaa stwop weadwing bwut uwu cwant stop wewding, uwu stwartd thwis awnd ur gwoing two fwinibsh it nowo mwattew wat! uwu hab mwoxie kwiddowo, bwut uwu wibl gwib ub sowon. i cwan wite wike dis fwor owors, swo dwont cwalengbe mii..… wbats dis??? uwu awe stwill weedinb mwie powost?? uwu habe awot ob detewemwinyanyatiom!! ｡◕‿◕｡! u habve comopweedid tha pwost, good job! "];
         
        var quoteSet = [durarara, pokemon, psychoPass, jojo];

        // Class to hold quotes fetched from the API

        function RandomQuote(quote, character, anime){

            this.quote = quote;
            this.character = character;
            this.anime = anime;
        }

        /************************* Stored quotes end ************************/



        var getRandomQuote = new RandomQuote();

        // Error function

        function errorFunction(){

             QUOTEBOX.innerHTML = "Something's missing User Swaaaaan ミ￣ー￣ミ）（ミ￣ー￣ミ） ┐(‘～`；)┌  o(╥﹏╥)o இ_இ*";

        }

        // API call for a random quote from https://anime-chan.herokuapp.com/api/quotes/random using https://cors-anywhere.herokuapp.com
        // to bypass the CORS error.

        function callAniApi(){
            fetch('https://cors-anywhere.herokuapp.com/https://anime-chan.herokuapp.com/api/quotes/random')
            .then(response => response.json())
            .then(data => {
                console.log(data) // Prints result from `response.json()` in getRequest
                rand[0] = (data[0].quote);
                getRandomQuote.quote = [data[0].quote];
                getRandomQuote.character = [data[0].character];
                getRandomQuote.anime = [data[0].anime];
                })
                .catch(error => console.error(error))
        }

        // Function to place quote into the page

        function generateQuote(){

            var quoteNum;

            var radios = document.querySelectorAll('input[type=radio]:checked');
            var radioValue = radios.length > 0 ? radios[0].value : null;

            console.log(radioValue);
            console.log(ANIMELISTDROPDOWN.name + "This is the name");

            if(radioValue === null || ANIMELISTDROPDOWN.name == "missing" || ANIMELISTDROPDOWN.value == "-1") 
            {
                errorFunction();

                return;
            }

            quoteNum = ANIMELISTDROPDOWN.value;

            if(ANIMELISTDROPDOWN.value != "4")
            {
                QUOTEBOX.innerHTML = (quoteSet[quoteNum])[radioValue -(1)];
            }

            if(ANIMELISTDROPDOWN.value == "4")
            {
                if(radioValue === "1")
                {
                    QUOTEBOX.innerHTML = (rand[0] + "  ~ " + getRandomQuote.character + "  -:" + getRandomQuote.anime);
                    console.log( getRandomQuote.quote + "  ~ " + getRandomQuote.character + "-:" + getRandomQuote.anime);
                }
                else if(radioValue === "2")
                {
                    QUOTEBOX.innerHTML = (rand[0] + "  ~ " + getRandomQuote.character + "  -:" + getRandomQuote.anime) +  "<p>" + rand[1] + "</p>";
                }
                else{
                    QUOTEBOX.innerHTML = rand[2];
                }
            }  
        }

        BUTTON.addEventListener("click", generateQuote, false);

        callAniApi();

        // console.log( getRandomQuote.quote + "~" + getRandomQuote.character + "-"+getRandomQuote.anime);
        // console.log(rand[0]);
      