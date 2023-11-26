
import Link from 'next/link'
export default function Footer() {
  return (
    <div>
       <div className="relative text-center text-white bg-slate-800 md:text-left">
        <img loading="lazy" src={"/assets/f1.png"} alt="working-guy" className="absolute hidden md:block bottom-12 right-20 h-[360px] transform -scale-x-100" />
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="flex flex-col items-center gap-4 p-8 md:items-start md:px-12 md:py-16 md:flex-row border-slate-700">
              <div className="flex font-bold md:w-1/2">
                <Link href='/'>
                  <img loading="lazy" src={'/assets/cmilightlogo.png'} alt="logo" className="flex justify-center "></img>
                </Link>
              </div>
              {/* <div className="w-3/5 text-sm md:text-justify">Harvesting market intelligence to sow success, cultivating strategies for growth in dynamic landscapes. Your compass in the evolving business terrain.</div> */}
              <div className="text-2xl leading-relaxed md:w-1/2 ">Navigating Trends, Illuminating Insights</div>
            </div>
            <div className="flex flex-col gap-4 p-8 text-sm border-t md:gap-36 md:flex-row md:px-12 md:py-16 border-slate-600">
              {/* <div>
                <div className="mb-4 text-xl font-bold">Resources</div>
                <div className="mb-2">Why Congruence?</div>
                <div className="mb-2">Customer Service</div>
                <div className="mb-2">Blogs</div>
                <div className="mb-2">Guides</div>
                <div className="mb-2">Webinars</div>
                <div className="mb-2">Workplace Mgmt</div>
                <div className="mb-2">Glossary</div>
              </div> */}
              <div>
                <div className="mb-4 text-xl font-bold">Company</div>
                <Link href='/about'>
                  <div className="mb-2">About Us</div>
                </Link>
                <Link href='/careers'>
                  <div className="mb-2">Careers</div>
                </Link>
                <Link href='/contact'>
                  <div className="mb-2">Contact Us</div>
                </Link>
                <Link href='/all-press-release/agriculture'>
                  <div className="mb-2">Press Release</div>
                </Link>
              </div>

              <div>
                <div className="mb-4 text-xl font-bold">Connect</div>
                <div className="mb-2">Facebook</div>
                <div className="mb-2">Twitter</div>
                <div className="mb-2">LinkedIn</div>
                <div className="mb-2">Instagram</div>
                <div className="mb-2">YouTube</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-8 border-t md:border-t-0 md:border-l md:w-1/2 md:px-12 md:py-16 border-slate-600">
            <div className="flex flex-col gap-3 text-3xl text-white md:text-3xl ">
              <div>
                Have any custom research requirements?
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 text-black bg-white rounded-full md:mt-8 md:w-3/4">
              <input className="w-full p-2 ml-3 outline-0" placeholder="Enter your email..." />
              <div 
              // onClick={handleFormOpen} 
              className="p-4 md:p-4 rounded-full bg-[#6f32be] hover:bg-[#763dc0] scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M15 16l4 -4" />
                  <path d="M15 8l4 4" />
                </svg>

              </div>
            </div>
          </div>
        </div>
        <div className="text-sm border-t cursor-default border-slate-600">
          <div className="px-12 py-8 text-justify md:w-3/5">Congruence Market Insights is a leading market research company dedicated to providing unparalleled insights and strategic intelligence. Our expert analysts deliver actionable data, empowering businesses to make informed decisions in a dynamic marketplace. Trust us to navigate your path to success.</div>
          <div className="flex flex-col gap-8 px-12 py-8 md:flex-row md:items-end">
            <div>© 2023 Congruence</div>
            {/* {detailsList.map((r, i) => {
              return <div className="cursor-pointer" key={i} onClick={() => handleDetailsOpen(r.title)}>{r.title}</div>
            })} */}
          </div>
        </div>
      </div>
    </div>
  )
}
