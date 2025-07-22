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
                <h1 className="text-3xl font-bold mb-6 text-blue-500">International freight forwarding</h1>
                <p className="service-paragraph">Paris Logistics has years of experience in international freight forwarding and is capable of providing customers with efficient consulting services. The company also has a worldwide network of agents in Europe, North America and Asia, capable of meeting all customers’ demands in this business.</p>
                <div className="flex">
                    <Image
                        src="/Image/service-images/international-freight-forwarding/image1.png"
                        alt="Mô tả ảnh"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "50%", height: "auto" }}
                    />
                    <Image
                        src="/Image/service-images/international-freight-forwarding/image2.png"
                        alt="Mô tả ảnh"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "50%", height: "auto" }}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default page