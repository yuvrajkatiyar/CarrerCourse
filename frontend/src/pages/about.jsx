export default function About() {

  return (

    <div className="min-h-screen bg-gray-100">

      {/* HERO SECTION */}

      <section className="bg-linear-to-br from-indigo-600 via-indigo-600 to-purple-600 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            About CareerCourse
          </h1>

          <p className="text-xl text-white/90 max-w-3xl  mx-auto leading-8">
            CareerCourse helps students and professionals
            discover the best online courses for their
            future careers. We make learning simple,
            affordable, and personalized.
          </p>

        </div>

      </section>



      {/* ABOUT SECTION */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <h2 className="text-4xl font-bold mb-6 text-black">
                Our Mission
              </h2>

              <p className="text-gray-600 text-lg leading-8 mb-6">
                Our mission is to guide students toward
                the right learning path by comparing
                courses from top platforms worldwide.
              </p>

              <p className="text-gray-600 text-lg leading-8">
                Whether you want to become a developer,
                designer, data scientist, or entrepreneur,
                CareerCourse helps you choose the best
                courses based on your goals and interests.
              </p>

            </div>



            {/* RIGHT */}

            <div>

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
                alt="Students learning"
                className="rounded-3xl shadow-xl"
              />

            </div>

          </div>

        </div>

      </section>



      {/* FEATURES */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14 text-black">
            Why Choose CareerCourse?
          </h2>



          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-100 rounded-2xl p-8 text-center">

              <div className="text-5xl mb-4">
                📚
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-black">
                Course Comparison
              </h3>

              <p className="text-gray-600 leading-7">
                Compare courses from platforms like
                Udemy, Coursera, edX, and more.
              </p>

            </div>



            <div className="bg-gray-100 rounded-2xl p-8 text-center">

              <div className="text-5xl mb-4">
                🎯
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-black">
                Career Guidance
              </h3>

              <p className="text-gray-600 leading-7">
                Get personalized recommendations
                based on your interests and goals.
              </p>

            </div>



            <div className="bg-gray-100 rounded-2xl p-8 text-center">

              <div className="text-5xl mb-4">
                🚀
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-black">
                Skill Growth
              </h3>

              <p className="text-gray-600 leading-7">
                Learn in-demand skills and prepare
                yourself for future opportunities.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* STATS */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl shadow p-8 text-center">

              <h3 className="text-4xl font-bold text-indigo-600 mb-3">
                50K+
              </h3>

              <p className="text-gray-600">
                Courses Listed
              </p>

            </div>



            <div className="bg-white rounded-2xl shadow p-8 text-center">

              <h3 className="text-4xl font-bold text-indigo-600 mb-3">
                100+
              </h3>

              <p className="text-gray-600">
                Learning Platforms
              </p>

            </div>



            <div className="bg-white rounded-2xl shadow p-8 text-center">

              <h3 className="text-4xl font-bold text-indigo-600 mb-3">
                2M+
              </h3>

              <p className="text-gray-600">
                Students Helped
              </p>

            </div>



            <div className="bg-white rounded-2xl shadow p-8 text-center">

              <h3 className="text-4xl font-bold text-indigo-600 mb-3">
                4.8
              </h3>

              <p className="text-gray-600">
                Average Rating
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* CTA */}

      <section className="bg-indigo-600 text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Start Your Learning Journey Today
          </h2>

          <p className="text-xl text-white/90 mb-8">
            Explore courses and discover the perfect
            career path for your future.
          </p>



          <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">

            Explore Courses

          </button>

        </div>

      </section>

    </div>
  );
}