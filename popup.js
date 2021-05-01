function getlinks() {
    if (localStorage.getItem('web-link')&&localStorage.getItem('web-link').length > 0)
        document.getElementById('web-link').href = localStorage.getItem('web-link');
        if (localStorage.getItem('yt-link')&&localStorage.getItem('yt-link').length > 0)
        document.getElementById('yt-link').href = localStorage.getItem('yt-link');
        if (localStorage.getItem('fb-link')&&localStorage.getItem('fb-link').length > 0)
        document.getElementById('fb-link').href = localStorage.getItem('fb-link');
        if (localStorage.getItem('twitter-link')&&localStorage.getItem('twitter-link').length > 0)
        document.getElementById('twitter-link').href = localStorage.getItem('twitter-link');
        if (localStorage.getItem('insta-link')&&localStorage.getItem('insta-link').length > 0)
        document.getElementById('insta-link').href = localStorage.getItem('insta-link');
        if (localStorage.getItem('git-link')&&localStorage.getItem('git-link').length > 0)
        document.getElementById('git-link').href = localStorage.getItem('git-link');
        if (localStorage.getItem('LinkedIn-link')&&localStorage.getItem('LinkedIn-link').length > 0)
        document.getElementById('LinkedIn-link').href = localStorage.getItem('LinkedIn-link');
        if (localStorage.getItem('medium-link')&&localStorage.getItem('medium-link').length > 0)
        document.getElementById('medium-link').href = localStorage.getItem('medium-link');
}

getlinks();
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("customise-btn");

// Get the <span> element that closes the modal
var closebtn = document.getElementById("close");

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closebtn.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var save = document.getElementById("save");

save.onclick = function () {
    if (document.getElementById('web').value.length > 0)
        localStorage.setItem("web-link", document.getElementById('web').value);
    if (document.getElementById('yt').value.length > 0)
        localStorage.setItem("yt-link", document.getElementById('yt').value);
    if (document.getElementById('LinkedIn').value.length > 0)
        localStorage.setItem("LinkedIn-link", document.getElementById('LinkedIn').value);
    if (document.getElementById('fb').value.length > 0)
        localStorage.setItem("fb-link", document.getElementById('fb').value);
    if (document.getElementById('twitter').value.length > 0)
        localStorage.setItem("twitter-link", document.getElementById('twitter').value);
    if (document.getElementById('git').value.length > 0)
        localStorage.setItem("git-link", document.getElementById('git').value);
    if (document.getElementById('insta').value.length > 0)
        localStorage.setItem("insta-link", document.getElementById('insta').value);
    if (document.getElementById('medium').value.length > 0)
        localStorage.setItem("medium-link", document.getElementById('medium').value);
        modal.style.display = "none";
        getlinks();
}

