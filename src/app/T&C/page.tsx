'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

function TermsOfUse() {
    const { theme } = useTheme();
    const isLightMode = theme === 'light';

    return (
        <div className={`${isLightMode ? 'bg-white text-black' : 'bg-black text-white'} min-h-screen py-12 px-6`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
                <p className={`text-sm mb-6 ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>Effective Date: June 21, 2024 | Last Updated: November 29, 2025</p>

                <div className="space-y-6">
                    <section>
                        <p className={`text-lg leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                            These Terms and Conditions ("Terms") govern your access to and use of the services, platforms, and products provided by Conatus Bharat Education Pvt Ltd ("Conatus Bharat," "we," "us," or "our"). By accessing or using our services, you ("User," "you," or "your") agree to be bound by these Terms. If you are using our services on behalf of a school or educational institution, you represent that you have the authority to bind that entity to these Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>1.1 Agreement to Terms</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    By creating an account, accessing our website, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not use our services.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>1.2 Modifications to Terms</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    We reserve the right to modify, update, or replace these Terms at any time. Material changes will be communicated through email, platform notifications, or prominent notices on our website. Your continued use of our services after such changes constitutes acceptance of the updated Terms.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>1.3 Age Requirements</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    Our services may be used by individuals of all ages. For users under 18 years of age, parental or guardian consent is required, or access must be authorized through a school or educational institution.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Services Provided</h2>
                        <div className="space-y-4">
                            <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                Conatus Bharat provides educational technology solutions, including:
                            </p>
                            <ul className={`list-disc list-inside ml-4 space-y-2 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                <li><strong>Wonder:</strong> An adaptive learning platform designed to personalize education based on individual student needs, abilities, and learning styles</li>
                                <li><strong>Educational Assessments:</strong> Tools for evaluating student performance, skills, and learning progress</li>
                                <li><strong>Progress Tracking:</strong> Analytics and reporting features for students, parents, teachers, and administrators</li>
                                <li><strong>School Management Tools:</strong> Administrative solutions for educational institutions</li>
                                <li><strong>Mentorship Programs:</strong> Access to educational mentors and guidance</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. User Accounts and Registration</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>3.1 Account Creation</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    To access certain features, you may need to create an account. You agree to provide accurate, current, and complete information during registration and to update such information as necessary to maintain its accuracy.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>3.2 Account Security</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use or security breach. We are not liable for any loss or damage arising from your failure to protect your account information.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>3.3 Account Types</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    Different account types are available for students, parents, teachers, school administrators, and institutional partners. Each account type has specific access rights and responsibilities.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Subscription and Payment Terms</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>4.1 Subscription Plans</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    Our services are offered on a subscription basis with various plans tailored for individual users, families, schools, and educational institutions. Subscription details, pricing, and billing cycles are specified in your Subscription Agreement or at the time of purchase.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>4.2 Payment and Billing</h3>
                                <ul className={`list-disc list-inside ml-4 space-y-1 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    <li>All fees are payable in Indian Rupees (INR) or other specified currencies</li>
                                    <li>Payment methods may include credit/debit cards, online banking, UPI, or institutional invoicing</li>
                                    <li>Subscriptions automatically renew unless canceled prior to the renewal date</li>
                                    <li>You authorize us to charge your payment method for recurring subscription fees</li>
                                    <li>All fees are non-refundable except as required by law or explicitly stated in your Subscription Agreement</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>4.3 Price Changes</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    We reserve the right to modify subscription fees at any time. You will be notified of price changes at least 30 days in advance. Continued use of the service after a price change constitutes acceptance of the new pricing.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>4.4 Free Trials and Promotional Offers</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    We may offer free trials or promotional pricing. These offers are subject to specific terms and conditions, which will be communicated at the time of the offer. Unless canceled before the trial period ends, your subscription will automatically convert to a paid plan.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use Policy</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>5.1 Permitted Use</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    You may use our services solely for lawful educational purposes. You agree to use our platform in a manner consistent with all applicable laws and regulations.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>5.2 Prohibited Activities</h3>
                                <p className={`leading-relaxed mb-2 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>You agree not to:</p>
                                <ul className={`list-disc list-inside ml-4 space-y-1 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    <li>Use the service for any illegal, harmful, or fraudulent purpose</li>
                                    <li>Violate any intellectual property rights or proprietary rights</li>
                                    <li>Transmit viruses, malware, or other harmful code</li>
                                    <li>Attempt to gain unauthorized access to our systems or user accounts</li>
                                    <li>Reverse engineer, decompile, or disassemble any part of the platform</li>
                                    <li>Scrape, mine, or extract data through automated means without permission</li>
                                    <li>Harass, abuse, or harm other users</li>
                                    <li>Share or distribute inappropriate, offensive, or harmful content</li>
                                    <li>Circumvent security measures or authentication protocols</li>
                                    <li>Use the service to compete with or replicate our business</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">6. User-Generated Content</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>6.1 Content Submission</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    Users may submit content such as responses to assessments, comments, feedback, questions, and project submissions. You retain ownership of your content but grant us a license to use, display, and process it as necessary to provide our services.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>6.2 License Grant</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    By submitting content, you grant Conatus Bharat a non-exclusive, royalty-free, worldwide, perpetual, and sublicensable license to use, reproduce, modify, adapt, publish, and display such content for the purpose of operating and improving our services, generating analytics, and conducting educational research.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>6.3 Content Responsibility</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    You are solely responsible for the content you submit. You represent that your content does not violate any third-party rights, laws, or regulations. We reserve the right to remove or modify any content that violates these Terms or is otherwise objectionable.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>6.4 Parental Consent for Minors</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    For students under 18, schools or parents/guardians must provide consent before students can submit content. Schools using our platform are responsible for obtaining all necessary consents.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property Rights</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>7.1 Ownership</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    All content, features, functionality, and materials available through our services, including but not limited to text, graphics, logos, images, software, code, assessments, and learning algorithms, are owned by Conatus Bharat or our licensors and are protected by copyright, trademark, patent, and other intellectual property laws.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>7.2 Trademarks</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    "Conatus Bharat," "Wonder," and other brand names, logos, and service marks are trademarks of Conatus Bharat Education Pvt Ltd. You may not use these marks without our prior written permission.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>7.3 Limited License to Users</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our services for personal, non-commercial educational purposes. This license does not include any resale or commercial use of our services or content.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">8. Data and Privacy</h2>
                        <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                            Our collection, use, and protection of your personal information is governed by our Privacy Policy. By using our services, you consent to our data practices as described in the Privacy Policy. We are committed to protecting student data in compliance with applicable education privacy laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">9. Progress Reports and Assessments</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>9.1 Assessment Accuracy</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    Our platform generates progress reports, learning analytics, and personalized recommendations based on assessment data and learning patterns. While we strive for accuracy, these reports are educational tools and should not be considered definitive or comprehensive measures of a student's abilities.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>9.2 Educational Use</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    Progress reports and recommendations should be used in conjunction with professional educational judgment and other assessment methods. They are not a substitute for professional educational advice or psychological evaluation.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">10. Termination and Suspension</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>10.1 Termination by User</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    You may cancel your subscription or close your account at any time through your account settings or by contacting our support team. Cancellation will be effective at the end of the current billing period.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>10.2 Termination by Conatus Bharat</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    We reserve the right to suspend or terminate your access to our services at any time, with or without notice, for:
                                </p>
                                <ul className={`list-disc list-inside ml-4 space-y-1 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    <li>Violation of these Terms</li>
                                    <li>Non-payment of fees</li>
                                    <li>Fraudulent, abusive, or illegal activity</li>
                                    <li>Conduct that harms other users or our reputation</li>
                                    <li>Extended period of inactivity</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>10.3 Effect of Termination</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    Upon termination, your right to access and use our services will immediately cease. We may retain certain data as required by law or for legitimate business purposes. You may request deletion of your data subject to our data retention policies.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">11. Disclaimers and Warranties</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>11.1 "As Is" Service</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    Our services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>11.2 No Guarantee of Results</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    While our platform is designed to enhance learning outcomes, we do not guarantee specific educational results, improvements in performance, or admission to particular educational institutions.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>11.3 Service Availability</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    We do not guarantee that our services will be uninterrupted, error-free, or completely secure. We may experience technical difficulties, maintenance periods, or other disruptions.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">12. Limitation of Liability</h2>
                        <div className="space-y-4">
                            <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                To the fullest extent permitted by applicable law, Conatus Bharat, its officers, directors, employees, agents, and affiliates shall not be liable for:
                            </p>
                            <ul className={`list-disc list-inside ml-4 space-y-1 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                                <li>Loss of profits, revenue, data, or use</li>
                                <li>Business interruption or loss of goodwill</li>
                                <li>Costs of procurement of substitute services</li>
                                <li>Any damages arising from your use or inability to use our services</li>
                            </ul>
                            <p className={`leading-relaxed mt-4 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                Our total liability for any claim arising out of or relating to these Terms or our services shall not exceed the amount paid by you to Conatus Bharat in the twelve (12) months preceding the claim, or INR 10,000, whichever is less.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">13. Indemnification</h2>
                        <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                            You agree to indemnify, defend, and hold harmless Conatus Bharat and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or in any way connected with your use of our services, violation of these Terms, or infringement of any rights of another party.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">14. Governing Law and Dispute Resolution</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>14.1 Governing Law</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>14.2 Jurisdiction</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    Any disputes arising out of or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts located in [Your City], India.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>14.3 Arbitration</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    Before initiating formal legal proceedings, parties agree to attempt to resolve disputes through good-faith negotiation. If negotiation fails, disputes may be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">15. General Provisions</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>15.1 Entire Agreement</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    These Terms, together with our Privacy Policy and any Subscription Agreement, constitute the entire agreement between you and Conatus Bharat regarding your use of our services.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>15.2 Severability</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>15.3 Waiver</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>15.4 Assignment</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    You may not transfer or assign your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations without restriction.
                                </p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-medium mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>15.5 Force Majeure</h3>
                                <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                    We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, or governmental actions.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">16. Contact Information</h2>
                        <p className={`leading-relaxed mb-4 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                            If you have any questions, concerns, or feedback regarding these Terms, please contact us:
                        </p>
                        <div className={`p-6 rounded-lg border ${isLightMode ? 'bg-gray-50 border-gray-200' : 'bg-gray-900 border-gray-800'}`}>
                            <p className={`font-semibold mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>Conatus Bharat Education Pvt Ltd</p>
                            <p className={`${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>Email: <a href="mailto:conatusbharat@gmail.com" className="hover:underline">conatusbharat@gmail.com</a></p>
                        </div>
                    </section>

                    <section className={`p-6 rounded-lg border ${isLightMode ? 'bg-gray-50 border-gray-200' : 'bg-gray-900 border-gray-800'}`}>
                        <p className={`text-sm ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                            By using our website or services, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
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

export default TermsOfUse;
