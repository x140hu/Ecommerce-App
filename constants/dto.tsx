export interface ProductDto {
  id: string;
  name: string;
  imageURL: string;
  color: string;
  price: number;
  description: string;
  isFavorite: boolean;
  timeSearch: string;
  statusType: number;
  tag: string;
}

export interface CartItem {
  id: string;
  idProduct: string;
  quantity: number;
}

export interface OrderTabDto {
  id: number;
  title: string;
  image: string;
  quantity: number;
  color: string;
  price: number;
}

export interface HistoryTabDto {
  id: number;
  title: string;
  image: string;
  quantity: number;
  color: string;
  price: number;
}

export interface categories {
  id: number;
  name: string;
  isSelected: boolean;
}

export interface TabData {
  title: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabsData: TabData[];
}

export interface CategoryDto {
  id: number;
  title: string;
  imageURL: string;
  numberProduct: number;
  position: number;
}

export type CategoryListImageProps = {
  CategoryImage: CategoryDto[];
};

export interface ProfileDto {
  urlImage: string;
  name: string;
  subName: string;
}

export interface SettingGroupDto {
  title: string;
  content: SettingDto[];
}

export interface SettingDto {
  title: string;
  icon: string;
  navigate: string;
}

export interface HistorySearch {
  id: number;
  label: string;
}
