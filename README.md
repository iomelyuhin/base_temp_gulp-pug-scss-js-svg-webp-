# ActualKeylogger site

Перед установкой зависимостей и запуском проекта убедитесь, что у вас установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/), а так же [последняя версия Yarn](https://yarnpkg.com/ru/docs/install) 

##  Чтобы развернуть проект необходимо:
```sh
$ git clone https://github.com/iomelyuhin/ActualKeylogger.git .
$ yarn
```
или
```sh
$ npm install
```

## Скрипты package.json:

start - вместо gulp, привык, что любой проект у меня запускается этой командой
build - вместо gulp build, такая же ситуация, как в прошлом пункте
lighthouse - вместо gulp build && gulp lighthouse, сначала собираем проект, а потом уже тестируем
test - запуск разных линтеров, хорошей практикой будет запускать перед комитом


#### Чтобы запустить скрипт:
```sh
$ npm run имя_скрипта
```
или
```sh
$ yarn имя_скрипта
```
## Что где лежит
| Путь | Назначение |
| ------ | ------ |
| src/ | Рабочая папка проекта |
| dist/ | Собранный проект |
| gulpfile.js | Конфиг Gulp |
| webpack.config.js | Конфиг Webpack (для сборки JS) |
| postcss.config.js | Конфиг PostCss (для сборки CSS) |
| src/views | Разметка на Pug (Jade) |
| src/views/pages | Страницы проекта |
| src/views/common | Шаблоны блоков(типа header, footer, hero-section) |
| views/common/layout.pug | Шаблон главной
| views/includes/[pageName]/[component.pug] | (типа button, form, social-icons)


## Как создать новую страницу?
#### 1. Создаём файл .pug в папке src/views/pages
#### 2. В первой строчке подключаем шаблон страницы
```sh
extends ../common/layout.pug
```
#### 3. Меняем title страницы:
```sh
block variables
  - var title = 'Блог'
```
#### 4. Создаём содержимое страницы:
```sh
block content
  h1 "Блог"
```
#### 5. Подключаем скрипты к странице(добавить .min перед .js):
```sh
block scripts
  script(src='assets/scripts/works.min.js')
```
#### 6. Подключаем компоненты в содержимое страницы:
```sh
  h1 "Мои работы"
  include ../common/slider.pug
```

## Как создать новый скрипт и подключить его?

#### 1. Создаём файл [pageName].js в папке src/assets/js
#### 2. Подключаем на странице:
```sh
block scripts
  script(src='assets/js/works.min.js')
```
#### 3. Подключаем модули:
##### - Создаём файл модуля в src/assets/modules/[moduleName].js
##### - Инициализируем в нем функцию и экспортируем её:
```sh
function sliderInit() {
  //code here
};
module.exports = sliderInit;
```
##### - в [pageName].js импортируем и вызываем наш модуль:
```sh
import slider from "./modules/slider"

slider();
```

## Как писать стили?
#### 1. Стили пишем в синтаксисе .scss(css тоже понимает)
#### 2. Разбиваем на блоки, называем так же как страницу или модуль.(index.scss или slider.scss)
#### 3. Блоки складываем в папку assets/styles/blocks/*.scss(подключаются автоматически)
#### 4. Глобальные стили типа container или button пишем в layout(assets/styles/layout/global.scss)
#### 5. Переменные пишем в формате json в файле assets/styles/utils/variables.js
#### 6. Миксины в файле assets/styles/mixins/*.scss
#### 7. Пиксели автоматически переводятся в rem, чтобы отменить нужно писать Px или PX

