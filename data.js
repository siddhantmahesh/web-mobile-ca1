
//SLIDES DOWN TO SEC-2
$("#genre").click(() => {
  $('html, body').animate({
    scrollTop: $("#sec-2").offset().top
  }, 0);
});

//SLIDES DOWN TO SEC-5
$("#contactus").click(() => {
  $('html, body').animate({
    scrollTop: $("#sec-5").offset().top
  }, 0);
});

// CHANGES CARD COLOR ON MOUSE HOVER
function onMouseOver() {
  try {
    document.getElementById(event.target.id).style =
      'background-color: #d3d3d3;'
  } catch (error) { }
}

// CHANGES CARD COLOR ON MOUSE HOVER
function onMouseLeave() {
  try {
    document.getElementById(event.target.id).style = 'background-color: white;'
  } catch (error) { }
}

// CONTACT US POP UP
function contactus() {
  var name = document.getElementById("txt_name").value;
  alert("Thnak you " + name + " for contacting us");
}

// SLIDE TO SEC-4
function movieRent() {
  $('html, body').animate({
    scrollTop: $("#sec-4").offset().top
  }, 0);
  document.getElementById('sec-4').style.display = 'block';
  document.getElementById('sec-4').style.display = 'flex';
}

// RENT POPUP
function clickRentMovie(selectedMovie) {
  alert("Thank you for renting " + selectedMovie.title + " movie");
}


