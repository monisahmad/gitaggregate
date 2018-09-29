import databaseRef from '../config/firebase';
import { githubApi } from '../config/apiRoutes';

const fetchData = async (username) => {
  const response = await fetch(`${githubApi}${username}`);
  const data = await response.json();
  if (data.message === 'Not Found') {
    return false;
  }
  const formattedDate = new Date(data.created_at).toLocaleDateString('en-US');
  const dataSource = {
    key: data.node_id,
    username: data.login,
    name: data.name,
    public_repos: data.public_repos,
    public_gists: data.public_gists,
    followers: data.followers,
    following: data.following,
    created_at: formattedDate,
  };
  try {
    await databaseRef.push(dataSource);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default fetchData;
