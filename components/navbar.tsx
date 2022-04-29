import { Icon } from "@iconify/react";

const styles = {
  navbar:
    "w-full h-16 px-4 flex items-center border-b border-gray-700 justify-between",
  leftNavbar: "flex items-center gap-x-4",
  formGroup: "relative flex items-center",
  searchInput:
    "h-9 w-64 border border-gray-700 bg-gray-900 text-gray-300 text-sm rounded-lg focus:border focus:border-gray-900 focus:ring-2 focus:ring-blue-400/[.75] peer",
  searchIcon: "absolute right-0 mr-4 text-gray-500 peer-focus:text-blue-400",
};

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftNavbar}>
        <Icon
          icon="akar-icons:three-line-horizontal"
          width={26}
          className="cursor-pointer"
        />
        <div className={styles.formGroup}>
          <input
            type="search"
            name="search"
            id="search"
            className={styles.searchInput}
            placeholder="Search..."
          />
          <Icon icon="charm:search" className={styles.searchIcon} />
        </div>
      </div>
      <div className="leftNavbar">
        <Icon
          icon="carbon:user-avatar-filled-alt"
          width={26}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
