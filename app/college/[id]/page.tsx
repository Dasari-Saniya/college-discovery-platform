const collegesData = [
  {
    id: 1,
    name: "IIT Hyderabad",
    location: "Hyderabad",
    fees: "₹200000",
    rating: 4.8,
    image:
      "https://www.bodmaseducation.com/uploads/1766812895_Indian%20Institute%20of%20Technology,%20Hyderabad.jpg",
    courses: [
      "BTech",
      "BDes",
      "MTech",
      "MDes",
      "MSc",
      "MA",
      "PhD",
    ],
    placements: "95%",
    students: "17,534",
    acceptance: "4%",
    about:
      "IIT Hyderabad is one of India's premier engineering institutions known for innovation, research excellence, and advanced technology programs. The campus offers world-class infrastructure and strong industry collaborations. IIT Hyderabad is a government-owned technical university established in 2008 under the Institutes of Technology Act.",
    highlights: [
      "Top-ranked engineering institute",
      "Excellent research facilities",
      "Strong placement opportunities",
      "Modern smart campus",
    ],
  },

  {
    id: 2,
    name: "NIT Trichy",
    location: "Tamil Nadu",
    fees: "₹150000",
    rating: 4.7,
    image:
      "https://campusutra.com/wp-content/uploads/NIT-Trichy-1.jpg",
    courses: [
      "B.Tech",
      "B.Arch",
      "M.Tech",
      "M.Sc",
      "MCA",
      "MBA",
      "MA",
      "MS by Research",
    ],
    placements: "92%",
    students: "11,574",
    acceptance: "3%",
    about:
      "NIT Trichy is one of the top National Institutes of Technology in India, recognized for academic excellence, engineering programs, and strong placements. It is an Institute of National Importance under the NITSER Act.",
    highlights: [
      "High placement percentage",
      "Nationally recognized faculty",
      "Large campus infrastructure",
      "Strong alumni network",
    ],
  },

  {
    id: 3,
    name: "VIT Vellore",
    location: "Vellore",
    fees: "₹180000",
    rating: 4.5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/VIT_university%2C_vellore.jpg",
    courses: [
      "Engineering Programmes",
      "UG Programmes",
      "Integrated Programmes",
      "PG Programmes",
      "Research Programmes",
    ],
    placements: "90%",
    students: "23,731",
    acceptance: "10%",
    about:
      "VIT Vellore is a globally recognized private university known for technology education, innovation, and international collaborations. It offers industry-oriented learning and strong placement opportunities.",
    highlights: [
      "Global collaborations",
      "Industry-oriented curriculum",
      "Modern labs and facilities",
      "Large student community",
    ],
  },

  {
    id: 4,
    name: "SRM University",
    location: "Chennai",
    fees: "₹220000",
    rating: 4.3,
    image:
      "https://mdmsenquiry.com/wp-content/uploads/2025/08/SRM-University-1.webp",
    courses: [
      "BTech in AI",
      "CSE",
      "Robotics",
      "BSc",
      "BA",
      "MBA",
    ],
    placements: "88%",
    students: "20,000",
    acceptance: "15%",
    about:
      "SRM University is a leading private institution offering programs across engineering, management, medicine, and science disciplines with strong industry exposure and innovation-focused learning.",
    highlights: [
      "Wide range of programs",
      "Strong industry exposure",
      "International partnerships",
      "Innovation-focused learning",
    ],
  },

  {
    id: 5,
    name: "IIT Bombay",
    location: "Mumbai",
    fees: "₹230000",
    rating: 4.9,
    image:
      "https://i.pinimg.com/736x/40/89/e8/4089e83711380b0abd914f3aa47f0ef6.jpg",
    courses: [
      "BTech",
      "MTech",
      "MSc",
      "MBA",
      "PhD",
    ],
    placements: "98%",
    students: "12,000",
    acceptance: "2%",
    about:
      "IIT Bombay is one of the most prestigious engineering institutes in India, known for world-class education, cutting-edge research, innovation, and outstanding placements across industries.",
    highlights: [
      "Top IIT in India",
      "Excellent global reputation",
      "Strong startup ecosystem",
      "Outstanding placements",
    ],
  },

  {
    id: 6,
    name: "BITS Pilani",
    location: "Rajasthan",
    fees: "₹250000",
    rating: 4.8,
    image:
      "https://www.guidanceforever.org/wp-content/uploads/2023/10/birla-institute-of-technology-science-pilani-featured-1.jpg",
    courses: [
      "B.E",
      "M.E",
      "MBA",
      "MSc",
      "PhD",
    ],
    placements: "96%",
    students: "15,000",
    acceptance: "5%",
    about:
      "BITS Pilani is a highly reputed private institute in India famous for academic flexibility, industry-oriented education, and strong placement opportunities.",
    highlights: [
      "Flexible academic system",
      "Excellent coding culture",
      "Strong alumni network",
      "Top private engineering institute",
    ],
  },
];

export default async function CollegeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = collegesData.find(
    (c) => c.id === Number(id)
  );

  if (!college) {
    return <h1>College not found</h1>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-[400px] object-cover opacity-60"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-10 bg-black/40">
          <h1 className="text-6xl font-bold">
            {college.name}
          </h1>

          <p className="text-xl text-gray-300 mt-4">
            📍 {college.location}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl">
            <p className="text-gray-400">Fees</p>
            <h2 className="text-3xl font-bold mt-2">
              {college.fees}
            </h2>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl">
            <p className="text-gray-400">Rating</p>
            <h2 className="text-3xl font-bold mt-2">
              ⭐ {college.rating}
            </h2>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl">
            <p className="text-gray-400">Placements</p>
            <h2 className="text-3xl font-bold mt-2">
              {college.placements}
            </h2>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 mb-10">
          <h2 className="text-4xl font-bold mb-6">
            About College
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            {college.about}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">
              Courses Offered
            </h2>

            <div className="flex flex-wrap gap-3">
              {college.courses.map((course) => (
                <span
                  key={course}
                  className="bg-black border border-gray-700 px-4 py-2 rounded-full"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">
              Campus Highlights
            </h2>

            <ul className="space-y-4 text-gray-300">
              {college.highlights.map((item) => (
                <li key={item}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl">
            <p className="text-gray-400">Students</p>

            <h2 className="text-3xl font-bold mt-2">
              {college.students}
            </h2>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl">
            <p className="text-gray-400">Acceptance Rate</p>

            <h2 className="text-3xl font-bold mt-2">
              {college.acceptance}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}