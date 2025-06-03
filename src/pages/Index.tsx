
import { useEffect, useState } from "react";
import { Mail, Github, Linkedin, Download, ExternalLink, GraduationCap, Award, Code, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TypewriterText from "@/components/TypewriterText";
import ProjectCard from "@/components/ProjectCard";
import SkillTag from "@/components/SkillTag";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import ProfileSection from "@/components/ProfileSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [showRocket, setShowRocket] = useState(false);

  useEffect(() => {
    // Rocket animation on page load
    setTimeout(() => setShowRocket(true), 500);
    setTimeout(() => setShowRocket(false), 3000);

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "achievements", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const projects = [
    {
      title: "🔍 VisionFeel",
      description: "AI-powered web app that combines object detection (using YOLO and OpenCV) and sentiment analysis to analyze uploaded images and generate detailed emotional and visual insights.",
      tech: ["Python", "Flask", "OpenCV", "YOLOv5", "Hugging Face"],
      github: "https://github.com/sanjana71006/VisionFeel",
      demo: "#"
    },
    {
      title: "🧠 Mind2Image",
      description: "A generative AI project that uses Stable Diffusion and Transformers to turn creative text prompts into stunning AI-generated images.",
      tech: ["Python", "Hugging Face", "Transformers", "Diffusers"],
      github: "https://github.com/sanjana71006/Mind2Image",
      demo: "#"
    },
    {
      title: "🗣️ Chatterly",
      description: "A chatbot app integrating Anthropic Claude and Google Gemini APIs with conversational graph building and real-time NLP visualization.",
      tech: ["Python", "Langchain", "Graphviz", "Jupyter"],
      github: "https://github.com/sanjana71006/Chatterly",
      demo: "#"
    },
    {
      title: "📽️ Vid2TextQ-A",
      description: "Extracts text from video frames using OCR and answers questions based on content using NLP. Enables smart video Q&A functionality.",
      tech: ["Python", "OpenCV", "Tesseract", "Transformers"],
      github: "https://github.com/sanjana71006/Vid2TextQ-A-",
      demo: "#"
    },
    {
      title: "🧮 Voice Calculator",
      description: "A voice-controlled calculator built in Python that converts speech input into text and performs arithmetic operations.",
      tech: ["Python", "SpeechRecognition", "pyttsx3"],
      github: "https://github.com/sanjana71006/Voice-calculator",
      demo: "#"
    },
    {
      title: "🧬 Kidney Disease Prediction",
      description: "Machine learning model to predict chronic kidney disease using patient medical data and biomarker analysis.",
      tech: ["Python", "Pandas", "Scikit-learn"],
      github: "https://github.com/sanjana71006/kidney-chronic-disease-prediction",
      demo: "#"
    }
  ];

  const skills = {
    "💻 Programming": ["C", "Java", "Python", "JavaScript", "HTML", "CSS"],
    "⚙️ Frameworks": ["React", "Node.js", "Tailwind CSS", "Firebase"],
    "🛠️ Tools": ["Git", "GitHub", "OpenCV", "TensorFlow"],
    "🚀 Soft Skills": ["Communication", "Teamwork", "Critical Thinking", "Time Management"]
  };

  return (
    <div className={`min-h-screen transition-all duration-500 custom-cursor ${darkMode ? 'dark bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' : 'bg-gradient-to-br from-purple-400 via-pink-500 to-red-500'}`}>
      <ParticleBackground />
      <Navigation activeSection={activeSection} />
      
      {/* Rocket Animation */}
      {showRocket && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
          <div className="text-6xl animate-rocket">🚀</div>
        </div>
      )}
      
      {/* Dark Mode Toggle */}
      <Button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/25"
        size="icon"
      >
        {darkMode ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5 text-white" />}
      </Button>
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center text-white max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Profile Section */}
            <ProfileSection />
            
            {/* Introduction */}
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/25">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent animate-fade-in sparkle-text">
                Hi, I'm SANJANA PRIYA DARSHINI 👩‍💻
              </h1>
              <div className="text-xl md:text-2xl mb-6 h-16">
                <TypewriterText 
                  texts={[
                    "Aspiring Software Developer 🚀",
                    "Passionate Learner 📡",
                    "Creative Thinker 🧠",
                    "AI Enthusiast 🤖"
                  ]}
                />
              </div>
              <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in sparkle-text" style={{ animationDelay: '0.5s' }}>
                I love building meaningful digital experiences through clean code and smart design. ⚙️
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="enhanced-button bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transform transition-all duration-300 shadow-lg rounded-xl"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me 📧
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="enhanced-button border-white/30 text-white transition-all duration-300 shadow-lg rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Resume 📄
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center animate-fade-in sparkle-text">👩‍💻 About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6">
                <p className="text-lg opacity-90 transform translate-y-4 animate-fade-in sparkle-text" style={{ animationDelay: '0.2s' }}>
                  I'm a passionate B.Tech Computer Science and Engineering student at Vignan's University. 
                  I enjoy turning ideas into reality through programming and design. 🎨
                </p>
                <p className="text-lg opacity-90 transform translate-y-4 animate-fade-in sparkle-text" style={{ animationDelay: '0.4s' }}>
                  I'm currently exploring web development, AI, machine learning, and UI/UX design. 
                  I love collaborating on projects that challenge my thinking. 🧠
                </p>
                <p className="text-lg opacity-90 transform translate-y-4 animate-fade-in sparkle-text" style={{ animationDelay: '0.6s' }}>
                  My goal is to grow into a role where I can contribute to impactful, real-world solutions. 🌍
                </p>
              </div>
              <Card className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-8 w-8 text-pink-300 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white sparkle-text">🎓 Education</h3>
                      <p className="text-pink-200">B.Tech in CSE</p>
                    </div>
                  </div>
                  <p className="text-white opacity-90 mb-2 sparkle-text">
                    Vignan's Foundation for Science, Technology & Research
                  </p>
                  <p className="text-pink-200 mb-2">📅 2023 – 2027</p>
                  <p className="text-white font-semibold">🎯 CGPA: 9.06</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center animate-fade-in sparkle-text">🚀 Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center sparkle-text">⚙️ Skills & Technologies</h2>
            
            {/* Skill Tags */}
            <div className="space-y-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center sparkle-text">
                    <Code className="h-5 w-5 mr-2 text-pink-300" />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, index) => (
                      <SkillTag key={index} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/25">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center sparkle-text">🏆 Achievements & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "🥇 1st Place Hackathon", description: "EduBot project at VFSTR associated with byteXL" },
                { title: "🥉 3rd Prize CIS' SOIREE SCINTILLA", description: "Technical competition at RVR and JC College" },
                { title: "📜 Cambridge English PET Certification", description: "B1 Level English Proficiency" },
                { title: "🎓 NPTEL Elite Certification", description: "Principles of Management & Joy of Computing using Python" },
                { title: "🎬 Video Editing Recognition", description: "Two certificates for motivational and TED talk video batches" },
                { title: "💻 Code Fiesta Participant", description: "Active participation in coding competitions" }
              ].map((achievement, index) => (
                <Card key={index} className="backdrop-blur-md bg-white/5 border-white/20 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Award className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300 sparkle-text">{achievement.title}</h3>
                        <p className="text-pink-200 opacity-90">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 sparkle-text">📞 Let's Connect!</h2>
            <p className="text-xl text-white opacity-90 mb-8 sparkle-text">
              I'm always open to discussing new opportunities and interesting projects. 🤝
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button 
                size="lg" 
                className="enhanced-button bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg w-full rounded-xl"
              >
                <Mail className="mr-2 h-5 w-5 flex-shrink-0" />
                <span className="truncate">sanjana71006@gmail.com</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="enhanced-button border-white/30 text-white transition-all duration-300 shadow-lg w-full rounded-xl bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600"
              >
                <Linkedin className="mr-2 h-5 w-5 flex-shrink-0" />
                <span className="truncate">LinkedIn</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="enhanced-button border-white/30 text-white transition-all duration-300 shadow-lg w-full sm:col-span-2 lg:col-span-1 rounded-xl bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-black"
              >
                <Github className="mr-2 h-5 w-5 flex-shrink-0" />
                <span className="truncate">GitHub</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-white opacity-75">
        <p className="sparkle-text">&copy; 2024 Sanjana Priya Darshini. Built with 💖 and React. 🚀</p>
      </footer>
    </div>
  );
};

export default Index;
