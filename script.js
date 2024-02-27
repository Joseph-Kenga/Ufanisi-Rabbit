// get the button
topButton = document.getElementById('mybtn')

//when the user scroll down by 20px, show the button
window.onscroll = function() {
    functionScroll()
}

function functionScroll(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        topButton.style.display = 'block';
    }
    else
    {
        topButton.style.display = 'none';
    }
}

//when user click the button, it goes up
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}