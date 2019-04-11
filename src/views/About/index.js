import React from 'react';

const About = props => {
  return (
    <div>
      <h1><a id="Weekend_Agency_0"></a>Weekend Agency</h1>
      <h2><a id="___junior_frontend_developer_1"></a>Тестовое задание для junior frontend developer</h2>
      <h3><a id="_3"></a>Задача</h3>
      <p>Создание SPA, реализующего CRUD-функционал для сущности “Кролик”</p>
      <h3><a id="_6"></a>Требования:</h3>
      <ul>
        <li>Использование фронтенд-фреймворка (react/vue/angular)</li>
        <li>Приложение должно быть совместимо с основными версиями популярных браузеров (Chrome, Firefox, Safari, Opera, Edge)</li>
      </ul>
      <h3><a id="_10"></a>Описание:</h3>
      <p>Приложение должно состоять из следующих страниц:</p>
      <ul>
        <li>авторизация</li>
        <li>создание кролика</li>
        <li>редактирование кролика</li>
        <li>список кроликов (в списке должна быть возможность удаления)</li>
      </ul>
      <p>Требования к дизайну отстутствуют, адаптивная версия не требуется, допускается использование дополнительных библиотек для быстрого создания UI на выбор соискателя.
      Так же, в API допущена уязвимость, обнаружение и эксплуатация которой будет дополнительным бонусом (достаточно в текстовом виде).
      Результат ожидается в виде git-репозитория.</p>
      <h3><a id="__22"></a>Техническая информация:</h3>
      <p>Адрес API: <a href="http://conquest.weekendads.ru">http://conquest.weekendads.ru</a></p>
      <p>Приложению предстоит общаться с REST API, реализующим CRUD-функционал для сущности “Кролик”. API имеет stateless-модель аутентификации. Аутентификация производится посредством передачи токена в заголовке запроса:
      <code>Authorization: Bearer &lt;token&gt;</code>
      Токен получается с помощью запроса следующего вида (здесь и далее HTTP-запросы представленны в виде curl-команды):</p>
      <pre><code>curl -X POST \
        http://conquest.weekendads.ru/login_check \
        -H 'Content-Type: application/json' \
        -d '&#123;&quot;username&quot;:&quot;&lt;username&gt;&quot;,&quot;password&quot;:&quot;&lt;password&gt;&quot;&#125;'
      </code></pre>
      <p>Где username и password – предоставленные соискателю данные.</p>
      <p>Сервер пришлёт ответ следующего вида:</p>
      <pre><code className="language-json">&#123;
        "<span className="hljs-attribute">token</span>": <span className="hljs-value"><span className="hljs-string">"&lt;token&gt;"</span>
        </span>&#125;
      </code></pre>
      <p>Где поле token – JWT, содержащий в себе основную информцию о пользователе и время создания/истечения токена. Дополнительным плюсом будет отображение в каком-либо месте имени пользователя, полученного из токена.</p>
      <h2><a id="____API_45"></a>Описание работы с методами API</h2>
    <h3><a id="GetRabbitList____47"></a>GetRabbitList, получение списка кроликов:</h3>
    <pre><code>curl -X GET \
    http://conquest.weekendads.ru/rabbit/list \
    -H 'Authorization: Bearer &lt;token&gt;' \
    </code></pre>
    <h3><a id="CreateRabbit___53"></a>CreateRabbit, создание кролика:</h3>
    <pre><code>curl -X POST \
    http://conquest.weekendads.ru/rabbit \
    -H 'Authorization: Bearer &lt;token&gt;' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'rabbit[name]=&lt;name&gt;&amp;rabbit[weight]=&lt;weight&gt;'
    </code></pre>
    <p>Где name – имя кролика (строка), а weight – его вес (число с плавающей точкой)</p>
    <h3><a id="UpdateRabbit___63"></a>UpdateRabbit, изменение кролика:</h3>
    <pre><code>curl -X POST \
    http://conquest.weekendads.ru/rabbit/&lt;rabbit.id&gt; \
    -H 'Authorization: Bearer &lt;token&gt;' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'rabbit[name]=&lt;name&gt;&amp;rabbit[weight]=&lt;weight&gt;'
    </code></pre>
    <p>Где <code>rabbit.id</code> – id кролика (целое число), name – имя кролика (строка), а weight – его вес (число с плавающей точкой).</p>
    <h3><a id="DeleteRabbit___73"></a>DeleteRabbit, удаление кролика:</h3>
    <pre><code>curl -X DELETE \
    http://conquest.weekendads.ru/rabbit/&lt;rabbit.id&gt; \
    -H 'Authorization: Bearer &lt;token&gt;' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'rabbit[name]=&lt;name&gt;&amp;rabbit[weight]=&lt;weight&gt;'
    </code></pre>
    <p>Где <code>rabbit.id</code> – id кролика (целое число), name – имя кролика (строка), а weight – его вес (число с плавающей точкой).</p>
    </div>
  );
};

export default About;
