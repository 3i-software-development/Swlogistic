import Image from "next/image";

const newsList = [
  {
    title: "Warehousing and Packaging of goods in transit",
    date: "2",
    month: "SEP",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus...",
    image: "/images/new1.jpg",
  },
  {
    title: "Phnom Penh Port Photos",
    date: "2",
    month: "SEP",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus...",
    image: "/images/new2.jpg",
  },
  {
    title: "Sihanoukville Port Photos",
    date: "2",
    month: "SEP",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus...",
    image: "/images/new3.jpg",
  },
  
];

export default function NewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mt-12 mb-12">
        <h2 className="text-4xl font-semibold text-blue-600">NEWS</h2>
        <div className="mt-2 w-12 h-1 mx-auto bg-gray-300 rounded-full"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {newsList.map((news, index) => (
          <div key={index}>
            <Image
              src={news.image}
              alt={news.title}
              width={500}
              height={300}
              className="w-full object-cover rounded"
            />
            <div className="flex mt-4 gap-4 items-start">
              <div className="border border-gray-300 px-3 py-2 rounded text-center">
                <p className="text-xl font-bold text-blue-600 leading-none">
                  {news.date}
                </p>
                <p className="text-sm text-blue-600">{news.month}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{news.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{news.desc}</p>
                <a href="#" className="text-sm font-bold text-black hover:underline">
                  CONTINUE READING <span className="ml-1">▸</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
