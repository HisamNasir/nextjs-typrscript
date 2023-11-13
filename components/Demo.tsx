'use client'
interface DemoProps {
  name: string;
}

const Demo: React.FC<DemoProps> = ({ name }) => {
  return <div>Hisam, {name}!</div>;
};

export default Demo;