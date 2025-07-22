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
                <h1 className="text-3xl font-bold mb-6 text-blue-500">Project cargoes</h1>
                <p>Paris Logistic has offered customs clearance, inland haulage, installation and other services for many big projects in Vietnam, such as the installation of Vietnammobile and GTel Mobile Telecom Network, and the construction and installation of ABB’s transformer spare part factory in Tien Son industrial zone, Bac Ninh province.</p>
                

                <div className="flex">
                <Image
                    src="/Image/service-images/project-cargoes/image1.png"
                    alt="Mô tả ảnh"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "33%", height: "auto" }}
                />
                <Image
                    src="/Image/service-images/project-cargoes/image2.png"
                    alt="Mô tả ảnh"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "33%", height: "auto" }}

                />
                <Image
                    src="/Image/service-images/project-cargoes/image3.png"
                    alt="Mô tả ảnh"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "33%", height: "auto" }}

                />
                </div>
            </div>
        </div>
    )
}

export default page