interface Admin {
  id: string;
  role: string;
}

interface User {
  email: string;
}

function isAdmin(user: Admin | User): user is Admin {
  return (<Admin>user).role !== undefined;
}

function redirect(user: Admin | User) {
  if ("role" in user) {
    user; // Admin
  } else {
    user; // User
  }
}
