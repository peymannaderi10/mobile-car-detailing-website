"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircleIcon, 
  SparklesIcon, 
  ClockIcon, 
  MapPinIcon, 
  TruckIcon,
  StarIcon
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Script from "next/script";

export default function Home() {
  // Track active tab for each package
  const [activeTab, setActiveTab] = useState({
    signature: "interior",
    diamond: "interior",
    basic: "interior"
  });

  // Function to handle tab changes
  const handleTabChange = (packageName: string, tabName: string) => {
    setActiveTab(prev => ({
      ...prev,
      [packageName]: tabName
    }));
  };

  // Services data for Schema.org
  const servicesData = [
    {
      "@type": "Service",
      "name": "The Signature Detail Package",
      "description": "Complete interior and exterior detail including deep vacuum, steam cleaning, paint decontamination, and 6-8 month sealant.",
      "offers": {
        "@type": "Offer",
        "price": "255.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "serviceType": "Car Detailing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Luke's Mobile Detailing"
      },
      "estimatedDuration": "PT4H"
    },
    {
      "@type": "Service",
      "name": "The Diamond Detail Package",
      "description": "Premium interior and exterior detailing with heated extraction, leather conditioning, clay bar treatment, ceramic wax, and light polish.",
      "offers": {
        "@type": "Offer",
        "price": "495.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "serviceType": "Premium Car Detailing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Luke's Mobile Detailing"
      },
      "estimatedDuration": "PT5H30M"
    },
    {
      "@type": "Service",
      "name": "The Basic Detail Package",
      "description": "Essential interior and exterior detail with vacuum, wipe down of surfaces, foam wash, and tire shine.",
      "offers": {
        "@type": "Offer",
        "price": "185.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "serviceType": "Basic Car Detailing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Luke's Mobile Detailing"
      },
      "estimatedDuration": "PT2H30M"
    },
    {
      "@type": "Service",
      "name": "The Full Interior Package",
      "description": "Comprehensive interior detailing with deep vacuum, steam cleaning of surfaces, UV protectant application, and air freshener.",
      "offers": {
        "@type": "Offer",
        "price": "195.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "serviceType": "Interior Car Detailing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Luke's Mobile Detailing"
      },
      "estimatedDuration": "PT3H"
    },
    {
      "@type": "Service",
      "name": "The Full Exterior Package",
      "description": "Complete exterior detailing with foam wash, paint decontamination, wheel cleaning, window cleaning, and 6-8 month sealant.",
      "offers": {
        "@type": "Offer",
        "price": "130.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "serviceType": "Exterior Car Detailing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Luke's Mobile Detailing"
      },
      "estimatedDuration": "PT2H"
    }
  ];

  // FAQ data for Schema.org
  const faqData = [
    {
      "@type": "Question",
      "name": "Do you come to my location?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We are a mobile detailing service that comes to your home, office, or any location convenient for you in Yuba City, Marysville, and surrounding areas."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a detail take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Service times vary by package. The Basic package takes 1-2 hours, the Signature package takes 2-3 hours, and the Diamond package takes 4-6 hours depending on vehicle size and condition."
      }
    },
    {
      "@type": "Question",
      "name": "What forms of payment do you accept?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept all major credit cards, cash, and electronic payment methods including Square, Venmo, and more."
      }
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Schema.org JSON-LD */}
      <Script
        id="schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": servicesData.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": service
            }))
          })
        }}
      />

      <Script
        id="schema-faqs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData
          })
        }}
      />

      <Script
        id="schema-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoDetailingBusiness",
            "name": "Luke's Mobile Detailing",
            "description": "Professional mobile car detailing services that come to you in Yuba City, Marysville and surrounding areas.",
            "url": "https://lukesmobiledetailingllc.com",
            "logo": "https://lukesmobiledetailingllc.com/Images/webPhotos/logoblack.png",
            "image": "https://lukesmobiledetailingllc.com/Images/webPhotos/Banner.jpg",
            "telephone": "+15306503631",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Yuba City",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.1404",
              "longitude": "-121.6169"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/lukemobiledetailing/",
              "https://www.instagram.com/lukesmobiledetailingllc/",
              "https://tiktok.com/@lukesmobiledetailing"
            ],
            "areaServed": [
              {
                "@type": "City",
                "name": "Yuba City"
              },
              {
                "@type": "City",
                "name": "Marysville"
              },
              {
                "@type": "City",
                "name": "Live Oak"
              },
              {
                "@type": "City",
                "name": "Olivehurst"
              },
              {
                "@type": "City",
                "name": "Linda"
              },
              {
                "@type": "City",
                "name": "Gridley"
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Images/webPhotos/Banner.jpg" 
            alt="Professional car detailing" 
            fill
            priority
            className="object-cover object-center"
            style={{ objectPosition: "center 55%" }}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="container-custom relative z-10 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center" style={{ marginTop: "-2rem" }}>
            <div className="mb-2">
              <p className="text-xl md:text-2xl font-semibold font-didot italic">WE COME TO YOU!</p>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              Protect Your Investment
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-20 md:mt-32">
              <Link href="/services" className="btn-primary text-center">
                Our Services
              </Link>
              <Link href="https://app.squareup.com/appointments/buyer/widget/hs7hvrxqk38fag/L51SWV5N7VVBD" className="btn-outline text-center">
                Book Your Detail
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-md h-80">
              <Image 
                src="/Images/webPhotos/mobileServiceCard.jpg" 
                alt="Mobile Service" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6 text-center">
                <TruckIcon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Mobile Service</h3>
                <p className="text-white">We come to your home, office, or any location convenient for you.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md h-80">
              <Image 
                src="/Images/webPhotos/PremiumProductsCard.jpg" 
                alt="Premium Products" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6 text-center">
                <SparklesIcon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Premium Products</h3>
                <p className="text-white">We use high-quality, eco-friendly products for a superior finish.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md h-80">
              <Image 
                src="/Images/webPhotos/SatisfactionGuaranteedCard.jpg" 
                alt="Satisfaction Guaranteed" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6 text-center">
                <CheckCircleIcon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Satisfaction Guaranteed</h3>
                <p className="text-white">Your satisfaction is our priority. We don't leave until you're happy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Our Detailing Packages</h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              Choose from our range of comprehensive detailing packages designed to meet your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* The Signature Package */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                MOST POPULAR
              </div>
              <div className="bg-primary text-white p-6">
                <h3 className="text-2xl font-bold mb-2">The Signature</h3>
                <p className="text-3xl font-bold">$255</p>
                <p className="text-sm mt-2">Interior & Exterior Detail</p>
              </div>
              <div className="p-6">
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200 mb-4">
                  <button 
                    className={`py-2 px-4 font-medium text-sm ${activeTab.signature === "interior" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                    onClick={() => handleTabChange("signature", "interior")}
                  >
                    Interior
                  </button>
                  <button 
                    className={`py-2 px-4 font-medium text-sm ${activeTab.signature === "exterior" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                    onClick={() => handleTabChange("signature", "exterior")}
                  >
                    Exterior
                  </button>
                </div>
                
                {/* Interior Features */}
                <div className={activeTab.signature === "interior" ? "block" : "hidden"}>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Full interior deep vacuum</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Wipe down of all surfaces</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Steam cleaning of cracks & crevices</span>
                    </li>
                    <li className="flex items-start">
                      <ClockIcon className="h-6 w-6 text-gray-400 flex-shrink-0 mr-2" />
                      <span className="text-gray-700">See full details on services page</span>
                    </li>
                  </ul>
                </div>
                
                {/* Exterior Features */}
                <div className={activeTab.signature === "exterior" ? "block" : "hidden"}>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Full vehicle pre rinse</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Paint decontamination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">6-8 month sealant</span>
                    </li>
                    <li className="flex items-start">
                      <ClockIcon className="h-6 w-6 text-gray-400 flex-shrink-0 mr-2" />
                      <span className="text-gray-700">See full details on services page</span>
                    </li>
                  </ul>
                </div>
                
                <Link 
                  href="https://book.squareup.com/appointments/hs7hvrxqk38fag/location/L51SWV5N7VVBD/services/GRM2YZAKP4ONQJTU7CRS4DGI" 
                  className="btn-primary w-full mt-6 text-center block"
                >
                  Book Now
                </Link>
              </div>
            </div>
            
            {/* The Diamond Package */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#34eba1] p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">The Diamond</h3>
                <p className="text-3xl font-bold text-white">$495</p>
                <p className="text-sm mt-2 text-white">Interior & Exterior Detail</p>
              </div>
              <div className="p-6">
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200 mb-4">
                  <button 
                    className={`py-2 px-4 font-medium text-sm ${activeTab.diamond === "interior" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                    onClick={() => handleTabChange("diamond", "interior")}
                  >
                    Interior
                  </button>
                  <button 
                    className={`py-2 px-4 font-medium text-sm ${activeTab.diamond === "exterior" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                    onClick={() => handleTabChange("diamond", "exterior")}
                  >
                    Exterior
                  </button>
                </div>
                
                {/* Interior Features */}
                <div className={activeTab.diamond === "interior" ? "block" : "hidden"}>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Full interior deep vacuum</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Heated shampoo extraction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Leather & vinyl conditioning</span>
                    </li>
                    <li className="flex items-start">
                      <ClockIcon className="h-6 w-6 text-gray-400 flex-shrink-0 mr-2" />
                      <span className="text-gray-700">See full details on services page</span>
                    </li>
                  </ul>
                </div>
                
                {/* Exterior Features */}
                <div className={activeTab.diamond === "exterior" ? "block" : "hidden"}>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Clay bar treatment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Machine applied ceramic wax</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Light polish & undercarriage wash</span>
                    </li>
                    <li className="flex items-start">
                      <ClockIcon className="h-6 w-6 text-gray-400 flex-shrink-0 mr-2" />
                      <span className="text-gray-700">See full details on services page</span>
                    </li>
                  </ul>
                </div>
                
                <Link 
                  href="https://book.squareup.com/appointments/hs7hvrxqk38fag/location/L51SWV5N7VVBD/services/NXJA3PDFZXDV3GT4K2JTKDPX" 
                  className="btn-primary w-full mt-6 text-center block"
                >
                  Book Now
                </Link>
              </div>
            </div>
            
            {/* The Basic Package */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-secondary text-white p-6">
                <h3 className="text-2xl font-bold mb-2">The Basic</h3>
                <p className="text-3xl font-bold">$185</p>
                <p className="text-sm mt-2">Interior & Exterior Detail</p>
              </div>
              <div className="p-6">
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200 mb-4">
                  <button 
                    className={`py-2 px-4 font-medium text-sm ${activeTab.basic === "interior" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                    onClick={() => handleTabChange("basic", "interior")}
                  >
                    Interior
                  </button>
                  <button 
                    className={`py-2 px-4 font-medium text-sm ${activeTab.basic === "exterior" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                    onClick={() => handleTabChange("basic", "exterior")}
                  >
                    Exterior
                  </button>
                </div>
                
                {/* Interior Features */}
                <div className={activeTab.basic === "interior" ? "block" : "hidden"}>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Full interior vacuum</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Wipe down of all surfaces</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Air freshener</span>
                    </li>
                    <li className="flex items-start">
                      <ClockIcon className="h-6 w-6 text-gray-400 flex-shrink-0 mr-2" />
                      <span className="text-gray-700">See full details on services page</span>
                    </li>
                  </ul>
                </div>
                
                {/* Exterior Features */}
                <div className={activeTab.basic === "exterior" ? "block" : "hidden"}>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Foam wash</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Wheels & tires cleaned</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                      <span className="text-gray-800">Tire shine</span>
                    </li>
                    <li className="flex items-start">
                      <ClockIcon className="h-6 w-6 text-gray-400 flex-shrink-0 mr-2" />
                      <span className="text-gray-700">See full details on services page</span>
                    </li>
                  </ul>
                </div>
                
                <Link 
                  href="https://book.squareup.com/appointments/hs7hvrxqk38fag/location/L51SWV5N7VVBD/services/WDQ62TG7WUZJ7D6J3N7KY6IO" 
                  className="btn-primary w-full mt-6 text-center block"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Image on the left */}
            <div className="md:w-1/2 relative rounded-lg overflow-hidden shadow-md h-auto">
              <div className="w-full h-[300px] md:h-full relative">
                <Image 
                  src="/Images/webPhotos/banner2.jpeg" 
                  alt="Professional detailing service" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Testimonials on the right */}
            <div className="md:w-1/2 space-y-6 flex flex-col">
              {/* Testimonial 1 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex-1">
                <div className="flex items-center mb-4">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-800 mb-4">
                  "I contacted Luke about detailing my plane. We made plans to meet at the airport and he was right on time. He did an excellent job and I was very impressed with how hard he worked and all of the professional products he used. I would highly recommend Luke's mobile detailing."
                </p>
                <div className="flex items-center">
                  <div className="mr-4 bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="font-bold text-gray-600">CB</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Carin Batham</h4>
                    <p className="text-sm text-gray-500">Signature Package Customer</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex-1">
                <div className="flex items-center mb-4">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-800 mb-4">
                  "First time getting my car detailed by Luke and he showed up on time with a 100 gallon water tank and his own generator to power all his equipment, he was extremely professional and clean, I'm definitely gonna recommend him to my friends and will be using his services in the future!"
                </p>
                <div className="flex items-center">
                  <div className="mr-4 bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="font-bold text-gray-600">SA</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Shahan Ali</h4>
                    <p className="text-sm text-gray-500">Signature Package Customer</p>
                  </div>
                </div>
              </div>

              {/* Link to all reviews */}
              <div className="text-center mt-4">
                <Link href="/reviews" className="btn-outline">
                  View All Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Vehicle?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your mobile detailing service today and experience the difference.
          </p>
          <Link href="https://app.squareup.com/appointments/buyer/widget/hs7hvrxqk38fag/L51SWV5N7VVBD " className="btn bg-white text-primary hover:bg-gray-100 font-bold px-8 py-3 shadow-lg">
            Book Now
          </Link>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Service Area</h2>
              <p className="text-lg text-gray-800 mb-6">
                We provide our mobile detailing services throughout Yuba City, Marysville, and surrounding areas in California.
              </p>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center text-black">
                  <MapPinIcon className="h-5 w-5 text-primary mr-2" />
                  <span>Yuba City</span>
                </li>
                <li className="flex items-center text-black">
                  <MapPinIcon className="h-5 w-5 text-primary mr-2" />
                  <span>Marysville</span>
                </li>
                <li className="flex items-center text-black">
                  <MapPinIcon className="h-5 w-5 text-primary mr-2" />
                  <span>Live Oak</span>
                </li>
                <li className="flex items-center text-black">
                  <MapPinIcon className="h-5 w-5 text-primary mr-2" />
                  <span>Olivehurst</span>
                </li>
                <li className="flex items-center text-black">
                  <MapPinIcon className="h-5 w-5 text-primary mr-2" />
                  <span>Linda</span>
                </li>
                <li className="flex items-center text-black">
                  <MapPinIcon className="h-5 w-5 text-primary mr-2" />
                  <span>Gridley</span>
                </li>
                <li className="flex items-center text-black">
                  <MapPinIcon className="h-5 w-5 text-primary mr-2" />
                  <span>Sutter</span>
                </li>
                <li className="flex items-center text-black">
                  <MapPinIcon className="h-5 w-5 text-primary mr-2" />
                  <span>Plumas Lake</span>
                </li>
                <li className="flex items-center text-black">
                  <MapPinIcon className="h-5 w-5 text-primary mr-2" />
                  <span>Meridian</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-700">
                Not sure if we service your area? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> to find out!
              </p>
            </div>
            <div className="md:w-1/2 bg-white rounded-lg p-4 h-80 overflow-hidden shadow-sm">
              {/* Yuba City/Marysville map */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99439.13782406501!2d-121.68402299442324!3d39.13572971039171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b51944dffefb7%3A0xaa3f8a1952a72a47!2sYuba%20City%2C%20CA!5e0!3m2!1sen!2sus!4v1693438071518!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Yuba City/Marysville Service Area Map"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
