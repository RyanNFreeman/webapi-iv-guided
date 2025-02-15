// require('dotenv').config()
const server = require('./api/server.js');

//make the port dynamic
const port = process.env.PORT || 4000;
const greeting = process.env.GREETING || 'Hello world';
server.listen(port, () => {
  console.log(`\n*** ${greeting} http://localhost:${port} ***\n`);
});
//service provider needs to make the port dynamic. We can't just choose this.
//rs in terminal will restart server