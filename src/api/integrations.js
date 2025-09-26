// Mock integrations for local development without Base44 backend
export const Core = {
  InvokeLLM: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      data: {
        success: true,
        response: 'Mock LLM Response',
        id: Math.random().toString(36).substr(2, 9)
      }
    };
  },
  SendEmail: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      data: {
        success: true,
        message: 'E-Mail erfolgreich gesendet (Mock)',
        id: Math.random().toString(36).substr(2, 9)
      }
    };
  },
  UploadFile: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      data: {
        success: true,
        url: 'https://example.com/mock-file.jpg',
        id: Math.random().toString(36).substr(2, 9)
      }
    };
  },
  GenerateImage: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {
      data: {
        success: true,
        url: 'https://example.com/mock-generated-image.jpg',
        id: Math.random().toString(36).substr(2, 9)
      }
    };
  },
  ExtractDataFromUploadedFile: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    return {
      data: {
        success: true,
        extractedData: 'Mock extracted data',
        id: Math.random().toString(36).substr(2, 9)
      }
    };
  },
  CreateFileSignedUrl: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      data: {
        success: true,
        signedUrl: 'https://example.com/mock-signed-url',
        id: Math.random().toString(36).substr(2, 9)
      }
    };
  },
  UploadPrivateFile: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      data: {
        success: true,
        url: 'https://example.com/mock-private-file.jpg',
        id: Math.random().toString(36).substr(2, 9)
      }
    };
  }
};

export const InvokeLLM = Core.InvokeLLM;
export const SendEmail = Core.SendEmail;
export const UploadFile = Core.UploadFile;
export const GenerateImage = Core.GenerateImage;
export const ExtractDataFromUploadedFile = Core.ExtractDataFromUploadedFile;
export const CreateFileSignedUrl = Core.CreateFileSignedUrl;
export const UploadPrivateFile = Core.UploadPrivateFile;






