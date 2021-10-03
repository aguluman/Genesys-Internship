function Streams() {
    this.folder = [];
  
    this.addMovie = function (movieName, yearOfRelease, genres, form, ageClass){
      let pictures = {
        movieName,
        yearOfRelease,
        genres,
        form,
        ageClass
      }
  
      this.folder.push(pictures)
      console.log("")
      console.log(`${movieName}, ${yearOfRelease}, (${genres}) was successfully added to your list. We have ${this.folder.length} ${this.folder.length > 1? "movies" : "movie"}`)
    }
  
    this.listMovie = function () {
      return this.folder
    }
  
    this.rentMovie = function (pictureAttr) {
      let rent = this.folder.find((pictures) => Object.values(pictures). includes(pictureAttr))
      if (rent){
        let rentIndex = 0;
        this.folder.forEach((pictures, index) => {
          if (Object.values(pictures).includes(pictureAttr)) rentIndex = index;
        })
  
        this.folder.splice(rentIndex, 1)
        console.log("")
        console.log (`${rent.movieName} is yours till another interest you. We have ${this.folder.length} ${this.folder.length > 1? "movies" : "movie"} left`)
        return rent;
      }
      else {
        console.log("")
        console.log(`Sorry, The Film "${pictureAttr}" is currently unavailable.`)
      }
    }
  }
  
  let streamOne = new Streams();
  
  streamOne.addMovie("The Mind, Explained.", 2019, "Science & Nature, Social & Cultural Documentaries.", "Series.", 16); 
  streamOne.addMovie("Formula 1: Drive to survive.", "2018-2021", "Science & Technology, Action, Racing.", "Series", 16);
  streamOne.addMovie("How to sell drugs online (fast)", 2021, "Based on a true story, Comedy, German", "Series", 16);
  streamOne.addMovie("The Big Bang Theory", "2006-2018", "Sitcom, Comedy", "Series", 13);
  streamOne.addMovie("Not a Game", 2020, "Investigative, Spanish, Documentary", "Film", 16);
  streamOne.addMovie("Sex, Explained", 2020, "Science & Nature, Social & Cultural Documentaries", "Series", 16);
  streamOne.addMovie("Dirty Money", "2019-2020", "Investigative, Documentary, True story", "Series", 16);
  streamOne.addMovie("Crack: Cocaine, Corruption & Conspiracy", 2021, "Investigative, Documentary, True Story", "Series", 16);
  streamOne.addMovie("Humans: The World Within", 2021, "Science & Nature", "Series", 16);
  streamOne.addMovie("Oats Studios", 2020, "Science & Technology", "Series", 16);
  streamOne.addMovie("Drug Lords", "2018-2019", "Investigative, Documentary, True story", "Series", 16);
  streamOne.addMovie("Explained", "2019-2021", "Investigative, Documentary", "Series", 13);
  streamOne.addMovie("The Social Dilemma", 2020, "Documentary, Investigative", "Film", 16);
  streamOne.addMovie("Hollywood", 2020, "Drama, Social Issues", "Series", 16);
  streamOne.addMovie("How to become a Tyrant", 2021, "Political Documentaries & Military Documentaries", "Series", 16);
  
  let Catalog = streamOne.listMovie();
  console.log(Catalog);
  
  streamOne.rentMovie("How to become a Tyrant")
  streamOne.rentMovie("How to become a Tyrant", 2021, "Political Documentaries & Military Documentaries", "Series", 16);
  
  streamOne.addMovie("Squid Game", 2021, "Action, Thriller, Fiction.", "Series", 16)
  
  console.log("");
  console.log(Catalog);