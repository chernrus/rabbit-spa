import decodeJwt from 'jwt-decode';

const ApiService = (function(){
  const URL = 'http://conquest.weekendads.ru',
    TOKEN_NAME = 'Authorization';

  function _errorHandler(error) {
    console.log(error);
    console.log('Error is:', error.status, error.statusText);
  };

  function _apiFetch(url, params) {
    return fetch(url, params);
  };

  function _setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }

    document.cookie = updatedCookie;
  }

  function _getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function _deleteCookie(name) {
    _setCookie(name, '', {
      expires: -1
    });
    return null;
  };

  function _checkExpires(expires) {
    var date = new Date();
    if (typeof expires == "number" && expires) {
      return date.getTime() < expires*1000;
    }
    else {
      return false;
    }
  }

  function _getTkn() {
    const tokenCookie = _getCookie(TOKEN_NAME);

    if(!tokenCookie) {
      return null;
    }
    else {
      return tokenCookie.split(' ')[1];
    }
  }

  function _checkUser() {

    const token = _getTkn();
    let decoded = {};

    if(!token) {
      return null;
    }

    decoded = decodeJwt(token);

    if(_checkExpires(decoded.exp)){
      return { status: 'OK', username: decoded.username }
    }
    else {
      return null;
    }
  };

  function _setTkn({ token }) {
    const decoded = decodeJwt(token),
      value = `Bearer ${token}`,
      options = {
        expires: decoded.exp
      };

    _setCookie(TOKEN_NAME, value, options);

    return decoded.username;
  };

  function getList(callback) {
    if(!_checkUser()) {
      return _deleteCookie(TOKEN_NAME);
    }

    const url = `${URL}/rabbit/list`,
      method = 'GET',
      headers = {
        'Authorization': _getCookie(TOKEN_NAME)
      };

    _apiFetch(url, { method, headers })
      .then(
        response => {
          if(response.status == 200) {
            return response.json();
          }
          else {
            throw { status: response.status, statusText: response.statusText };
          }
        },
        error => {throw error.statusText}
      )
      .then(response => callback(response))
      .catch(error => _errorHandler(error));
  };

  function create({ name, weight }, callback) {
    if(!_checkUser()) {
      return _deleteCookie(TOKEN_NAME);
    }

    const url = `${URL}/rabbit`,
      method = 'POST',
      headers = {
        'Authorization': _getCookie(TOKEN_NAME),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body =  `rabbit[name]=${name}&rabbit[weight]=${weight}`;

    _apiFetch(url, { method, headers, body })
      .then(
        response => {
          if(response.status == 200 || response.status == 201) {
            return response;
          }
          else {
            throw { status: response.status, statusText: response.statusText };
          }
        },
        error => {throw error.statusText}
      )
      .then(response => callback(response.statusText))
      .catch(error => _errorHandler(error));
  };

  function edit({ id, name, weight}, callback) {
    if(!_checkUser()) {
      return _deleteCookie(TOKEN_NAME);
    }

    const url = `${URL}/rabbit/${id}`,
      method = 'POST',
      headers = {
        'Authorization': _getCookie(TOKEN_NAME),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body =  `rabbit[name]=${name}&rabbit[weight]=${weight}`;

    _apiFetch(url, { method, headers, body })
      .then(
        response => {
          if(response.status == 200 || response.status == 201) {
            return response;
          }
          else {
            throw { status: response.status, statusText: response.statusText };
          }
        },
        error => {throw error}
      )
      .then(response => callback(response.statusText))
      .catch(error => _errorHandler(error));
  };

  function remove({ id, name, weight}, callback) {
    if(!_checkUser()) {
      return _deleteCookie(TOKEN_NAME);
    }

    const url = `${URL}/rabbit/${id}`,
      method = 'DELETE',
      headers = {
        'Authorization': _getCookie(TOKEN_NAME),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body =  `rabbit[name]=${name}&rabbit[weight]=${weight}`;

    _apiFetch(url, { method, headers, body })
      .then(
        response => {
          if(response.status == 200 || response.status == 201) {
            return response;
          }
          else {
            throw { status: response.status, statusText: response.statusText };
          }
        },
        error => {throw error.statusText}
      )
      .then(response => callback(response.statusText))
      .catch(error => _errorHandler(error));
  };

  function login({ username, password }, resolve, reject) {
    const url = `${URL}/login_check`,
      method = 'POST',
      headers = {
        "Content-Type": "application/json"
      },
      body = JSON.stringify({ username, password });

    _apiFetch(url, { method, headers, body})
      .then(
        response => {
          if(response.status == 200) {
            return response.json();
          }
          if(response.status == 401) {
            reject({errorText: 'Username/password are incorrect!'})
          }
          else {
            throw { status: response.status, statusText: response.statusText };
          }
        },
        error => {throw error.statusText}
      )
      .then(response => _setTkn(response))
      .then(username => resolve({ status: 'OK', username }))
      .catch(error => _errorHandler(error));

  };

  function getUsername() {
    const token = _getTkn();
    let decoded = {};

    if(!token) {
      return null;
    }

    decoded = decodeJwt(token);

    return decoded.username;
  };

  function logout() {
    return _deleteCookie(TOKEN_NAME);
  };

  function isLoggedIn() {
    return _checkUser();
  };


  return {
    getList,
    create,
    edit,
    remove,
    getUsername,
    login,
    logout,
    isLoggedIn
  }
}());

export default ApiService;
