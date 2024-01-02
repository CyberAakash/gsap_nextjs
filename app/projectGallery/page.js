"use client";
import Hero from "@/components/Hero";
import FloatingImage from "@/components/floatingImage/FloatingImage";
import styles from "./page.module.css";
import { useState } from "react";
import Project from "@/components/projectGallery/project/Project";
import Modal from "@/components/projectGallery/modal/Modal";

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
  },
];

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <main className=" bg-black text-white ">
      <Hero />
      <main className={styles.main}>
        <div className={styles.body}>
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </main>
      <Hero />
    </main>
  );
}
