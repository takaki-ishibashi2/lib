/*
 * <select></select>
 * <form>
 *   <textarea></textarea>
 *   <button></button>
 * </form>
 * <p id="onlyOne"></p>
 * */
(function() {
  var voicesList = document.querySelector('select');
  var inputForm = document.querySelector('form');
  var input = document.querySelector('textarea');
  var submitBtn = document.querySelector('button');
  var state = document.querySelector('#onlyOne');
  var isSynthesis = true;
  var voices = [];
  if (window.speechSynthesis === undefined) {
    isSynthesis = false;
    return;
  }
  
  if (isSynthesis) {
    var synthesis = window.speechSynthesis;
  }
  console.log('good run');
})();
