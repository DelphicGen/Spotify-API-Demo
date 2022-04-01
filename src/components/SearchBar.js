import { useState } from "react";
import axios from "axios";

import styles from "./SearchBar.module.css";
import BaseButton from "./BaseButton";
import BaseInput from "./BaseInput";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    const authToken = window.location.href.split('access_token=')[1].split('&')[0];
    axios
        .get(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
            headers: {
              "Authorization": `Bearer ${authToken}`
            }
        })
        .then(res => {
          props.updateData(res.data.tracks.items)
        });
  }

  return (
    <div className={styles.searchbar}>
      <BaseInput val={query} name="query" handleValChange={handleQueryChange} />
      <BaseButton text="Search" handleButtonClick={handleSearch} />
    </div>
  );
};
export default SearchBar;
