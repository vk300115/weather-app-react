import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Banner } from "./components/Banner.js";
import { SearchForm } from "./components/SearchForm.js";
import { SearchHistory } from "./components/SearchHistory.js";
import { CurrentWeather } from "./components/CurrentWeather.js";
import { ForecastWeather } from "./components/ForecastWeather.js";


export const App = () => {
    return (
    <Stack sx={{border: "1px solid red"}}>
        <Box sx={{border: "1px solid black"}}>
            <Banner />
        </Box>
        <Box sx={{border: "1px solid black"}}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} sx={{border: "1px solid black"}}>
                    <Box>
                        <SearchForm />
                    </Box>
                    <Box>
                        <SearchHistory />
                    </Box>
                </Grid >
                <Grid item xs={12} sm={12} md={6} sx={{border: "1px solid black"}}>
                    <Box>
                        <CurrentWeather />
                    </Box>
                    <Box>
                        <ForecastWeather />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Stack>
    );
};