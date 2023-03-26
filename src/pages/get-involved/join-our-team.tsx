import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Box, Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { Section } from "@components/Layout"
import getPageTitle from "@utils/getPageTitle"
import { CardWithMedia } from "@components/Card"
import { SanityButton } from "@components/Button"
import SanityImage from "@components/Image/SanityImage"

export const query = graphql`
  query JoinOurTeamPage {
    sanityJoinOurTeamPage {
      mainHeader
      subHeader
      headerImage {
        ...SanityImageAsset
      }
      headerButton {
        ...SanityButton
      }
      volunteerImpact {
        ...SanityCard
      }
      getInvolved {
        ...SanityCard
      }
      interestForm
      upNext {
        ...SanityCard
      }
    }
  }
`

export const Head = getPageTitle("Join Our Team")

export default function JoinOurTeamPage({
  data,
}: PageProps<Queries.JoinOurTeamPageQuery>) {
  const { sanityJoinOurTeamPage } = data
  if (!sanityJoinOurTeamPage)
    throw `No Sanity document for the culture page was found.`

  return (
    <>
      {/* Header */}
      <Section backgroundColor="tertiary.light">
        <Grid container justifyContent="space-between" flexWrap="wrap">
          {/* Header text + button */}
          <Grid xs={12} lg={5}>
            <Stack spacing={6} alignItems={{ xs: "center", md: "self-start" }} padding={{ xs: 2, lg: 12 }}>
              <Typography variant="h3" color="black" textAlign={{ xs: "center", md: "left" }}>
                {sanityJoinOurTeamPage?.mainHeader}
              </Typography>
              <Typography variant="h6" color="black" textAlign={{ xs: "center", md: "left" }}>
                {sanityJoinOurTeamPage?.subHeader}
              </Typography>
              <SanityButton
              content={sanityJoinOurTeamPage.headerButton}>
              </SanityButton>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <SanityImage imageAsset={sanityJoinOurTeamPage.headerImage}>
            </SanityImage>
          </Grid>
        </Grid>
      </Section>
      {/* Why we volunteer section */}
      <Section backgroundColor="secondary.light">
        <Grid container alignItems="stretch" spacing={4}>
          <Grid xs={12}>
            <Stack spacing={6} alignItems="center">
              <Typography variant="h3" textAlign="center">
                Why do we volunteer?
              </Typography>
              <Typography variant="h6" textAlign="center">
                TODO: get this content from graphql query
              </Typography>
            </Stack>
          </Grid>
          {sanityJoinOurTeamPage?.volunteerImpact?.map((reason) =>
            <Grid key={reason?._key} xs={12} md={4}>
            <CardWithMedia
              header={reason?.title}
              image={reason?.image}
              content={reason?._rawDescription}
              button={reason?.button}
              shadowColor="secondary"
            />
            </Grid>
          )}
        </Grid>
      </Section>
    </>
  )
}
