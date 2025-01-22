const fontsize = document.getElementById('fontsize');
const fontcolor = document.getElementById('fontcolor');
const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const size = fontsize.value;
    const color = fontcolor.value;

    let date = new Date();
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));  
    let expires = "expires=" + date.toUTCString();
    
  
    document.cookie = `fontsize=${size}, fontcolor=${color}, ${expires}; path=/`;
    seeCookie();
});

function seeCookie(){
    if (document.cookie) {
       
        const data = document.cookie.split(", ");
        const size = Number(data[0].split("=")[1]);
        const color = data[1].split("=")[1];
        
        console.log(size, color);
        document.body.style.fontSize = size;
        document.body.style.color = color;

    }
}
seeCookie();