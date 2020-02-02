import * as React from 'react';

import {
  PortfolioWrapper,
  PortfolioPageTitle,
  PortfolioContent,
  PortfolioDetails,
} from './style';

interface PortfolioProps {}

const PortfolioPage: React.FunctionComponent<PortfolioProps> = () => {
  return (
    <PortfolioWrapper>
      <PortfolioPageTitle>
        <h1>Portfolio</h1>
      </PortfolioPageTitle>

      <PortfolioDetails>
        <PortfolioContent>
          <div>
            <h2>Share Analytics</h2>
            <p>
              ➢ Input a link and returns a tracker link gathers how many times
              the link has been clicked.
            </p>
            <p>
              ➢ Website:{' '}
              <a
                href="https://music.jaconjcondes.com"
                target="_blank"
                className="github-link">
                Music Share
              </a>
            </p>
            <p>
              ➢ Github Repo:{' '}
              <a
                href="https://github.com/jakec888/share-analytics"
                target="_blank"
                className="github-link">
                Share Analytics
              </a>
            </p>
            <p>
              ➢ Built Using (Express Folder): React JS, Node JS, Express JS,
              Mongoose, and Mongo DB
            </p>
            <p>
              ➢ Built Using (Flask Folder): React JS, Python, Flask, SQLalchemy,
              and PostgreSQL
            </p>
            <p>
              ➢ Built Using (Ruby on Rails): React JS, Ruby on Rails, and MySQL
            </p>
            <p>➢ Testing: Jest, Enzyme, and Moxiox</p>
            <img
              className="profile-gif-mobile"
              src="https://d2ff5ph8qoyex8.cloudfront.net/project7.gif"
              alt="Project 7a GIF"
              height="100%"
              width="100%"
            />
          </div>
        </PortfolioContent>
      </PortfolioDetails>

      <PortfolioDetails>
        <PortfolioContent>
          <div>
            <h2>Music Share</h2>
            <p>➢ Add, promote, and share your favorite music.</p>
            <p>
              ➢ Uses the same styling as the Ruby on Rails React frontend
              styling as the GA group project, however, the emphasis was on
              utilizing GraphQL
            </p>
            <p>
              ➢ Github Repo:{' '}
              <a
                href="https://github.com/jakec888/music-share"
                target="_blank"
                className="github-link">
                Music Share
              </a>
            </p>
            <p>➢ Built Using: React, Express, GraphQL, and Mongo</p>
            <img
              className="profile-gif"
              src="https://d2ff5ph8qoyex8.cloudfront.net/project9.gif"
              alt="Project GIF"
              height="100%"
              width="100%"
            />
          </div>
        </PortfolioContent>

        <PortfolioContent>
          <div>
            <h2>Pytorch Project</h2>
            <p>➢ A chatbot that conducts a conversation via textual methods.</p>
            <p>
              ➢ Github Repo:{' '}
              <a
                href="https://github.com/jakec888/pytorch-projects"
                target="_blank"
                className="github-link">
                Pytorch Project
              </a>
            </p>
            <p>➢ Built Using: Python, PyTorch</p>
            <img
              className="profile-gif-mobile"
              src="https://d2ff5ph8qoyex8.cloudfront.net/project8.gif"
              alt="Project 8a GIF"
              height="100%"
              width="100%"
            />
          </div>
        </PortfolioContent>

        <PortfolioContent>
          <div>
            <h2>Ephemeral Mobile Mail Client</h2>
            <p>
              Google Play Store Deployment:
              <a
                target="_blank"
                className="published"
                href="https://play.google.com/store/apps/details?id=com.jakec888.ephemeral_mobile_mail_client_android">
                Ephemeral Mobile Mail Client
              </a>
            </p>
            <p>
              ➢ Ephemeral mobile email client that will securely check your
              emails anywhere without holding you information.
            </p>
            <p>
              ➢ Github Repo:{' '}
              <a
                href="https://github.com/jakec888/ephemeral-mobile-mail-client"
                target="_blank"
                className="github-link">
                Ephemeral Mobile Mail Client
              </a>
            </p>
            <p>
              ➢ Built Using: React Native, Redux, Expo, Native Base, React
              Navigation, Moment JS, Axios, Python, Chalice
            </p>
            <img
              className="profile-gif-mobile"
              src="https://d2ff5ph8qoyex8.cloudfront.net/project6a.gif"
              alt="Project 6a GIF"
              height="30%"
              width="30%"
            />
            <img
              className="profile-gif-mobile"
              src="https://d2ff5ph8qoyex8.cloudfront.net/project6b.gif"
              alt="Project 6b GIF"
              height="30%"
              width="30%"
            />
            <img
              className="profile-gif-mobile"
              src="https://d2ff5ph8qoyex8.cloudfront.net/project6c.gif"
              alt="Project 6c GIF"
              height="30%"
              width="30%"
            />
          </div>
        </PortfolioContent>

        <PortfolioContent>
          <div>
            <h2>Ephemeral Web Mail Client</h2>
            <p>
              Visit Production Site:
              <a
                target="_blank"
                className="published"
                href="https://d358ioepy2yz0y.cloudfront.net/">
                Ephemeral Web Mail Client
              </a>
            </p>
            <p>
              ➢ Ephemeral online email client that will securely check your
              emails anywhere without holding you information.
            </p>
            <p>
              ➢ Github Repo:{' '}
              <a
                href="https://github.com/jakec888/ephemeral-web-mail-client"
                target="_blank"
                className="github-link">
                Ephemeral Web Mail Client
              </a>
            </p>
            <p>
              ➢ Built Using: React JS, Redux, Material UI, AWS Amplify, Moment
              JS, Axios, Python, Chalice
            </p>
            <img
              className="profile-gif"
              src="https://d2ff5ph8qoyex8.cloudfront.net/project5a.gif"
              alt="Project 5a GIF"
              height="100%"
              width="100%"
            />
            <br />
            <img
              className="profile-gif"
              src="https://d2ff5ph8qoyex8.cloudfront.net/project5b.gif"
              alt="Project 5b GIF"
              height="100%"
              width="100%"
            />
            <br />
            <img
              className="profile-gif"
              src="https://d2ff5ph8qoyex8.cloudfront.net/project5c.gif"
              alt="Project 5b GIF"
              height="100%"
              width="100%"
            />
          </div>
        </PortfolioContent>

        <PortfolioContent>
          <div>
            <h2>Mobile Email Client</h2>
            <p>
              ➢ Final project for General Assembly (Unfinished). Alternative to
              Gmail Email Client where you control your information and emails
              in your own personal database securely.
            </p>
            <p>
              ➢ Github Repo:{' '}
              <a
                href="https://github.com/jakec888/mobile-email-client"
                target="_blank"
                className="github-link">
                Mobile Email Client
              </a>
            </p>
            <p>➢ Built Using: React Native, DynamoDB, Serverless Framework</p>
            <img
              className="profile-gif-mobile"
              src="https://d2ff5ph8qoyex8.cloudfront.net/project4.gif"
              alt="Project GIF"
              height="50%"
              width="50%"
            />
          </div>
        </PortfolioContent>

        <PortfolioContent>
          <div>
            <h2>Music Book</h2>
            <p>
              ➢ Online audio distribution platform and music sharing website.
              The site enables its users to upload, promote, and share audio
              with friends.
            </p>
            <p>
              ➢ Github Repo:{' '}
              <a
                href="https://github.com/jakec888/MusicBook_front_end"
                target="_blank"
                className="github-link">
                Music Book React
              </a>
              &
              <a
                href="https://github.com/jakec888/MusicBook_api"
                target="_blank">
                Music Book API
              </a>
            </p>
            <p>➢ Built Using: React, Ruby on Rails, PostgreSQL</p>
            <img
              className="profile-gif"
              src="https://d2ff5ph8qoyex8.cloudfront.net/project3.gif"
              alt="Project GIF"
              height="100%"
              width="100%"
            />
          </div>
        </PortfolioContent>

        <PortfolioContent>
          <div>
            <h2>Singles Network</h2>
            <p>
              ➢ Web application developed using MEAN technology stack, with full
              CRUD functionality, and functioning authentication. This
              networking site connects singles securely with similar likes and
              interests.
            </p>
            <p>
              ➢ Github Repo:{' '}
              <a
                href="https://github.com/jakec888/Smitten-Dating"
                target="_blank"
                className="github-link">
                Singles Network
              </a>
            </p>
            <p>
              ➢ Built Using: MEAN technology stack (MongoDB, Express JS,
              Angular, Node JS)
            </p>
            <img
              className="profile-gif"
              src="https://d2ff5ph8qoyex8.cloudfront.net/project2.gif"
              alt="Project GIF"
              height="100%"
              width="100%"
            />
          </div>
        </PortfolioContent>

        <PortfolioContent>
          <div>
            <h2>News Aggregator</h2>
            <p>
              ➢ A news aggregator site that helps to consolidate many news
              websites into one page that can show the most recent updates. Data
              is gathered though newsapi.com, a 3rd party API.
            </p>
            <p>
              ➢ Github Repo:{' '}
              <a
                href="https://github.com/jakec888/Random-News-Aggregator"
                target="_blank"
                className="github-link">
                Random News Aggregator
              </a>
            </p>
            <p>➢ Built Using: JQuery, HTML, CSS</p>
            <img
              className="profile-gif"
              src="https://d2ff5ph8qoyex8.cloudfront.net/project1.gif"
              alt="Project GIF"
              height="100%"
              width="100%"
            />
          </div>
        </PortfolioContent>
      </PortfolioDetails>
    </PortfolioWrapper>
  );
};

export default PortfolioPage;
