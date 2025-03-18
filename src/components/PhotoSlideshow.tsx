
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import servicesList from '@/data/servicesList';
import { Card, CardContent } from '@/components/ui/card';

// Map service names to appropriate images from the Google Photos album
// Images from: https://photos.google.com/share/AF1QipMFmTIEYszMPXvYaD_NuynOGVrs45W8UEXeVlRrNO1bNuMOs84Ka4Z4Fig8pAPEgQ?key=MUV5cHFRNHNvSmtDeml2Vi1ESTJuR0NzQS11UHl3
const serviceImages = {
  'Concept shoot': "https://lh3.googleusercontent.com/pw/ABLVV86SFwLSsvZk1FeG_u61_yNYeNs7JQgmYPrVVBQNcnEcvMT-yHGhpEJfCkXwWUJ47BLxjUc2bwmm7l2LzA6-wrgNcMXrxu77G5j5_q78g5XwZUoQGPdkGJQ3JyHUmUZ3lNVTusnDDYgU3-dDhTDrXXlF=w1920-h853-s-no",
  'Corporate & Short Videos': "https://lh3.googleusercontent.com/pw/ABLVV86VO8f5SkibEP_Y8aWJbYDo0ksw9NvdEYnAhULnAQ_b3UPrEoiRThutxH9bCEKBd3LzQbH3eF7aXTFl-XO8QURRnMz80_-Q76XnFSGJIKZLn94PuU4e_OiBDcSaGJFGu8ZVi1PZolhQRRhqaWlEDGgH=w1920-h853-s-no",
  'Corporate Headshots': "https://lh3.googleusercontent.com/pw/ABLVV84hSDX09SxPq68a9XqZFZihEcOzkARUuEL-oVmZrJB1VPn9FWMTkdbKMb77PrUa8WEpLJuTsw5RdZ8zk3PtPuxhNyp6wV7k1lJiZKg9lgJw0cZ3XUx2qm3INd1XfBROi1_z2SrnYZc2mSPFM1v1Yqq2=w1920-h853-s-no",
  'E-Commerce & Catalogues': "https://lh3.googleusercontent.com/pw/ABLVV84CqRMcAGPahBiLjzZjbYpq3Gc9J_sjbx0-44JU0-5cB-wP7KmUhQV0N7rU9nnbhBQyMwS1Ee5eXwQLxqGtHjXLxH3M6fxQxzX9qdqwB25KyWQhPLwHzKxLTCsD7oqDgJvyK7k62bm5Nef5TcJRCDQl=w1080-h1080-s-no",
  'Event Photography': "https://lh3.googleusercontent.com/pw/ABLVV85nJGcfF2Cj6fTUZCTzZDZzNSuG7tlVSvT0BgOHs6H7Z93MxO-DpgMT1XzxwJc5jkdD1kLEVOTHpTFHgDZt-EeA_tRVUmFxTZqZlmBhPSKX7wM7pXE9Q3pPgXp1G5pRFHDX4cxd_9XJDPVYLVp4AwU-=w1920-h853-s-no",
  'Family Portraits': "https://lh3.googleusercontent.com/pw/ABLVV86Vs9kzXHALmRK2ltNvZNSiKg9oVWXHZpk7DxojO-CWa9eCRTTJBqujYfYFPYNnmqWtDPWv7jEyPEW8aCXo0lnxIjYE5OXdW9fxXFgGrj5JkqnwlaNhNVaKxX6eEpBzcDtFE2FCkA7UijDCOSGp3eDZ=w1920-h853-s-no",
  'Fashion Photography': "https://lh3.googleusercontent.com/pw/ABLVV87CcHt602ypK5-Oo8hpv3pj2UrEMqKoNXYW2nGFejw-PLiXwyvN-sAulHkHCbFAK-pFgnFkUqqXE0lMZKfBgbhXBcQwi4ixBZ8bq_5TBmTCh3uOHwQCnRyHdM7iB9LN-XzBsCzXXpkfRcNqsWrOPwYu=w1920-h853-s-no",
  'Food Photography': "https://lh3.googleusercontent.com/pw/ABLVV86gvPrOD8fS4j52wP-n-c5N10cw9yQ_qpnDY1L1D3HRlKRyTESXP5OiBLkF0BFZD3VKQ2RBTrX1xDSKDj7Md27TXfH4G1qbXDq-1wAaFN5vxijD3t-IwACj-q_SCDXdipQtEhMg7Sh3YWWMJ8HYxJHm=w1920-h853-s-no",
  'Makeup shoot': "https://lh3.googleusercontent.com/pw/ABLVV85b4IVvfjX42nnE0njWS-0vXukMuXOX7lLhWR3B0sbWJZ6Xw-tHaQv1QKPiYX6eC54L3E2YyFRshJxcMV22EX02oBMHCh_DQOTUdGHdUK2tLQJP9nBP8Hus7XWmLg-MtfRHIjFgZz9bN1pZSPNeMSXR=w1920-h853-s-no",
  'Maternity Photography': "https://lh3.googleusercontent.com/pw/ABLVV84QnPDCQ8lTGkT4V3KkzSFUJSTM0yOtzmqDTrIlWBRJmKCOSOIwKo6WCJVhd6d2vpPvJw7UbDvbPXOGZU0MQiJLh1oxqHH15eiKeDPUKsUsDXHrNPsHw0wLzFZWPU-n8hC4gfuMv_LxrYcl0xJojhSF=w1920-h853-s-no",
  'Matrimonial Portfolios': "https://lh3.googleusercontent.com/pw/ABLVV84qFuL-Uh83Z8D0EIj12FqwV07NHtWl-SXe0Bi5mScEbvnQffOJ3rk2UMH9tgznMx9DU0fTpv5Tc5WKzJVh8KAZjnbljLs8A4-4YFiSznpXVFCOjSKKIE7TQeDzxqhwuqgbTq2o2hc27s8mW43Y_9WG=w1920-h853-s-no",
  'Naming Ceremony': "https://lh3.googleusercontent.com/pw/ABLVV84-BLqC-pV2aeJR7gNUcK-1KGP8g-WNf1Gn5eMdRGOENbdmAoXiUxKEbgkLxTYJn_zxZyIXnvmyUo6gC9mAR9ZtBrFGbsUlDaFnODhXWUcl3_EV8O86hd_xK7C3E-F9EIVh1uMaJH_jROeSvJF6V57A=w1920-h853-s-no",
  'New Born Baby Shoot': "https://lh3.googleusercontent.com/pw/ABLVV86FOGwgQWGZXKJY0sBwrIHODBN2VpF9D5tctNjbLrUzjZw-cHxaODCUGdm0ukBUgAGCcnMmGb2-M-0gR48RXZKgw4-wXhvWgOUaYHFZ4FJHv6XBXB5rIhG0rlNXDVFYBCXhKzGfPpLYHYQN5QZcfOEb=w1920-h853-s-no",
  'Product Photography': "https://lh3.googleusercontent.com/pw/ABLVV84_9r4RVi9N5E_5gN5YDUHENQi8-JDiKaYqLIZnOAKl1T6gF9a8kHLCNlfmXtWf-e6bjn_-H4IbUvMKGvzARGpk9yIGsgXQgvuDWZDnqPh9e2kxLDTJ6s13F1EG9hjGSMPEGbm1z9NaQY7iQhQn1zIx=w1920-h853-s-no",
  'Product shoot': "https://lh3.googleusercontent.com/pw/ABLVV872TT9AO0AcxpZGOY0HtviBnA4x2DUWcX2c64_jFQe_R6-X2S6-v_L0Nfxhqo6-OQfsTY71w03uUo2BZ6_w0TLmFn1DchDkE_BNcjYYnpkRKSOy4kSiD7-K0G7T7vZrT61MsGUZKpGn4HuLdIEvXiZe=w1920-h853-s-no",
  'Special Services': "https://lh3.googleusercontent.com/pw/ABLVV85BnZ8Zcpr_8P8f9pCXaBiUQD_4-YXXRVUXfR6Z0xJy4sRkb90EoNtutbTjPEtxuoULkZNPaLWFtBG9eudV_A1JJvxeHVPfYxpBCQ28cGPgVcBSAXxixw8Dqxx0BX2yrskMiYEcP0kgfYLGzrTUUyeJ=w1920-h853-s-no",
  'Toddler & Children': "https://lh3.googleusercontent.com/pw/ABLVV869gUx_Uxa7zV4Rlb12Ck-DxUTcxOCxpnhCt-Y3VL1Jmg7hywAGBrCPk1m5eXNIdVtCqcKyf1DdRlnJvCZfZzCqGdePrEOcMqZJLDRs6SVZScM1m-G2NN-OGwgRoXa91SXiAh9O1TIVaNVGl-L0__5X=w1920-h853-s-no",
  'Wedding Photography': "https://lh3.googleusercontent.com/pw/ABLVV86GbDKDV5-SrjNM1Eoz9Q1GUBxbJ2e6Q2B8dMjRQSBBcgSVaHqPHskVZG5m8BoZcABVZFPuZkEcCDRMh9Gw8iqxQOgS2WpfA6RcKBaQIptFKxnUBbLHnA7ICZC-_D7mDndafXcJDt9iAQ4qy7x9j7KG=w1920-h853-s-no"
};

