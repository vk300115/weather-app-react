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
    <Stack gap={2}>
        <Box >
            <Banner />
        </Box>
        <Box>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} >
                    <Stack gap={2}>
                        <Box>
                            <SearchForm />
                        </Box>
                        <Box>
                        <SearchHistory />
                        </Box>
                    </Stack>
                </Grid >
                <Grid item xs={12} sm={12} md={6} >
                    <Stack gap={2}>
                        <Box>
                            <CurrentWeather />
                        </Box>
                        <Box>
                            <ForecastWeather />
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    </Stack>
    );
};