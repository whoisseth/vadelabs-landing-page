import Image from 'next/image'
export default function CruiseThroughBackend() {
  return (
    <div className=" text-center ">
      <h1 className="mt-[203px] mb-[123px]  text-[56px] font-semibold">
        <span className="text-[#2C4BFF]">Cruise</span> through backend
      </h1>
          <main className="mb-[168px] relative ">
              <img src="/Images/Backend/curveLine1.svg"  className=' w-[413px] absolute left-[33rem] top-[20rem] z-50' alt="" />
              <img src="/Images/Backend/curveLine2.svg"  className='  absolute left-[26rem] bottom-[20rem] z-50' alt="" />
        <Option1 />
        <Option2/>
        <Option3 />
      </main>
    </div>
  )
}

function Option1() {
  return (
    <div className="mb-[176px]  flex grid-cols-2  items-center  justify-between  gap-[67px] text-left">
      {/* left side */}
      <div className="relative z-50 ml-[200px] w-[430px]">
        <h2 className="absolute -left-[75px] -top-[40px] -z-10 font-poppins text-[84px]  font-semibold text-[#EEEEEE]">
          #1
        </h2>

        <h1 className="mb-5 text-4xl font-medium ">
          Choose from 100+ integrations.
        </h1>
        <p className="mb-3 text-lg text-[#707070]">
          Vade Studio is designed to work seamlessly with your favourite
          databases or web services.{' '}
          <span className="font-semibold text-black">
            Tweak a template or start from scratch.
          </span>
        </p>
        <p className="text-lg text-[#707070]">
          We've baked-in over 100 integrations directly into the platform, so
          you can integrate quickly and easily with other services, databases
          and applications out there.
        </p>
      </div>
      {/* right Image */}
      <div className="relative  mr-[120px] h-[333px] w-[534px] overflow-hidden rounded-2xl">
        <Image
          src="/Images/Backend/first.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}


function Option2() {
    return (
      <div className="mb-[228px]  flex grid-cols-2  items-center  justify-between  gap-[30px] text-left">
       
        {/* left Image */}
        <div className="relative  mr-[120px] h-[333px] w-[534px] overflow-hidden rounded-2xl ] ml-32">
          <Image
            src="/Images/Backend/third.png"
            layout="fill"
            objectFit="cover"
          />
            </div>
             {/* Right side */}
        <div className="relative z-50  w-[430px] mr-[130px]">
          <h2 className="absolute -right-[6px] -top-[55px] -z-10 font-poppins text-[84px]  font-semibold text-[#EEEEEE]">
            #2
          </h2>
  
          <h1 className="mb-5 text-4xl font-medium whitespace-nowrap ">Configure & Connect.</h1>
                <p className="mb-3 text-lg text-[#707070]">
                Get all of your &nbsp;
            <span className="font-semibold text-black">
            data sources connected into a content mesh, in the same place, in real time.
            </span>
            
          </p>
          <p className="text-lg text-[#707070]">
          This provides you a unified API for data navigation across all your integrated services.
          </p>
        </div>
      </div>
    )
  }
function Option3() {
  return (
    <div className="  flex grid-cols-2  items-center  justify-between  gap-[67px] text-left">
      {/* left side */}
      <div className="relative z-50 ml-[200px] w-[430px]">
        <h2 className="absolute -left-[66px] -top-[55px] -z-10 font-poppins text-[84px]  font-semibold text-[#EEEEEE]">
          #3
        </h2>

        <h1 className="mb-5 text-4xl font-medium ">Test. Build. Deploy.</h1>
        <p className="mb-3 text-lg text-[#707070]">
          <span className="font-semibold text-black">
            Play around with the generated APIs.
          </span>
          Once configured – test, build and deploy the unified API into our
          secure and reliable infrastructure.
        </p>
        <p className="text-lg text-[#707070]">
          Run your queries in the editor and use our intuitive interface to
          <span className="font-semibold text-black">
            navigate through your data - clean, organised & at your fingertips.
          </span>
        </p>
      </div>
      {/* right Image */}
      <div className="relative  mr-[120px] h-[333px] w-[534px] overflow-hidden rounded-2xl">
        <Image
          src="/Images/Backend/third.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

//  

