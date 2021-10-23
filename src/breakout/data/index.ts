const data = {
  ballObj: {
    x: 20,
    y: 200,
    dx: 3, //size of step
    dy: 3, //step
    rad: 10,
    speed: 10,
  },
  brickObj: {
    x: 0.5,
    y: 50,
    width: 800 / 10 - 1,
    height: 20,
    density: 2,
    colors: ['blue', 'lightblue'],
  },
  player: {
    name: 'Art',
    lives: 5,
    score: 0,
    level: 1,
  },
}

export default data