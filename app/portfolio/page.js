import ProjectThumbnail from "./ProjectThumbnail";

export default function About() {
  return (
    <div className="content-center">

    
    <main className="flex min-h-screen items-center border flex-col justify-center p-16">
      <div className="w-8/12 min-h-screen">
        <div className="grid m-10 gap-16 grid-cols-fluid">
          <ProjectThumbnail image='ora_1.jpg' title='Orabella Residences' />
          <ProjectThumbnail image='ora_2.jpg' title='Prisma Residences' />
          <ProjectThumbnail image='ora_3.jpg' title='Satori Residences' />
          <ProjectThumbnail image='ora_4.jpg' title='Allegra Residences' />
        </div>
      </div>
      
    </main>
    </div>
    
  )
}