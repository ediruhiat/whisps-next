import Router from "next/router";

const styles = {
  logoutText: "text-sky-500 hover:text-sky-400 cursor-pointer hover:underline",
};

const Logout: React.FC = () => {
  const handleLogout = () => {
    try {
      window.localStorage.removeItem("WHISPS_auth_token");

      Router.push("/auth/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <span className={styles.logoutText} onClick={handleLogout}>
      Logout
    </span>
  );
};

export default Logout;
