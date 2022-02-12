function getName (event) {
var unknownUser = document.getElementById('unknown_User');
var knownUser = prompt('Представтесь пожалуйста уважаемый...');
var badUser = 'Пользователь без имени';
    if (knownUser == null){
        unknownUser.innerHTML = badUser;
    } else {
        unknownUser.innerHTML = knownUser;
    }
}

