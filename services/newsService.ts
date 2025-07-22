import { NewsArticle, NewsArticleDetail } from "@/components/News/NewsCard";

// Mock data for development
const mockArticles: NewsArticle[] = [
  {
    id: 1,
    title: "WAREHOUSING AND PACKAGING OF GOODS IN TRANSIT",
    description: "Discover our comprehensive warehousing and packaging services that ensure your goods are safely stored and properly prepared for international transit. Our state-of-the-art facilities and experienced team provide efficient solutions for all your logistics needs.",
    date: "2024-01-15",
    category: "Warehousing",
    readMoreText: "Xem Thêm →",
    urlAlias: "warehousing-packaging-goods-transit"
  },
  {
    id: 2,
    title: "PHNOM PENH PORT PHOTOS",
    description: "Explore our latest collection of photos from Phnom Penh Port operations. See the bustling activity of container handling, vessel operations, and our team's dedication to efficient port logistics services.",
    date: "2024-01-10",
    category: "Port Operations",
    readMoreText: "Xem Thêm →",
    urlAlias: "phnom-penh-port-photos"
  },
  {
    id: 3,
    title: "SIHANOUKVILLE PORT PHOTOS",
    description: "Take a visual tour of Sihanoukville Port, Cambodia's premier deep-water port. Our photos showcase the extensive container operations, modern gantry cranes, and the strategic importance of this key maritime gateway.",
    date: "2024-01-05",
    category: "Port Operations",
    readMoreText: "Xem Thêm →",
    urlAlias: "sihanoukville-port-photos"
  }
];

