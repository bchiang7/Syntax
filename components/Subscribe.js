import styled from 'styled-components';
import { theme, media } from '../styles';

const SubscribeContainer = styled.div`
  width: 100%;
`;
const SubscribeLinks = styled.ul`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const SubscribeLink = styled.li`
  flex: 0 1 auto;
  margin-bottom: 1rem;
  ${media.phone`
    flex: 1 1 auto;
    margin-right: 1rem;
    margin-bottom: 1rem;
  `};

  a {
    display: flex;
    align-items: center;
    /* background: yellow; */
    color: rgba(0, 0, 0, 0.8);
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.2);
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    padding: 0.5rem 0.7rem;
    font-size: 14px;
    line-height: 1;
    font-family: sans-serif;
    font-weight: 100;
    text-align: center;
    transition: all 0.2s;
    &:hover {
      box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.4);
    }
    &:before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 0.7rem;
      background-size: cover;
      border-radius: 5px;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    }
  }
`;
const Itunes = styled(SubscribeLink)`
  a {
    background: ${theme.gradients.itunes};
    &:before {
      background-image: url('/static/icons/iTunes.jpg');
    }
  }
`;
const Overcast = styled(SubscribeLink)`
  a {
    background: ${theme.gradients.overcast};
    &:before {
      background-image: url('/static/icons/overcast.jpg');
    }
  }
`;
const GooglePodcast = styled(SubscribeLink)`
  a {
    background: ${theme.gradients.googlePodcast};
    &:before {
      background-image: url('/static/icons/google_podcasts.svg');
    }
  }
`;
const Stitcher = styled(SubscribeLink)`
  a {
    background: ${theme.gradients.stitcher};
    &:before {
      background-image: url('/static/icons/stitcher.jpg');
    }
  }
`;
const PocketCasts = styled(SubscribeLink)`
  a {
    background: ${theme.gradients.pocketCasts};
    &:before {
      background-image: url('/static/icons/pocketcasts.jpg');
    }
  }
`;
const GooglePlay = styled(SubscribeLink)`
  a {
    background: ${theme.gradients.googlePlay};
    &:before {
      background-image: url('/static/icons/googleplay.png');
      background-color: white;
    }
  }
`;
const Spotify = styled(SubscribeLink)`
  a {
    background: ${theme.gradients.spotify};
    &:before {
      background-image: url('/static/icons/spotify.svg');
    }
  }
`;
const RSS = styled(SubscribeLink)`
  a {
    background: ${theme.gradients.rss};
    &:before {
      background-image: url('/static/icons/rss.svg');
    }
  }
`;

const Subscribe = () => (
  <SubscribeContainer>
    <SubscribeLinks>
      <Itunes>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://iTunes.apple.com/ca/podcast/syntax-tasty-web-development-treats/id1253186678?mt=2"
        >
          iTunes
        </a>
      </Itunes>
      <Overcast>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://overcast.fm/iTunes1253186678/syntax-tasty-web-development-treats"
        >
          Overcast
        </a>
      </Overcast>
      <GooglePodcast>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9mZWVkLnN5bnRheC5mbS9yc3M%3D"
          rel="noopener noreferrer"
        >
          Google Podcast
        </a>
      </GooglePodcast>
      <Stitcher>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.stitcher.com/s?fid=142440&refid=stpr"
        >
          Stitcher
        </a>
      </Stitcher>
      <PocketCasts>
        <a target="_blank" rel="noopener noreferrer" href="http://pca.st/fmx9">
          PocketCasts
        </a>
      </PocketCasts>
      <GooglePlay>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&link=https://play.google.com/music/m/Ityd325x5s5ivr3fc74hvvgeztu?t%3DSyntax_-_Tasty_Web_Development_Treats%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16"
          rel="noopener noreferrer"
        >
          Google Play
        </a>
      </GooglePlay>
      <Spotify>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://open.spotify.com/show/4kYCRYJ3yK5DQbP5tbfZby?si=bOe7-kl6RnOHapMsVnFWgw"
          rel="noopener noreferrer"
        >
          Spotify
        </a>
      </Spotify>
      <RSS>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://feed.syntax.fm/rss"
        >
          RSS
        </a>
      </RSS>
    </SubscribeLinks>
  </SubscribeContainer>
);

export default Subscribe;
