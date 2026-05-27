import { Link } from "react-router-dom";

import {
  Search,
  Code,
  Database,
  Brain,
  Palette,
  Shield,
  Cloud,
  Smartphone,
  TrendingUp,
  Star,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import { useState, useEffect } from "react";

const categories = [
  {
    name: "Web Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },

  {
    name: "Data Science",
    icon: Database,
    color: "from-purple-500 to-pink-500",
  },

  {
    name: "AI & Machine Learning",
    icon: Brain,
    color: "from-indigo-500 to-purple-500",
  },

  {
    name: "UI/UX Design",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
  },

  {
    name: "Cybersecurity",
    icon: Shield,
    color: "from-red-500 to-orange-500",
  },

  {
    name: "Cloud Computing",
    icon: Cloud,
    color: "from-cyan-500 to-blue-500",
  },

  {
    name: "Mobile App Development",
    icon: Smartphone,
    color: "from-green-500 to-emerald-500",
  },

  {
    name: "Business & Marketing",
    icon: TrendingUp,
    color: "from-orange-500 to-amber-500",
  },
];

const defaultTopCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    platform: "Udemy",
    instructor: "Angela Yu",
    price: 89.99,
    rating: 4.7,
    reviews: 278543,
    duration: "52 hours",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  },

  {
    id: "2",
    title: "Machine Learning Specialization",
    platform: "Coursera",
    instructor: "Andrew Ng",
    price: 49.99,
    rating: 4.9,
    reviews: 156234,
    duration: "3 months",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },

  {
    id: "3",
    title: "UI/UX Design Masterclass",
    platform: "Udemy",
    instructor: "Daniel Walter Scott",
    price: 79.99,
    rating: 4.8,
    reviews: 89432,
    duration: "38 hours",
    level: "All Levels",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },

  {
    id: "4",
    title: "AWS Certified Solutions Architect",
    platform: "A Cloud Guru",
    instructor: "Ryan Kroonenburg",
    price: 39.99,
    rating: 4.6,
    reviews: 124567,
    duration: "24 hours",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    content:
      "CourseCompass helped me transition from marketing to tech. I found the perfect bootcamp and landed my dream job in 6 months!",
    rating: 5,
  },

  {
    name: "Michael Chen",
    role: "Data Analyst",
    content:
      "The comparison feature is amazing. I saved hundreds of dollars by finding the same course on different platforms.",
    rating: 5,
  },

  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    content:
      "The career quiz pointed me in the right direction. The personalized recommendations were spot-on!",
    rating: 5,
  },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedLevel, setSelectedLevel] = useState("");

  const [selectedBudget, setSelectedBudget] = useState("");

  const [topCourses, setTopCourses] = useState([]);
  const [topCoursesLoading, setTopCoursesLoading] = useState(true);
  

  useEffect(() => {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
    const fetchTopCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/courses");
        const data = await response.json();
        if (Array.isArray(data)) {
          const sorted = [...data].sort(
            (a, b) => (b.rating || 0) - (a.rating || 0),
          );
          setTopCourses(sorted.slice(0, 4));
        }
      } catch (error) {
        console.error("Failed to fetch top courses", error);
      } finally {
        setTopCoursesLoading(false);
      }
    };

    fetchTopCourses();
  }, []);

  const featuredCourses =
    topCourses.length > 0 ? topCourses : defaultTopCourses;

  return (
    <div className="w-full">
      {/* HERO SECTION */}

      <section className="relative bg-linear-to-br from-indigo-600 via-indigo-600 to-purple-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>

          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white">
              Find the Best Courses for Your Future
            </h1>

            <p className="text-lg text-white/90 mb-8">
              Discover courses from top platforms worldwide based on your
              interests, budget, and career goals.
            </p>

            {/* SEARCH BAR */}

            <div className="bg-white rounded-xl shadow-2xl p-2 max-w-3xl mx-auto mb-8 my-2">
              <div className="flex gap-2">
                <div className="flex-1 flex items-center bg-gray-100 rounded-lg px-4">
                  <Search className="w-5 h-5 text-gray-500" />

                  <input
                    type="text"
                    placeholder="Search courses, skills, or career paths"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none px-3 py-3 text-black"
                  />
                </div>

                <Link
                  to="/courses"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Search
                </Link>
              </div>
            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/course"
                className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-white/90 transition-colors font-medium inline-flex items-center gap-2"
              >
                Explore Courses
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/carrerquiz"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-medium"
              >
                Take Career Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CATEGORIES */}

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-white p-6 rounded-xl shadow text-center"
              >
                <category.icon className="w-10 h-10 mx-auto mb-4 text-indigo-600" />

                <h3 className="font-medium">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP COURSES */}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Top Courses</h2>

              <p className="text-gray-500">Most popular courses</p>
            </div>

            <Link to="/courses" className="text-indigo-600 font-medium">
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredCourses.map((course) => (
              <Link key={course._id} to={`/courses/${course._id}`}>
                <div
                  key={course._id ?? course.id}
                  className="bg-white rounded-xl shadow overflow-hidden"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-6">
                    <div className="flex justify-between mb-3">
                      <span className="text-indigo-600 text-sm">
                        {course.platform}
                      </span>

                      <span className="font-medium">
                        {course.price === 0 ? "Free" : `${course.price}Rs`}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                      {course.title}
                    </h3>

                    <p className="text-gray-500 mb-4">{course.instructor}</p>

                    <div className="flex justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />

                        {(course.rating || 0).toFixed(1)}
                      </div>

                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />

                        {course.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Students Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow">
                <div className="flex gap-1 mb-4">
                  <Star className="w-4 h-4 text-yellow-500" />

                  <Star className="w-4 h-4 text-yellow-500" />

                  <Star className="w-4 h-4 text-yellow-500" />

                  <Star className="w-4 h-4 text-yellow-500" />

                  <Star className="w-4 h-4 text-yellow-500" />
                </div>

                <p className="text-gray-500 mb-4">{testimonial.content}</p>

                <h3 className="font-semibold">{testimonial.name}</h3>

                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}

      <section className="relative bg-linear-to-br from-indigo-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-1 text-center">
          <div className="flex items-center justify-between gap-30">
            <div className="max-w-xl">
              <h2 className="text-xl justify-start font-bold mb-4">
                Not Sure Where to Start?
              </h2>

              <p className="mb-8 text-lg">
                Take our free career quiz to discover your ideal learning path.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center  gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Personalized recommendations
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Curated course suggestions
                </div>

                <div className="flex items-center  gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Industry insights
                </div>
              </div>

              <Link
                to="/carrerquiz"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg inline-flex items-center gap-2 font-medium"
              >
                Start Career Quiz
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 ">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { num: "50K+", label: "Courses Listed" },

                  { num: "100+", label: "Platforms" },

                  { num: "2M+", label: "Students Helped" },

                  { num: "4.8", label: "Average Rating" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-gray-100 rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      {s.num}
                    </div>

                    <div className="text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
