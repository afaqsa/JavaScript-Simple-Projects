
const data =["&#xf2cb","&#xf2ca","&#xf2c9","&#xf2c8","&#xf2c7"]
const tempload = () => {
    const temp = document.getElementById('temp');
     temp.style.color = "#fff";
    temp.innerHTML = data[0];

    setTimeout(() => {
        temp.innerHTML = data[1];     
        temp.style.color = "#f8b627";
    }, 1000);
    setTimeout(() => {
        temp.innerHTML = data[2];     
    }, 2000);
    setTimeout(() => {
        temp.innerHTML = data[3];     
    }, 3000);
    setTimeout(() => {
        temp.style.color = "#d63031";
        temp.innerHTML = data[4];     
    }, 4000);
}



tempload();
setInterval(tempload, 5000);