// Create service thumbnails with proper image mapping
const serviceThumbnails = servicesList.map(service => ({
  name: service.name,
  image: serviceImages[service.name] || "https://lh3.googleusercontent.com/pw/ABLVV86SFwLSsvZk1FeG_u61_yNYeNs7JQgmYPrVVBQNcnEcvMT-yHGhpEJfCkXwWUJ47BLxjUc2bwmm7l2LzA6-wrgNcMXrxu77G5j5_q78g5XwZUoQGPdkGJQ3JyHUmUZ3lNVTusnDDYgU3-dDhTDrXXlF=w1920-h853-s-no"
}));

const PhotoSlideshow = () => {
  const navigate = useNavigate();

  const navigateToServices = (serviceName: string) => {
    navigate('/services');
    
    const matchingService = servicesList.find(service => service.name === serviceName);
    
    if (matchingService) {
      console.log(`Navigating to service: ${serviceName}`);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            EXQUISITE COLLECTION
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
            Our Photography Collection
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg font-serif italic">
            Each image tells a story, each moment captured becomes eternal
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {serviceThumbnails.map((service, index) => (
            <Card 
              key={index}
              className="group cursor-pointer overflow-hidden border-0 bg-transparent shadow-none transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
              onClick={() => navigateToServices(service.name)}
            >
              <div className="relative h-36 sm:h-44 overflow-hidden rounded-xl border-2 border-[#003c72] transform transition-all duration-500 group-hover:border-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 z-20 transform transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-white font-serif italic text-center text-sm font-medium drop-shadow-lg">
                    {service.name}
                  </h3>
                </div>
              </div>
              <CardContent className="pt-3 pb-0 px-1">
                <div className="h-0.5 w-0 bg-gradient-to-r from-[#003c72] to-blue-400 mx-auto transition-all duration-500 group-hover:w-1/2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(PhotoSlideshow);
