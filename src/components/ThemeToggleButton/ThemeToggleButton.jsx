import { Switch } from "@headlessui/react";
import { useTheme } from "../../hooks/useTheme";

function ThemeToggleButton() {
  const { setTheme, theme } = useTheme();
  const handleThemeToggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  //   md:h-[38px] md:w-[74px]
  return (
    <Switch
      checked={theme === "dark"}
      onChange={handleThemeToggle}
      className={`${theme === "dark" ? "bg-white" : "bg-slate-900"}
relative inline-flex h-[23px] w-[50px] md:h-[30px] md:w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${
          theme === "dark"
            ? "translate-x-7 md:translate-x-9  bg-slate-900"
            : "translate-x-0 bg-white"
        }
  pointer-events-none inline-block h-[19px] w-[19px] md:h-[27px] md:w-[34px] transform rounded-full  shadow-lg ring-0  transition duration-200 ease-in-out`}
      />
    </Switch>
  );
}

export default ThemeToggleButton;
