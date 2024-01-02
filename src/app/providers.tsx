"use client";

import { ThemeProvider } from "@mui/material";
import { theme } from "@/utils/themes/muiTheme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
