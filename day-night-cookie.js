var css_day = 'style-day.css';
var css_night = 'style-night.css';
var cur_css = document.getElementById('dynamic-css');

if (getCookie("styleState") == css_night) {
    console.log('SECOND If inside');
    cur_css.href = css_night;
} else {
    console.log('SECOND Else inside');
    cur_css.href = css_day;
}
