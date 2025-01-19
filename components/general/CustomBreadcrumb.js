import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import { Stack, Typography } from "@mui/material";
import ColorModeContext from "@/theme/CustomThemeProvider";

export default function CustomBreadcrumb({ current, nestedPath }) {
  const { isMobile } = React.useContext(ColorModeContext);
  return (
    <Stack>
      <Typography
        variant="h6"
        fontWeight={600}
        color={"text.primary"}
      >
         {current.charAt(0).toUpperCase() + current.slice(1).toLowerCase()}
      </Typography>
      <Breadcrumbs aria-label="breadcrumb" separator="›">
        <Link
          href="/"
          style={{
            textDecoration: "none",
          }}
          className="link"
        >
          <Typography
            color={"text.primary"}
            variant={"body2"}
          textTransform={"lowercase"}

          >
            Home
          </Typography>
        </Link>
        {nestedPath && (
          <Link
            href="/dashboard"
            style={{
              textDecoration: "none",
            }}
            className="link"
          >
            <Typography
              color={"text.primary"}
              variant={"body2"}
              textTransform={"lowercase"}
            >
              dashboard
            </Typography>
          </Link>
        )}
        <Link
          href="#"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography
            color={"text.secondary"}
            variant={"body2" }
            textTransform={"lowercase"}
          >
            {current}
          </Typography>
        </Link>
      </Breadcrumbs>
    </Stack>
  );
}
