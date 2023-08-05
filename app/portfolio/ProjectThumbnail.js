import Image from "next/image";
import Link from "next/link";

export default function ProjectThumbnail({id, image, title}) {
  return (
    <div className="project-thumbnail-box">
      <div>
        <Link href={`/portfolio/${id}`}>
          <Image src={'/images/' + image} width={500} height={500} />
        </Link>
      </div>
      <div className="text-center p-4 font-weight">
        { title }
      </div>
    </div>
  )  
}