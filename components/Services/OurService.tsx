"use client";
import Link from "next/link";

const services = [
  {
    title: "CUSTOMS CLEARANCE",
    image: "/images/customs-1.jpg",
    slug: "customs-clearance",
  },
  {
    title: "WAREHOUSE",
    image: "/images/customs-2.jpg",
    slug: "warehouse",
  },
  {
    title: "INLAND HAULAGE",
    image: "/images/customs-4.jpg",
    slug: "inland-haulage",
  },
  {
    title: "CUSTOMS CLEARANCE",
    image: "/images/customs-1.jpg",
    slug: "customs-clearance",
  },
  {
    title: "WAREHOUSE",
    image: "/images/customs-2.jpg",
    slug: "warehouse",
  },
  {
    title: "INLAND HAULAGE",
    image: "/images/customs-4.jpg",
    slug: "inland-haulage",
  },
  // Thêm các mục khác tương tự
];

export default function OurServices() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <h2 className="text-3xl text-center text-blue-400 font-bold mb-4">OUR SERVICES</h2>
      <p className="text-center mb-10 max-w-3xl mx-auto">
        Offering logistics services to help customers focus on their core business...
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="text-center hover:scale-105 transition">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-full w-56 h-56 object-cover mx-auto  "
            />
            <p className="mb-8 mt-4 font-semibold">{service.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
