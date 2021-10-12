class Github {
    constructor() {
        this.client_id = 'b937c472026de3b8b9bb';
        this.client_secret = 'e2b308e5d8f01ea3aae56d8cb01b464c865518c4';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }

    async getUser(user) {
        const userProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}$client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const ProfileData = await userProfile.json();
        const repos = await repoResponse.json();


        return {
            ProfileData,
            repos
        }


    }
}