const mockArticleDetails: Record<string, NewsArticleDetail> = {
  "warehousing-packaging-goods-transit": {
    id: 1,
    title: "WAREHOUSING AND PACKAGING OF GOODS IN TRANSIT",
    description: "Discover our comprehensive warehousing and packaging services that ensure your goods are safely stored and properly prepared for international transit. Our state-of-the-art facilities and experienced team provide efficient solutions for all your logistics needs, from temporary storage to specialized packaging.",
    content: `
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Comprehensive Warehousing and Packaging Solutions</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        At Paris Logistics, we understand that proper warehousing and packaging are crucial components of successful international trade. 
        Our modern facilities and experienced team provide comprehensive solutions to ensure your goods are safely stored, 
        properly packaged, and ready for efficient transit to their final destination.
      </p>

      <h3 class="text-xl font-bold text-gray-900 mb-4">State-of-the-Art Warehousing Facilities</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Our warehousing facilities feature modern infrastructure, advanced security systems, and efficient storage solutions. 
        With multiple locations strategically positioned near major ports and transportation hubs, we provide flexible 
        storage options to meet your specific requirements.
      </p>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
        <h4 class="text-lg font-bold text-blue-900 mb-2">Warehouse Features</h4>
        <ul class="text-blue-800 space-y-1">
          <li>• Climate-controlled storage areas</li>
          <li>• 24/7 security monitoring and access control</li>
          <li>• Advanced inventory management systems</li>
          <li>• Multiple loading docks for efficient operations</li>
          <li>• Flexible storage solutions for various cargo types</li>
          <li>• Real-time inventory tracking and reporting</li>
        </ul>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Specialized Packaging Services</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Our packaging services are designed to protect your goods during transit while ensuring compliance with international 
        shipping standards. We offer a wide range of packaging solutions tailored to different cargo types and transportation methods.
      </p>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Packaging Solutions We Offer</h3>
      
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li><strong>Container Packing:</strong> Professional container loading and securing services</li>
        <li><strong>Palletizing:</strong> Standard and custom pallet preparation</li>
        <li><strong>Shrink Wrapping:</strong> Protective wrapping for various cargo types</li>
        <li><strong>Wooden Crating:</strong> Custom wooden crates for heavy or fragile items</li>
        <li><strong>Bubble Wrapping:</strong> Protective packaging for delicate items</li>
        <li><strong>Corrugated Boxes:</strong> Standard and custom-sized packaging</li>
        <li><strong>Vacuum Packaging:</strong> Space-efficient packaging for textiles and soft goods</li>
      </ul>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Quality Control and Inspection</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Every package that leaves our facility undergoes rigorous quality control checks. Our experienced team ensures that:
      </p>

      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>All packaging materials meet international standards</li>
        <li>Proper labeling and documentation are in place</li>
        <li>Cargo is securely packed and protected</li>
        <li>Weight and dimensions are accurately recorded</li>
        <li>Customs requirements are met</li>
      </ul>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Inventory Management</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Our advanced inventory management system provides real-time tracking of your goods throughout the warehousing process. 
        You can monitor stock levels, track movement, and receive detailed reports on your inventory status.
      </p>

      <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
        <h4 class="text-lg font-bold text-yellow-900 mb-2">Benefits of Our Warehousing Services</h4>
        <ul class="text-yellow-800 space-y-1">
          <li>• Reduced transportation costs through consolidation</li>
          <li>• Improved inventory control and visibility</li>
          <li>• Faster order fulfillment and delivery</li>
          <li>• Reduced risk of damage during transit</li>
          <li>• Compliance with international shipping standards</li>
          <li>• Flexible storage terms and conditions</li>
        </ul>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Custom Solutions for Different Industries</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        We provide specialized warehousing and packaging solutions for various industries:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-bold text-gray-900 mb-2">Electronics & Technology</h4>
          <p class="text-gray-700 text-sm">ESD-safe packaging, anti-static materials, and climate-controlled storage</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-bold text-gray-900 mb-2">Textiles & Apparel</h4>
          <p class="text-gray-700 text-sm">Vacuum packaging, moisture protection, and hanging garment systems</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-bold text-gray-900 mb-2">Food & Beverage</h4>
          <p class="text-gray-700 text-sm">Temperature-controlled storage, food-grade packaging, and compliance with safety standards</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-bold text-gray-900 mb-2">Machinery & Equipment</h4>
          <p class="text-gray-700 text-sm">Custom crating, heavy-duty packaging, and specialized handling equipment</p>
        </div>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Sustainability and Environmental Responsibility</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        We are committed to sustainable practices in our warehousing and packaging operations. Our facilities use energy-efficient 
        systems, and we offer eco-friendly packaging options including recyclable materials and biodegradable solutions.
      </p>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Contact Our Warehousing Team</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Whether you need temporary storage, long-term warehousing, or specialized packaging services, our team is ready to help. 
        Contact us to discuss your requirements and receive a customized solution that meets your needs.
      </p>

      <div class="bg-gray-50 p-6 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Warehousing Operations</h4>
            <p class="text-gray-700 text-sm">Phone: 0937.206.960</p>
            <p class="text-gray-700 text-sm">Email: warehouse@parislogistics.com.vn</p>
            <p class="text-gray-700 text-sm">Address: Multiple locations across Vietnam</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Service Hours</h4>
            <p class="text-gray-700 text-sm">Monday - Friday: 7:00 AM - 7:00 PM</p>
            <p class="text-gray-700 text-sm">Saturday: 7:00 AM - 5:00 PM</p>
            <p class="text-gray-700 text-sm">Sunday: 8:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    `,
    date: "2024-01-15",
    category: "Warehousing",
    author: "Paris Logistics Team",
    urlAlias: "warehousing-packaging-goods-transit",
    relatedArticles: [
      {
        id: 2,
        title: "Phnom Penh Port Photos",
        description: "Discover Cambodia's inland port operations and team activities...",
        urlAlias: "phnom-penh-port-photos"
      },
      {
        id: 3,
        title: "Sihanoukville Port Photos",
        description: "Explore Cambodia's premier deep-water port operations...",
        urlAlias: "sihanoukville-port-photos"
      }
    ]
  },
  "phnom-penh-port-photos": {
    id: 2,
    title: "PHNOM PENH PORT PHOTOS",
    description: "Explore our latest collection of photos from Phnom Penh Port operations. See the bustling activity of container handling, vessel operations, and our team's dedication to efficient port logistics services. These images showcase the daily operations and the professional expertise that keeps Cambodia's inland port running smoothly.",
    content: `
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Phnom Penh Port: Inland Gateway to Cambodia</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Phnom Penh Port serves as Cambodia's primary inland port, strategically located along the Mekong River. 
        This vital facility handles a significant portion of the country's import and export activities, 
        connecting landlocked Cambodia to international markets through river transportation networks.
      </p>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Port Infrastructure and Capabilities</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        The port features modern container handling equipment, extensive storage facilities, and efficient cargo processing systems. 
        Our recent visit documented the port's operations, showcasing the professional team and advanced infrastructure 
        that enables smooth cargo operations for businesses throughout Cambodia.
      </p>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
        <h4 class="text-lg font-bold text-blue-900 mb-2">Port Operations Overview</h4>
        <ul class="text-blue-800 space-y-1">
          <li>• Container handling capacity: 200,000 TEUs annually</li>
          <li>• Maximum vessel size: 3,000 DWT</li>
          <li>• Number of berths: 4 operational berths</li>
          <li>• Storage capacity: 5,000 TEUs</li>
          <li>• Operating hours: 6:00 AM - 10:00 PM daily</li>
        </ul>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Team Operations and Collaboration</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Our photos capture the dedicated team at Phnom Penh Port working together to ensure efficient operations. 
        The port's staff demonstrates exceptional professionalism and expertise in handling various types of cargo, 
        from containers to bulk goods and specialized shipments.
      </p>

      <h3 class="text-xl font-bold text-gray-900 mb-4">River Transportation Network</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Phnom Penh Port's strategic location on the Mekong River provides access to regional markets through river transportation. 
        The port serves as a crucial link in the supply chain, connecting Cambodia to Vietnam's Mekong Delta ports 
        and ultimately to international shipping routes.
      </p>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Paris Logistics Services at Phnom Penh Port</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Paris Logistics maintains a strong presence at Phnom Penh Port, offering comprehensive logistics services including:
      </p>

      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Container booking and space allocation</li>
        <li>Customs clearance and documentation processing</li>
        <li>Cargo consolidation and deconsolidation services</li>
        <li>Warehousing and temporary storage solutions</li>
        <li>Transportation coordination to and from the port</li>
        <li>Real-time cargo tracking and status updates</li>
        <li>Export documentation and compliance assistance</li>
      </ul>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Technology and Innovation</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        The port has invested in modern technology to improve operational efficiency. Our team utilizes advanced 
        cargo management systems, digital documentation processes, and real-time tracking capabilities to provide 
        clients with transparent and reliable service.
      </p>

      <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
        <h4 class="text-lg font-bold text-yellow-900 mb-2">Key Advantages of Phnom Penh Port</h4>
        <ul class="text-yellow-800 space-y-1">
          <li>• Strategic location in Cambodia's capital city</li>
          <li>• Direct access to Mekong River transportation network</li>
          <li>• Modern container handling equipment</li>
          <li>• Experienced and professional operations team</li>
          <li>• Competitive rates and efficient processing times</li>
          <li>• Strong connectivity to regional markets</li>
        </ul>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Future Development and Expansion</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Phnom Penh Port is continuously evolving to meet growing trade demands. Planned developments include:
      </p>

      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Expansion of container yard capacity</li>
        <li>Implementation of automated cargo handling systems</li>
        <li>Enhanced digital infrastructure and tracking capabilities</li>
        <li>Development of specialized cargo handling areas</li>
        <li>Improved connectivity with regional transportation networks</li>
      </ul>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Contact Our Phnom Penh Port Team</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        For inquiries about shipping services through Phnom Penh Port or to learn more about our logistics solutions, 
        please contact our dedicated port operations team. We're committed to providing efficient and reliable 
        services to support your business needs.
      </p>

      <div class="bg-gray-50 p-6 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Phnom Penh Port Operations</h4>
            <p class="text-gray-700 text-sm">Phone: 0937.206.960</p>
            <p class="text-gray-700 text-sm">Email: phnompenh@parislogistics.com.vn</p>
            <p class="text-gray-700 text-sm">Address: Phnom Penh Port, Cambodia</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Service Hours</h4>
            <p class="text-gray-700 text-sm">Monday - Friday: 6:00 AM - 10:00 PM</p>
            <p class="text-gray-700 text-sm">Saturday: 6:00 AM - 6:00 PM</p>
            <p class="text-gray-700 text-sm">Sunday: 8:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    `,
    date: "2024-01-10",
    category: "Port Operations",
    author: "Paris Logistics Team",
    urlAlias: "phnom-penh-port-photos",
    relatedArticles: [
      {
        id: 1,
        title: "Warehousing and Packaging of Goods in Transit",
        description: "Learn about our comprehensive warehousing and packaging services...",
        urlAlias: "warehousing-packaging-goods-transit"
      },
      {
        id: 3,
        title: "Sihanoukville Port Photos",
        description: "Explore Cambodia's premier deep-water port operations...",
        urlAlias: "sihanoukville-port-photos"
      }
    ]
  },
  "sihanoukville-port-photos": {
    id: 3,
    title: "SIHANOUKVILLE PORT PHOTOS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi gravida vitae. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    content: `
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Sihanoukville Port: Gateway to Cambodia's Maritime Trade</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Sihanoukville Port, officially known as the Sihanoukville Autonomous Port, is Cambodia's only deep-water port and serves as the primary gateway for international maritime trade. 
        Located in the coastal city of Sihanoukville, this strategic port facility plays a crucial role in connecting Cambodia to global markets and supporting the country's growing economy.
      </p>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Port Infrastructure and Operations</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        The port features state-of-the-art infrastructure with multiple berths capable of handling large container vessels. 
        The facility is equipped with modern gantry cranes, extensive container yards, and efficient cargo handling systems. 
        Our recent visit captured the bustling activity of daily operations, showcasing the port's capacity to handle thousands of containers daily.
      </p>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
        <h4 class="text-lg font-bold text-blue-900 mb-2">Key Port Statistics</h4>
        <ul class="text-blue-800 space-y-1">
          <li>• Annual container throughput: Over 500,000 TEUs</li>
          <li>• Maximum vessel size: 50,000 DWT</li>
          <li>• Number of berths: 8 deep-water berths</li>
          <li>• Container yard capacity: 15,000 TEUs</li>
          <li>• Operating hours: 24/7 operations</li>
        </ul>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Major Shipping Lines and Services</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        The port serves as a hub for major international shipping lines including Maersk, MSC, CMA CGM, ONE, HMM, and SITC. 
        These carriers provide regular services connecting Sihanoukville to key markets in Asia, Europe, and the Americas. 
        The diverse range of shipping options ensures competitive rates and reliable service for importers and exporters.
      </p>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Paris Logistics Operations</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Paris Logistics maintains a strong presence at Sihanoukville Port, providing comprehensive freight forwarding and logistics services. 
        Our local team works closely with port authorities, customs officials, and shipping lines to ensure smooth cargo operations. 
        We offer services including:
      </p>

      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Container booking and space allocation</li>
        <li>Customs clearance and documentation</li>
        <li>Cargo consolidation and deconsolidation</li>
        <li>Warehousing and storage solutions</li>
        <li>Transportation to and from the port</li>
        <li>Real-time cargo tracking and monitoring</li>
      </ul>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Future Development Plans</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        The port is undergoing significant expansion to meet growing trade demands. Planned developments include:
      </p>

      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Construction of additional deep-water berths</li>
        <li>Expansion of container yard capacity</li>
        <li>Implementation of automated cargo handling systems</li>
        <li>Development of specialized terminals for different cargo types</li>
        <li>Enhanced connectivity with regional transportation networks</li>
      </ul>

      <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
        <h4 class="text-lg font-bold text-yellow-900 mb-2">Why Choose Sihanoukville Port?</h4>
        <p class="text-yellow-800">
          Sihanoukville Port offers competitive advantages including strategic location, modern infrastructure, 
          efficient operations, and strong connectivity to regional markets. For businesses looking to trade with Cambodia 
          or use the port as a transshipment hub, our team at Paris Logistics can provide expert guidance and support.
        </p>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mb-4">Contact Our Port Operations Team</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        For inquiries about shipping services through Sihanoukville Port or to learn more about our logistics solutions, 
        please contact our dedicated port operations team. We're here to help optimize your supply chain and ensure 
        smooth cargo operations.
      </p>

      <div class="bg-gray-50 p-6 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Port Operations Contact</h4>
            <p class="text-gray-700 text-sm">Phone: 0937.206.960</p>
            <p class="text-gray-700 text-sm">Email: portops@parislogistics.com.vn</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Office Hours</h4>
            <p class="text-gray-700 text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p class="text-gray-700 text-sm">Saturday: 8:00 AM - 12:00 PM</p>
          </div>
        </div>
      </div>
    `,
    date: "2024-01-05",
    category: "Port Operations",
    author: "Paris Logistics Team",
    urlAlias: "sihanoukville-port-photos",
    relatedArticles: [
      {
        id: 1,
        title: "Warehousing and Packaging of Goods in Transit",
        description: "Learn about our comprehensive warehousing and packaging services...",
        urlAlias: "warehousing-packaging-goods-transit"
      },
      {
        id: 2,
        title: "Phnom Penh Port Photos",
        description: "Explore our latest photos from Phnom Penh Port operations...",
        urlAlias: "phnom-penh-port-photos"
      }
    ]
  }
};

// Configuration to switch between mock data and API
const USE_MOCK_DATA = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

// API endpoints
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.parislogistics.com.vn';

export class NewsService {
  // Get all news articles
  static async getArticles(): Promise<NewsArticle[]> {
    if (USE_MOCK_DATA) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockArticles;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/news`);
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching articles:', error);
      // Fallback to mock data if API fails
      return mockArticles;
    }
  }

  // Get article by URL alias
  static async getArticleByAlias(urlAlias: string): Promise<NewsArticleDetail | null> {
    if (USE_MOCK_DATA) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      return mockArticleDetails[urlAlias] || null;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/news/${urlAlias}`);
      if (!response.ok) {
        throw new Error('Failed to fetch article');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching article:', error);
      // Fallback to mock data if API fails
      return mockArticleDetails[urlAlias] || null;
    }
  }

  // Get articles by category
  static async getArticlesByCategory(category: string): Promise<NewsArticle[]> {
    if (USE_MOCK_DATA) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 400));
      return mockArticles.filter(article => 
        article.category.toLowerCase() === category.toLowerCase()
      );
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/news/category/${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch articles by category');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching articles by category:', error);
      // Fallback to mock data if API fails
      return mockArticles.filter(article => 
        article.category.toLowerCase() === category.toLowerCase()
      );
    }
  }

  // Get categories with article counts
  static async getCategories(): Promise<{ name: string; count: number; color: string }[]> {
    if (USE_MOCK_DATA) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 200));
      const categoryCounts = mockArticles.reduce((acc, article) => {
        acc[article.category] = (acc[article.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      return [
        { name: "Warehousing", count: categoryCounts["Warehousing"] || 0, color: "blue" },
        { name: "Port Operations", count: categoryCounts["Port Operations"] || 0, color: "green" },
        { name: "Transportation", count: 15, color: "orange" },
        { name: "Industry News", count: 6, color: "purple" }
      ];
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/news/categories`);
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching categories:', error);
      // Fallback to mock data if API fails
      return [
        { name: "Warehousing", count: 12, color: "blue" },
        { name: "Port Operations", count: 8, color: "green" },
        { name: "Transportation", count: 15, color: "orange" },
        { name: "Industry News", count: 6, color: "purple" }
      ];
    }
  }

  // Subscribe to newsletter
  static async subscribeToNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    if (USE_MOCK_DATA) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true, message: 'Successfully subscribed to newsletter!' };
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      return await response.json();
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      return { success: false, message: 'Failed to subscribe. Please try again.' };
    }
  }
}

export default NewsService; 