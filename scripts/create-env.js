const fs = require("fs");
fs.writeFileSync(
  "./.env",
  `ACCUWEATHER_KEY=${process.env.ACCUWEATHER_KEY}\nAIR_PORT_CODES_KEY=${process.env.AIR_PORT_CODES_KEY}\nAIR_PORT_CODES_SECRET=${process.env.AIR_PORT_CODES_SECRET}`
);
