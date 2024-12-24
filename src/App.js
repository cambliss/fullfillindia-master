import "./App.css";
import React, { Suspense, lazy } from "react";
import { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './Pages/Home/bootstrap.min.css'
import './Pages/Home/About-us.css'
import './Pages/Home/MainServices.css'
import './Pages/Home/AccountingServices.css'
import './Pages/Home/QuickLink.css'
import './StatrUpServices.css'
import Preloader from './Preloader'

// Lazy load the components
// const Preloader = lazy(() => import("./Preloader"));
const Navbar = lazy(() => import("./Pages/Home/Navbar"));
const BookNow = lazy(() => import("./BookNow"));
const Home = lazy(() => import("./Pages/Home/Homescreen"));
const ServiceFilter = lazy(() => import("./Pages/Home/ServiceFilter"));
const ContactForm = lazy(() => import("./Pages/Home/ContactForm"));
const ServiceComponent = lazy(() => import("./Pages/Home/ServiceComponet"));
const Page = lazy(() => import("./Pages/Home/AccountingServices"));
const GSTServices = lazy(() => import("./Pages/Home/GST-Services"));
const GSTServicesd = lazy(() => import("./Pages/Home/GSTSERVICESDUPLICATE"));
const ConsultationCard = lazy(() => import("./Pages/Home/QuickLink"));
const AboutUs = lazy(() => import("./Pages/Home/About-us"));
const MainServices = lazy(() => import("./Pages/Home/MainServices"));
const ROCServices = lazy(() => import("./Pages/Home/ROCServices"));
const Itroc = lazy(() => import("./Pages/Home/ITROC-TaxEdit"));
const AuditandRoc = lazy(() => import("./Pages/Home/AuditandRoc"));
const TDS = lazy(() => import("./Pages/Home/TDSSaleofproperty"));
const IncomeTax = lazy(() => import("./Pages/Home/IncomeTax"));
const GSTService1 = lazy(() => import("./Pages/Home/GST1"));
const Incometaxprivate = lazy(() => import("./Pages/Home/Incometaxforprivatelimitedcompany"));
const GSTPublicPrivate = lazy(() => import("./Pages/Home/GStPublicPrivate"));
const GSTLLP = lazy(() => import("./Pages/Home/GSTServiceLLP"));
const GSTIndiviual = lazy(() => import("./Pages/Home/GSTIndiviual"));
const NRIInformation = lazy(() => import("./Pages/Home/NRITaxation"));
const Privacy = lazy(() => import("./Pages/Home/Privacy"));
const RefundPolicy = lazy(() => import("./Pages/Home/RefundPolicy"));
const IncomeBussinessprofession = lazy(() => import("./Pages/Home/IncomeFromBussinessProfession"));
const SalaryTaxation = lazy(() => import("./Pages/Home/SalaryTaxation"));
const IncomeFromHouseproperty = lazy(() => import("./Pages/Home/IncomeFromHouseProperty"));
const Gstservicesquarterly = lazy(() => import("./Pages/Home/GSTServicesquarterly"));
const GSTService2 = lazy(() => import("./Pages/Home/GST2"));
const Gstservicesmonthly = lazy(() => import("./Pages/Home/GSTServiceMonthly"));
const GSTPrivateltdcompany = lazy(() => import("./Pages/Home/GSTPrivateltdcompany"));
const CapitalGainTaxation = lazy(() => import("./Pages/Home/CapitalGain-Taxation"));
const TermsandConditions = lazy(() => import("./Pages/Home/TermsandConditions"));
const AadhaarPANLinkingTable = lazy(() => import("./Pages/Home/Panaadharlink"));
const RevisedIncomeTaxReturn = lazy(() => import("./Pages/Home/RevisedIncomeTaxReturn"));
const SalariedIndiviual = lazy(() => import("./Pages/Home/SalariedIndiviual"));

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // Simulate initial load
        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    return (
        <div className="App">
            {loading ? (
                <Preloader /> // Show Preloader during initial app load
            ) : (
                <Router>
                    <Suspense fallback={<Preloader />}>
                        <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />service-component
                        <Route path="/service-filter" element={<ServiceFilter />} />
                        <Route path="/contact" element={<ContactForm />} />
                        <Route path="/preloader" element={<Preloader />} />
                        <Route path="/book-now" element={<BookNow />} />
                        <Route path="/Accounting-Services" element={<Page />} />
                        <Route path="/GST-Services" element={<GSTServices />} />
                        <Route path="/GST-Services-ALL" element={<GSTServicesd />} />
                        <Route path="/Quick-Link" element={<ConsultationCard />} />
                        <Route path="/About-us" element={<AboutUs />} />
                        <Route path="/Main-Services" element={<MainServices />} />
                        <Route path="/ROC-Services" element={<ROCServices />} />
                        <Route path="/IT-ROC Tax-Audit" element={<Itroc />} />
                        <Route path="/Audit-ROC" element={<AuditandRoc />} />
                        <Route path="/TDS-SaleOfProperty" element={<TDS />} />
                        <Route path="/IncomeTax-Service" element={<IncomeTax />} />
                        <Route path="/GST-Bookkeeping-Quarterly-Pvt-Ltd-Company" element={<GSTService1 />} />
                        <Route path="/IncomeTax-Private-Limited-Company" element={<Incometaxprivate />} />
                        <Route path="/GST-Registration-for-public-private-Indian-Foreign" element={<GSTPublicPrivate />} />
                        <Route path="/GST-Registration-for-Partnership-Including-LLP" element={<GSTLLP />} />
                        <Route path="/GST-Registration-Sole-Propreitor" element={<GSTIndiviual />} />
                        <Route path="/NRI-Taxation" element={<NRIInformation />} />
                        <Route path="/Privacy-Policy" element={<Privacy />} />
                        <Route path="/Refund-Policy" element={<RefundPolicy />} />
                        <Route path="/Income-From-Bussiness-Profession" element={<IncomeBussinessprofession />} />
                        <Route path="/Salary-Taxation" element={<SalaryTaxation />} />
                        <Route path="/Income-From-House-Property" element={<IncomeFromHouseproperty />} />
                        <Route path="/GST-Services-Quarterly" element={<Gstservicesquarterly />} />
                        <Route path="/GST-Bookkeeping-Montly-Pvt-Ltd-Company" element={<GSTService2 />} />
                        <Route path="/GST-Services-Monthly" element={<Gstservicesmonthly />} />
                        <Route path="/GST-Services-Private-Limited-Company" element={<GSTPrivateltdcompany />} />
                        <Route path="/Capital-Gain-Taxation" element={<CapitalGainTaxation />} />
                        <Route path="/Terms-and-Conditions" element={<TermsandConditions />} />
                        <Route path="/PAN-AAdhar-Linking" element={<AadhaarPANLinkingTable />} />
                        <Route path="/Revised-IncomeTax-Return" element={<RevisedIncomeTaxReturn />} />
                        <Route path="/Salaried-Indiviual" element={<SalariedIndiviual />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </Suspense>
               
            </Router>
            )}
        </div>
       
    );
}

export default App;
