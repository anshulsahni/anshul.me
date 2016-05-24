var welcomeFolks = [
'__        __   _                            __        _ _        ',
'\\ \\      / /__| | ___ ___  _ __ ___   ___  / _|  ___ | | | _____ ',
' \\ \\ /\\ / / _ \\ |/ __/ _ \\| \'_ ` _  \\/ _ \\ | |_ / _ \\| | |/ / __|',
'  \\ V  V /  __/ | (_| (_) | | | | | |  __/ |  _| (_) | |   <\\__ \\ ',
'   \\_/\\_/ \\___|_|\\___\\___/|_| |_| |_|\\___| |_|  \\___/|_|_|\\_\\___/'].join('\n')

var greetingText = welcomeFolks + '\n\n' +
'\tWelcome to anshul sahni\'s web profile....Seems a bit different??\n' +
'\tWell type \'help\' to get the list of commands available to you' +
'\n\n';


$('#terminal').terminal(function(command, cmd) {
  cmd.echo('You typed ' + command)

  if(command === 'clear') {
    cmd.clear();
  }
},{
  prompt: 'you@ansh\'sworld > ',
  greetings: greetingText
})