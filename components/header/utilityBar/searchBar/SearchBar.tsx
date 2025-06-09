import { Search } from "@sprinklrjs/spaceweb/search";
import { Dispatch, SetStateAction, useState } from "react";

const SearchBar = ({
  setKeyword,
}: {
  setKeyword: Dispatch<SetStateAction<string>>;
}) => {
  const [searchBarText, setSearchBarText] = useState("");
  return (
    <Search
      value={searchBarText}
      onChange={(e) => setSearchBarText(e.target.value)}
      debouncedOnChange={(e) => setKeyword(e.target.value)}
      size="sm"
      variant="light"
      placeholder="Search assets"
      clearable
      debounceInterval={400}
      overrides={{
        Root: {
          style: { width: "40%" },
        },
      }}
    />
  );
};

export { SearchBar };
