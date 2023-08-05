'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

import ProjectThumbnail from "./ProjectThumbnail";

export default function Portfolio() {  

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      try {
        fetch('/api').then((res) => {
          res.json()
            .then((jsonData) => {
              setData(jsonData.data);
            })
        }); // Fetch the local JSON file

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  let projects = [];
  if (data) {
    projects = data?.projects;
  }

  return (
    <div className="content-center">
      <main className="flex min-h-screen items-center border flex-col justify-center p-16">
        <div className="w-8/12 min-h-screen">
          <div className="grid m-10 gap-16 grid-cols-fluid">
            { projects.map((project) => {
              return (
                <ProjectThumbnail 
                  id={project.id}
                  title={project.title} 
                  image={project.thumbnail} />
              )
            })}
          </div>
        </div>
      </main>
    </div>
    
  )
}