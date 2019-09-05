function getShortMessages(messages) {
    // SOLUTION GOES HERE
    const solution = messages.filter(element => { return element.message.length < 50 })
    const readyMessage = solution.map( param1 => { return param1.message});
    return readyMessage;  
}
  

  module.exports = getShortMessages