import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: 'AWS Academy Data Engineering',
    issuer: 'AWS Academy Graduate',
    date: 'April 2025',
    link: 'https://www.credly.com/badges/64b64ff3-f66a-4da4-91c3-4490e183ce86/public_url',
    image: 'https://images.credly.com/size/180x180/images/4f514a93-8f7a-424c-aeca-2e8f79612bc5/image.png',
  },
  {
    title: 'AWS Academy Machine Learning Foundations',
    issuer: 'AWS Academy Graduate',
    date: 'March 2025',
    link: 'https://www.linkedin.com/learning/certificates/4b0455567c3cfda25e8ef1896c3639f05112af66ace4292ed1004466ef830c94?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bbq8LdPJvRzi4K%2BpLPeklnQ%3D%3D',
    image: 'https://images.credly.com/size/680x680/images/254b883a-44a3-4cec-b6f2-946a80522b39/image.png',
  },
  {
    title: 'AWS Academy Cloud Developing',
    issuer: 'AWS Academy Graduate',
    date: 'November 2025',
    link: 'https://www.credly.com/badges/7a6ce417-1855-44c8-a272-62e05a206810',
    image: 'https://images.credly.com/size/680x680/images/119182cf-ca68-495a-a415-bff62dfdcc7e/image.png',
  },
  {
    title: 'AWS Academy Microservices and CI/CD Pipeline Builder',
    issuer: 'AWS Academy Graduate',
    date: 'November 2025',
    link: 'https://www.credly.com/badges/6f8e06eb-4c6d-40fe-a422-cce3ce9080d0',
    image: 'https://images.credly.com/size/680x680/images/b2f8667e-3624-4a77-8f4a-d65e9e752240/image.png',
  },
  {
    title: 'AWS Academy Cloud Data Pipeline Builder',
    issuer: 'AWS Academy Graduate',
    date: 'November 2025',
    link: 'https://www.credly.com/badges/891f2799-1a20-4147-bbb8-28afd1ac3373',
    image: 'https://images.credly.com/size/680x680/images/0590787c-66c7-46be-be18-bbfcf16c795b/image.png',
  },
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy Graduate',
    date: 'July 2024',
    link: 'https://www.credly.com/badges/1d5fa3db-8b09-4328-bebb-d32de12e8806',
    image: 'https://images.credly.com/size/680x680/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png',
  },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (<SectionBackground>
    <section id="certifications">
      <div className="container mx-auto px-8">
        <SectionTitle subtitle="Credentials that back up the skills I apply in real-world scenarios.">Certifications</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-6">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  </SectionBackground>
  );
}
