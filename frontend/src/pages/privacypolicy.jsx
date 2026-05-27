
export default function PrivacyPolicy() {

  return (

    <div className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-linear-to-br from-indigo-600 via-indigo-600 to-purple-600 text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Privacy Policy
          </h1>

          <p className="text-xl text-white/90">
            Your privacy is important to us.
          </p>

        </div>

      </section>



      {/* CONTENT */}

      <section className="py-20">

        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow p-10 space-y-8">

            <div>

              <h2 className="text-2xl font-bold mb-4 text-black">
                Information We Collect
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                We may collect basic information such as your name,
                email address, and course preferences when you use CareerCourse.
              </p>

            </div>



            <div>

              <h2 className="text-2xl font-bold mb-4 text-black">
                How We Use Information
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                The information collected is used to improve user experience,
                provide better course recommendations, and enhance our services.
              </p>

            </div>



            <div>

              <h2 className="text-2xl font-bold mb-4 text-black">
                Third-Party Services
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                CareerCourse may contain links to third-party course platforms.
                We are not responsible for the privacy practices of external websites.
              </p>

            </div>



            <div>

              <h2 className="text-2xl font-bold mb-4 text-black">
                Data Protection
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                We take reasonable measures to protect user information,
                but no online platform can guarantee complete security.
              </p>

            </div>



            <div>

              <h2 className="text-2xl font-bold mb-4 text-black">
                Contact
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                For any privacy-related questions, contact us at:
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
