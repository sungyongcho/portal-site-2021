import Link from "next/link";
import { useState } from "react";

const artists = [
  {
    name: "jin narae",
    link: "/artists/parkdongjoon",
  },
  {
    name: "park dongjoon",
    link: "/artists/parkdongjoon",
  },
  {
    name: "seo taelee",
    link: "/artists/parkdongjoon",
  },
  {
    name: "moon sohyun",
    link: "/artists/parkdongjoon",
  },
  {
    name: "sucho",
    link: "/artists/parkdongjoon",
  },
];

const interviews = [
  {
    name: "jin narae",
    link: "/interviews/jinnarae",
  },
  {
    name: "park dongjoon",
    link: "/interviews/parkdongjoon",
  },
  {
    name: "seo taelee",
    link: "/interviews/seotaelee",
  },
  {
    name: "moon sohyun",
    link: "/interviews/moonsohyun",
  },
];

const Menu = ({ initIsVisibleArtists = false, initIsVisibleInterviews = false }) => {
  const [isVisibleArtists, setIsVisibleArtists] = useState(
    initIsVisibleArtists
  );
  const [isVisibleInterviews, setIsVisibleInterviews] = useState(
    initIsVisibleInterviews
  );
  const handleClickArtists = () => {
    setIsVisibleArtists(!isVisibleArtists);
    setIsVisibleInterviews(false);
  };
  const handleClickInterviews = () => {
    setIsVisibleInterviews(!isVisibleInterviews);
    setIsVisibleArtists(false);
  };
  const handleClickOthers = () => {
    setIsVisibleArtists(false);
    setIsVisibleInterviews(false);
  }

  return (
    <nav style={{ border: "1px solid #ddd" }}>
      <ul>
        <li onClick={handleClickOthers}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <span onClick={handleClickArtists}>Artists</span>
          {isVisibleArtists && (
            <ul>
              {artists.map((artist) => (
                <li key={artist.name}>
                  <Link href={artist.link}>
                    <a>{artist.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <span onClick={handleClickInterviews}>Interview</span>
          {isVisibleInterviews && (
            <ul>
              {interviews.map((interview) => (
                <li key={interview.name}>
                  <Link href={interview.link}>
                    <a>{interview.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li onClick={handleClickOthers}>
          <Link href="/exhibition">
            <a>Exhibition</a>
          </Link>
        </li>
        <li onClick={handleClickOthers}>
          <Link href="/texts">
            <a>Texts</a>
          </Link>
        </li>
        <li onClick={handleClickOthers}>
          <Link href="/networking">
            <a>Networking</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
