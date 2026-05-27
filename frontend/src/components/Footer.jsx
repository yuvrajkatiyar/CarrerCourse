import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-16">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* TOP SECTION */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* LOGO SECTION */}

          <div>

            <Link
              to="/"
              className="flex  items-center gap-3 mb-4"
            >

              <div className="bg-indigo-600 p-2 rounded-xl">

                <GraduationCap className="w-5 h-5 text-white" />

              </div>

              <h2 className="text-xl font-bold text-black">
                CareerCourse
              </h2>

            </Link>

            <p className="text-sm text-gray-500 leading-7">
              Discover the best online courses from top
              platforms worldwide. Your future starts here.
            </p>

          </div>



          {/* COMPANY */}

          <div>

            <h2 className="text-lg font-semibold mb-5 text-black">
              Company
            </h2>

            <div className="flex flex-col gap-4 text-sm text-gray-500">

              <a href="/about">About Us</a>

              <a href="/contact">Contact Us</a>

              {/* <a href="#">Careers</a> */}

              {/* <a href="#">Blog</a> */}

            </div>

          </div>



          {/* RESOURCES */}

          <div>

            <h2 className="text-lg font-semibold mb-5 text-black">
              Resources
            </h2>

            <div className="flex flex-col gap-4 text-sm text-gray-500">

              <Link to="/courses">
                Browse Courses
              </Link>

              <Link to="/carrerquiz">
                Career Quiz
              </Link>

              {/* <a href="#">FAQ</a> */}

              {/* <a href="#">Help Center</a> */}

            </div>

          </div>



          {/* LEGAL */}

          <div>

            <h2 className="text-lg font-semibold mb-5 text-black">
              Legal
            </h2>

            <div className="flex flex-col gap-4 text-sm text-gray-500">

              <a href="/privacypolicy">Privacy Policy</a>

              {/* <a href="#">Terms of Service</a> */}

              {/* <a href="#">Cookie Policy</a> */}

              <a href="/disclaimer">Disclaimer</a>

            </div>

          </div>

        </div>



        {/* BOTTOM */}

        <div className="border-t mt-10 pt-6 text-center">

          <p className="text-sm text-gray-500">
            © 2026 CareerCourse. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}