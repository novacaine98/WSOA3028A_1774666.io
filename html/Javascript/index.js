const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function()
{
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}


document.getElementById('go-back').addEventListener('click', () => {history.back(); });

document.getElementById('go-forward').addEventListener('click', e => {window.history.forward(); });