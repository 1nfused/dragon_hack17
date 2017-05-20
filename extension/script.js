floating({
  content: "😇",
  number: 3,
  duration: 11
});
floating({
  content: "👌",
  number: 5,
  duration: 8
});
floating({
  content: "YEAHHHHHH",
  number: 3,
  duration: 15
});
floating({
  content: "🙋",
  number: 1,
  duration: 3,
  repeat: 1,
  size: 1
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Taking a break...');
  await sleep(1000);
  console.log('One second later');
}

demo();
