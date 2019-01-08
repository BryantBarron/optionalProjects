const team = {
  _players: [
    {
      firstName: 'John',
      lastName: 'Zoidberg',
      age: 86
    },
    {
      firstName: 'Turanga',
      lastName: 'Leela',
      age: 28
    },
    {
      firstName: 'Philip',
      lastName: 'Fry',
      age: 1029
    }
  ],
  _games: [
    {
      opponent: 'Maple Leafs',
      teamPoints: 4,
      opponentPoints: 0
    },
    {
      opponent: 'Something, Something Darkside',
      teamPoints: 3,
      opponentPoints: 1
    },
    {
      opponent: 'Snu, snu',
      teamPoints: 1,
      opponentPoints: 0
    }
  ],

  get players(){
    return this._players;
  },

  get games(){
    return this._games;
  },

  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    this.players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };

    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Rockstars', 4, 4);
team.addGame('DeathStar', 5, 0);
team.addGame('Persie8', 4, 3);


console.log(team.players);
console.log(team.games);
