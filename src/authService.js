import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/user';


export const signin = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    const token = response.data.body.token;
    return {token};
  } catch (error) {
    console.error('Erreur lors de la connexion:', error.response?.data?.message || error.message);
    throw error; 
  }
};

export const getUserProfile = async (token) => { 
  try{
    const response = await axios.post(
      `${API_URL}/profile`,
      {},
      {
        headers : {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération du profil utilisateur:', error.response?.data?.message || error.message);
    throw error; 
  }
}

export const updateUserProfile = async (token,userData) => {
  try{
    const response = await axios.put(
      `${API_URL}/profile`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du profil:", error.response?.data?.message || error.message);
    throw error;
  }
}


