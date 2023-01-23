function newForest() {
    console.clear();
}

//You are
var youAre = ['crouched down by a creek', 'midway up a small mountain', 'sitting on a stump in the shade from a patch of trees', 'walking through a forest', 'wading into a pond in the woods', 'standing at the edge of a small body of water, deep in a forest', 'stood between two fallen tree trunks', 'lying down under a big willow tree', 'standing in a field', 'walking through a swamp', 'walking through a tunnel of trees, deep in the forest', 'standing at the top of a hill in a dense forest', 'perched on top of a rock, overlooking a small forested valley', 'following a dirt trail in the woods', 'entering a grassy clearing in the middle of an otherwise dense forest', 'approaching a rock face about twice your height, covered in moss and plants', 'hopping from rock to rock to cross a rushing stream', 'climbing a small tree and admiring the view over the forest', 'under a tree, looking up and admiring the network of branches', 'sat back on a grassy hill', 'observing a large knot in a maple tree', 'running your fingers over the grooves in the bark of an old oak tree', 'leaning up against a beautiful old white pine tree', 'observing the way the bark is peeling off of a birch tree', 'wandering across a strip of land between the forest and a river', 'sitting on a mossy rock outcrop in the forest overlooking a swamp', 'tracing your finger along the beetle trails on a fallen tree trunk', 'watching the shadows of tree branches in the wind dance on the forest floor', 'staring up at the canopy of trees above you', 'admiring the outgrown roots of a grand old tree that cover the forest floor', ];

function areFunc() {
    var randomYouAre = youAre[Math.floor(Math.random() * youAre.length)];
    console.log(randomYouAre);
    console.log(youAre.length);

    document.getElementById("youAre").textContent = randomYouAre;
}

// You at
var youAt = ['in the dead of night', 'at dusk', 'during the sunrise', 'at sunset', 'in the afternoon', 'in the morning', 'in the evening', 'in the late afternoon', 'just after midnight', 'mid-day', 'in the nighttime', 'as the sun begins to peek over the trees', 'as the sun kisses the horizon and the sky explodes with colour', 'with the moon laying low in the sky', 'right before breakfast', 'at the break of dawn', 'some time between after noon but before dark', 'as the stars begin to come out', 'in the middle of the day', 'with the sun high in the sky', 'as the nighttime begins to sap the colour from the sky', 'in the early hours of the morning', 'at midnight', 'as the day dawns', 'as the afterglow of the sunset fades from the horizon', 'in the early afternoon', 'late in the morning', 'with the moon directly overhead', 'as daylight begins to filter through the trees', 'just as the sun begins to sink in the sky', ];

function atFunc() {
    var randomYouAt = youAt[Math.floor(Math.random() * youAt.length)];
    console.log(randomYouAt);
    console.log(youAt.length);

    document.getElementById("youAt").textContent = randomYouAt;
}

// You feel
var youFeel = ['a cool breeze on your neck', 'a warm breeze on your neck', 'the chill of winter in your bones', 'the first few drops of rain on your shoulders', 'heavy raindrops on your head', 'dirt between your toes', 'sweat building up upon your brow', 'warm all over', 'a ladybug landing on your forearm', 'the velvety moss on a small rock your are holding', 'the tall grass tickle your calves', 'a fallen pinecone beneath your left foot', 'the weight of the dense fog surround your body', 'the scorching heat against your skin', 'the forest’s floor beneath your feet', 'the cold air send a tingle up your spine', 'the humid air weighing heavy in your lungs', 'a gust of frigid wind envelop your entire body', 'a warm breeze that relaxes your muscles', 'the small talons of a chickadee grip the index finger of your outstretched hand', 'a rock in your shoe', 'a gentle spray of water on your face from the misty rain', 'goosebumps on your arms as you are caught in a cool gust of wind from the east', 'a small puff of air from the wings of a butterfly as it flutters by your head', 'enveloped the stillness of the forest', 'a cold wind batter your face', 'a cool patch of mud beneath your feet', 'the thin petals of a flower your are holding on to', 'a drop of rain roll down your arm', 'your fingers tingle as they are numbed by the cold', ];

function feelFunc() {
    var randomYouFeel = youFeel[Math.floor(Math.random() * youFeel.length)];
    console.log(randomYouFeel);
    console.log(youFeel.length);

    document.getElementById("youFeel").textContent = randomYouFeel;
}

// You hear
var youHear = ['the pitter-patter of rain', 'nothing in particular', 'the wind rustling the leaves', 'the whistling of the wind in the trees', 'dead trees creaking in the wind', 'crickets chirping', 'the gentle sound of water lapping up against a large rock', 'the howl of a coyote, echoing from far away', 'the murmur of a small stream', 'a cardinal singing', 'the hoot of an owl', 'the birds chirping', 'the caw of a crow flying by overhead', 'sticks snapping in the distance as a deer passes by', 'water drops falling from a nearby tree\'s branches onto the forest floor', 'a frog croak', 'a woodpecker drumming a tree', 'the sound of two squirrels chasing each other around a tree', 'the distant squeal of a rabbit being caught by a fox', 'the ambience of the forest', 'a bee buzzing', 'a chorus of birds singing together', 'the sound of fish jumping in the water', 'the hum of bugs around you', 'a squirrel scurrying up a tree', 'the rustling of animals in the brush', 'the distant sound of thunder rumbling across the sky', 'the flapping of a bird\'s wings from above', 'a strong wind whip up natural debris from the forest floor', 'the forest alive with the sound of animals and insects', ];

function hearFunc() {
    var randomYouHear = youHear[Math.floor(Math.random() * youHear.length)];
    console.log(randomYouHear);
    console.log(youHear.length);

    document.getElementById("youHear").textContent = randomYouHear;
}
