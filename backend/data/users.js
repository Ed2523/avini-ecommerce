import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Ed Chávez Ortiz",
    email: "ed@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: bcrypt.hashSync("12325", 10),
    isAdmin: false,
  },
  {
    name: "Diego Ramirez",
    email: "DiegoRm@gmail.com",
    password: bcrypt.hashSync("12325", 10),
    isAdmin: false,
  },
];

export default users;
