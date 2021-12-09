// const lastCommit = (userName) => {
//     fetch('https://api.github.com/users/${userName}/events', {headers: {'Authorization': GITHUB_KEY}})
//         .then(response => response.json ())
//         .then(data=> console.log(data)
//         );
// }
// lastCommit("jozelle-mares");
const lastCommit
fetch('https://api.github.com/users', {headers: {'Authorization': `token ${GITHUB_KEY}`})
    .then(response => response.json())
    .then(users => {
        users.forEach( userObj => {
            // do something with each username
            console.log(userObj.login);
        })
    })
    .catch(error => console.error(error));