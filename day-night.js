var css_day = 'style-day.css';
var css_night = 'style-night.css';
var cur_css = document.getElementById('dynamic-css');
var chkbox = document.getElementById('css-dynamic-checkbox');

cur_css.href = css_night;
chkbox.checked = false;
setCookie("styleState", css_night, 1000);

function myFunctionStyle() {
    if ( chkbox.checked && getCookie("styleState") == css_night) {
        console.log('If inside');
        cur_css.href = css_day;
        setCookie("styleState", css_day, 1000);
} else {
        console.log('Else inside');
        cur_css.href = css_night;
        setCookie("styleState", css_night, 1000);
};
};