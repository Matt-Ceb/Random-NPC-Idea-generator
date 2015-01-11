# Random-NPC-Idea-generator
Quick and quirky, random NPC Idea generator template based on the WTFEngine.

Hello dear reader.

This is a variant/mod of the WTFEngine by Soulfire, which can be found 
here: https://github.com/soulwire/WTFEngine

I came across it because of the WTF is my DnD Character
(http://whothefuckismydndcharacter.com/)

And then decided to create my own version, for slightly more serious 
Shadowrun NPC ideas. (http://www.enklave-23.de/WTF)

So, this is it, basically.

To be able to use this, you will need the following things:
1. You have to be able to wrap your head around strings. (Showcased laster.)
2. You need to have a webserver to upload this to.
3. You need a good, reliable notepad. I prefer notepad++.
4. You need the patiance to enter all the damn data. ;)

BONUS: If you want to change the colours and fonts, you need to be able to 
understand and use basic CSS. (Look for the main.css file in the styles folder.)

What I did, is very, very simple: I took away the all-caps way in which the original WTFEngine screamed at the reader. I inverted the colorscheme because I don't
like bright websites. And I slightly changed the font, fontsize and screen-spacing of it all. 

After that, I just input my data into it all.

So, you want to get started?
Go look into the main.js file to get a feel for how this all looks.

I will now copy the main body of it, and show you how to change things to make it your own.
Do read the the commentary in the file, though! (Everything behind the //'s)


First, we start with the heading. This will be the text showm above your NPC/PC idea:

heading: [
        "Line 1",
        "Line 2",
		"Line 3"
    ],
	
This means, that there's a random chance that it will display either of these three lines.

After this, the response string:
	
    response: [
        "Response 1. (click here for a new idea)",
        "Response 2. (click here for a new idea)"
    ],
	
This is the small print below your idea, and which users can use to reload the page and get a new idea. Again, each line here gives the script the chance to chose either one. You can have multiple here, and they do add to your chosen flavour.
	
	
	
The meat of it all, the main text template:	
	
    template: [
        "@Fname, she's a @trait1 @race @role from @geo who @quirk1.",
		"@Fname, she's an @trait2 @race @role from @geo who @quirk1.",
		"@Mname, he's a @trait1 @race@role from @geo who @quirk2.",
		"@Mname, he's an @trait2 @race @role from @geo who @quirk2." 
    ],
	
Those are my basic examples. They program has a random chance to pick either of them, and the four lines are, from topt to bottom:

1. Female with a trait that begins with a consonant.
2. Female with a trait that begins with a vowel.
3. Male with a trait that begins with a consonant.
4. Male with a trait that begins with a vowel.	

As you can see, This alone uses five collections of data: Female Names, Male Names, Consonant traits, Vowel traits as well as quirks whose grammer is gender-appropiate. (No "He's wily" for a female character, for example.)

You will find my example strings below this all. Something that could come out of this, could be one of those two:

"Emily, she's a poor Elf from the Empire who carries a large coin which she is always rolling over her knuckles."

"Jack, he's an oblivious Human from the Free Cities who has a weird fixation with dragons."

You will note that the lines for the individual quirks have no sentence stops behind them. That's because the "."'s are already included in the template strings. You could, if you wanted to, leave them out there and give each quirk a different sentence stop, allowing for slightly more complex options.


But, well... That's basically it!
You need to do nothing but to get comfortable with this kind of data entry, create the templates you want to use and then get on with populating those strings and tags with data.

As you get more comfortable with it, you will be able to use different and more complex templates.

Oh, I almost forget: You can also change the favicon if you want to.
Right now it's a MSPaint created, pipped d6 showing its "5" side. You can use this if you want to, but you can also easily create your own 50x50 png image and make an ico file out of it. Name it "favicon.ico" and put it into the images folder, overwriting the old one, and it will be the new favicon.

So, have fun! :)
Matt Cebulla, 12.01.2015


	
    Fname: [
        "Emily",
		"Rose",
		"Lena",
		"Jane"
	],
	Mname: [
		"Ross",
		"Jack",
		"Berthold",
		"William"
	],
    trait1: [
        "rich",
		"poor",
		"strong",
		"weak",
		"quick",
		"slow"
    ],
	trait2: [
		"arrogant",
		"eloquent",
		"irresponsible",
		"oblivious",
		"upright"
	],
	race:[
		"Human",
		"Elf",
		"Dwarf"
	],
	geo: [
		"the Empire",
		"the Kingdom",
		"the Republic",
		"the Marches",
		"the Free Cities"
	],	
	quirk1: [
		"carries a large coin which she is always rolling over her knuckles",
		"can uncannily tell if someone is telling a lie or the truth",
		"corrects people when they use colloquial speech when she's nervous",
		"has a weird fixation with dragons",
		"distrusts men",
		"distrusts other women"
	],
	quirk2: [
		"carries a large coin which he is always rolling over her knuckles",
		"can uncannily tell if someone is telling a lie or the truth",
		"corrects people when they use colloquial speech when he's nervous",
		"has a weird fixation with dragons",
		"distrusts other men",
		"distrusts women"
	]
	
	
	
	
	
	
	This work, the "Random NPC Ideas" generator by Matt Cebulla, is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/4.0/.
	
	<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" property="dct:title" rel="dct:type">Random NPC Ideas</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Matt Cebulla</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/soulwire/WTFEngine" rel="dct:source">https://github.com/soulwire/WTFEngine</a>.
