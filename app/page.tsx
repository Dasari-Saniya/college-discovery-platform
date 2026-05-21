"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<any[]>([]);
  const [colleges, setColleges] = useState<any[]>([]);

  useEffect(() => {
    setColleges([
      {
        id: 1,
        name: "IIT Hyderabad",
        location: "Hyderabad",
        fees: "₹200000",
        rating: 4.8,
        image:
          "https://www.bodmaseducation.com/uploads/1766812895_Indian%20Institute%20of%20Technology,%20Hyderabad.jpg",
      },

      {
        id: 2,
        name: "NIT Trichy",
        location: "Tamil Nadu",
        fees: "₹150000",
        rating: 4.7,
        image:
          "https://campusutra.com/wp-content/uploads/NIT-Trichy-1.jpg",
      },

      {
        id: 3,
        name: "VIT Vellore",
        location: "Vellore",
        fees: "₹180000",
        rating: 4.5,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/13/VIT_university%2C_vellore.jpg",
      },

      {
        id: 4,
        name: "SRM University",
        location: "Chennai",
        fees: "₹220000",
        rating: 4.3,
        image:
          "https://mdmsenquiry.com/wp-content/uploads/2025/08/SRM-University-1.webp",
      },

      {
        id: 5,
        name: "IIT Bombay",
        location: "Mumbai",
        fees: "₹230000",
        rating: 4.9,
        image:
          "https://i.pinimg.com/736x/40/89/e8/4089e83711380b0abd914f3aa47f0ef6.jpg",
      },

      {
        id: 6,
        name: "BITS Pilani",
        location: "Rajasthan",
        fees: "₹250000",
        rating: 4.8,
        image:
          "https://www.guidanceforever.org/wp-content/uploads/2023/10/birla-institute-of-technology-science-pilani-featured-1.jpg",
      },
    ]);
  }, []);

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCompare = (college: any) => {
    const alreadySelected = selected.find(
      (c) => c.id === college.id
    );

    if (alreadySelected) {
      setSelected(
        selected.filter((c) => c.id !== college.id)
      );
    } else {
      if (selected.length < 4) {
        setSelected([...selected, college]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800 backdrop-blur-lg sticky top-0 z-50 bg-black/80">
        <h1 className="text-3xl font-bold">UniFind</h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <p className="hover:text-white cursor-pointer transition">
            Home
          </p>

          <p className="hover:text-white cursor-pointer transition">
            Explore
          </p>

          <p className="hover:text-white cursor-pointer transition">
            Compare
          </p>

          <p className="hover:text-white cursor-pointer transition">
            Resources
          </p>
        </div>

        <Link href="/login">
          <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
            Sign In
          </button>
        </Link>
      </nav>

      <section className="text-center px-6 py-20 bg-gradient-to-b from-gray-950 to-black">
        <h1 className="text-5xl font-bold leading-tight max-w-5xl mx-auto">
          Discover Your Perfect College Match
        </h1>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-8">
          Search, compare, and explore universities with
          modern tools designed for students worldwide.
        </p>

        <div className="flex justify-center mt-10">
          <input
            type="text"
            placeholder="Search universities..."
            className="w-full max-w-2xl p-4 rounded-2xl bg-gray-900 border border-gray-700 outline-none focus:border-white transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16 max-w-5xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 p-5 rounded-3xl hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-3xl font-bold">5000+</h2>
            <p className="text-gray-400 mt-2">
              Universities
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-5 rounded-3xl hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-3xl font-bold">50K+</h2>
            <p className="text-gray-400 mt-2">Programs</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-5 rounded-3xl hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-3xl font-bold">150+</h2>
            <p className="text-gray-400 mt-2">Countries</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-5 rounded-3xl hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-3xl font-bold">2M+</h2>
            <p className="text-gray-400 mt-2">
              Students Helped
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 pb-24">
        <h2 className="text-4xl font-bold mb-12">
          Featured Colleges
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredColleges.map((college) => (
            <div
              key={college.id}
              className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:-translate-y-3 hover:shadow-2xl hover:shadow-gray-900 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-44 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center">
                  <span className="bg-white text-black text-sm px-3 py-1 rounded-full font-semibold">
                    Featured
                  </span>

                  <span className="text-yellow-400 font-bold">
                    ⭐ {college.rating}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mt-4">
                  {college.name}
                </h3>

                <p className="text-gray-400 mt-2 text-base">
                  📍 {college.location}
                </p>

                <p className="mt-4 text-xl font-bold">
                  {college.fees}/year
                </p>

                <button
                  onClick={() => handleCompare(college)}
                  className="w-full bg-white text-black py-3 rounded-2xl mt-5 font-semibold hover:scale-105 transition-all duration-300"
                >
                  {selected.find(
                    (c) => c.id === college.id
                  )
                    ? "Remove"
                    : "Compare"}
                </button>

                <div className="mt-3">
                  <Link href={`/college/${college.id}`}>
                    <button className="w-full border border-gray-700 py-3 rounded-2xl hover:bg-white hover:text-black transition-all duration-300">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selected.length >= 2 && (
        <section className="px-8 pb-24">
          <div className="bg-gray-900 rounded-3xl p-8 overflow-auto border border-gray-800">
            <h2 className="text-4xl font-bold mb-8">
              Compare Colleges
            </h2>

            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-4">
                    Feature
                  </th>

                  {selected.map((college) => (
                    <th
                      key={college.id}
                      className="p-4"
                    >
                      {college.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="p-4 font-semibold">
                    Location
                  </td>

                  {selected.map((college) => (
                    <td
                      key={college.id}
                      className="p-4 text-center"
                    >
                      {college.location}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-gray-800">
                  <td className="p-4 font-semibold">
                    Fees
                  </td>

                  {selected.map((college) => (
                    <td
                      key={college.id}
                      className="p-4 text-center"
                    >
                      {college.fees}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-semibold">
                    Rating
                  </td>

                  {selected.map((college) => (
                    <td
                      key={college.id}
                      className="p-4 text-center"
                    >
                      ⭐ {college.rating}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}