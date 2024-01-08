import express from 'express';
import mongoose from 'mongoose';
import ejs from 'ejs';
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
module.exports = app;

// frontend files
app.use(express.static('public'));
 
// mongoose.connect(process.env.DB_URI, { dbName: "clt", useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connected to Database'));

const redirectMap = new Map([
  ["/medium", "https://chrizftw.medium.com"],
  ["/twitch", "https://twitch.tv/chrizxzftw"],
  ["/bio", "https://dsc.bio/chriz"],
  ["/reddit", "https://reddit.com/user/chrizxzftw"],
  ["/github", "https://github.com/chrizxz"],
  ["/youtube", "https://www.youtube.com/channel/UCCSomYE1NzcG2AnOtrR5V3g?sub_confirmation=1"],
  ["/roblox", "https://www.roblox.com/users/729731435/profile"],
  ["/playlist", "https://open.spotify.com/playlist/2jY8XKNHjYmR3UhOHW4Zb6?si=a4595c5b92664f3f"],
  ["/pl", "https://open.spotify.com/playlist/2jY8XKNHjYmR3UhOHW4Zb6?si=a4595c5b92664f3f"],
  ["/playlist2", "https://open.spotify.com/playlist/4Ob6cNM3147iFcIMDDtYnp?si=23890ac10d6744fc"],
  ["/pl2", "https://open.spotify.com/playlist/4Ob6cNM3147iFcIMDDtYnp?si=23890ac10d6744fc"],
  ["/playlist3", "https://open.spotify.com/playlist/6aqs0yCZr7MIBRmfP4wMF4?si=bb62661a876f44a4"],
  ["/pl3", "https://open.spotify.com/playlist/6aqs0yCZr7MIBRmfP4wMF4?si=bb62661a876f44a4"],
  ["/steam", "https://steamcommunity.com/id/chrizftw/"],
  ["/minecraft", "https://namemc.com/chrizxz"],
  ["/spotify", "https://open.spotify.com/user/3lzvwkeppejdqmri51h330vza"],
  ["/twitter", "https://twitter.com/ChrizxzFTW"],
  ["/venox", "https://discord.com/invite/gAeMxAv9kp"],
  ["/chrizical", "https://www.urbandictionary.com/define.php?term=chrizical"],
  ["/wordler/invite", "https://discord.com/api/oauth2/authorize?client_id=1077433194166620180&permissions=278099396672&scope=applications.commands%20bot"],
  ["/wordler/tos", "https://gist.github.com/Chrizxz/f35117d847dcea193f3795b5c7199656"],
  ["/wordler/privacy", "https://gist.github.com/Chrizxz/84ae54cab3d291aab890cc556dd088a0"],
  ["/donate", "https://ko-fi.com/chrizxzftw"],
  ["/pay", "https://ko-fi.com/chrizxzftw"],
]);

app.get('*', (req, res) => {
  const path = req.path;
  const location = redirectMap.get(path);
  if (location) {
    res.redirect(301, location); }
  // } else {
  //   res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
  // }
});

app.use(express.json());

// start the server
const port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log(`Server started on `.blue + `Port: ${port}`.cyan.underline);
});

app.get("/", (req, res) => { res.send("Express on Vercel"); });
