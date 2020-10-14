import axios from 'axios';
import API from '../../config/API';

export const login = user => {
    return {
      type: 'LOGIN',
      payload: axios({
        method: 'POST',
        url: `${API.baseURL}/auth/login`,
        data: user,
      }),
    };
}