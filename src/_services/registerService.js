const API_URL = 'http://127.0.0.1:8000/api'; // Remplacez par l'URL de votre backend

export const registerService = {
  async register(email, password, nom, prenom, sexe, telephone, role, status) {
    try {
      const response = await fetch(`${API_URL}/Register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email, password, nom, prenom, sexe, telephone, role, status }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);

      return data;
    } catch (error) {
      throw error;
    }
  },
};

