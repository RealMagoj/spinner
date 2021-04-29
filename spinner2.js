const spinner = (array, time)=> {
  let timeout = 100;
  for (let i = 0; i < array.length; i++) {
    timeout += time;
    setTimeout(() => {
      process.stdout.write('\r' + array[i] + '   ');
      process.stdout.write(i === array.length - 1 ? '\n' : '');
    }, timeout);
  }
}

spinner(['|', '/', '-', '\\', '|', '/', '-', '\\', '|'], 200);