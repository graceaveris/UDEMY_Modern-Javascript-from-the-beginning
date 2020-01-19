//Init github / ui
const github = new Github;
const ui = new UI;

// search input
const searchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;
    if (userText) {
        github.getUser(userText)
        .then(data => {
          if(data.profile.message === 'Not Found') {
            //show alert
            ui.showAlert('User Not Found', 'alert alert-danger')
          } else {
            //show profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
          }
        })
    } else {
    ui.clearProfile()
    }
});