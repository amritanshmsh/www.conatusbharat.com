'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

function PrivacyPolicy() {
    const { theme } = useTheme();
    const isLightMode = theme === 'light';

    return (
        <div className={`${isLightMode ? 'bg-white text-black' : 'bg-black text-white'} min-h-screen py-12 px-6`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                <p className={`text-sm mb-6 ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>Effective Date: June 21, 2024 | Last Updated: November 29, 2025</p>

                <div className="space-y-6">
                    <section>
                        <p className={`text-lg leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                            Conatus Bharat Education Pvt Ltd ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our educational platforms. By using our services, you agree to the collection and use of information in accordance with this policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>1.1 Personal Information</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    We may collect personally identifiable information, including but not limited to:
                                </p>
                                <ul className={`list-disc list-inside ml-4 mt-2 space-y-1 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    <li>Name, email address, phone number, and contact details</li>
                                    <li>School or educational institution information</li>
                                    <li>Student demographic information (age, grade level, location)</li>
                                    <li>Parent or guardian information for minor users</li>
                                    <li>Payment and billing information for subscription services</li>
                                    <li>Professional information for educators and administrators</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>1.2 Usage Data and Analytics</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    We automatically collect information about your interaction with our website and services:
                                </p>
                                <ul className={`list-disc list-inside ml-4 mt-2 space-y-1 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    <li>IP address, browser type, and operating system</li>
                                    <li>Device information and unique device identifiers</li>
                                    <li>Pages viewed, time spent on pages, and navigation paths</li>
                                    <li>Referring URLs and search terms used to find our website</li>
                                    <li>Login times, frequency of use, and session duration</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>1.3 Educational Assessment Data</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    For students using our adaptive learning platforms, we collect:
                                </p>
                                <ul className={`list-disc list-inside ml-4 mt-2 space-y-1 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    <li>Assessment responses, scores, and performance metrics</li>
                                    <li>Learning progress and completion rates</li>
                                    <li>Skill proficiency levels and learning patterns</li>
                                    <li>Personalized recommendations and adaptive pathways</li>
                                    <li>Feedback provided by students, teachers, or parents</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>1.4 Cookies and Tracking Technologies</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    We use cookies, web beacons, and similar technologies to enhance user experience, analyze usage patterns, and personalize content. You can control cookie preferences through your browser settings.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>2.1 To Provide and Improve Services</h3>
                                <ul className={`list-disc list-inside ml-4 space-y-1 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    <li>Deliver personalized learning experiences and adaptive assessments</li>
                                    <li>Generate progress reports and performance analytics</li>
                                    <li>Provide technical support and respond to inquiries</li>
                                    <li>Maintain, improve, and develop new features for our platforms</li>
                                    <li>Process subscriptions and manage billing</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>2.2 Communication and Marketing</h3>
                                <ul className={`list-disc list-inside ml-4 space-y-1 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    <li>Send newsletters, product updates, and educational content</li>
                                    <li>Notify you about changes to our services or policies</li>
                                    <li>Share promotional materials and special offers (with consent)</li>
                                    <li>Conduct surveys and gather feedback</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>2.3 Analytics and Research</h3>
                                <ul className={`list-disc list-inside ml-4 space-y-1 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    <li>Analyze usage trends and platform performance</li>
                                    <li>Conduct educational research to improve learning outcomes</li>
                                    <li>Create anonymized, aggregated data for insights</li>
                                    <li>Develop machine learning models for adaptive learning</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>2.4 Legal Compliance and Protection</h3>
                                <ul className={`list-disc list-inside ml-4 space-y-1 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    <li>Comply with legal obligations and regulatory requirements</li>
                                    <li>Protect against fraud, unauthorized access, and security threats</li>
                                    <li>Enforce our Terms of Service and other agreements</li>
                                    <li>Resolve disputes and address legal claims</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
                        <div className="space-y-4">
                            <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                We do not sell your personal information. We may share your information in the following circumstances:
                            </p>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>3.1 Service Providers and Partners</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    We may share information with trusted third-party service providers who assist us in:
                                </p>
                                <ul className={`list-disc list-inside ml-4 mt-2 space-y-1 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    <li>Cloud hosting and data storage</li>
                                    <li>Payment processing and billing services</li>
                                    <li>Email delivery and communication tools</li>
                                    <li>Analytics and performance monitoring</li>
                                    <li>Customer support and CRM systems</li>
                                </ul>
                                <p className={`leading-relaxed mt-2 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    These providers are contractually obligated to protect your information and use it only for specified purposes.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>3.2 Schools and Educational Institutions</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    For students using our platform through their schools, we may share progress reports, assessment data, and learning analytics with authorized school personnel, teachers, and administrators as necessary to support educational objectives.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>3.3 Legal Requirements</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    We may disclose your information if required to do so by law, court order, or in response to valid requests by government authorities, law enforcement, or regulatory bodies.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>3.4 Business Transfers</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change in ownership or control.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                        <p className={`leading-relaxed mb-4 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                            We implement industry-standard administrative, technical, and physical security measures to protect your personal information, including:
                        </p>
                        <ul className={`list-disc list-inside ml-4 space-y-1 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                            <li>Encryption of data in transit and at rest using SSL/TLS protocols</li>
                            <li>Secure authentication and access controls</li>
                            <li>Regular security audits and vulnerability assessments</li>
                            <li>Employee training on data protection and privacy practices</li>
                            <li>Incident response and breach notification procedures</li>
                        </ul>
                        <p className={`leading-relaxed mt-4 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
                        <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Assessment data and learning records may be retained to track long-term educational progress. When data is no longer needed, we will securely delete or anonymize it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
                        <div className="space-y-4">
                            <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                Depending on your location and applicable laws, you may have the following rights:
                            </p>
                            <ul className={`list-disc list-inside ml-4 space-y-1 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                                <li><strong>Correction:</strong> Update or correct inaccurate or incomplete information</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                                <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                                <li><strong>Objection:</strong> Object to processing of your data for certain purposes</li>
                                <li><strong>Restriction:</strong> Request limitation on how we use your information</li>
                                <li><strong>Withdrawal of Consent:</strong> Withdraw consent for marketing communications at any time</li>
                            </ul>
                            <p className={`leading-relaxed mt-4 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                To exercise these rights, please contact us at the email address provided below. We will respond to your request within a reasonable timeframe.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
                        <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                            Our services are used by students of various ages, including children under 18. When collecting information from minors, we obtain consent from parents, guardians, or schools as required by applicable laws. We do not knowingly collect personal information from children under 13 without verifiable parental or school consent. If you believe we have inadvertently collected such information, please contact us immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
                        <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                            Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">9. Third-Party Links</h2>
                        <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                            Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
                        <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by posting the updated policy on this page and updating the "Last Updated" date. For significant changes, we may provide additional notice such as email notification. We encourage you to review this Privacy Policy periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
                        <p className={`leading-relaxed mb-4 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className={`p-6 rounded-lg border ${isLightMode ? 'bg-gray-50 border-gray-200' : 'bg-gray-900 border-gray-800'}`}>
                            <p className={`font-semibold mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>Conatus Bharat Education Pvt Ltd</p>
                            <p className={`${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>Email: <a href="mailto:conatusbharat@gmail.com" className="hover:underline">conatusbharat@gmail.com</a></p>
                        </div>
                    </section>

                    <section className={`p-6 rounded-lg border ${isLightMode ? 'bg-gray-50 border-gray-200' : 'bg-gray-900 border-gray-800'}`}>
                        <p className={`text-sm ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                            By using our website or services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
                        </p>
                    </section>
                </div>

                <div className="mt-16">
                    <Link href="/">
                        <button className={`flex items-center gap-2 ${isLightMode ? 'text-black border-black hover:bg-black hover:text-white' : 'text-white border-white hover:bg-white hover:text-black'} border px-6 py-3 rounded-lg transition-all duration-300 font-medium`}>
                            <FaArrowLeft size={18} />
                            <span>Back to Home</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
