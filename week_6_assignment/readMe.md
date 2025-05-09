# Week 6: Deployment & Final Submission – Theory

## Why Deployment Matters

Deployment is the process of making your web application accessible to real users on the internet. For a MERN (MongoDB, Express, React, Node.js) stack project, this means hosting both the frontend (React) and backend (Node.js/Express) on cloud platforms, ensuring users can interact with your app from anywhere. Deployment is a crucial final step in the development lifecycle, turning your local project into a live, production-ready service[3][4].

---

## Deployment Components

### 1. **Frontend Deployment (Vercel/Netlify)**
- **React apps** are built into static files (HTML, CSS, JS) that can be served quickly by cloud platforms.
- **Vercel** and **Netlify** are popular services for hosting frontend applications. They provide:
  - Easy integration with GitHub for continuous deployment.
  - Automatic builds and updates when you push changes.
  - Free SSL, global CDN, and custom domain support.

### 2. **Backend Deployment (Render/Railway)**
- **Node.js/Express** servers need to run persistently online.
- **Render** and **Railway** are modern cloud platforms that:
  - Allow you to deploy backend servers directly from your GitHub repository.
  - Manage environment variables (like database URIs and API keys) securely.
  - Provide public endpoints for your API, connecting your frontend to your backend.
- **MongoDB Atlas** is commonly used for hosting your database in the cloud.

### 3. **Project Submission**
- **GitHub** is used to share your project code and documentation.
- Submitting a well-documented repository allows others (instructors, employers, collaborators) to review, run, and understand your work.

---

## Typical Deployment Workflow

1. **Prepare your frontend:** Build your React app for production (`npm run build`).
2. **Deploy frontend:** Upload the build folder to Vercel or Netlify, connect your GitHub repo for automatic deployments.
3. **Prepare your backend:** Ensure your Express app is production-ready, with environment variables and cloud database connections.
4. **Deploy backend:** Push your backend code to GitHub, then deploy it on Render or Railway. Set up environment variables and connect to MongoDB Atlas.
5. **Connect frontend and backend:** Update API URLs in your frontend to point to the deployed backend.
6. **Submit your project:** Share your GitHub repository link, including clear documentation (README.md) on setup, usage, and deployment steps.

---

## Key Benefits

- **Accessibility:** Your app is available to anyone with the link.
- **Professionalism:** Demonstrates your ability to deliver real-world, production-ready projects.
- **Collaboration:** Makes it easy for others to review, test, and contribute to your code.

---

## Resources

- [Deploy React on Vercel](https://vercel.com/docs/concepts/projects/overview)
- [Deploy Node.js on Render](https://render.com/docs/deploy-node-express-app)

---

Deployment is the bridge between development and real-world usage, turning your MERN project into a live application ready for users and stakeholders.