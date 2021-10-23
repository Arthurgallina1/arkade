const data = {
  ballObj: {
    x: 20,
    y: 200,
    dx: 5, //size of step
    dy: 5, //step
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
  paddleProps: {
    height: 20,
    width: 100,
    x: 100,
    color: 'orange',
    y: 30,
  },
}

export default data
