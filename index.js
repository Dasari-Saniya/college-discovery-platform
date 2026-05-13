const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const colleges = [
  {
    id: 1,
    name: "IIT Hyderabad",
    location: "Hyderabad",
    fees: 200000,
    rating: 4.8,
    image:
      "https://www.bodmaseducation.com/uploads/1766812895_Indian%20Institute%20of%20Technology,%20Hyderabad.jpg",
  },

  {
    id: 2,
    name: "NIT Trichy",
    location: "Tamil Nadu",
    fees: 150000,
    rating: 4.7,
    image:
      "https://campusutra.com/wp-content/uploads/NIT-Trichy-1.jpg",
  },

  {
    id: 3,
    name: "VIT Vellore",
    location: "Vellore",
    fees: 180000,
    rating: 4.5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/VIT_university%2C_vellore.jpg",
  },

  {
    id: 4,
    name: "SRM University",
    location: "Chennai",
    fees: 220000,
    rating: 4.3,
    image:
      "https://mdmsenquiry.com/wp-content/uploads/2025/08/SRM-University-1.webp",
  },

  {
    id: 5,
    name: "IIT Bombay",
    location: "Mumbai",
    fees: 230000,
    rating: 4.9,
    image:
      "https://www.iitb.ac.in/sites/default/files/styles/gallery_item/public/news/2023-06/iitb.jpg",
  },

  {
    id: 6,
    name: "BITS Pilani",
    location: "Rajasthan",
    fees: 250000,
    rating: 4.8,
    image:
      "https://www.bits-pilani.ac.in/wp-content/uploads/DSC_0270.jpg",
  },
];

app.get("/", (req, res) => {
  res.send("Backend working successfully");
});

app.get("/api/colleges", (req, res) => {
  res.json(colleges);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});