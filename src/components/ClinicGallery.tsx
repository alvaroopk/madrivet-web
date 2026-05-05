'use client'
import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const images = [
  { src: '/assets/clinica_interior1.jpg', alt: 'Interior clínica Madrivet 1' },
  { src: '/assets/clinica_interior2.jpg', alt: 'Interior clínica Madrivet 2' },
  { src: '/assets/clinica_interior3.jpg', alt: 'Interior clínica Madrivet 3' },
  { src: '/assets/negro2.jpg', alt: 'Instalaciones clínica Madrivet' },
]

export default function ClinicGallery() {
  const [index, setIndex] = useState(-1)

  return (
    <>
      {/* Desktop grid */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)}
            className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`Ver imagen: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Mobile scroll */}
      <div className="sm:hidden flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)}
            className="relative shrink-0 w-72 aspect-[4/3] rounded-xl overflow-hidden snap-start focus:outline-none"
            aria-label={`Ver imagen: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="288px"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </>
  )
}
