import Image from "next/image"


const page = () => {
    return (
        <div>
            <div className="bg-gray-200">
                <div className="container mx-auto px-6 py-2">
                    <ul className="flex">
                        <li className="breadcrumbs-link">
                            <a href="/">Home</a>
                        </li>
                        <li className="breadcrumbs-link">
                            <a href="/services">services</a>
                        </li>
                        <li className="breadcrumbs-link">
                            <a href="/services/logistic">logistic</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold mb-6 text-blue-500">Customs Clearance Services</h1>
                <p className="service-paragraph">Our truck fleet consists of almost 200 vehicles, ranging from enclosed trucks from 1.25 tons to 10 tons, container trucks and trailers with low average age, stationed in both the North and South of Vietnam, sufficient to meet various high-volume haulage demands at competitive prices.</p>
                <Image
                    src="/Image/service-images/inland-haulage/image.png"
                    alt="Mô tả ảnh"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "50%", height: "auto" }}
                />
                <p className="service-paragraph">All of our trucks are equipped with the GPS devices to ensure efficient vehicle management, safe transport, and real-time and accurate position reporting.</p>
            </div>
        </div>
    )
}

export default page