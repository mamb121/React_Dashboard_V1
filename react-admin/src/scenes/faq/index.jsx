import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: What are some effective strategies to improve sales?
          </Typography>
        </AccordionSummary>
        <Typography>
          A: Effective strategies include understanding your target audience,
          enhancing your value proposition, optimizing your sales funnel,
          leveraging digital marketing, and providing exceptional customer
          service.
        </Typography>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: How can I better understand my target audience?
          </Typography>
        </AccordionSummary>
        <Typography>
          A: Conduct market research, analyze customer data, create buyer
          personas, and gather feedback through surveys and interviews to gain
          insights into your target audience’s needs and preferences.
        </Typography>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: What role does digital marketing play in increasing sales?
          </Typography>
        </AccordionSummary>
        <Typography>
          A: Digital marketing helps to reach a wider audience, engage potential
          customers through various channels (like social media, email, and
          search engines), and drive traffic to your website, ultimately leading
          to increased sales.
        </Typography>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: How can I optimize my sales funnel?
          </Typography>
        </AccordionSummary>
        <Typography>
          A: Analyze each stage of your sales funnel to identify bottlenecks,
          improve lead nurturing, use targeted content for each stage, and
          employ retargeting strategies to re-engage potential customers.
        </Typography>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: Is it important to train my sales team?
          </Typography>
        </AccordionSummary>
        <Typography>
          A: Yes, ongoing training is crucial for equipping your sales team with
          the necessary skills, knowledge, and techniques to effectively engage
          with prospects and close deals.
        </Typography>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: How can customer feedback help improve sales?
          </Typography>
        </AccordionSummary>
        <Typography>
          A: Customer feedback provides insights into what customers value,
          areas for improvement, and potential product or service enhancements,
          which can help tailor your offerings to better meet customer needs.
        </Typography>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: Should I focus on existing customers or new customers for sales
            growth?
          </Typography>
        </AccordionSummary>
        <Typography>
          A: Both are important. Existing customers often provide repeat
          business and referrals, while acquiring new customers expands your
          market reach. A balanced approach is usually most effective.
        </Typography>
      </Accordion>
    </Box>
  );
};

export default FAQ;
