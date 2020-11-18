const axios = require("axios");
const player = require("play-sound")({});

async function checkForQueue() {
  const resp = await axios.get("https://direct-queue.playstation.com/");

  console.log(resp.data);
  if (resp.data.includes("<title>This is Queue-it</title>")) {
    player.play("Benny-hill-theme.mp3");
  } else {
    setTimeout(checkForQueue, 200);
  }
}

checkForQueue();
