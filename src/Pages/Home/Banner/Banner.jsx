import slide1 from '../../../assets/images/banner/1.jpg'
import slide2 from '../../../assets/images/banner/2.jpg'
import slide3 from '../../../assets/images/banner/3.jpg'
import slide4 from '../../../assets/images/banner/4.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel h-[600px] rounded-xl m w-full">
                <div id="slide1" className="carousel-item   relative w-full ">
                    <img
                        src={slide1}
                        className="w-full" />
                    <div className="absolute top-0  flex left-0 h-full  items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                     <div className='w-1/2 px-12   text-white space-y-8'>
                     <h1 className="text-6xl font-semibold text-white ">Affordable Price For Car Servicing</h1>
                      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                      <div>
                        <button className='text-white btn border-none mr-3 font-bold bg-[#FF3811]'>Discover More</button>
                        <button className='btn bg-transparent text-white border-2 border-white font-bold'>Latest Project</button>
                     </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 flex right-0  space-x-10 p-8 justify-end">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                    <div className="absolute bottom-0 flex right-0  space-x-10 p-8 justify-end">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                    <div className="absolute bottom-0 flex right-0  space-x-10 p-8 justify-end">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                      <div className="absolute bottom-0 flex right-0  space-x-10 p-8 justify-end">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;