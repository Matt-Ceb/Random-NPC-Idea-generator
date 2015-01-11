
$(function() {

    // Populate using an object literal

    // This is what is done directly below all of this comment text.
	// You have a basic, yet still gender-diverse and grammatically-
	// correct example below. 
	// This example shows you how you can write your strings
	// to get different results for female and male characters.
	// Using the logic behind this, will allow you to set up strings
	// for things like different traits and names for specific races, 
	// for example.
	// Expect to do quite a bit of cross-checking, then, though.
	//
	// Important: All line but the last in each category NEEDS
	// to end in a comma. If it doesn't, the script will NOT Load!
	// So, if the file won't load, comb through your script for lines
	// without commas and/or missed quoatation marks.
	//
	// Everything else is basically... Populating datastrings.
	//
	// Have fun!
	// -Matt.Ceb (12th of January 2015)

    // Populate using a JSON file
    // WTF.init( 'sample.json' );
	// The json file should look like the content below, with NOTHING
	// ELSE in it. Simply give the path to the file inside the parantheses
	// after the WTF.init

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
	
    WTF.init({
	
    heading: [
        "Line 1",
        "Line 2",
		"Line 3"
    ],
    response: [
        "Response 1. (click here for a new idea)",
        "Response 2. (click here for a new idea)"
    ],
    template: [
        "@Fname, she's a @trait1 @race @role from @geo who @quirk1.",
		"@Fname, she's an @trait2 @race @role from @geo who @quirk1.",
		"@Mname, he's a @trait1 @race@role from @geo who @quirk2.",
		"@Mname, he's an @trait2 @race @role from @geo who @quirk2." 
    ],
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
});

});