const resultBtn = document.getElementById('resultBtn');
const result = document.getElementById('result');

async function getData() {
  const response = await fetch("./content/movies.json");
  const resultArr = await response.json();
  const randomItem = resultArr[getArrayRandomIndex(resultArr)];
  result.innerHTML = `
  <a href="#" id="closeBtn" class="close-btn"></a>
  <div>${randomItem.title}</div>
  `;
}

function getArrayRandomIndex(array) {
  const random = Math.floor(Math.random() * array.length);
  return random;
}

resultBtn.addEventListener('click', e => {
  e.preventDefault();

  getData();

  result.style.display = 'block';

  resultBtn.classList.toggle('disabled');
  resultBtn.disabled = true;
  resultBtn.textContent = 'Результат ▼';
});

document.addEventListener('click', e => {
  if (e.target.id === 'closeBtn') {
    result.style.display = 'none';
    resultBtn.classList.toggle('disabled');
    resultBtn.textContent = 'Рандомный вариант';
    resultBtn.disabled = false;
  }
});