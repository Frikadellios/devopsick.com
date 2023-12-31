import * as ReactIcons from "react-icons/all";

interface IIconComponent {
  icon: string;
  size?: number;
}
type IReactIcon = keyof typeof ReactIcons;

const IconComponent: React.FC<IIconComponent> = ({ icon, size }) => {
  const DynamicIconComponent = ReactIcons[icon as IReactIcon];

  if (undefined === DynamicIconComponent) return <></>;

  return <DynamicIconComponent size={size} />;
};