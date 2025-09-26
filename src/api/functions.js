// Mock function for local development without Base44 backend
export const sendContactEmail = async (data) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock successful response
  return {
    data: {
      success: true,
      message: 'Nachricht erfolgreich gesendet (Mock)',
      id: Math.random().toString(36).substr(2, 9)
    }
  };
};

