Задача — создать небольшую галерею с фотографиями. Нужно, чтобы эти фотографии не были вшиты в разметку вручную. Они должны приходить с сервера по щелчку на кнопку, а затем помещаться в разметку.

Техническое задание:
1. Необходимо использовать следующие инструменты:
  - Метод fetch для запроса данных со стороннего API;
  - Цепочки вызовов .then().catch().finally();
  - async/await;
  - try…catch…finally;
  - document.querySelector(), document.getElementById;
  - addEventListener(), preventDefault().
2. Дизайн любой. Сдавать без стилей нельзя. При загрузке данных должен появиться лоадер. Кнопки должны быть стилизованы. Размеры для картинок установлены. Отступы между картинками заданы. Адаптивность учтена.
3. Соблюдать кодстайл. Использовать один вариант табуляции и один формат кавычек.
4. Для классов использовать БЭМ.
5. Задавать переменным осмысленные названия. По ним должно быть ясно, что в них хранится.

API
Варианты, откуда можно брать картинки:

- https://dog.ceo/api/breeds/image/random/20 — JSON с 20 картинками собачек. Вы можете поменять число 20 в конце адреса на другое. Максимум — 50 картинок. Минимум — 5.
- https://api.thecatapi.com/v1/images/search?limit=10 — 10 рандомных фотографий с котами.
- https://jsonplaceholder.typicode.com/photos?_start=0&_limit=60 — фейковые картинки. Можете выставить другие числа после limit.
- https://picsum.photos/v2/list?page=1&limit=50 — лист рандомных картинок. Используйте его, если у вас есть доступ к этому сервису. Работает не во всех странах.
