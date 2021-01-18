module.exports = {
    commands: ['mh', 'math help'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: '',
    
    callback: (message, text) => {
      
          message.channel.send(` Here are my supported commands (Till now) type the command without any arguments for info
        [add, addition] ~ adds two numbers 
        [sub, subtract] ~ subtract one number from another 
        [mul, multiply] ~ Multiplies two numbers 
        [div, divide] ~ divided one number by the other 
        [expnum, exponent] ~ finds the value of a exponential number 
        [cirlgt, circlelength] ~ finds the circumference of a circle using radius 
        [cirarea, circlearea] ~ finds the area of a circle using the radius 
        [reclgt, rectanglelenght] ~ finds the perimeter of the given rectangle 
        [recarea, rectanglearea] ~ finds the area of the given rectangle 
        [sqrlgt, squarelength] ~ finds the perimeter of the given square 
        [sqrarea, squarearea] ~ finds the area of the given square 
        [trilgt, trianglelength] ~ finds the perimeter of the given triangle 
        [triarea, trianglearea] ~ finds the area of the given triangle `)
  
        
     },
     permissions: 'SEND_MESSAGES',
     requiredRoles: [],
  }