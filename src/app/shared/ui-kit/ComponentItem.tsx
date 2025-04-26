interface ComponentItemProps {
  name: string;
  children: React.ReactNode;
  src: string;
}

const ComponentItem: React.FC<ComponentItemProps> = ({
  children,
  name,
  src,
}) => {
  return (
    <div>
      <p
        className="text-green-600 cursor-pointer"
        title={`${src + " || click to copy "}`}
        onClick={() => navigator.clipboard.writeText(src)}
      >
        {name}
      </p>
      <hr className="my-[10px] border-gray-400 border" />
      <div className="flex gap-[20px]">{children}</div>
    </div>
  );
};

export default ComponentItem;
