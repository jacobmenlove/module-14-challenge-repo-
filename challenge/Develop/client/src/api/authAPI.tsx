import axios from 'axios';
import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    
    const response = await axios.post('/auth/login', userInfo);

    console.log(response);
    

    return response.data.token;
  } catch (error) {
    
    console.error('Login failed:', error);
    throw new Error('Invalid username or password');
  }
};

export { login };
