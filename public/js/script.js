(function (window) {


  function cutTitles() {
    const titles = document.querySelectorAll('.Post-Title');

    if (titles.length === 0) {
      setTimeout(cutTitles, 1000);
      return;
    }

    titles.forEach(item => {
      cutTitle(item);
    });
  }

  function cutTitle(item) {
    const originText = item.dataset.title;
    const currentText = item.textContent;

    // Текст умещается, обрезание не нужно
    if (item.scrollHeight <= item.clientHeight && originText.length === currentText.length) {
      return;
    }

    const spanContent = item.querySelector('span');
    const itemCoords = item.getBoundingClientRect();
    // Получаем массив слов
    // Исходный заголовок хранится в дата-атрибуте
    const textArr = originText.split(' ');
    const threshold = 5;

    const wrapper = document.createElement('span');
    // Заворачиваем каждое слово в спан
    const textItems = textArr.map(item => {
      const span = document.createElement('span');
      const space = document.createTextNode(' ');
      span.innerHTML = item;
      wrapper.appendChild(span);
      wrapper.appendChild(space);
      return span;
    });

    // Заменяем содержимое заголовка словами в спанах
    spanContent.parentNode.replaceChild(wrapper, spanContent);

    let i;
    let posToCut = 0;
    for(i = 0; i < textItems.length; i++){
      const coords = textItems[i].getBoundingClientRect();

      // Находим первый спан, верхняя граница которого
      // уходит за нижнюю границу блока
      if (coords.top >= itemCoords.bottom - threshold) {
        posToCut = i;
        break;
      }
    }

    let newText = originText;

    if (posToCut > 0) {
      // Массив слов обрезаем до найденой длины - 1 слово
      newText = textArr.splice(0, posToCut - 1).join(' ');
      newText += '&hellip;';
    }

    // Заменяем содержимое заголовка обрезанным текстом
    wrapper.innerHTML = newText;
  }

  cutTitles();

  window.addEventListener('resize', cutByResize)

  let isResizeWaiting = false;

  function cutByResize() {
    if (!isResizeWaiting) {
      isResizeWaiting = true;

      setTimeout(() => {
        isResizeWaiting = false;
        cutTitles();
      }, 1000)
    }
  }

})(window);
