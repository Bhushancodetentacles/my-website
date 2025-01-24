import axios from 'axios'
import toast from 'react-hot-toast'
const theGraphUrl = import.meta.env.VITE_THEGRAPH_URL
const url = import.meta.env.VITE_API_URL

function useApi() {
    const theGraphRequest = async (data) => {
      const response = await axios.post(theGraphUrl, {query: data},{
        headers: {
            'Content-Type': 'application/json'
            }
      })
      return response.data
    }

    const api = axios.create({
      baseURL: url,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response) {
          toast.error(error.response.data.message);
          if (error.response.status === 401) {
            setTimeout(() => {
              window.location.href = '/reporting';
            }, 1000);
          }
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        return Promise.reject(error);
      }
    );
    
     const get = async (url, params = {}) => {
      try {
        const response = await api.get(url, { params });
        return response;
      } catch (error) {
        throw error;
      }
    };
    
     const post = async (url, data = {}) => {
      try {
        const response = await api.post(url, data);
        return response;
      } catch (error) {
        throw error;
      }
    };
      

  return {
    theGraphRequest,
    get,
    post
  }
}

export default useApi