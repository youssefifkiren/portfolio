import Image from 'next/image'
const MdImg = ({src, alt, ...props}: {src: string, alt: string, props: React.ReactNode}) => {
  return <Image src={src} alt={alt} {...props} />
}

export default MdImg