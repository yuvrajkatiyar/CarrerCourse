import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";



const questions = [
  {
    id: 1,
    question: "What interests you most?",
    options: [
      {
        value: "building-things",
        label: "Building websites and applications",
        icon: "🏗️",
      },
      {
        value: "data-analysis",
        label: "Analyzing data and finding insights",
        icon: "📊",
      },
      {
        value: "creative-design",
        label: "Creating beautiful designs and experiences",
        icon: "🎨",
      },
      {
        value: "problem-solving",
        label: "Solving complex technical problems",
        icon: "🧩",
      },
      {
        value: "business",
        label: "Growing businesses and marketing",
        icon: "📈",
      },
    ],
  },

  {
    id: 2,
    question: "What is your experience level?",
    options: [
      {
        value: "beginner",
        label: "Complete Beginner",
        icon: "🌱",
      },
      {
        value: "intermediate",
        label: "Intermediate",
        icon: "📚",
      },
      {
        value: "advanced",
        label: "Advanced",
        icon: "🚀",
      },
    ],
  },

  {
    id: 3,
    question: "What is your main goal?",
    options: [
      {
        value: "career-change",
        label: "Change Career",
        icon: "🔄",
      },
      {
        value: "upskill",
        label: "Learn New Skills",
        icon: "⬆️",
      },
      {
        value: "freelance",
        label: "Freelancing",
        icon: "💼",
      },
    ],
  },
];



const careerPaths = {
  "building-things": {
    title: "Web Developer",
    description:
      "Build websites and web applications.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
    ],
  },

  "data-analysis": {
    title: "Data Scientist",
    description:
      "Analyze data and build ML models.",
    skills: [
      "Python",
      "Machine Learning",
      "SQL",
    ],
  },

  "creative-design": {
    title: "UI/UX Designer",
    description:
      "Design beautiful user experiences.",
    skills: [
      "Figma",
      "UI Design",
      "UX Research",
    ],
  },

  "problem-solving": {
    title: "Cloud Engineer",
    description:
      "Manage cloud infrastructure.",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },

  business: {
    title: "Digital Marketer",
    description:
      "Grow businesses online.",
    skills: [
      "SEO",
      "Marketing",
      "Analytics",
    ],
  },
};



export default function CareerQuizPage() {

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answers, setAnswers] =
    useState({});

  const [showResult, setShowResult] =
    useState(false);

  const [career, setCareer] =
    useState(null);



  const currentAnswer =
    answers[questions[currentQuestion].id];



  const handleAnswer = (value) => {

    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: value,
    });
  };



  const handleNext = () => {

    if (
      currentQuestion <
      questions.length - 1
    ) {

      setCurrentQuestion(
        currentQuestion + 1
      );

    } else {

      const result =
        careerPaths[answers[1]];

      setCareer(result);

      setShowResult(true);
    }
  };



  const handlePrevious = () => {

    if (currentQuestion > 0) {

      setCurrentQuestion(
        currentQuestion - 1
      );
    }
  };



  const handleRestart = () => {

    setCurrentQuestion(0);

    setAnswers({});

    setShowResult(false);

    setCareer(null);
  };



  // RESULT PAGE

  if (showResult && career) {

    return (

      <div className="min-h-screen bg-gray-100 py-12">

        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white rounded-2xl p-8 shadow">

            <h1 className="text-4xl font-bold mb-4">
              {career.title}
            </h1>

            <p className="text-black mb-6">
              {career.description}
            </p>



            <h2 className="text-xl font-semibold mb-4">
              Skills To Learn
            </h2>

            <div className="flex flex-wrap gap-3 mb-8">

              {career.skills.map((skill) => (

                <span
                  key={skill}
                  className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg"
                >
                  {skill}
                </span>

              ))}

            </div>



            <div className="flex gap-4">

              <Link
                to="/courses"
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl"
              >
                Browse Courses
              </Link>

              <button
                onClick={handleRestart}
                className="px-6 py-3 border rounded-xl"
              >
                Restart Quiz
              </button>

            </div>

          </div>

        </div>

      </div>
    );
  }



  // QUIZ PAGE

  return (

    <div className="min-h-screen bg-gray-100 py-12">

      <div className="max-w-3xl mx-auto px-6">

        <div className="bg-white rounded-2xl p-8 shadow">

          <h1 className="text-3xl font-bold mb-2 text-center">
            Career Quiz
          </h1>

          <p className="text-gray-500 text-center mb-8">
            Find your ideal career path
          </p>



          <div className="mb-8">

            <div className="flex justify-between mb-2">

              <span>
                Question {currentQuestion + 1}
              </span>

              <span>
                {questions.length}
              </span>

            </div>



            <div className="w-full h-2 bg-gray-200 rounded-full">

              <div
                className="h-2 bg-indigo-600 rounded-full"
                style={{
                  width: `${
                    ((currentQuestion + 1) /
                      questions.length) *
                    100
                  }%`,
                }}
              ></div>

            </div>

          </div>



          <h2 className="text-2xl font-semibold mb-8">

            {
              questions[currentQuestion]
                .question
            }

          </h2>



          <div className="space-y-4 mb-8">

            {questions[
              currentQuestion
            ].options.map((option) => (

              <button
                key={option.value}
                onClick={() =>
                  handleAnswer(option.value)
                }
                className={`w-full p-4 border-2 rounded-xl text-left transition ${
                  currentAnswer ===
                  option.value
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-gray-200"
                }`}
              >

                <div className="flex items-center gap-4">

                  <span className="text-2xl">
                    {option.icon}
                  </span>

                  <span className="font-medium">
                    {option.label}
                  </span>

                  {currentAnswer ===
                    option.value && (

                    <CheckCircle className="ml-auto text-indigo-600" />

                  )}

                </div>

              </button>

            ))}

          </div>



          <div className="flex justify-between">

            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-3 border rounded-xl disabled:opacity-50 flex items-center gap-2"
            >

              <ArrowLeft className="w-4 h-4" />

              Previous

            </button>



            <button
              onClick={handleNext}
              disabled={!currentAnswer}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl disabled:opacity-50 flex items-center gap-2"
            >

              {currentQuestion ===
              questions.length - 1
                ? "See Result"
                : "Next"}

              <ArrowRight className="w-4 h-4" />

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}