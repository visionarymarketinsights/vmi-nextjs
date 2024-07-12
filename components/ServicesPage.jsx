'use client'
import React from 'react'

export default function ServicesPage() {

    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div>
            <h1 className='fixed text-transparent'>Offerings</h1>
            <section id='section-1' className="mb-4 ">
                <div className="max-w-screen-xl p-6 mx-auto">
                    <div className="items-center gap-80 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div className=" sm:text-lg -400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-cyan-950 custom-underline-about ">Market Intelligence</h2>
                            <p className="mb-2 text-sm font-normal text-justify text-black">Market Intelligence is crucial in turning companies into modern, data-driven organizations, empowering their daily reporting, operations, and insights sharing. We offer our expertise and Market Intelligence services to assess the business environment with respect to external and internal factors and enable strategic decision-making. Our, Market Intelligence solutions provide actionable insights into various business-critical factors and custom research for informed decision-making.</p>
                            <ul role="list" className="space-y-5 my-7 -700">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-cyan-950 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Key market trends & industry developments
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-cyan-950 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">

                                        Market forecast & demand-supply situation</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-cyan-950 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Drivers & Restraints of business</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-cyan-950 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Opportunity assessment using TAM – Total Addressable Market</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-cyan-950 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Key consumer trends & influential behaviors that drive product purchase</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-cyan-950 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Product developments, positioning and pricing
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-cyan-950 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        M&A trends
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-cyan-950 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Marketing & GTM strategies</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-cyan-950 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Company profiling</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-cyan-950 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Evolving trends reshaping geographies</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-cyan-950 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">
                                        Factors that drive micro & macro-economic growth</span>
                                </li>
                            </ul>
                        </div>
                        <img loading="lazy" className="hidden w-full rounded-lg shadow-md lg:mb-0 lg:flex" src='/assets/vmi/services/Market Intelligence.webp' alt="dashboard feature image" />
                    </div>
                </div>
            </section>
            <div className='m-4 p-2 md:p-8 border border-slate-200 rounded-md bg-[#f7f7f7]'>
                <section id='section-2' className="mb-4 bg-white rounded-md shadow-lg">
                    <div className="max-w-screen-xl p-6 mx-auto">

                        <div className="items-center gap-8">
                            {/* <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/assets/vmi/services/Competitive Benchmarking.webp'} alt="feature image 2" /> */}
                            <div className=" sm:text-lg -400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-cyan-950 custom-underline-about ">Competitive Benchmarking</h2>
                                <p className="mb-2 text-sm font-normal text-justify text-black">Through our Competitive Benchmarking Dashboards,  we evaluate company's performance by comparing its performance and productivity metrics with those of its competitors. We prepare our competitive benchmarking dashboards on various parameters such as Product/Services Benchmarking, Strategy Benchmarking, Financial Benchmarking, Process Benchmarking, Customer Benchmarking, Operational Benchmarking, Marketing Benchmarking, Pricing Benchmarking, Production Capacity Benchmarking, etc.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='section-3' className="mb-4 bg-white rounded-md shadow-lg">
                    <div className="max-w-screen-xl p-6 mx-auto">
                        <div className="items-center gap-8">
                            <div className=" sm:text-lg -400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-cyan-950 custom-underline-about ">Consulting Services</h2>
                                <p className="mb-2 text-sm font-normal text-justify text-black">In a world of constant change, the need to know what to do, and how to do it, has never been more pressing. Our multi-disciplinary teams and diverse portfolio of consulting services identify new revenue opportunities by looking beyond the boundaries of today. Our consulting services help companies in spotting emerging trends and untapped opportunities to reinvent how they compete in an increasingly disruptive landscape. Our core consulting principle are based on Imagining new possibilities to generate greater value as industries are reconfigured and transforming thinking into action, by making strategy real from concept to market. <br /><br /> We consult companies in building and developing unique financial, supply chain, operations and customer management capabilities. These are critical areas to gain competitive advantage in the market.  Visionary Market Insights is emerging as one of the fastest growing management consulting companies in India, VMI has pioneered the implementation of various consulting solutions in various sectors such as Chemical & Materials, Healthcare, Pharmaceuticals, Consumer Goods, ICT, Automotive, Consumer Goods & Retail, Textiles & Garments, Equipment Manufacturing, Engineering & Construction and Life Sciences.</p>
                            </div>
                            {/* <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/assets/others/consulting2.webp'} alt="dashboard feature image" /> */}
                        </div>
                    </div>
                </section>
                <section id='section-2' className="mb-4 bg-white rounded-md shadow-lg">
                    <div className="max-w-screen-xl p-6 mx-auto">

                        <div className="items-center gap-8">
                            {/* <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/assets/vmi/services/market reserach.webp'} alt="feature image 2" /> */}
                            <div className=" sm:text-lg -400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-cyan-950 custom-underline-about ">Market Research Reports</h2>
                                <p className="mb-2 text-sm font-normal text-justify text-black">Visionary Market Insights provides data driven insights and full market research reports, publishing over 1000+ reports each year, covering 100+ industries, on a global, regional and country level. We track and analyze various industries to identify key markets trends & emerging market opportunities, understand competitive landscape, estimate and forecast market sizes. </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='section-3' className="mb-4 bg-white rounded-md shadow-lg">
                    <div className="max-w-screen-xl p-6 mx-auto">
                        <div className="items-center gap-8">
                            <div className=" sm:text-lg -400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-cyan-950 custom-underline-about ">Syndicated Research</h2>
                                <p className="mb-2 text-sm font-normal text-justify text-black">Keeping pace with the business environment, we publish syndicated market research studies. Every year we do publish 1000+ syndicated market research studies.  We employ best-practice models and research methodologies as well as comprehensive market analysis to ensure each syndicated report provides accurate market segmentation and insights.We provide unique and detailed surveys and reports through meticulous examination and careful evaluation of the market trends, statistics, and various micro as well as macroeconomic factors</p>
                            </div>
                            {/* <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/assets/vmi/services/Syndicated Research.webp'} alt="dashboard feature image" /> */}
                        </div>
                    </div>
                </section>
                <section id='section-2' className="mb-4 bg-white rounded-md shadow-lg">
                    <div className="max-w-screen-xl p-6 mx-auto">

                        <div className="items-center gap-8">
                            {/* <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/assets/others/custom2.webp'} alt="feature image 2" /> */}
                            <div className=" sm:text-lg -400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-cyan-950 custom-underline-about ">Custom Research</h2>
                                <p className="mb-2 text-sm font-normal text-justify text-black">Visionary Market Insights provide the tailored market research insights as per our client requirements. Complex research problems that cannot be solved with syndicated research can be solved with custom research. We work with our clients to build custom market research solutions such as qualitative analysis, quantitative analysis, market size analysis and forecast, competitive landscape and value chain analysis.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='section-3' className="mb-4 bg-white rounded-md shadow-lg">
                    <div className="max-w-screen-xl p-6 mx-auto">
                        <div className="items-center gap-8">
                            <div className=" sm:text-lg -400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-cyan-950 custom-underline-about ">Customer Surveys</h2>
                                <p className="mb-2 text-sm font-normal text-justify text-black">Customer Surveys provide you instant results, unlimited feedback, and allow for customer incentives in exchange for completing surveys. These surveys are cost-effective and user friendly. Surveys can be conducted via mobile or computer, with QR codes or kiosk links.Visionary Market Insights assists B2B and B2C organizations across the country with customer survey services. Our Market Research Team has hands on expertise in designing, fielding, and analysing results to deliver best-practice metrics like Net Promoter Score, Customer Effort Score, customer loyalty, and other key performance indicators</p>
                            </div>
                            {/* <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/assets/vmi/services/Customer Surveys.webp'} alt="dashboard feature image" /> */}
                        </div>
                    </div>
                </section>
                <section id='section-2' className="mb-4 bg-white rounded-md shadow-lg">
                    <div className="max-w-screen-xl p-6 mx-auto">

                        <div className="items-center gap-8">
                            {/* <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/assets/others/custom2.webp'} alt="feature image 2" /> */}
                            <div className=" sm:text-lg -400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-cyan-950 custom-underline-about ">Procurement Services</h2>
                                <p className="mb-2 text-sm font-normal text-justify text-black">Constantly changing Global market conditions and the need for businesses to reduce and manage costs, the demand for expert procurement service provider has significantly increased. Our Procurement Managers and Consultants works closely with our clients in strategic planning, supplier rationalization, supplier collaboration, implementing valuable practices, strategic negotiation and sourcing. <br /><br /> Companies using our expert procurement service providers enjoy extensive coverage, reduce costs for goods and services, improve spending, use the latest procurement technologies, etc.Our expert procurement service providers provide a quick and accurate analysis of the total amount spent by an organization and implement necessary changes, provide essential supply chain management solutions, negotiates with suppliers, and make use of the best industry practices</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='section-3' className="mb-4 bg-white rounded-md shadow-lg">
                    <div className="max-w-screen-xl p-6 mx-auto">
                        <div className="items-center gap-8">
                            <div className=" sm:text-lg -400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-cyan-950 custom-underline-about ">Fieldwork Support Services</h2>
                                <p className="mb-2 text-sm font-normal text-justify text-black">Great results come with great partnerships. We provide fieldwork support services for top companies to provide the data they need. Our global field force of more than 10,000 evaluators across 100+ countries is well-positioned to provide the bandwidth needed by our market research partners in order to meet their client’s goals. <br /><br /> Our fieldwork support services teams are in place and can recruit and field projects in as few as 15 days. Our mission is to provide the highest quality of risk management, project support and research driven support services delivered by well-resourced and highly qualified, competent and experienced subject matter experts in alignment with all regulatory requirements, international standards and best practices in order to allow our Clients to operate safely in the most challenging of environments and conditions</p>
                            </div>
                            {/* <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/assets/others/consulting2.webp'} alt="dashboard feature image" /> */}
                        </div>
                    </div>
                </section>
                <section id='section-2' className="mb-4 bg-white rounded-md shadow-lg">
                    <div className="max-w-screen-xl p-6 mx-auto">

                        <div className="items-center gap-8">
                            {/* <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/assets/others/custom2.webp'} alt="feature image 2" /> */}
                            <div className=" sm:text-lg -400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-cyan-950 custom-underline-about ">Full Time Engagement Services</h2>
                                <p className="mb-2 text-sm font-normal text-justify text-black">The term engagement itself depicts how we connect with our clients and drive the business for them through persistent due diligence by our team on their niche requirements. We understand the evolving needs of businesses and the demand for continuous, tailored support in navigating dynamic market landscapes. We gain competitive advantage and tap new market opportunities we offer Full Time Engagement services, a comprehensive approach designed to be your dedicated partner in success.We specialize in understanding the problem statement of the end user and create a liaison with our team of experts so that we can impact their dollar value positively thereby increasing their revenue source</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='section-3' className="mb-4 bg-white rounded-md shadow-lg">
                    <div className="max-w-screen-xl p-6 mx-auto">
                        <div className="items-center gap-8">
                            <div className=" sm:text-lg -400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-cyan-950 custom-underline-about ">Macro-Economic Analysis</h2>
                                <p className="mb-2 text-sm font-normal text-justify text-black">Macroeconomic volatility and related structural changes (e.g. disruptions in the supply chain) translate into increased uncertainty in business planning across many industries. Our analyses help Clients to be up-to-date with macroeconomic trends as well as to understand whether and how macroeconomic factors affect their key business metrics. We undertake bespoke projects commissioned by companies, government agencies, and trade associations, producing the detailed, substantive research they need to present to investors and shareholders. <br /><br /> Our macroeconomics consulting team has a long record of applying economic tools in new and innovative ways, providing evidence-based insights to support strategic and business planningOur Macro- Economic Advisors track daily GDP tracking, monetary policy, and fixed income markets of leading global superpower countries. They quantify various policy options considered by the governments and perform scenario analysis to enable financial institutions, companies and industries to comply with regulatory requirements. The combination of Macroeconomic Advisers with our own global analyst teams will allow Visionary Market Insights to provide unparalleled coverage to our customers with a keen focus on policy and financial markets.</p>
                            </div>
                            {/* <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/assets/others/consulting2.webp'} alt="dashboard feature image" /> */}
                        </div>
                    </div>
                </section>
                <section id='section-2' className="mb-4 bg-white rounded-md shadow-lg">
                    <div className="max-w-screen-xl p-6 mx-auto">

                        <div className="items-center gap-8">
                            {/* <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/assets/vmi/services/Market Monitoring.webp'} alt="feature image 2" /> */}
                            <div className=" sm:text-lg -400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-cyan-950 custom-underline-about ">Market Monitoring </h2>
                                <p className="mb-2 text-sm font-normal text-justify text-black">Companies must continually track and monitor market dynamics to develop and maintain efficient organizational structures, comprehensive business strategies, and unparalleled performance. We empower our clients with comprehensive insights on changes within the market and industries to enable well-informed decision-making. Our Market Monitoring solutions provides up-to-date, reliable, verified information on market situations. Through these solutions we help companies in assessing, analyzing and anticipating the market and develop strategies to identify profitable opportunities, and capitalize on factors propelling growth. </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='section-3' className="mb-4 bg-white rounded-md shadow-lg">
                    <div className="max-w-screen-xl p-6 mx-auto">
                        <div className="items-center gap-8">
                            <div className=" sm:text-lg -400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-cyan-950 custom-underline-about ">Social Media Monitoring </h2>
                                <p className="mb-2 text-sm font-normal text-justify text-black">Most ecommerce platforms today use social media to engage with current and prospective customers. These networks give businesses the ability to communicate with consumers in real time. We help clients in identifying and determining what is being said about their brand or product through different social and online channels. You can use our social media monitoring services to gauge how people talk about your brand online.</p>
                            </div>
                            {/* <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/assets/others/consulting2.webp'} alt="dashboard feature image" /> */}
                        </div>
                    </div>
                </section>
                <section id='section-2' className="mb-4 bg-white rounded-md shadow-lg">
                    <div className="max-w-screen-xl p-6 mx-auto">

                        <div className="items-center gap-8">
                            {/* <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/assets/others/custom2.webp'} alt="feature image 2" /> */}
                            <div className=" sm:text-lg -400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-cyan-950 custom-underline-about ">Political Consulting</h2>
                                <p className="mb-2 text-sm font-normal text-justify text-black">The need for accurate political analysis in today’s competitive political landscape is very important. We devise political strategy for regional and national political parties in India. We leverage emerging technologies and human intelligence to analyze and anticipate Political Landscape and helps in decision making; optimizing the available resources for gaining the best possible returns. Our Political consulting team specializes in strategic Political Communication, Constituency Profiling and Management, Campaign Management, Digital Media Management and Content Placement strategy, Polling & Political Data Analysis.  <br /><br />Our business arena is focused mainly around the Study, Creation and Implementation of strategies designed to optimize your political actions and outcomes to make your objectives a reality. With politics as our heart-calling, our team of expert consultants have worked with companies, causes, campaigns, candidates and regional & national parties in India and other Asian Countries</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='section-3' className="mb-4 bg-white rounded-md shadow-lg">
                    <div className="max-w-screen-xl p-6 mx-auto">
                        <div className="items-center gap-8">
                            <div className=" sm:text-lg -400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-cyan-950 custom-underline-about ">Public Sector Consulting</h2>
                                <p className="mb-2 text-sm font-normal text-justify text-black">In India, Public sector organizations are facing tremendous pressure to deliver more for their citizens. Our Public Sector consulting services help state and national government leaders meet and surpass these expectations. Being data driven and incorporating the latest technology has always been at the heart of our problem solving approach. Our Public sector consultants support state and national governments across the India by bringing together our insights and capabilities from the private sector and from vast experience of supporting public sector clients</p>
                            </div>
                            {/* <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/assets/others/consulting2.webp'} alt="dashboard feature image" /> */}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
