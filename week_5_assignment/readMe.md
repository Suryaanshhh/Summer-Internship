# Week 5: Advanced Features & Optimization (MERN Stack)

This week focuses on integrating advanced functionality into the MERN stack application, including:

- ✅ Role-Based Authentication (Admin/User)
- ✅ File Upload using Multer and Cloudinary
- ✅ Performance & Security Best Practices

---

## 🔐 Role-Based Authentication (Admin/User)

### What is RBAC?
Role-Based Access Control (RBAC) restricts access to parts of the application based on the user's assigned role (e.g., admin or user). This helps maintain proper permissions and system security.

### Key Concepts:
- Add a `role` field in the user model (default to "user").
- Protect specific routes using middleware that checks the user’s role.
- Only authorized roles can access or perform sensitive operations (e.g., delete, manage users, view analytics).

---

## 📤 File Upload with Multer & Cloudinary

### Purpose:
Enable users to upload images or documents, which are then stored in a cloud-based service (Cloudinary) instead of the local server.

### Tools Used:
- **Multer**: Handles multipart/form-data uploads from the client.
- **Cloudinary**: Stores and serves uploaded files (e.g., images, PDFs).

### Workflow:
1. User uploads a file through the frontend.
2. The server processes it using Multer and uploads it to Cloudinary.
3. Cloudinary returns a URL that is stored in the database and used in the frontend.

---

## 🚀 Performance & Security Best Practices

### Security:
- Use environment variables (`.env`) to protect secrets (e.g., JWT secret, DB URI).
- Sanitize user inputs to prevent NoSQL injection and XSS.
- Use HTTP headers middleware (e.g., Helmet) for basic security hardening.
- Implement rate limiting to prevent brute-force attacks.
- Hash user passwords with a secure algorithm (e.g., bcrypt).

### Performance:
- Optimize API response time using pagination and query filters.
- Avoid blocking operations inside routes (use async functions).
- Use compression for faster HTTP responses.
- Minimize payload sizes sent to and from the client.

---

## 🔁 Common Use Cases

| Feature           | Description                                         |
|-------------------|-----------------------------------------------------|
| Role-Based Access | Different actions allowed for Admin vs User roles  |
| File Upload       | Upload and access files/images using Cloudinary     |
| JWT Auth          | Authenticate users and protect routes               |
| Input Validation  | Prevent invalid or malicious input from users       |

---

## 📚 Resources

- [JWT.io - JSON Web Tokens](https://jwt.io/)
- [Multer Docs](https://expressjs.com/en/resources/middleware/multer.html)
- [Cloudinary Docs](https://cloudinary.com/documentation)
- [OWASP Security Practices](https://owasp.org/www-project-top-ten/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

## ✅ Summary

By the end of Week 5, your MERN application includes critical features found in real-world production apps:

- Fine-grained **access control** with RBAC
- **Cloud-integrated file uploads**
- Practical **security enhancements**
- Better **performance optimization**

These upgrades prepare your app for a smoother user experience and safer deployment in public environments.

