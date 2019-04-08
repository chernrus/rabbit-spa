const ApiService = (function(){
  let auth = false;
  function getList() {
    console.log('list');
  };

  function create() {
    console.log('create');
  };

  function edit() {
    console.log('create');
  };

  function remove() {
    console.log('remove');
  };

  function login() {
    console.log('login');
    auth = true;
    return auth;
  };

  function logout() {
    console.log('logout');
    auth = false;
    return auth;
  };

  function isLoggedIn() {
    console.log('check loggin');
    return auth;
  };


  return {
    getList,
    create,
    edit,
    remove,
    login,
    logout,
    isLoggedIn
  }
}());

export default ApiService;
