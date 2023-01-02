var ohdytext = document.getElementById('ohdytext');
ohdytext.addEventListener('click', opengithub);

var clicktomail = document.getElementById('clicktomail');
clicktomail.addEventListener('click', mailme);

var clicktodiscord = document.getElementById('clicktodiscord');
clicktodiscord.addEventListener('click', discordme);

var clicktoreddit = document.getElementById('clicktoreddit');
clicktoreddit.addEventListener('click', redditme);

var clicktohashnode = document.getElementById('clicktohashnode');
clicktohashnode.addEventListener('click', hashnodeme);

var clicktoyoutube = document.getElementById('clicktoyoutube');
clicktoyoutube.addEventListener('click', youtubeme);

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

function redditme()
{
    open("https://reddit.com/u/ohdy518")
}

function hashnodeme()
{
    open("ohdy518.hashnode.dev")
}

function youtubeme()
{
    open("https://youtube.com/@ohdy518")
}