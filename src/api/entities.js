// Mock entities for local development without Base44 backend
export const User = {
  login: async (credentials) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      data: {
        success: true,
        user: {
          id: 'mock-user-id',
          email: credentials.email,
          name: 'Mock User'
        },
        token: 'mock-jwt-token'
      }
    };
  },
  logout: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      data: {
        success: true,
        message: 'Erfolgreich abgemeldet (Mock)'
      }
    };
  },
  register: async (userData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      data: {
        success: true,
        user: {
          id: 'mock-user-id',
          email: userData.email,
          name: userData.name
        },
        token: 'mock-jwt-token'
      }
    };
  },
  getCurrentUser: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      data: {
        success: true,
        user: {
          id: 'mock-user-id',
          email: 'mock@example.com',
          name: 'Mock User'
        }
      }
    };
  }
};