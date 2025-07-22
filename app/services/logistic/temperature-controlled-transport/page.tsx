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
                <h1 className="text-3xl font-bold mb-6 text-blue-500">Temperature-controlled transport</h1>
                <p className="service-paragraph">Paris Logistics’ temperature-controlled trucks provide a transport solution for frozen, cold, and cool products in Ho Chi Minh and surrounding areas. Each truck is equipped with a temperature-logging device to ensure the continuous temperature monitoring.</p>
                <Image
                    src="/Image/service-images/temperature-controlled-transport/image1.png"
                    alt="Mô tả ảnh"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "30%", height: "auto" }}
                />
                <p className="service-paragraph">We are committed to providing on-time delivery of customer goods at the right temperature. Our GPS devices help track the trucks instantly and accurately from pickup to delivery.</p>
                    <Image
                    src="/Image/service-images/temperature-controlled-transport/image2.png"
                    alt="Mô tả ảnh"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "50%", height: "auto" }}
                />
            </div>
        </div>
    )
}

export default page