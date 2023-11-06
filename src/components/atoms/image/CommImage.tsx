// component
import Image from "next/image"

const CommImage = ({ src, alt, className='' }: {
    src: string,
    alt: string,
    className?: string,
}) => {
    return (
        <div className={`relative inline-block ${className}`}>
            <Image
                src={src}
                alt={alt}
                layout='fill'
                objectFit="cover" />
            {/* <img 
                  className='w-full h-56 object-cover'
                  src={src} /> */}
        </div>
    )
}

export default CommImage