type StackedPostersProps = {
    posters: string[];
  };
  
export default function StackedPosters({ posters }: StackedPostersProps) {
  const offsets = [0, 10, 20];

  return (
    <div className="relative w-full h-full">
      {posters.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`poster-${index}`}
          className="absolute left-0 w-full h-auto aspect-[2/3] object-cover rounded-xl shadow-md"
          style={{
            zIndex: 30 - index,
            transform: `translateY(${offsets[index] || index * 10}px) scale(${1 - index * 0.04})`,
          }}
        />
      ))}
    </div>
  );
}
