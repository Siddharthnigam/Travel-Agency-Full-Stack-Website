import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FolderPop = ({ 
  triggerMode = 'hover',
  folderSize = 200,
  photoSize = 120,
  arcRadius = 150,
  arcSpan = 120,
  photos = []
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const folderRef = useRef(null);

  const defaultPhotos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      alt: 'Photo 1'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop',
      alt: 'Photo 2'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop',
      alt: 'Photo 3'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      alt: 'Photo 4'
    }
  ];

  const photoData = photos.length > 0 ? photos : defaultPhotos;

  // Reduce photo size and add gaps between images
  const reducedPhotoSize = photoSize * 0.7; // 20% smaller
  const gapMultiplier = 0.8; // Increase radius for gaps

  // Calculate arc positions for photos with gaps
  const calculateArcPosition = (index, total) => {
    const startAngle = -arcSpan / 2;
    const angleStep = arcSpan / (total - 1);
    const angle = startAngle + (angleStep * index);
    const radian = (angle * Math.PI) / 180;
    
    // Increase radius for more spacing between photos
    const adjustedRadius = (arcRadius + 15) * gapMultiplier;
    
    let x = Math.sin(radian) * adjustedRadius;
    let y = -Math.abs(Math.cos(radian)) * (adjustedRadius * 0.6);
    
    // Lift images higher up by 180px when open
    y -= 180;
    
    return {
      x: x,
      y: y,
      rotate: angle * 0.3
    };
  };

  const handleInteraction = () => {
    if (triggerMode === 'click') {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (triggerMode === 'hover') {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (triggerMode === 'hover') {
      setIsOpen(false);
    }
  };

  // Folder animations
  const folderVariants = {
    closed: {
      rotateX: 0,
      z: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      rotateX: -15,
      z: 20,
      scale: 1.02,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <div 
      className="folder-pop-container relative cursor-pointer flex flex-col items-center"
      style={{ 
        width: folderSize * 1.8,
        height: folderSize * 2.5,
        perspective: '1000px'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleInteraction}
    >
      <style jsx>{`
        .folder-pop-container {
          transform-style: preserve-3d;
        }
        
        .photo-stack {
          transform-style: preserve-3d;
        }
        
        .folder-main {
          transform-style: preserve-3d;
        }
        
        .photo-item {
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Photo Stack - Arc Animation with gaps and smaller size */}
      <div 
        className="photo-stack absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 5 }}
      >
        <AnimatePresence>
          {isOpen && photoData.map((photo, index) => {
            const position = calculateArcPosition(index, photoData.length);
            
            return (
              <motion.div
                key={photo.id}
                className="photo-item absolute -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden shadow-2xl border-4 border-white"
                style={{
                  width: reducedPhotoSize,
                  height: reducedPhotoSize,
                  left: '50%',
                  top: '50%'
                }}
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  rotate: 0,
                  opacity: 0,
                  z: -20
                }}
                animate={{
                  x: position.x,
                  y: position.y,
                  scale: 1,
                  rotate: position.rotate,
                  opacity: 1,
                  z: 10 + index * 2
                }}
                exit={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  rotate: 0,
                  opacity: 0,
                  z: -20
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                  type: "spring",
                  stiffness: 200,
                  damping: 25
                }}
                whileHover={{
                  scale: 1.1,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Folder Container */}
      <motion.div
        className="folder-main relative"
        style={{
          width: folderSize,
          height: folderSize * 0.75,
          transformOrigin: 'center center',
          transformStyle: 'preserve-3d'
        }}
        variants={folderVariants}
        animate={isOpen ? 'open' : 'closed'}
      >
        {/* Folder Tab */}
        <div
          className="absolute rounded-t-2xl shadow-lg"
          style={{
            width: folderSize * 0.4,
            height: folderSize * 0.12,
            background: 'linear-gradient(180deg, #e8e8e8 0%, #d0d0d0 100%)',
            border: '2px solid #c0c0c0',
            borderBottom: 'none',
            top: -folderSize * 0.06,
            left: folderSize * 0.15,
            zIndex: 3
          }}
        />

        {/* Main Folder Body */}
        <div
          className="folder-body relative rounded-2xl shadow-xl"
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(145deg, #f0f0f0 0%, #d8d8d8 100%)',
            border: '2px solid #c0c0c0',
            zIndex: 1
          }}
        >
          {/* Folder inner shadow for depth */}
          <div
            className="absolute inset-3 rounded-xl opacity-20"
            style={{
              background: 'linear-gradient(145deg, transparent 0%, rgba(0,0,0,0.1) 100%)'
            }}
          />
          
          {/* Italian Flag */}
          <div className="absolute top-4 left-4 flex">
            <div className="w-3 h-4 bg-green-600"></div>
            <div className="w-3 h-4 bg-white"></div>
            <div className="w-3 h-4 bg-red-600"></div>
          </div>
          
          {/* Yellow circle icon */}
          <div className="absolute top-4 right-4">
            <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-yellow-600"></div>
          </div>
        </div>
      </motion.div>

      {/* Folder Label (below folder) */}
      <div className="text-center mt-4">
        <div className="text-gray-800 font-semibold text-lg">
          Italy 2025
        </div>
        <div className="text-gray-500 text-sm mt-1">
          {photoData.length} photos
        </div>
      </div>

      {/* Hover Indicator */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {triggerMode === 'hover' ? 'Hover to expand' : 'Click to expand'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FolderPop;
