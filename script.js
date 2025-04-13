document.addEventListener("DOMContentLoaded",function(){
    const buttonlinks ={
        LinkedIn: "https://www.linkedin.com/in/musawenkosi-mnanzana-71349b159",
        GitHub: "https://github.com/Moose05",
        frontendmentor:"https://www.frontendmentor.io/profile/Moose05",
        Instagram:"https://www.instagram.com/kepturedsnaps?igsh=OGhnMzVlaDZwcHZ6&ut-m_source=qr",
        TikTok:"https://www.TikTok.com/@wenkosii?_t=ZM-8vUoTYd1xyf&_r=1"
    };

    Object.keys(buttonlinks).forEach(function (id){
        const button = document.getElementById(id);
        if (button){

            button.addEventListener("click",function(){
                window.open(buttonlinks[id], "_blank");
            });
        }
    });
});