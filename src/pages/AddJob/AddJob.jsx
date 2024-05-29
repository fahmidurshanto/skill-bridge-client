import axios from "axios";

import Swal from "sweetalert2";

const AddJob = () => {
  const handleAddJob = (e) => {
    e.preventDefault();
    const bookName = e.target.name.value;
    const image = e.target.image.value;
    const quantity = e.target.quantity.value;
    const author = e.target.author.value;
    const category = e.target.category.value;
    const rating = e.target.rating.value;
    const description = e.target.description.value;
    const newBook = {
      bookName,
      image,
      quantity,
      author,
      category,
      rating,
      description,
    };

    axios
      .post("http://localhost:3000/books", newBook)
      .then((res) => {
        const book = res.data;
        if (book.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${book.insertedId.slice(0, 6)} has been added to database`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="">
      <h3 className="text-3xl font-semibold text-center mb-2 ">
        Add your book information here
      </h3>
      <form
        onSubmit={handleAddJob}
        className="md:bg-pink-200 md:grid grid-cols-2 py-32"
      >
        {/* Author name field */}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="author">
            Author
          </label>
          <input
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5"
            type="text"
            name="author"
            placeholder="Author"
            required
          />
        </div>

        {/* Job title field */}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="quantity">
            Job title
          </label>
          <input
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5"
            type="text"
            name="title"
            placeholder="Job title"
            required
          />
        </div>
        {/*  Job posting date
         */}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="posting_date">
            Job posting date
          </label>
          <input
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5"
            type="date"
            name="posting_date"
            placeholder="Job Posting date"
            required
          />
        </div>
        {/* Application Deadline
         */}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="deadline">
            Application deadline
          </label>
          <input
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5"
            type="date"
            name="deadline"
            placeholder="Application deadline"
            required
          />
        </div>
        {/*  Salary range */}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="salary">
            Salary
          </label>
          <input
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5"
            type="text"
            name="salary"
            placeholder="Salary range"
            required
          />
        </div>

        {/* Short description */}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="author">
            Short description
          </label>
          <textarea
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5"
            type="text"
            name="description"
            placeholder="Short description"
            required
          />
        </div>
        {/* submit button */}
        <input
          className="btn btn-outline btn-[purple] w-full md:w-3/4 mx-auto  my-5"
          type="submit"
          value="Add Book"
        />
      </form>
    </div>
  );
};

export default AddJob;
