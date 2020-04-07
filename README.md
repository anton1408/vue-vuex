# task
// ===== Vue middle
Приложение на Vue. Использовать Vue, Vuex, Vue-router. Дизайн - в стиле Vue Material.
1. Экран - Хедер,  основной контент.
2. Каждый элемент отдельный компонент.
3. С сайта https://randomuser.me загрузить 20 юзеров, данные положить во Vuex. На главном экране отобразить  список с Vuex. Этот компонент должен содержать текст инпут фильтрации. Список должен фильтроваться по полям firstname, lastname.  Список отображает ид и аватар, firstname, lastname. По клику на юзера -  выполнять навигацию на ссылку “/user/{id}” по которой будет отображаться экран “User details”. На экране детального описания показывать аватар, адрес, емейл, пол, дату рождения, телефон. Когда открыт экран детального описания, отображать кнопку назад, при нажатии открывается начальный список.
4. Код необходимо залить на гитхаб и предоставить ссылку на него.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
