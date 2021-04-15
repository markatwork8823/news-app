import React from "react";
import { Divider, Grid, Image } from "semantic-ui-react";
import Ad from "../../Features/Ads/Ad";
import NewsArticle from "./NewsArticle";

export default function BodyHeadlines() {
  return (
    <>
      <Grid>
        <Grid.Row columns={4}>
          <Grid.Column width="4">
            <div>
              <span>
                It’s war: Morrison in rethink on vaccine strategy PM puts
                national cabinet on ‘warlike footing’ to speed up vaccine
                program as Dan Tehan flies to Europe in bid to end export bans.
                1 MINUTE AGO  By ROSIE LEWIS, NICHOLAS JENSEN * Lack of vaccine
                choice troubles over-50s
              </span>
            </div>
            <Divider />
            <div>
              <span>
                PM pulled the trigger on a Labor assassination Christine Holgate
                may not have been aware just how politically charged Australia
                Post was when she took on the job of chief executive. 10 MINUTES
                AGO  By RACHEL BAXENDALE
              </span>
            </div>
          </Grid.Column>
          <Grid.Column width="5">
            <Image src="https://content.api.news/v3/images/bin/ac8a4efecd72fc932d542cb07f259c47?width=480" />
            <div>
              <span>
                COMMENTARY Revealed: the real dispute behind the Christine
                Holgate saga The former chief executive has broken through the
                cover-up culture to expose the true cause of divisions over
                Australia Post and its future. 1 HOUR AGO  By ROBERT GOTTLIEBSEN
              </span>
            </div>
          </Grid.Column>
          <Grid.Column width="3">
            <Grid.Row divided>
              <NewsArticle
                image={
                  "https://content.api.news/v3/images/bin/56ded8af2163635aa5711d11166d4f50?width=480"
                }
                body={`'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt dolores
                recusandae molestias soluta facere ea dolore illum placeat fugiat
                perferendis eaque laboriosam adipisci, quia officiis saepe quisquam nam
                doloribus corporis'`}
              />
            </Grid.Row>
            <Grid.Row divided>
              <NewsArticle
                body={`'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt dolores
                recusandae molestias soluta facere ea dolore illum placeat fugiat
                perferendis eaque laboriosam adipisci, quia officiis saepe quisquam nam
                doloribus corporis'`}
              />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width="4">
            <Grid.Row>
              <Grid.Column>
                <Ad
                  image={
                    "https://www.theaustralian.com.au/wp-content/uploads/2021/03/TAIACQ0240_50OFF_half_page_300x600_IH_ANIMATED_01-1.gif"
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row columns="5" divided>
          <Grid.Column width="3">
            <NewsArticle
              image={
                "https://content.api.news/v3/images/bin/56ded8af2163635aa5711d11166d4f50?width=480"
              }
              body={`'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt dolores
                recusandae molestias soluta facere ea dolore illum placeat fugiat
                perferendis eaque laboriosam adipisci, quia officiis saepe quisquam nam
                doloribus corporis'`}
            />
          </Grid.Column>
          <Grid.Column width="3">
            <NewsArticle
              image={
                "https://content.api.news/v3/images/bin/56ded8af2163635aa5711d11166d4f50?width=480"
              }
              body={`'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt dolores
                recusandae molestias soluta facere ea dolore illum placeat fugiat
                perferendis eaque laboriosam adipisci, quia officiis saepe quisquam nam
                doloribus corporis'`}
            />
          </Grid.Column>
          <Grid.Column width="3">
            <NewsArticle
              image={
                "https://content.api.news/v3/images/bin/56ded8af2163635aa5711d11166d4f50?width=480"
              }
              body={`'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt dolores
                recusandae molestias soluta facere ea dolore illum placeat fugiat
                perferendis eaque laboriosam adipisci, quia officiis saepe quisquam nam
                doloribus corporis'`}
            />
          </Grid.Column>
          <Grid.Column width="3">
            <NewsArticle
              image={
                "https://content.api.news/v3/images/bin/56ded8af2163635aa5711d11166d4f50?width=480"
              }
              body={`'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt dolores
                recusandae molestias soluta facere ea dolore illum placeat fugiat
                perferendis eaque laboriosam adipisci, quia officiis saepe quisquam nam
                doloribus corporis'`}
            />
          </Grid.Column>
          <Grid.Column width="4">
            <Ad
              image={
                "https://tpc.googlesyndication.com/daca_images/simgad/12055124608354420574"
              }
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
