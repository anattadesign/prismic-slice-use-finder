import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Locales from "../components/Locale";
import { getCurrentLocale } from "../utils/currentLocale";

const HomeScreen = () => {
  const [isLoading, onLoading] = React.useState(false);

  const router = useRouter();

  const handleClick = () => {
    onLoading(true);

    router.push(`/slices?lang=${getCurrentLocale()}`);
  };

  return (
    <Box bgcolor={grey["A100"]} minHeight="100vh">
      <Header title="Four-Sigmatic Prismic Slices Dashboard" />
      <Box maxWidth={750} margin="auto" mt={16}>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "16rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography component="div" variant="h5">
                Lets make it happen with a single click.
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Choose form the available locales.
              </Typography>
            </CardContent>
            <CardContent>
              <Box sx={{ alignItems: "center", display: "flex" }}>
                <Locales />
                <Button
                  variant="contained"
                  onClick={handleClick}
                  startIcon={
                    isLoading && <CircularProgress size={20} color="info" />
                  }
                  sx={{ ml: 4 }}
                  size="large"
                >
                  See all slices
                </Button>
              </Box>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image="/coffee-thumbnail.jpg"
            alt="Coffee"
          />
        </Card>
      </Box>
    </Box>
  );
};

export default HomeScreen;
