export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'globe' | 'phone' | 'message';
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: 'target' | 'lightbulb' | 'zap' | 'shield';
}

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}
