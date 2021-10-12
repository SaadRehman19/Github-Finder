class UI {
    constructor() {
            this.profile = document.getElementById('profile');
        }
        //Display Profile
    showProfile(user) {
            console.log(user);
            this.profile.innerHTML = `
          <div class="card card-body mb-3">
            <div class="row">
              <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
              </div>
              <div class="col-md-9">
                <span style='background-color:black' class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span style='background-color:black' class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span style='background-color:black' class="badge badge-success">Followers: ${user.followers}</span>
                <span style='background-color:black' class="badge badge-info">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Website/Blog: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
              </div>
            </div>
          </div>
          <h3 class="page-heading mb-3">Latest Repos</h3>
          <div id="repos"></div>
        `;
        }
        //Show Alert
    showAlert(message, className) {
        //clear any remaining alert
        this.clearAlert();
        //create a div
        const div = document.createElement('div');
        //add a className
        div.className = className;
        //add text
        div.appendChild(document.createTextNode(message));
        //get parent 
        const container = document.querySelector('.searchContainer');
        //card element
        const card = document.querySelector('.search');
        //insert alert
        container.insertBefore(div, card);


        //add css 
        // document.getElementsByClassName('alert-danger').style.margin = 24 px;
        // document.getElementsByClassName(className).style.margin = 1 rem;
        var styles = `
          .alert-danger{
            margin:1rem;
            padding:1rem;
            color:#fff;
          }
          `
        var styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = styles;
        document.body.appendChild(styleSheet);

        //timeout
        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    //Show repos
    showRepos(repos) {
            let output = ``;
            // console.log(repos);
            repos.forEach(function(repo) {
                output += `
              <div class="card card-body mb-2">
              <div class="row">
                <div class="col-md-6">
                  <a href="${repo.html_url}">${repo.name}</a>
                </div>
                <div class="col-md-6">
                <span style='background-color:black' class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                <span style='background-color:black' class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                <span style='background-color:black' class="badge badge-success">Fork: ${repo.forks_count}</span>
                </div>
              </div>
            </div>
              `;

            });
            //output repos
            document.getElementById('repos').innerHTML = output;
        }
        //Cleart Alert Message
    clearAlert() {
        const currrentAlert = document.querySelector('.alert-danger');
        if (currrentAlert) {
            currrentAlert.remove();
        }
    }

    //Clear Profile
    clearProfile() {
        this.profile.innerHTML = '';
    }


}