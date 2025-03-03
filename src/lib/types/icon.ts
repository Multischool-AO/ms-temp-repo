// Interface base para qualquer ícone
export interface BaseIconProps {
  size?: number;
  height?: number;
  width?: number;
  color?: string;
  className?: string;
  [key: string]: any; // Permite outras props, como `style`
}

// Interface para ícones com nome pré-definido
export interface IconProps extends BaseIconProps {
  name: "home" | "user" | "settings"; // Adicione mais ícones conforme necessário
}

// Interface específica para o ícone de notificação
export interface NotificationIconProps extends BaseIconProps {}
