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
                <Image
                    src="/Image/service-images/customs-clearance/image.png"
                    alt="Mô tả ảnh"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "50%", height: "auto" }}
                />
                <p className="service-paragraph">
                    Paris Logistics has accumulated extensive knowledge and rich experience with customs procedures for goods processed under contracts with foreign traders, materials and supplies imported for the manufacturing of export products, goods for project implementation, and imported goods for investment projects during our 15 years of providing services to top-notch customers in Vietnam.
                </p>
                <p className="service-paragraph">
                    Our team of devoted and energetic professionals, fully certified by the General Department of Vietnam Customs, always keeps up with policies and regulations to offer our customers the best solutions for their import and export goods.
                </p>
                <p className="service-paragraph">
                    Our offices cover the most important national economic zones, such as Hanoi, Ho Chi Minh city, Hai Phong, Bac Ninh, Hai Duong, Binh Duong, Dong Nai, etc., satisfying customer needs in the quickest and most efficient way.
                </p>
            </div>
        </div>
    )
}

export default page