function startBank() {

  let finished = false;

  while(!finished) {
    let input = prompt('Enter W to withdraw\nEnter D to deposit\nEnter B to view balance\nEnter Q to quit');

    switch (input) {
      case 'W':
      case 'w': {
        prompt('How much would you like to withdrawal?');
        alert('Your money has been withdrawn!');
        break;
      }
      case 'D':
      case 'd': {
        prompt('How much would you like to deposit?');
        alert('Your money has been deposited!');
        break;
      }
      case 'B':
      case 'b': {
        alert('Current balance: $1,000,000.01');
        break;
      }
      case 'Q':
      case 'q': {
        finished = true;
        break;
      }
      default: {
        alert('Oops! please enter W, D, B, or Q');
        break;
      }
    }
  }
}
