function isHeroku()
{
    // Rudimentary check to see if we are running on Heroku. Should provide a more flexible config.
    return window.location.hostname.indexOf('herokuapp.com') > 0;
}

export let SERVER_URL = isHeroku() ? "/" : "labs/filter/?nearby=true&empty=true&latitude=55.9441844&longitude=-3.1900258999999997";