export interface usersTableI {
    headers: any[];
    body: any[];
  }
  export interface usersOptionsI {
    page: number;
  }
  export const usersTableStrctureDD: usersTableI = {
    headers: [
      { name: 'Avatar' },
      { name: 'User ID' },
      { name: 'First Name' },
      { name: 'Last Name' },
      { name: 'Actions' },
    ],
    body: [],
  };
  
