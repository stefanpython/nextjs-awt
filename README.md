# 🚀 Next.js Authentication with NextAuth.js, PostgreSQL & Prisma

This is a simple learning project that demonstrates user authentication (login & signup) using **Next.js**, **NextAuth.js**, **PostgreSQL**, **Prisma**, and **Docker**.

## 🛠️ Technologies Used

- ⚛️ **Next.js** – React framework for full-stack applications
- 🔐 **NextAuth.js** – Authentication library for Next.js
- 🗄️ **PostgreSQL** – Relational database
- 📦 **Prisma** – ORM for database interactions
- 🐳 **Docker** – Containerized development environment

---

## 📌 Features

✅ User Signup  
✅ User Login  
✅ Authentication with NextAuth.js  
✅ PostgreSQL database with Prisma ORM  
✅ Docker support for database container

---

## 🏗️ Getting Started

### 🔧 Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### 🚀 Installation

1️⃣ Clone this repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Set up the environment variables:

Create a `.env` file in the root directory and add:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

4️⃣ Run the PostgreSQL container with Docker:

```bash
docker-compose up -d
```

5️⃣ Run the Prisma migrations:

```bash
npx prisma migrate dev --name init
```

6️⃣ Start the development server:

```bash
npm run dev
```

---

## 📂 Project Structure

```
/your-repo
 ├── /prisma          # Prisma schema and migrations
 ├── /pages           # Next.js pages
 │   ├── /api/auth    # NextAuth.js authentication routes
 ├── /components      # Reusable React components
 ├── /lib             # Utility functions and helpers
 ├── .env             # Environment variables
 ├── docker-compose.yml  # Docker configuration
 ├── package.json     # Project dependencies
 └── README.md        # Documentation
```

---

## 📝 Notes

- Uses **bcrypt** for password hashing.
- **Prisma** handles database interactions.
- **NextAuth.js** manages authentication.

---

## 🎯 Future Improvements

🔹 OAuth authentication (Google, GitHub)  
🔹 Profile management

---

## 🏆 Acknowledgments

Thanks to **Next.js**, **Prisma**, **NextAuth.js**, and the open-source community!

---

## 📜 License

This project is for learning purposes only. Feel free to modify and experiment!

---

Happy Coding! 🚀
