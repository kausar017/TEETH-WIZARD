
const Bannar = () => {
    return (
        <div>
            <div className="hero bg-base-100 min-h-[60vh] max-md:text-center">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.postimg.cc/qMrqRfDq/clip-art-dentistry-image-optimum-dental-care-png-favpng-3-M0aw-U7-E7u2ny1-Kzng-Lb5ac7-J-removebg-preview.png"
                        className="lg:max-w-[150%]" />
                    <div>
                        <h1 className="text-5xl font-bold">Transforming Ideas into Intelligent Solutions</h1>
                        <p className="py-6">
                            Unlock the power of artificial intelligence to drive innovation, enhance efficiency, and create smarter solutions for a better tomorrow.
                        </p>
                        <button className="btn btn-outline btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;