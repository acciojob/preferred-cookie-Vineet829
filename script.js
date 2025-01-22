function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); 
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split('=');
    if (key === name) return value;
  }
  return null;
}

document.addEventListener('DOMContentLoaded', () => {
  const fontSizeInput = document.getElementById('fontsize');
  const fontColorInput = document.getElementById('fontcolor');

  const savedFontSize = getCookie('fontSize');
  const savedFontColor = getCookie('fontColor');

  if (savedFontSize) {
    fontSizeInput.value = savedFontSize;
    document.documentElement.style.setProperty('--fontsize', `${savedFontSize}px`);
  }

  if (savedFontColor) {
    fontColorInput.value = savedFontColor;
    document.documentElement.style.setProperty('--fontcolor', savedFontColor);
  }

  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); 

    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    setCookie('fontSize', fontSize, 365); 
    setCookie('fontColor', fontColor, 365);

    document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
    document.documentElement.style.setProperty('--fontcolor', fontColor);

    alert('Preferences saved!');
  });
});
