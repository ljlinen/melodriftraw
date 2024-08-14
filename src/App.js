import ArtistProfile from './js/comp/ArtistProfile';

function App() {

  const artistProfileData = {
    name: 'futurealstic',
    location: 'South Africa, MP',
    about: `An upcoming artist based in Mpumalanga,
          I'm into audio production,
          videography and graphic designing.`,

    likes: '15K',
    plays: '2K',
    image: 'link',

    music: {
      pinned: 'link',
      all: ['links'],
    }
  }

  return (
    <div className="app">
      <ArtistProfile artistProfileData={ artistProfileData } />
    </div>
  );
}

export default App;
