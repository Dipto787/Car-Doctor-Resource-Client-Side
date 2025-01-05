import hero1 from '../../assets/images/about_us/person.jpg'
import hero2 from '../../assets/images/about_us/parts.jpg'
const Hero = () => {
    return (
        <div className=" mt-4">
            <div className="hero-content relative justify-between flex-col lg:flex-row">
                <div className=''>
                    <img
                        src={hero1}
                        className="max-w-md h-[400px] rounded-lg shadow-2xl" />
                    <img
                        src={hero2}
                        className="max-w-sm border-8 border-white absolute top-1/2 left-60 rounded-lg shadow-2xl" />
                </div>
                <div className='space-y-4 w-1/2'>
                    <h1 className="text-4xl text-[#FF3811]  font-bold">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className="py-6">
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn text-white font-bold bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;