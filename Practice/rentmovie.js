let catalog = [
    {movieName: ["The Mind, Explained.", "Formula 1: Drive to survive.", "How to sell drugs online (fast)", "The Big Bang Theory", "Not a Game", "Sex, Explained","Dirty Money", "Crack: Cocaine, Corruption & Conspiracy", "Humans: The World Within", "Oats Studios", "Drug Lords", "Explained", "The Social Dilemma", "Hollywood", "How to become a Tyrant"]},
    {yearOfRelease: ["2019", "2018-2021","2021","2006-2018", "2020", "2020", "2019-2020", "2021","2021","2020", "2018-2019", "2019-2021", "2020", "2020", "2021"]},
    {genres: ["Science & Nature", "Social & Cultural Documentaries.","Science & Technology", "Action", "Racing.","Based on a True story", "Comedy", "German" , "Sitcom","Investigative, Spanish, Documentary", "Political Documentaries & Military Documentaries"  ]},
    {form: ["Series", "Film"]},
    {ageClass: ["13+", "16+"]},
]

function addEntry(movieName, yearOfRelease, genres, form, ageClass) {
    catalog.push({movieName, yearOfRelease, genres, form, ageClass});
}

const input = window.prompt(`what show do you want to add calaog.push({""})`)
console.log(input);
