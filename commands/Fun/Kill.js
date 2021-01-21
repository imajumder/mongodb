module.exports = {
   description: 'Kills the targeted user.....',
  commands: ['kill', 'rip'],
  cooldown: '5',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '[mention]',
  
  callback: ( message) => {
     
    if (!message.mentions.users.size) {
        return message.reply();
      }
    
      let taggedUser  = message.mentions.users.first();
    
      let username = taggedUser.username
    
      let discriminator = taggedUser.discriminator
    
      let id = taggedUser.id
    
      let name = "<" + "@" + id + ">" 
    
      let repls = [`${name} were driving and crashed as they did not wear their seatbelt..`, `${name} died of shock that they were about to get hit by a truck eventhough it actually was a tractor.`,
       `${name} were dancing till they died...`, `The USSR sent ${name} to the gulag and made them commit suicide by continously calling them a capitalist..`,
      `${name} made a mistake of taking a squirrels nut and got themselves killed.`, `Godzilla was having a stroke after watching jake Paul while ${name} interrupted`,
      `${name} had a chance to meet juice wrld after interrupting his dad`, `${name} Drank way too much Red Bull that he chocked slammed 5 kids while dying from Red Bull`,
      `${name} were poking a british royal guard... Thats sad.`, `${name} was the Imposter..`, `${name} was not the Imposter.`,
      `${name} laughed so hard that there ankles broke`, `${name} was hit by a Canonball that was fired as a salute to them`, `${name} were poisoned, Shot in the head, Shot three more times, Bludgeoned, Castrated, And then thrown into a river only for the cause of death to be drowning`,
      `${name} were trying to be toxic in fortnite and ended up getting a ban..`, `Donlad trump ordered ${name} to be executed as they did not pay their taxes.`, 
      `${name} were buldgeoned by a default skin..`, `${name} died watching "Attack on Titan"`, `${name} were trying to swim in lava..`, `${name} were bored to death..`,
      `${name} were killed by baby shark dodododododo`, `${name} hit the ground too hard..`  ]
    
      let sameuser = [`Are you trying to kill yourself `, `Stop suicide, Make the world a better place`, `What is wrong with you kid `, `Nice try.....`]
    
      let botping = [`Are you trying to mention a bot `, `You can't mention them kiddo `, `you seriouly thought i would accept that..`, `Nice try.....`, `Hey thats me...`]

      let botsafey = ['TotBot2.0 (Beta)', 'TotBot', 'TotBot [?]', 'Hydra', 'Dyno', 'Dyno [%]', 'Hydra [&]', 'MEE6', 'MEE6 [!]', 'Plasma', 'PokeMeow', 'PokeMeow [;]', 'PokeTwo', 'PokeTwo [.]']
    
      let selfid =  message.author.id
    
        if (id === selfid) {
        let same = Math.floor(Math.random() * sameuser.length);
      message.reply(sameuser [same]);
      }else if (id === '781466481929224203') {
        let samebot = Math.floor(Math.random() * botping.length);
      message.reply(botping [samebot]);
      }else {
        let rand = Math.floor(Math.random() * repls.length);
        message.channel.send(repls [rand]);
      }
  },
  permissions: 'SEND_MESSAGES',
  requiredRoles: [],
}
