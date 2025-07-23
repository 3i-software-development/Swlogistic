"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import ContactSidebar from "@/components/About/ContactSidebar";
import AboutSubNavigation from "@/components/About/AboutSubNavigation";

export default function TradingConditions() {
  const sections = [
    {
      id: "I",
      title: "GENERAL PRINCIPLES",
      items: [
        {
          subtitle: "1.1",
          content: "These Standard Trading Conditions (herebelow referred to as TSTC) shall be applied to all services provided, handled, performed or rendered by Paris Logistic Co., Ltd (the Company) acting as Freight Forwarder even when the Company procures a Bill of Lading or other similar document evidencing a contract of carriage between a person other than the Company and the customer or owner."
        },
        {
          subtitle: "1.2",
          content: "In cases when the Company acts as a carrier, the provisions of a document issued by or on behalf of the company bearing a title to or including \"Bill of lading\", whether negotiable or not, shall be paramount and in the event of a conflict of conditions, the provisions of such a document shall prevail over those of TSTC to the extent of such conflict."
        },
        {
          subtitle: "1.3",
          content: "As to the services in respect of or relating to customs clearance, taxes, licences, consular documents, certificates of origin, inspection, certificates and other similar services or incidents, the Company is to always be considered to act as agents only and never to be considered to act as a Principals."
        }
      ]
    },
    {
      id: "II",
      title: "DEFINITIONS",
      items: [
        {
          subtitle: "2.1",
          content: "\"The Company\" means Paris Logistic Co., Ltd, business address registered at P.505-G3, Trung Tu, Dong Da, Hanoi, Vietnam, the service provider."
        },
        {
          subtitle: "2.2",
          content: "\"Conditions\" means the entire undertakings, terms, conditions and clauses embodied in TSTC."
        },
        {
          subtitle: "2.3",
          content: "\"Customer's means any person, or any body, or any company, corporation and enterprise, or any organization."
        },
        {
          subtitle: "2.4",
          content: "\"Owner\" means the owner of the goods including shippers and consignees and another person who is or may become interested in the goods and anyone acting on their behalf."
        },
        {
          subtitle: "2.5",
          content: "\"Goods\" includes the cargo and any container not supplied or on behalf of the company, or any part thereof in respect of which the company provides a service."
        },
        {
          subtitle: "2.6",
          content: "\"Dangerous goods\" means goods listed in : International Maritime Dangerous Goods Code\" issued, published by the IMO (International Maritime Organization)."
        },
        {
          subtitle: "2.7",
          content: "\"Instruction\" means a statement of the customer's specific requirements."
        }
      ]
    },
    {
      id: "III",
      title: "THE COMPANY'S GENERAL RESPONSIBILITIES",
      items: [
        {
          subtitle: "3.1",
          content: "The Company shall perform its duties with a reasonable degree of care, diligence, skill and judgement."
        },
        {
          subtitle: "3.2",
          content: "The Company shall carry out its services within a reasonable time expected under special arrangement previously made in writing as an instruction to the company."
        },
        {
          subtitle: "3.3",
          content: "Subject to TSTC and in particular to the discretion reserved to the Company below, the Company shall take all reasonable steps to perform any of the customer's instructions acceptable by the company."
        },
        {
          subtitle: "3.4",
          content: "If at any stage in any transaction the Company should reasonably consider that there is good reason in the customer's interests to depart from any of the customer's instructions, the Company shall be permitted to do so and shall not incur any additional liability in consequence of so doing."
        },
        {
          subtitle: "3.5",
          content: "When using discretion as permitted in TSTC the Company shall do so with due regard to the interests of the customer."
        },
        {
          subtitle: "3.6",
          content: "If after the contract has been agreed upon events or circumstances come to the attention of the Company which, in the opinion of the company, make it wholly of in part impossible for the Company to fulfill its duties, it shall take reasonable steps to inform the customer of those events or circumstances and seek further instructions."
        }
      ]
    },
    {
      id: "IV",
      title: "CUSTOMER'S OBLIGATION",
      items: [
        {
          subtitle: "4.1",
          content: "The customer warrants that he is either the owner or the authorized agent of the owner of the goods and that he is authorized to accept and is accepting TSTC not only for himself but also as agent for and on behalf of the owner of the goods."
        },
        {
          subtitle: "4.2",
          content: "The customer warrants that he has reasonable knowledge of matters affecting the conduct of his business, including but not limited to the terms of sale and purchase of the goods and all other matters relating thereto."
        },
        {
          subtitle: "4.3",
          content: "The customer shall give sufficient and executable instructions."
        },
        {
          subtitle: "4.4",
          content: "The customer warrants that the description and particulars of the goods are complete, accurate, and correct."
        },
        {
          subtitle: "4.5",
          content: "The customer warrants that the goods are properly packed and labelled except where the company has accepted instructions in respect of such services."
        },
        {
          subtitle: "4.6",
          content: "The customer shall not, unless otherwise previously and expressly agreed in writing, deliver to the company any goods that cause the company to deal with or handle dangerous goods."
        },
        {
          subtitle: "4.7",
          content: "The customer shall indemnify the company against all liability, loss damage cost and expenses whatsoever arising out of the company acting in accordance with the customer's instructions or arising from any breach by the customer of any warranty contained in TSTC or from the negligence of the customer."
        },
        {
          subtitle: "4.8",
          content: "The customer shall pay to the company in cash or, as agreed, all sums immediately when due without deduction or deferment on account of any claim, counterclaim, or set-off."
        }
      ]
    },
    {
      id: "V",
      title: "PERFORMANCE OF CONTRACT",
      subsections: [
        {
          subtitle: "A. The Company as agent:",
          items: [
            {
              subtitle: "5.1",
              content: "To the extent that the Company acts as agent, the Company does not make or purpose to make any contract with the customer for the carriage, storage or handling of the goods or for any other physical service in relation to them and acts solely on behalf of the customer in securing such services by establishing contracts with the third parties so that direct contractual relationships are established between the customer and such third parties."
            },
            {
              subtitle: "5.2",
              content: "The Company shall not be liable for the acts and omissions of such third parties referred to in clause 5.1 above nor responsible for any accident or any neglect or default howsoever arising whether willful or otherwise on the part of its agents or those with whom it contracts in respect of the goods to be forwarded, whether they are carried by land, sea or air or warehouse keepers or other persons."
            },
            {
              subtitle: "5.4",
              content: "The Company only forwards goods subject to the contracts, terms, conditions, and regulations of the various persons, companies or authorities in whose possession the goods may pass."
            },
            {
              subtitle: "5.5",
              content: "The Company shall defend, indemnify and hold harmless the company in respect of all liabilities, loss damages, costs or expenses arising out of any contracts made in procurement of the customer's requirements in accordance with clauses 5.4, 5.5."
            }
          ]
        },
        {
          subtitle: "B. The Company as Principal:",
          items: [
            {
              subtitle: "5.6",
              content: "To the extent that the Company acts as Principal for the performance of the customer's instructions, the Company undertakes to perform or in its own name, procure the performance of the customer's instructions and subject to the provisions of TSTC, shall be liable for the loss of or damage to the goods occurring from the time that the goods are taken into its charge until the time of delivery."
            },
            {
              subtitle: "5.7",
              content: "Notwithstanding other provisions in TSTC, if it is proven that the loss of or damage to the goods occurred, the Company's liability shall be determined by the provisions contained in any International Convention or national Law, the provisions of which.",
              subItems: [
                "Cannot be departed from by private contract, to the detriment of the claimant, and;",
                "Would have been applied if the claimant had made a separate and direct contract with the actual provider of the particular service in respect of that service or stage of the carriage where the loss or damage occurred and received as evidence thereof any particular document that must be issued if such an International Convention of National Law shall be applied."
              ]
            },
            {
              subtitle: "5.8",
              content: "Notwithstanding other provisions provided in TSTC if it can be proved that the loss of or damage to the goods occurred at sea or inland waterway, the Company's liability shall be limited to those set out in the Maritime Code of Viet Nam and the company shall be entitled to rely on all defenses, exemptions or limitations provided to the carriers by the above code. Reference in the above code to carriage by sea shall be deemed to include reference to carriage of inland waterways and the code shall be construed accordingly."
            }
          ]
        },
        {
          subtitle: "C. Air carriage:",
          items: [
            {
              subtitle: "",
              content: "If the Company acts as a principal in respect of the carriage of goods by air, the Company's liability shall be determined by the provisions contained in the Law on Civil Aviation of Viet Nam."
            }
          ]
        }
      ]
    },
    {
      id: "VI",
      title: "GENERAL LIABILITY AND LIMITATION OF LIABILITY",
      items: [
        {
          subtitle: "6.1",
          content: "Except insofar as otherwise provided by TSTC, the Company shall not be liable for any loss or damage whatsoever arising from:",
          subItems: [
            "The act or omission of the customer or owner or any person acting on their behalf.",
            "Compliance with the instructions given to the company by the customer, owner or any other person entitled to give them.",
            "Insufficiency of the packing or labelling of the goods except where such service has been provided by the company.",
            "Handling, loading, stowage or unloading of the goods by the customer or owner person acting on their behalf.",
            "Inherit vices of goods.",
            "Riots, civil commotions, strikes, lockouts, stoppages or restraints of labour from whatsoever cause, or",
            "Any cause with the company that could not avoid and the consequences where if could not be preventd by the exercise of reasonable diligence."
          ]
        },
        {
          subtitle: "6.2",
          content: "Notwithstanding other provisions provided in TSTC, the Company shall not be liable for any loss or damage howsoever caused to the property other than the goods themselves, indirect or consequential loss or damage, loss of profit, delay or deviation."
        },
        {
          subtitle: "6.3",
          content: "Except as otherwise specified in the TSTC has responsibility of the Company, in any case, for any negligence or error or any other incidents or events occur whether any, and regardless of the cause cause loss or damage unexplained, shall not exceed as specified in Article 8 of Decree 140/2007/ND-CP September 5, 2007 for companies with logistics service businesses or in Article 24 Decree No. 87/2009/ND-CP October 19, 2009,of The Government of Socialist Republic of Vietnam for companies providing services for multi-modal transport."
        },
        {
          subtitle: "6.4",
          content: "",
          subItems: [
            "Compensation shall be calculated by reference to the invoice value of the goods plus freight and insurance if paid.",
            "If there be no invoice value for the goods, the compensation shall be calculated by the reference to the value of such goods at the place and time when they are delivered to the customer or should have been so delivered. The value of the goods shall be fixed according to the current market value, or, if there be no commodity exchange price or current market value, by reference to the normal value of goods of the same kind and quality."
          ]
        },
        {
          subtitle: "6.5",
          content: "By special agreement in writing and on payment of aditional charges, higher cpmpensation may be claimed from the Company not exceeding the value of goods or the agreed value, whichever is lesser."
        },
        {
          subtitle: "6.6",
          content: "",
          subItems: [
            "The Company shall be discharged of any liability whatsoever unless:",
            "notice of any claim is received by the company or its agent within 14 days (Sundays, holidays excluded) after the day specified below.",
            "suit is brought in the proper forum and written notice thereof is received by the company within 9 months after the date specified in (b) below.",
            "In the case of damage to goods, the date of delivery of the goods, and in the case of loss of the goods, the date of the goods should have been delivered.",
            "In the case of delay or non-delivery of the goods, the date that the goods should have been delivered.",
            "In any other case, the event giving rise to the claim."
          ]
        }
      ]
    },
    {
      id: "VII",
      title: "RIGHT OF LIEN AND DETENTION",
      items: [
        {
          subtitle: "7.1",
          content: "The Company shall have a general lien on all goods and documents relating to goods in its possession, custody or control for all sum due at any time from the customer or owner, and shall be entitled to sell or dispose of such goods or documents as agent for all and at the expenses of the customer and aply the proceeds in or towards the payment of such sum on 45 days noticed in writing to the customer, upon according to the customer for any balance remaining after payment of any sum due to the Company and the cost of sale or disposal the Company shall be discharged of any liability in respect of the goods or documents."
        },
        {
          subtitle: "7.2",
          content: "When the goods are labeled to perish or deteriorate, the Company's right to sell or dispose of the goods shall arise immediately upon any sum becoming due to the Company subject only to the Company taking reasonable steps to bring to the customer's attention its intention of selling or disposing of the goods before so doing."
        },
        {
          subtitle: "7.3",
          content: "The Company shall be entitled to retain and repay all brokerage commission allowances and other remunerations customarily retained by or paid to Freight Forwarders."
        }
      ]
    },
    {
      id: "VIII",
      title: "CLAIM AND ARBITRATION",
      items: [
        {
          subtitle: "8.1",
          content: "Claims against the Company shall timebar within 6 months except where and when the Company acts as sea or inland waterway carrier and in his own name issues a Bill of Lading for which the timebar will be determined by the provisions therein. The six month period to the consignee named in the contract or, if no delivery was taken place, from the date of conclusion of the contract."
        },
        {
          subtitle: "8.2",
          content: "In case of dispute, the disputing parties shall in first instance endeavor to settle it in an amicable way, however should such effort fail to achieve our objectives, the parties thereto agree to submit the case to aboard of arbitrators to be appointed one by each. In case arbitrators by so chosen shall not agree then the decision of and impire to be appointed by them shall be finalised and binding upon both parties."
        }
      ]
    },
    {
      id: "IX",
      title: "JURISDICTION AND LAW",
      items: [
        {
          subtitle: "9.1",
          content: "TSTC and any act or contract to which they apply shall be governed by the Laws of the Social Republic of Viet Nam."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-6">
          <div className="text-gray-600 text-sm">
            Home / About / Standard Trading Conditions
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area - Left Side */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Page Title */}
              <h1 className="text-4xl font-bold text-blue-600 mb-6 uppercase">Standard Trading Conditions</h1>
              
              {/* Introduction */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
                <h2 className="text-xl font-bold text-blue-600 mb-3">Legal Framework & Business Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Standard Trading Conditions (TSTC) establish the legal framework and terms under which Paris Logistics 
                  provides its freight forwarding and logistics services. These conditions apply to all transactions and services 
                  provided by the Company, ensuring clarity, fairness, and legal compliance in all business relationships.
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-8 mb-8">
                {sections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.id}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  >
                    {/* Section Header */}
                    <div className="bg-blue-600 text-white px-6 py-4">
                      <h2 className="text-lg font-bold">
                        {section.id}. {section.title}
                      </h2>
                    </div>
                    
                    {/* Section Content */}
                    <div className="p-6">
                      {section.subsections ? (
                        // Handle subsections (like Section V)
                        <div className="space-y-6">
                          {section.subsections.map((subsection, subIndex) => (
                            <div key={subIndex} className="border-l-4 border-blue-200 pl-4">
                              <h3 className="text-md font-bold text-blue-600 mb-3">
                                {subsection.subtitle}
                              </h3>
                              <div className="space-y-4">
                                {subsection.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="border-l-2 border-gray-200 pl-4">
                                    {item.subtitle && (
                                      <h4 className="text-sm font-bold text-gray-700 mb-2">
                                        {item.subtitle}
                                      </h4>
                                    )}
                                    <p className="text-gray-700 leading-relaxed mb-3">
                                      {item.content}
                                    </p>
                                    {item.subItems && (
                                      <ul className="ml-6 space-y-1">
                                        {item.subItems.map((subItem, subItemIndex) => (
                                          <li key={subItemIndex} className="flex items-start space-x-2">
                                            <span className="text-blue-500 font-bold mt-1">•</span>
                                            <span className="text-gray-600 text-sm">{subItem}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        // Handle regular sections
                        <div className="space-y-6">
                          {section.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="border-l-4 border-blue-200 pl-4">
                              {item.subtitle && (
                                <h3 className="text-sm font-bold text-blue-600 mb-2">
                                  {item.subtitle}
                                </h3>
                              )}
                              <p className="text-gray-700 leading-relaxed mb-3">
                                {item.content}
                              </p>
                              {item.subItems && (
                                <ul className="ml-6 space-y-1">
                                  {item.subItems.map((subItem, subIndex) => (
                                    <li key={subIndex} className="flex items-start space-x-2">
                                      <span className="text-blue-500 font-bold mt-1">•</span>
                                      <span className="text-gray-600 text-sm">{subItem}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Legal Notice */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-lg border border-yellow-200 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 text-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-yellow-600 mb-4">Important Legal Notice</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      These Standard Trading Conditions constitute a legally binding agreement between Paris Logistics Co., Ltd 
                      and our customers. By engaging our services, customers acknowledge and agree to be bound by these terms 
                      and conditions.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      For questions regarding these conditions or to request clarification on any specific terms, 
                      please contact our legal department or management team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Legal Inquiries</h3>
                <p className="text-gray-600 mb-4">
                  For legal questions or clarifications regarding these Standard Trading Conditions, 
                  please contact our legal department.
                </p>
                <div className="flex items-center space-x-2 text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">parislogistics@parislogistics.com.vn</span>
                </div>
              </div>

              {/* Sub Navigation */}
              <AboutSubNavigation currentPage="/gioi-thieu/trading-conditions" />
            </motion.div>
          </div>

          {/* Sidebar - Right Side */}
          <ContactSidebar />
        </div>
      </div>

      <Footer />
    </div>
  );
} 