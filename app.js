//init Github
const github = new Github;
//init ui
const ui = new UI;

//search input
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
    //get inputText
    const userText = e.target.value;
    if (userText !== '') {
        // console.log(userText);
        //make http call
        github.getUser(userText)
            .then(data => {
                if (data.ProfileData.message == 'Not Found') {
                    //show alert
                    ui.showAlert('User Not Found', 'aler alert-danger');
                } else {
                    //show Profile
                    ui.showProfile(data.ProfileData);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        //clear Profile
        ui.clearProfile();
    }
});