import MenuItem from "./menuitem";

const styles = {
  sidebar: "w-72 p-4 border-r overflow-y-scroll h-screen border-gray-700",
  brandSidebar: "font-bold text-2xl",
  brandTag: "text-sm",
  brandContainer:
    "flex flex-col justify-center pb-4 mb-4 border-b border-gray-700",
  menu: "mt-4 flex flex-col gap-y-2",
  menuTitle: "font-semibold text-xs",
};

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.brandContainer}>
        <h1 className={styles.brandSidebar}>Whisps</h1>
        <p className={styles.brandTag}>Do your job as it have to</p>
      </div>

      <MenuItem icon="icon-park-outline:upload-logs" badge="New">
        Patches
      </MenuItem>

      <ul className={styles.menu}>
        <h3 className={styles.menuTitle}>THEME</h3>
        <MenuItem icon="ic:baseline-water-drop">Color</MenuItem>
        <MenuItem icon="ri:quill-pen-line">Typhography</MenuItem>
      </ul>

      <ul className={styles.menu}>
        <h3 className={styles.menuTitle}>COMPONENTS</h3>
        <MenuItem icon="bxs:component">Components</MenuItem>
        <MenuItem icon="ic:baseline-radio-button-checked">Buttons</MenuItem>
        <MenuItem icon="fluent:form-new-28-regular">Forms</MenuItem>
        <MenuItem icon="ant-design:pie-chart-twotone">Charts</MenuItem>
        <MenuItem icon="ic:twotone-table-view">Table</MenuItem>
      </ul>

      <ul className={styles.menu}>
        <h3 className={styles.menuTitle}>EXTRAS</h3>
        <MenuItem icon="mdi:book-open-page-variant-outline">Pages</MenuItem>
      </ul>
    </div>
  );
};

export default Sidebar;
