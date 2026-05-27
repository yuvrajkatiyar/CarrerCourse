function Contact() {

  return (

    <div className="min-h-screen bg-gray-100">

      {/* HERO SECTION */}

      <section className="bg-linear-to-br from-indigo-600 via-indigo-600 to-purple-600 text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-xl text-white/90">
            We'd love to hear from you. Reach out anytime.
          </p>

        </div>

      </section>



      {/* CONTACT SECTION */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

            {/* LEFT SIDE */}

            <div className="bg-white rounded-3xl shadow p-10">

              <h2 className="text-3xl font-bold mb-8 text-black">
                Get In Touch
              </h2>



              <div className="space-y-8 my-5">

                {/* EMAIL */}

                <div>

                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                    Email
                  </h3>

                  <p className="text-gray-600 text-lg">
                    support@careercourse.com
                  </p>

                </div>



                {/* PHONE */}

                <div>

                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                    Contact Number
                  </h3>

                  <p className="text-gray-600 text-lg">
                    +91 9999999999
                  </p>

                </div>



                {/* ADDRESS */}

                <div>

                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                    Address
                  </h3>

                  <p className="text-gray-600 text-lg leading-7">
                    CareerCourse Headquarters
                    <br />
                    New Delhi, India
                  </p>

                </div>

              </div>

            </div>



            

          {/* </div> */}

        </div>

      </section>

    </div>

  );
}

export default Contact;