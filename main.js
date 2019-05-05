window.onload = (evt) => {
    var button = document.getElementById("buttom");
    var items1 = document.getElementById("items1");
    var items2 = document.getElementById("items2");

    var center = true;
    button.onclick = (evt) => {
        if (center == true) {
            center = false;

            button.style.animationName = "buttomFadeOut";
            items1.style.animationName = "items1FadeOut"
            button.addEventListener("animationend", ()=>{
                button.style.left = "220px";
                button.style.backgroundImage = "url(arrow-left.png)"
                button.style.animationTimingFunction = "ease-out"
                button.style.animationName = "buttomFadeIn"
                items1.style.display = "none";
                items2.style.display = "block";
                items2.style.animationName = "ease-out";
                items2.style.animationName = "items1FadeIn"
            })
            

        } else {
            center = true;

            button.style.animationName = "buttomFadeOut";
            items2.style.animationName = "items1FadeOut"
            button.addEventListener("animationend", ()=>{
                button.style.left = "0px";
                button.style.backgroundImage = "url(plus.png)"
                button.style.animationTimingFunction = "ease-out"
                button.style.animationName = "buttomFadeIn"
                items1.style.display = "block";
                items2.style.display = "none";
                items1.style.animationName = "ease-out";
                items1.style.animationName = "items1FadeIn"
            })
        }
    }



}