function Disclaimer() {

  return (

    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}

      <section className="bg-linear-to-br from-indigo-600 via-indigo-600 to-purple-600 text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Disclaimer
          </h1>

          <p className="text-xl text-white/90">
            Important information about the content and courses listed on CareerCourse.
          </p>

        </div>

      </section>



      {/* DISCLAIMER CONTENT */}

      <section className="py-20">

        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow p-10 space-y-8">

            <div>

              <h2 className="text-2xl font-bold mb-4 text-black">
                Course Ownership
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                CareerCourse does not own, create, or host any of the courses displayed on this platform.
                All courses belong to their respective owners, instructors, and learning platforms such as
                Udemy, Coursera, edX, and others.
              </p>

            </div>



            <div>

              <h2 className="text-2xl font-bold mb-4 text-black">
                Third-Party Platforms
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                Our platform only helps users discover and compare courses from different learning websites.
                When you enroll in a course, you are redirected to the original platform where the course is hosted.
              </p>

            </div>



            <div>

              <h2 className="text-2xl font-bold mb-4 text-black">
                Accuracy of Information
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                We try to keep course information, pricing, ratings, and descriptions accurate and updated,
                but we cannot guarantee that all information will always be correct or current.
              </p>

            </div>



            <div>

              <h2 className="text-2xl font-bold mb-4 text-black">
                Trademarks & Copyrights
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                All trademarks, logos, course names, and brand names belong to their respective owners.
                Their use on CareerCourse is only for informational and educational purposes.
              </p>

            </div>



            <div>

              <h2 className="text-2xl font-bold mb-4 text-black">
                Contact Us
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                If you believe any content violates copyright or ownership rights,
                please contact us at:
              </p>

              <p className="text-indigo-600 font-semibold mt-3 text-lg">
                support@careercourse.com
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>

  );
}

export default Disclaimer;