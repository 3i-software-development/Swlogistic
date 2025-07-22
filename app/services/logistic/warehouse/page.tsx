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
                <h1 className="text-3xl font-bold mb-6 text-blue-500">Warehouse</h1>

                <div className="flex justify-center items-center">

                    <div>
                        <p className="service-paragraph">
                            Paris Logistic is operating two warehouses in Binh Duong and Ho Chi Minh at advantageous locations. Equipped with advanced, multi-level racks and electric forklifts, our team of knowledgeable and experienced professionals are capable of meeting various warehousing needs of our customers.
                        </p>
                        <p className="service-paragraph">
                            We are constructing the 4th warehouse in Ho Chi Minh in the ideal location for customers who need a place for storage and distribution of products in the Ho Chi Minh area.
                        </p>
                    </div>
                    <Image
                        src="/Image/service-images/warehouse/image.png"
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