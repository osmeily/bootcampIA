let githubUrl = 'https://api.github.com/users/';
let githubUsers = ['ielectro13', 'osmeily', 'trueqo', 'elcabal', 'jdavidcor23'];
let githubData = document.querySelector('#gitHub-data');

window.addEventListener('DOMContentLoaded', () => {
    githubUsers.forEach((user) => {
        fetch(`${githubUrl}${user}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                githubData.innerHTML += `
                    <div class="flex flex-col p-5 border-2 min-w-[300px] items-center justify-center w-3/5 md:w-1/5 transform transition duration-500 md:hover:bg-zinc-700/50 md:hover:scale-110">
                        <img src="${data.avatar_url}" alt="avatar" class="w-16 h-16 rounded-full md:w-20 md:h-20">
                        <h5 class="text-lg text-center md:text-xl">${data.name}</h5>
                        <a href="${data.html_url}" class="bg-zinc-600 p-2 rounded-lg">Github <i class="fa-brands fa-github"></i></a>
                    </div>
                `;
            })
            .catch((error) => console.log(error))
    })
})