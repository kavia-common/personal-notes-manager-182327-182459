(function () {
  'use strict';
  // Enhance keyboard accessibility for the two header buttons if needed
  function makeButtonInteractive(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click && el.click();
      }
    });
  }
  makeButtonInteractive('el-125-187');
  makeButtonInteractive('el-125-189');
})();
