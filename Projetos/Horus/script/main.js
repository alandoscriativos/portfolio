var btn = document.getElementById('checkbox-menu');
var container = document.querySelector('.menumobilelist');
btn.addEventListener('click', function() {

 if(container.style.display === 'block') {
     container.style.display = 'none';
 } else {
     container.style.display = 'block';
 }
 });