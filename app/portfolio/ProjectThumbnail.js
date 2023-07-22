import Image from "next/image";

export default function ProjectThumbnail({image, title}) {
  return (
    <div>
      <div>
        <Image src={'/images/' + image} width={500} height={500} />
      </div>
      <div className="text-center p-4 font-weight">
        { title }
      </div>
    </div>
    
  )  
}