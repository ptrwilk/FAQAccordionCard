import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import styles from "./styles.module.css";
import WomanOnlineDesktop from "../assets/illustration-woman-online-desktop.svg";
import WomanOnlineMobile from "../assets/illustration-woman-online-mobile.svg";
import BoxDesktop from "../assets/illustration-box-desktop.svg";
import BgPaternDesktop from "../assets/bg-pattern-desktop.svg";
import BgPaternMobile from "../assets/bg-pattern-mobile.svg";
import { ReactComponent as Arrow } from "../assets/icon-arrow-down.svg";
import data from "../data.json";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const FaqAccordionCard = () => {
  const [items, setItems] = useState(data);

  const isSmall = useMediaQuery("(max-width:900px)");

  const handleExpandChange = (index: number, isExpanded: boolean) => {
    const newItems = [...items];
    newItems[index].expanded = isExpanded;
    setItems(newItems);
  };
  return (
    <Box className={styles["container"]}>
      <Box className={styles["background"]}>
        <Box className={styles["overflow-hidden"]}>
          <img
            className={styles["woman-online"]}
            src={isSmall ? WomanOnlineMobile : WomanOnlineDesktop}
          />
          <img
            className={styles["bg-pattern"]}
            src={isSmall ? BgPaternMobile : BgPaternDesktop}
          />
        </Box>
        {!isSmall && <img className={styles["box"]} src={BoxDesktop} />}
      </Box>
      <Box className={styles["faq"]}>
        <Typography variant="h1">FAQ</Typography>
        <List className={styles["items"]}>
          {items.map(({ expanded, title, text }, index) => (
            <ListItem className={styles["item"]} key={index}>
              <Accordion
                sx={{ width: "100%" }}
                expanded={expanded}
                onChange={(_event, isExpanded) =>
                  handleExpandChange(index, isExpanded)
                }
              >
                <AccordionSummary expandIcon={<Arrow />}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: expanded ? "700" : "400",
                    }}
                  >
                    {title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{text}</Typography>
                </AccordionDetails>
              </Accordion>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default FaqAccordionCard;
