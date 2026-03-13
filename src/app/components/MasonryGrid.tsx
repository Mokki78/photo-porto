const images = [
    `/square_2.jpg`,
    `/wide_4.jpg`,
    `/wide_1.jpg`,
    `/long_14.jpg`,
    `/square_9.jpg`,
    `/long_16.jpg`,
    
    `/square_5.jpg`,
    `/long_9.jpg`,
    `/wide_6.jpg`,
    `/long_10.jpg`,
    `/wide_8.jpg`,
    `/square_10.jpg`,
    `/long_13.jpg`,
    `/square_19.jpg`,
   
    `/wide_2.jpg`,
    `/square_7.jpg`,
    `/wide_3.jpg`,
  
    `/long_11.jpg`,

 
]

const MasonryGrid = () => {
    return (
        <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
            {images.map((src, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
                <img src={src} className="w-full object-cover rounded-lg"/>
            </div>
    ))};
        </div>
    )
}

export default MasonryGrid;