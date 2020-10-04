// 色の設定をここで実装する

export type ColorType =
  | "primary"
  | "info"
  | "success"
  | "warn"
  | "danger"
  | "dark";

export const colorPicker = (color?: string, outlined?: boolean) => {
  let base: string;
  let hovor: string;

  switch (color) {
    case "primary":
      base = !outlined ? "bg-blue-500 text-white" : " border-blue-500";
      hovor = !outlined
        ? "hover:bg-blue-400"
        : "hover:text-white hover:bg-blue-500";
      break;
    case "info":
      base = !outlined ? "bg-teal-500" : "bg-transparent boder border-teal-500";
      hovor = !outlined
        ? "bg-teal-400"
        : "hover:border-transparent hover:bg-teal-500";
      break;

    case "success":
      base = !outlined
        ? "bg-green-500"
        : "bg-transparent boder border-green-500";
      hovor = !outlined
        ? "bg-green-400"
        : "hover:border-transparent hover:bg-green-500";
      break;

    case "warn":
      base = !outlined
        ? "bg-orange-500"
        : "bg-transparent boder border-orange-500";
      hovor = !outlined
        ? "bg-orange-400"
        : "hover:border-transparent hover:bg-orange-500";
      break;
    case "danger":
      base = !outlined ? "bg-red-500" : "bg-transparent boder border-red-500";
      hovor = !outlined
        ? "bg-red-400"
        : "hover:border-transparent hover:bg-red-500";
      break;


    default:
      base = !outlined ? "bg-grey-500 text-white" : "bg-transparent boder border-grey-500";
      hovor = !outlined
        ? "bg-grey-400"
        : "hover:border-transparent hover:bg-grey-500";
       break;
  }
  return [base, hovor].join(",");
};
