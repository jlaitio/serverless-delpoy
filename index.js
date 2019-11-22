const beforeDelpoy = (serverless, options) => {
  serverless.cli.log('Assuming you meant \'deploy\'')
}

const delpoy = (serverless, options) => {
  return serverless.pluginManager.spawn('deploy')
}

class Delpoy {
  constructor(serverless, options) {
    this.commands = {
      'delpoy': {
        usage: 'Alias for deploy',
        lifecycleEvents: [
          'executeDelpoy',
        ],
      },
    };

    this.hooks = {
      'before:delpoy:executeDelpoy': beforeDelpoy.bind(null, serverless, options),
      'delpoy:executeDelpoy': delpoy.bind(null, serverless, options),
    };
  }
}

module.exports = Delpoy;