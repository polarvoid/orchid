import { useEffect } from "react";

import config from "../config.json";

export default function ConfigSetter() {
  useEffect(() => {
    document.title = config.title ?? "My Awesome App";
    if (config.description) {
      document
        .querySelector("meta[name=description]")
        ?.setAttribute("content", config.description);
    }
  }, []);
  return <></>;
}
