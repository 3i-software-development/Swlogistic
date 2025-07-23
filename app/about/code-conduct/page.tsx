"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import ContactSidebar from "@/components/About/ContactSidebar";
import AboutSubNavigation from "@/components/About/AboutSubNavigation";

export default function CodeConduct() {
  const codeSections = [
    {
      id: 1,
      title: "Principles of the Rules of Law and Code of Conduct",
      items: [
        {
          subtitle: "1.1",
          content: "The Code of Conduct of Paris Logistic Co., Ltd (the Company) consists of policies relating to the legal and ethical standards that the staff and Management of the Company have to comply with while doing business. All of the Company's employees and transactions are subject to this Code of Conduct, unless otherwise stated."
        },
        {
          subtitle: "1.2",
          content: "The policy of the Company is to comply with the rule of law. Some of the company's policies are required by law, others are ethical and business standards. The Company was incorporated under the Laws of Vietnam; therefore the Company is subject to the Laws of Vietnam."
        },
        {
          subtitle: "1.3",
          content: "All employees of the Company are obligated to follow the ethical standards and other requirements in this Code of Conduct whether these standards are required by law or not. Any Company's employee who does not follow this Code of Conduct is acting outside the scope of work described in his or her Labor Contract with the Company."
        },
        {
          subtitle: "1.4",
          content: "It is the employees' responsibility to read and understand the Code of Conduct. If an employee has any questions about the Code of Conduct, he or she must contact the Management or the Directors."
        }
      ]
    },
    {
      id: 2,
      title: "Code of Conduct in practices",
      items: [
        {
          subtitle: "2.1",
          content: "All employees of the Company are required to follow the Code of Conduct while doing business. Every employee of the Company must conduct fair and honest transactions with other employees, customers, partners, suppliers, investors, competitors and government agencies."
        },
        {
          subtitle: "2.2",
          content: "While doing business, all employees must not try to have unfair advantages by lobbying, hiding or manipulating information, or engaging in all other unfair practices."
        },
        {
          subtitle: "2.3",
          content: "The Company strictly prohibits all types of discrimination based on race, gender, religion or nationality. All employees will be treated respectfully and they will not be interfered unreasonably during their business transactions."
        },
        {
          subtitle: "2.4",
          content: "No employee should use the loyalty to the Company or the profit-seeking desire as justification for the violation of the Law or this Code of Conduct. Any violation of this Code of Conduct would lead to disciplinary action from the Company, including termination of the labour contract if it is appropriate."
        }
      ]
    },
    {
      id: 3,
      title: "Sensitive transactions",
      items: [
        {
          subtitle: "3.1",
          content: "Sensitive transactions are illegal or unethical transactions that affect Company's integrity. These transactions often involve giving money or valuable gifts or other such conduct that helps affect the decisions of the money or gift receivers."
        },
        {
          subtitle: "3.2",
          content: "All sensitive transactions are strictly prohibited. All employees who enroll in the sensitive transactions are subject to punishment, jail sentences, or civil conflicts."
        },
        {
          subtitle: "3.3",
          content: "This policy does not prohibit the facilitation of payments that are properly recorded, strictly managed, and minimized. These facilitating payments will only be accepted with prior approval of the Management."
        }
      ]
    },
    {
      id: 4,
      title: "Bribery",
      items: [
        {
          subtitle: "4.1",
          content: "The Company strictly prohibits bribery and other illegal transactions involving the Company's suppliers or customers."
        },
        {
          subtitle: "4.2",
          content: "All employees are strictly forbidden to receive any amount of money or gifts (other than Company's salary, bonus and other legal payments) in connection with a transaction entered into by the Company."
        },
        {
          subtitle: "4.3",
          content: "Bribery of suppliers or customers includes any payment for the benefit of any representative of the supplier or customer. It includes:",
          subItems: [
            "Valuable gifts",
            "Money",
            "Free usage of services or products without Company's permission",
            "Personal loans or other forms of credit."
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Internal control, procedures and accounting records",
      items: [
        {
          subtitle: "5.1",
          content: "The Rules of Law and the Code of Conduct demand that the Company accurately and fairly record all transactions and assets of the Company."
        },
        {
          subtitle: "5.2",
          content: "The Company must have an internal control system to ensure the accuracy of all accounting records. The Code of Conduct makes sure that only legal and ethical transactions are accepted, and all transactions must be approved and recorded accurately. All accounting records and financial statements must be prepared and completed in a timely manner, are easy to understand and correctly and fairly reflect all transactions conducted during the reporting period."
        },
        {
          subtitle: "5.3",
          content: "All employees involved must become familiar with and follow the relating procedures and this Code of Conduct."
        }
      ]
    },
    {
      id: 6,
      title: "Insider information",
      items: [
        {
          subtitle: "",
          content: "\"Insider information\" is the information that has not been officially publicized. The Code of Conduct strictly prohibits the leakage of insider information to any unauthorized person."
        }
      ]
    },
    {
      id: 7,
      title: "Confidential information",
      items: [
        {
          subtitle: "7.1",
          content: "Some employees may possess confidential information about the Company or customers. The Code of Conduct prohibits all employees from using or disclosing the confidential information during or after his or her employment with the Company without the written permission. The unauthorized disclosure of confidential information may harmfully affect the interests of the Company or other relating parties."
        },
        {
          subtitle: "7.2",
          content: "The Company has access to a lot of sensitive commercial data of customers, suppliers or partners. The commercial data should be handled carefully to justify the trusts the customers, suppliers or partners have placed on the Company. The unauthorized use or disclosure of commercial data is strictly prohibited."
        }
      ]
    },
    {
      id: 8,
      title: "Conflicts of interest",
      items: [
        {
          subtitle: "8.1",
          content: "The Code of Conduct does not allow conflicts of interests between the Company and its employees. All employees must report any potential or actual conflicts of interest to the Management. All conflicts of interest must be avoided by all means, even resignation."
        },
        {
          subtitle: "8.2",
          content: "If any employee has personal interests prior to joining the Company, and his or her interests may conflict with the Company's, he or she is required to reveal his or her potential conflicts of interest and withdraw from all relating business conducts."
        }
      ]
    },
    {
      id: 9,
      title: "Cheating and similar misbehaviors",
      items: [
        {
          subtitle: "9.1",
          content: "Cheating and similar misbehaviors are strictly prohibited. Cheating and similar misbehaviors include, but are not limited to:",
          subItems: [
            "Dishonest",
            "Corruption, embezzlement",
            "Falsification",
            "Making unauthorized transactions"
          ]
        },
        {
          subtitle: "9.2",
          content: "All employees are required to protect and use the Company's properties effectively. Negligence, stealing, and destruction of Company's properties are strictly prohibited. Company's properties must be used for business purposes only."
        },
        {
          subtitle: "9.3",
          content: "All employees must report any suspicious action to the Management. The Management is required to undertake the appropriate investigations when receiving such reports."
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
            Home / About / Code of Business Conduct
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
              <h1 className="text-4xl font-bold text-blue-600 mb-6 uppercase">Code of Business Conduct</h1>
              
              {/* Introduction */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500 mb-8">
                <h2 className="text-xl font-bold text-red-600 mb-3">Ethical Standards & Legal Compliance</h2>
                <p className="text-gray-700 leading-relaxed">
                  Paris Logistics is committed to maintaining the highest standards of ethical behavior and legal compliance. 
                  This Code of Business Conduct outlines the principles and standards that all employees must follow to ensure 
                  integrity, transparency, and trust in all our business operations.
                </p>
              </div>

              {/* Code Sections */}
              <div className="space-y-8 mb-8">
                {codeSections.map((section, sectionIndex) => (
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
                                    <span className="text-red-500 font-bold mt-1">•</span>
                                    <span className="text-gray-600 text-sm">{subItem}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Compliance Statement */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border border-green-200 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-green-600 mb-4">Our Commitment to Compliance</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      At Paris Logistics, we believe that ethical business practices are fundamental to our success and reputation. 
                      This Code of Business Conduct serves as our commitment to maintaining the highest standards of integrity, 
                      transparency, and legal compliance in all our operations.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Every employee is responsible for understanding and adhering to these standards. We encourage open communication 
                      and reporting of any concerns or violations. Together, we maintain the trust and confidence of our customers, 
                      partners, and stakeholders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information for Questions */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Questions or Concerns?</h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Code of Business Conduct or need to report a potential violation, 
                  please contact the Management or Directors immediately.
                </p>
                <div className="flex items-center space-x-2 text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">parislogistics@parislogistics.com.vn</span>
                </div>
              </div>

              {/* Sub Navigation */}
              <AboutSubNavigation currentPage="/gioi-thieu/code-conduct" />
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