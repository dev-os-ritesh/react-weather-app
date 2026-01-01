import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    const INIT_URL ="https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V0lOVEVSfGVufDB8fDB8fHww";
    const RAIN_URL =
  "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UkFJTiUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";
    const HOT_URL =
  "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SE9UJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL =
  " https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V0lOVEVSfGVufDB8fDB8fHww"




  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345, margin: "auto" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 80 
            ? RAIN_URL 
            : info.temp > 15 
            ? HOT_URL 
            : COLD_URL
        }
          title="Weather Image"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {
            info.humidity > 80 
            ?   <ThunderstormIcon/>
            : info.temp > 15 
            ?  <SunnyIcon/>
            :  <AcUnitIcon/>
        }
          </Typography>

          <Typography variant="body2" component="span" sx={{ color: "text.secondary" }}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min. Temp = {info.tempMin}&deg;C</p>
            <p>Max. Temp = {info.tempMax}&deg;C</p>
            <p>
              The weather can be described as <i>{info.weather}</i> and feels
              like {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
