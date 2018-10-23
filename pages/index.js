import { withRouter } from 'next/router';
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ShowList from '../components/ShowList';
import ShowNotes from '../components/ShowNotes';
import Player from '../components/Player';
import Meta from '../components/meta';
import Page from '../components/Page';
import { theme, StyledWrapper } from '../styles';

const Wrapper = styled(StyledWrapper)``;
const ShowWrap = styled.div`
  background: ${theme.colors.white};
  display: flex;
  flex-wrap: wrap;
`;

export default withRouter (
  class IndexPage extends React.Component {
    static propTypes = {
      router: PropTypes.object.isRequired,
      shows: PropTypes.array.isRequired,
      baseURL: PropTypes.string.isRequired,
    };

    constructor(props) {
      super();
      const currentShow =
        props.router.query.number || props.shows[0].displayNumber;

      this.state = {
        currentShow,
        currentPlaying: currentShow,
        isPlaying: false,
      };
    }

    static async getInitialProps({ req }) {
      /*eslint-disable */
      const protocol =
        req && req.headers.host.indexOf('syntax.fm') > -1
          ? 'https'
          : req
            ? req.protocol
            : '';
      /* eslint-enable */
      const baseURL = req
        ? `${protocol}://${req.headers.host}`
        : window.location.origin;
      const { data: shows } = await axios.get(`${baseURL}/api/shows`);
      return { shows, baseURL };
    }

    componentWillReceiveProps(nextProps) {
      const { pathname, query } = nextProps.router;
      if (query.number) {
        this.setState({ currentShow: query.number });
      }
    }

    // Passed down to Player component to fish out the state of the player to animate the bars
    getPlayerState = isPlaying => {
      this.setState({ isPlaying });
    };

    setCurrentPlaying = currentPlaying => {
      console.log('Setting current playing');
      this.setState({ currentPlaying });
    };

    render() {
      const { shows = [], baseURL } = this.props;
      const { currentShow, currentPlaying, isPlaying } = this.state;
      // Currently Shown shownotes
      const currentShowNotes = shows.find(
        show => show.displayNumber === currentShow
      );
      // Currently Playing
      const current = shows.find(show => show.displayNumber === currentPlaying);

      return (
        <Page>
          <Meta show={currentShowNotes} baseURL={baseURL} />
          <Wrapper>
            <ShowWrap id="main" tabIndex="-1">
              <Player show={current} getPlayerState={this.getPlayerState} />
              <ShowList
                shows={shows}
                currentShow={currentShow}
                currentPlaying={currentPlaying}
                setCurrentPlaying={this.setCurrentPlaying}
                isPlaying={isPlaying}
              />
              <ShowNotes
                show={currentShowNotes}
                setCurrentPlaying={this.setCurrentPlaying}
              />
            </ShowWrap>
          </Wrapper>
        </Page>
      );
    }
  }
)
