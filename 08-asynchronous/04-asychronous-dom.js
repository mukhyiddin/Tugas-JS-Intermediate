
const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");


const getGitHubUser = async (username) => {
  try {
    if (!username) {
      return null;
    }
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if (data?.login) {
      return data;
    } else {
      return 'Not Found';
    }
  } catch (error) {
    console.log('error');
    return error;
  }
};

const printGitHubUser = async () => {
  const mojombo = await getGitHubUser('mojombo');
  const orange = await getGitHubUser('');
  const rudiTabuti = await getGitHubUser('rudi.tabuti');

  console.log(mojombo);
  console.log(orange);
  console.log(rudiTabuti);
};

printGitHubUser();