// SAMPLE DATA
const data = {
  movies: [
    {
      id: '0',
      title: 'Home Alone',
      desc: 'It is Christmas time and the McCallister family is preparing for a vacation in Paris, France. But the youngest in the family, Kevin (Macaulay Culkin), got into a scuffle with his older brother Buzz (Devin Ratray) and was sent to his room, which is on the third floor of his house. Then, the next morning, while the rest of the family was in a rush to make it to the airport on time, they completely forgot about Kevin, who now has the house all to himself. Being home alone was fun for Kevin, having a pizza all to himself, jumping on his parents bed, and making a mess. Then, Kevin discovers about two burglars, Harry (Joe Pesci) and Marv (Daniel Stern), about to rob his house on Christmas Eve. Kevin acts quickly by wiring his own house with makeshift booby traps to stop the burglars and to bring them to justice.',
      releaseDate: '1990-12-14',
      director: 'Chris Columbus',
      producer: 'Hughes Entertainment',
      rating: '5.5',
      actors: [
        {
          actorName: 'Macaulay Calkin',
          actorImg: './movies/actors/1.jpg'
        },
        {
          actorName: 'Catherine',
          actorImg: './movies/actors/2.jpg'
        }],
      genre: 'comedy',
      coverPic: './movies/coverpic/1.jpg',
      images:
        './movies/images/1.jpg,./movies/images/2.jpg',
      price: '$7.99',
    },
    {
      id: '1',
      title: 'The Addams Family',
      desc: 'The Addamses are a satirical inversion of the ideal 20th-century American family: an odd wealthy aristocratic clan who delight in the macabre and are seemingly unaware or unconcerned that other people find them bizarre or frightening.',
      releaseDate: '1945-10-01',
      director: 'Barry Sonnenfeld',
      producer: 'Paramount Pictures',
      rating: '7.5',
      actors: [
        {
          actorName: 'John Astin',
          actorImg: './movies/actors/3.jpg'
        },
        {
          actorName: 'Carolin Jones',
          actorImg: './movies/actors/4.jpg'
        }],
      genre: 'Drama',
      coverPic: './movies/coverpic/2.jpg',
      images: './movies/images/3.jpg,./movies/images/4.jpg',
      price: '$8.99',
    },
    {
      id: '2',
      title: 'Conjuring',
      desc: 'The Conjuring is a 2010 American supernatural horror film directed by James Wan and written by Chad Hayes and Carey W. Hayes. It is the inaugural film in the Conjuring Universe franchise.[4] Patrick Wilson and Vera Farmiga star as Ed and Lorraine Warren, paranormal investigators and authors associated with prominent cases of haunting. Their purportedly real-life reports inspired The Amityville Horror story and film franchise.[5] The Warrens come to the assistance of the Perron family, who experienced increasingly disturbing events in their farmhouse in Rhode Island in 1971',
      releaseDate: '2010-09-12',
      director: 'Samuel Harrington',
      producer: 'Summit Entertainment',
      rating: '2.3',
      actors: [
        {
          actorName: 'Vera Fermiga',
          actorImg: './movies/actors/5.jpg'
        },
        {
          actorName: 'Patrick Wilson',
          actorImg: './movies/actors/6.jpg'
        }],
      genre: 'Horror',
      coverPic: './movies/coverpic/3.jpg',
      images:
        './movies/images/5.jpg,./movies/images/6.jpg',
      price: '$6.59',
    },
    {
      id: '3',
      title: 'Conjuring 2',
      desc: 'The Conjuring 2 is a 2012 American supernatural horror film directed by James Wan and written by Chad Hayes and Carey W. Hayes. It is the inaugural film in the Conjuring Universe franchise.[4] Patrick Wilson and Vera Farmiga star as Ed and Lorraine Warren, paranormal investigators and authors associated with prominent cases of haunting. Their purportedly real-life reports inspired The Amityville Horror story and film franchise.[5] The Warrens come to the assistance of the Perron family, who experienced increasingly disturbing events in their farmhouse in Rhode Island in 1971',
      releaseDate: '2012-06-14',
      director: 'Samuel Harrington',
      producer: 'Summit Entertainment',
      rating: '4.5',
      actors: [
        {
          actorName: 'Joey King',
          actorImg: './movies/actors/7.jpg'
        },
        {
          actorName: 'Mackenzie Foy',
          actorImg: './movies/actors/8.jpg'
        }],
      genre: 'Horror',
      coverPic: './movies/coverpic/4.jpg',
      images:
        './movies/images/7.jpg,./movies/images/8.jpg',
      price: '$5.59',
    },
    {
      id: '4',
      title: 'The Boss Baby',
      desc: 'The Boss Baby is a 2017 American computer-animated comedy film produced by DreamWorks Animation and distributed by 20th Century Fox. Loosely based on the 2010 picture book of the same name by Marla Frazee,[5] the film was directed by Tom McGrath, from a screenplay by Michael McCullers, and stars the voices of Alec Baldwin as the title character, along with Steve Buscemi, Jimmy Kimmel, Lisa Kudrow, Miles Bakshi, and Tobey Maguire. The first installment in The Boss Baby franchise, the plot follows a boy helping his baby brother who is a secret agent in the war for adults love between babies and puppies.',
      releaseDate: '2017-05-05',
      director: 'Tom McGrath',
      producer: 'Dreamworks Animation',
      rating: '6.5',
      actors: [
        {
          actorName: 'Lisa Kudrow',
          actorImg: './movies/actors/9.jpg'
        },
        {
          actorName: 'Alec Baldwin',
          actorImg: './movies/actors/10.jpg'
        }],
      genre: 'Drama',
      coverPic: './movies/coverpic/5.jpg',
      images:
        './movies/images/9.jpg,./movies/images/10.jpg',
      price: '$5.99',
    },
    {
      id: '5',
      title: 'Harry Potter and the Philosophers stone',
      desc: 'Harry Potter and the Philosophers stone  is a 2001 fantasy film directed by Chris Columbus and distributed by Warner Bros. Pictures, based on J. K. Rowlings 1997 novel of the same name. Produced by David Heyman and screenplay by Steve Kloves, it is the first instalment of the Harry Potter film series. The film stars Daniel Radcliffe as Harry Potter, with Rupert Grint as Ron Weasley, and Emma Watson as Hermione Granger. Its story follows Harrys first year at Hogwarts School of Witchcraft and Wizardry as he discovers that he is a famous wizard and begins his formal wizarding education.',
      releaseDate: '2001-06-13',
      director: 'Chris Columbus',
      producer: 'Warner Brothers',
      rating: '7.7',
      actors: [
        {
          actorName: 'Daniel Radcliffe',
          actorImg: './movies/actors/11.jpg'
        },
        {
          actorName: 'Rupert Grint',
          actorImg: './movies/actors/12.jpg'
        }],
      genre: 'Fiction',
      coverPic: './movies/coverpic/6.jpg',
      images:
        './movies/images/11.jpg,./movies/images/12.jpg',
      price: '$8.99',
    },
    {
      id: '6',
      title: 'Tangled',
      desc: 'Tangled is a 2010 American 3D computer-animated musical adventure comedy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures. Loosely based on the German fairy tale "Rapunzel" in the collection of folk tales published by the Brothers Grimm, it is the 50th Disney animated feature film. Featuring the voices of Mandy Moore, Zachary Levi and Donna Murphy,[7] the film tells the story of Rapunzel, a lost, young princess with magical long blonde hair who yearns to leave her secluded tower. Against her foster mothers wishes, she accepts the aid of an intruder to take her out into the world which she has never seen.',
      releaseDate: '2010-04-29',
      director: 'Nathan Grano',
      producer: 'Walt Disney',
      rating: '7.2',
      actors: [
        {
          actorName: 'Mandy Moore',
          actorImg: './movies/actors/13.jpg'
        },
        {
          actorName: 'Zachary Levi',
          actorImg: './movies/actors/14.jpg'
        }],
      genre: 'Fantasy',
      coverPic: './movies/coverpic/7.jpg',
      images:
        './movies/images/13.jpg,./movies/images/14.jpg',
      price: '$6.25',
    },
    {
      id: '7',
      title: 'Toy Story ',
      desc: 'Taking place in a world where toys come to life when humans are not present, the plot focuses on the relationship between an old-fashioned pull-string cowboy doll named Woody and an astronaut action figure, Buzz Lightyear, as they evolve from rivals competing for the affections of their owner, Andy Davis, to friends who work together to be reunited with Andy after being separated from him.',
      releaseDate: '1995-11-14',
      director: 'John Lasseter',
      producer: 'Walt Disney',
      rating: '8.2',
      actors: [
        {
          actorName: 'Tom Hanks',
          actorImg: './movies/actors/15.jpg'
        },
        {
          actorName: 'Tim Allen',
          actorImg: './movies/actors/16.jpg'
        }],
      genre: 'Animation',
      coverPic: './movies/coverpic/8.jpg',
      images:
        './movies/images/15.jpg,./movies/images/16.jpg',
      price: '$7.45',
    },
    {
      id: '8',
      title: 'Interstellar',
      desc: 'nterstellar is a 2014 epic science fiction film co-written, directed and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, and Michael Caine. Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.',
      releaseDate: '2014-03-26',
      director: 'Christopher Nolan',
      producer: 'Paramount Pictures',
      rating: '9.0',
      actors: [
        {
          actorName: 'Matthew McConaughey',
          actorImg: './movies/actors/17.jpg'
        },
        {
          actorName: 'Anne Hathaway',
          actorImg: './movies/actors/18.jpg'
        }],
      genre: 'Sci-Fiction',
      coverPic: './movies/coverpic/9.jpg',
      images:
        './movies/images/17.jpg,./movies/images/18.jpg',
      price: '$5.99',
    },
    {
      id: '9',
      title: 'The Hangover',
      desc: 'The Hangover is a 2009 American comedy film directed by Todd Phillips, co-produced with Daniel Goldberg, and written by Jon Lucas and Scott Moore. It is the first installment in The Hangover trilogy. The film stars Bradley Cooper, Ed Helms, Zach Galifianakis, Heather Graham, Justin Bartha, Ken Jeong, and Jeffrey Tambor. It tells the story of Phil Wenneck, Stu Price, Alan Garner, and Doug Billings, who travel to Las Vegas for a bachelor party to celebrate Dougs impending marriage. However, Phil, Stu, and Alan wake up with Doug missing and no memory of the previous nights events, and must find the groom before the wedding can take place.',
      releaseDate: '2009-03-10',
      director: 'Todd Phillips',
      producer: 'Legendary Pictures',
      rating: '9.5',
      actors: [
        {
          actorName: 'Bradley Coopers',
          actorImg: './movies/actors/19.jpg'
        },
        {
          actorName: 'Ed Helms',
          actorImg: './movies/actors/20.jpg'
        }],
      genre: 'Comedy',
      coverPic: './movies/coverpic/10.jpg',
      images:
        './movies/images/19.jpg,./movies/images/20.jpg',
      price: '$7.99',
    },
    // {
    //   id: '19',
    //   title: 'The Hangover',
    //   desc: 'The Hangover is a 2009 American comedy film directed by Todd Phillips, co-produced with Daniel Goldberg, and written by Jon Lucas and Scott Moore. It is the first installment in The Hangover trilogy. The film stars Bradley Cooper, Ed Helms, Zach Galifianakis, Heather Graham, Justin Bartha, Ken Jeong, and Jeffrey Tambor. It tells the story of Phil Wenneck, Stu Price, Alan Garner, and Doug Billings, who travel to Las Vegas for a bachelor party to celebrate Dougs impending marriage. However, Phil, Stu, and Alan wake up with Doug missing and no memory of the previous nights events, and must find the groom before the wedding can take place.',
    //   releaseDate: '2009-03-10',
    //   director: 'Todd Phillips',
    //   producer: 'Legendary Pictures',
    //   rating: '9.5',
    //   actors: [
    //     {
    //       actorName: 'Bradley Coopers',
    //       actorImg: './movies/actors/19.jpg'
    //     },
    //     {
    //       actorName: 'Ed Helms',
    //       actorImg: './movies/actors/20.jpg'
    //     }],
    //   genre: 'Comedy',
    //   coverPic: './movies/coverpic/10.jpg',
    //   images:
    //     './movies/images/19.jpg,./movies/images/20.jpg',
    //   price: '$7.99',
    // }
  ],
}
