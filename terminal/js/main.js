$('#terminal').terminal(function(command, cmd) {
  cmd.echo('You typed ' + command)

  if(command === 'clear') {
    cmd.clear();
  }
},{
  prompt: '#',
  greetings: 'Welcome to Anshul\'s world. Type \'help\' to get the set of commands that can be run'
})