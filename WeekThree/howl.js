var moonlight = [
    {"acts" :["cursed beast", "shapeshifting", "Rage"], 
    werewolf: true}, 
    {"acts" :["sunshine", "stake", "holywater"], 
    werewolf : false}, 
    {"acts" :["scent","sight","fur", "temperature"], 
    werewolf: true}, 
];

//let moonlight = [];

    function addEntry(acts, werewolf) {
        moonlight.push({acts, werewolf});
    }

function hasEvent(event,entry) {
    return entry.acts.indexOf(event) != -1;
}
function tableFor(event, moonlight) {
    var table = [0,0,0,0];

    for (var i = 0; i < moonlight.length; i++) {
        let entry = moonlight[i], index = 0;
        
        if (hasEvent(event, entry)) index += 1;
            /*object of array --> */ 
            console.log(entry);

        if (entry.werewolf) index += 2; //if werewolf is true, increase index value by 2
        table[index] += 1;
        console.log(index);

 
    }
    return table;
}

console.log(tableFor("cursed beast", moonlight));