/**
 * Our component that handles UI elements that stay consistent throughout the site.
 *
 * Used in wrapPageElement in gatsby-browser.ts and gatsby-ssr.ts
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"
import { CssBaseline } from "@mui/material"

type Props = React.PropsWithChildren

export default function Layout({ children }: Props) {
  return (
    <>
      <CssBaseline />
      <main>{children}</main>
    </>
  )
}
