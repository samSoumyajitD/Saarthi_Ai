# SaarthiAI 🎓✨  
**AI-Powered Personalized Learning Platform**  

In today’s fast-paced world, learning should be adaptive, not one-size-fits-all. Yet, many learners struggle with directionless learning, rigid courses, and a lack of real-time feedback. That’s where **SaarthiAI** comes in!

Developed for the **Amdocs GenAI Hackathon**, SaarthiAI is an AI-powered personalized learning platform designed to help students and professionals achieve their goals efficiently.



## 🌟 Why SaarthiAI?

Traditional learning platforms force users into rigid curricula. SaarthiAI revolutionizes education with:
- **Adaptive learning paths** powered by RAG architecture
- **Real-time AI tutoring**
- **Dynamic skill assessment** through intelligent quizzes
- **Career-focused roadmaps** tailored to individual goals

## 🚀 Features

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Roadmap Builder**     | Generates personalized learning paths using FAISS + Hugging Face embeddings |
| **Adaptive Quizzes**    | AI-generated assessments that evolve with user performance                  |
| **24/7 AI Tutor**       | AI-Powered chatbot for 24/7 support                        |
| **Progress Analytics**  | Visual dashboards tracking skill development and career readiness           |

## 🛠️ Tech Stack

**Frontend**  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

**Backend**  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

**AI/ML**  
![Hugging Face](https://img.shields.io/badge/Hugging%20Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)
![LangChain](https://img.shields.io/badge/LangChain-00A67E?style=for-the-badge)
![FAISS](https://img.shields.io/badge/FAISS-00C4CC?style=for-the-badge)

**Database**  
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## 📦 Installation

### Prerequisites
- Node.js v18+
- Python 3.10+
- MongoDB Atlas account

### Setup Instructions

1. **Clone Repository**
   ```
   git clone https://github.com/samSoumyajitD/Saarthi_Ai.git
   cd SaarthiAI
   ```
2. Backend Setup
   ```
   cd server
   npm install
   cp .env.example .env  # Update with your API keys
   ```
3. Frontend Setup
   ```
   cd client
   npm install
   ```
4. Run Application
   ```
   # In server directory
   npm run dev

   # In client directory (new terminal)
   npm start
   ```
### 🔧 Configuration
  Add these to your .env file:
```
# Hugging Face
HF_ACCESS_TOKEN=your_hf_token

# MongoDB
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/saarthiai

# LangChain
OPENAI_API_KEY=your_openai_key

# Groq Api Key
GROQ_API_KEY=your_groq_apikey
```

## 📚 API Documentation

**Base URL**: `http://localhost:5000/api/v1`

| Endpoint            | Method | Description                          |
|---------------------|--------|--------------------------------------|
| `/roadmap/generate` | POST   | Create personalized learning path    |
| `/quiz/assess`      | POST   | Evaluate quiz responses              |
| `/chat`             | POST   | Interact with AI tutor               |

---

## 🤝 Contributing

1. **Fork the project**  
   Click the "Fork" button at the top-right of the repository page.

2. **Create your feature branch**  
   ```
   git checkout -b feat/amazing-feature
   ```
3. **Commit changes**
   ```
   git commit -m 'Add amazing feature'
   ```
4. **Push to branch**
   ```
   git push origin feat/amazing-feature
   ```
5. **Open a Pull Request**
Navigate to the original repository and click "New Pull Request".

## ✨ Acknowledgments

- Amdocs GenAI Hackathon organizers for the platform and support.

- Hugging Face for open-source models and tools.

- LangChain team for RAG implementation frameworks.

- MongoDB Atlas for database infrastructure.


