import { Icon } from "@iconify/react";
import { ReactNode } from "react";

type TMenuItem = {
  children: ReactNode;
  icon: string;
  badge?: string;
};

const styles = {
  menuItem:
    "relative flex items-center justify-center py-2 px-3 text-sm hover:bg-gray-100/[.10] rounded-lg cursor-pointer transition-colors",
  menuIcon: "mr-3",
  menuText: "flex-grow font-medium",
  badgeContainer:
    "absolute right-0 mr-2 px-2 py-1 bg-sky-500 text-xs font-bold rounded-lg text-gray-100",
};

const MenuItem: React.FC<TMenuItem> = ({ icon, children, badge }) => {
  return (
    <div className={styles.menuItem}>
      <Icon icon={icon} className={styles.menuIcon} />
      <span className={styles.menuText}>{children || "Item"}</span>
      {badge ? <div className={styles.badgeContainer}>{badge}</div> : null}
    </div>
  );
};

export default MenuItem;
