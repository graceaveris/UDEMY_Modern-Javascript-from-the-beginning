class Github {
    constructor() {
        this.client_id = 'd42763b13afa9251af0a';
        this.client_secret = '2daae3d09496ce9ccb921fd494a9f52ab96102d0';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        return {
            profile: profile,
            repos: repos // or in es6 you can just say profile once
        }
    }
}