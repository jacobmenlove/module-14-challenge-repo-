//import jwtDecode, { JwtPayload } from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  exp?: number; // Optional, adjust according to your token's structure
  iat?: number; // Optional
  username?: string; // Optional, adjust according to your needs
}

class AuthService {
 
  getProfile() {
    const token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
    return null;
  }

 
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); 
  }
  
  
  isTokenExpired(token: string) {
    try {
      const decodedToken = jwtDecode<JwtPayload>(token);
      if (decodedToken.exp && decodedToken.exp < Date.now() / 1000) {
        return true; 
      }
      return false; 
    } catch (error) {
      return true; 
    }
  }

  
  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  
  login(idToken: string) {
    localStorage.setItem('jwt', idToken);
    window.location.assign('/');
  }

  
  logout() {
    localStorage.removeItem('jwt');
    window.location.assign('/login'); 
  }
}

export default new AuthService();
