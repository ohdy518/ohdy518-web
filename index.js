var ohdytext = document.getElementById('ohdytext');
ohdytext.addEventListener('click', opengithub);

var clicktomail = document.getElementById('clicktomail');
clicktomail.addEventListener('click', mailme);

var clicktodiscord = document.getElementById('clicktodiscord');
clicktodiscord.addEventListener('click', discordme);

function opengithub()
{
    open("https://github.com/ohdy518")
}
function mailme()
{
    open("mailto:ohdy518@gmail.com")
}

function discordme()
{
    alert("Sorry, my discord account is not public yet. Please email me instead. ")
}