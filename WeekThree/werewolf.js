var moonlight = [
    {"acts" :["cursed beast", "shapeshifting", "Rage"], 
    werewolf: true}, 
    {"acts" :["sunshine", "stake", "holywater"], 
    werewolf : false}, 
    {"acts" :["scent","sight","fur", "temperature"], 
    werewolf: true}, 
];

function addEntry(acts, werewolf) {
    moonlight.push({acts, werewolf});
}

    let acts = [];
        for (let entry of moonlight) {
            for(let event of entry.acts) {
                if(!acts.includes(event)) {
                    acts.push(event);``
                }
            }
        }
        return acts;
    
        console.log('${entry.acts.length}acts.');