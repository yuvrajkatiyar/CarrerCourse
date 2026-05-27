import { useState } from "react";

function AdminAddCourse() {

  const [course, setCourse] = useState({

    title: "",
    instructor: "",
    platform: "",
    price: "",
    rating: "",
    category: "",
    duration: "",
    level: "",
    image: "",
    description: "",

  });



  const handleChange = (e) => {

    setCourse({

      ...course,

      [e.target.name]: e.target.value,

    });
  };



  const handleSubmit = async (e) => {

    e.preventDefault();



    try {

      const response = await fetch(
        "http://localhost:5000/api/courses",

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(course),
        }
      );



      const data = await response.json();

      console.log(data);

      alert("Course Added Successfully");



      setCourse({

        title: "",
        instructor: "",
        platform: "",
        price: "",
        rating: "",
        category: "",
        duration: "",
        level: "",
        image: "",
        description: "",

      });

    } catch (error) {

      console.log(error);
    }
  };



  return (

    <div className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow p-10">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Add New Course
        </h1>



        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* TITLE */}

          <div>

            <label className="block mb-2 font-medium">
              Course Title
            </label>

            <input
              type="text"
              name="title"
              value={course.title}
              onChange={handleChange}
              placeholder="Enter course title"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-600"
            />

          </div>



          {/* INSTRUCTOR */}

          <div>

            <label className="block mb-2 font-medium">
              Instructor
            </label>

            <input
              type="text"
              name="instructor"
              value={course.instructor}
              onChange={handleChange}
              placeholder="Instructor name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-600"
            />

          </div>



          {/* PLATFORM */}

          <div>

            <label className="block mb-2 font-medium">
              Platform
            </label>

            <input
              type="text"
              name="platform"
              value={course.platform}
              onChange={handleChange}
              placeholder="Udemy / Coursera"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-600"
            />

          </div>



          {/* PRICE + RATING */}

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="block mb-2 font-medium">
                Price
              </label>

              <input
                type="number"
                name="price"
                value={course.price}
                onChange={handleChange}
                placeholder="Course price"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-600"
              />

            </div>



            <div>

              <label className="block mb-2 font-medium">
                Rating
              </label>

              <input
                type="number"
                step="0.1"
                name="rating"
                value={course.rating}
                onChange={handleChange}
                placeholder="4.8"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-600"
              />

            </div>

          </div>



          {/* CATEGORY + LEVEL */}

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="block mb-2 font-medium">
                Category
              </label>

              <input
                type="text"
                name="category"
                value={course.category}
                onChange={handleChange}
                placeholder="Web Development"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-600"
              />

            </div>



            <div>

              <label className="block mb-2 font-medium">
                Level
              </label>

              <select
                name="level"
                value={course.level}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-600"
              >

                <option value="">
                  Select Level
                </option>

                <option value="Beginner">
                  Beginner
                </option>

                <option value="Intermediate">
                  Intermediate
                </option>

                <option value="Advanced">
                  Advanced
                </option>

              </select>

            </div>

          </div>



          {/* DURATION */}

          <div>

            <label className="block mb-2 font-medium">
              Duration
            </label>

            <input
              type="text"
              name="duration"
              value={course.duration}
              onChange={handleChange}
              placeholder="52 hours"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-600"
            />

          </div>



          {/* IMAGE URL */}

          <div>

            <label className="block mb-2 font-medium">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              value={course.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-600"
            />

          </div>



          {/* DESCRIPTION */}

          <div>

            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={course.description}
              onChange={handleChange}
              placeholder="Course description"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-600"
            ></textarea>

          </div>



          {/* BUTTON */}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >

            Add Course

          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminAddCourse;