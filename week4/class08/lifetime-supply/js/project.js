

var age = document.getElementById('age');
var max_age = document.getElementById('max_age');
var num_per_day = document.getElementById('num_per_day');
var click_me = document.getElementById('click_me');
var solution = document.getElementById('solution');
var item = document.getElementById('item');

 document.getElementById ('click_me') .onclick = calculate;

      function calculate() {


        age = parseInt(document.getElementById('age').value);


         item = parseInt(document.getElementById('item').value);


         max_age = parseInt(document.getElementById('max_age').value);


         num_per_day = parseInt(document.getElementById('num_per_day').value);


        var total_drinks = (max_age - age) * 365 * num_per_day;

        document.getElementById('solution') .innerHTML = total_drinks;
        document.getElementById('drink').innerHTML = item;
      }