(function () {
  const AUTH_KEY = "manual_auth_ok";
  const PIN_PATHS = ["/pin", "/pin/", "/pin/index.html"];

  const path = window.location.pathname;

  if (PIN_PATHS.includes(path)) return;

  if (sessionStorage.getItem(AUTH_KEY) === "true") return;

  window.location.replace("/pin/");
})();