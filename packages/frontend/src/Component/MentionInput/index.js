import React, { memo, useEffect, useState } from "react";

import { Mention, MentionsInput } from "react-mentions";

import defaultStyle from "./defaultStyle";
import defaultMentionStyle from "./defaultMentionStyle";
import { Box } from "@mui/material";
import apiRequest from "../../Service/auth";
// import { useDataStore } from "@augurproject/comps";

// use first/outer capture group to extract the full entered sequence to be replaced
// and second/inner capture group to extract search string from the match
const emailRegex = /(([^\s@]+@[^\s@]+\.[^\s@]+))$/;

const users = [
  {
    id: "walter",
    display: "Walter White",
  },
  {
    id: "pipilu",
    display: "皮皮鲁",
  },
  {
    id: "luxixi",
    display: "鲁西西",
  },
  {
    id: "satoshi1",
    display: "中本聪",
  },
  {
    id: "satoshi2",
    display: "サトシ・ナカモト",
  },
  {
    id: "nobi",
    display: "野比のび太",
  },
  {
    id: "sung",
    display: "성덕선",
  },
  {
    id: "jesse",
    display: "Jesse Pinkman",
  },
  {
    id: "gus",
    display: 'Gustavo "Gus" Fring',
  },
  {
    id: "saul",
    display: "Saul Goodman",
  },
  {
    id: "hank",
    display: "Hank Schrader",
  },
  {
    id: "skyler",
    display: "Skyler White",
  },
  {
    id: "mike",
    display: "Mike Ehrmantraut",
  },
  {
    id: "lydia",
    display: "Lydìã Rôdarté-Qüayle",
  },
];

const MentionInput= memo(({ value, setValue, placeholder = "Write something about you...", customStyle = {} })=> {
  const [data, setData] = useState([]);
  // const { ammExchanges, markets } = useDataStore();
  const onChange = (ev, newValue) => {
    let value = newValue;
    if (value.startsWith("#") && value.endsWith(")")) {
    console.log("-s-ss>>hellow eorl>>>>>>>evvv>>>>", ev, value);
      value = value.split(" ").join("_");
    }
    setValue(value);
  };
  const onAdd = () => (...args) => console.log("added a new mention", ...args);
  const getUsers = async () => {
    const response = await apiRequest({
      url: "users/getAll",
      method: "GET",
    });
    if (response.success) {
      setData(
        response.data.map((u) => {
          return {
            id: u.userId,
            display: u.userName,
          };
        })
      );
    }
  };

  console.log("s-s-suserrss>>>>>>>>>>>>>>>>", data);
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Box width={"100%"}>
      <MentionsInput
        value={value}
        onChange={onChange}
        style={{ ...defaultStyle, ...customStyle, }}
        placeholder={placeholder}
        a11ySuggestionsListLabel={"Suggested mentions"}
      >
        <Mention
          markup="@__display__](user:__id__)"
          trigger="@"
          data={data}
          renderSuggestion={(suggestion, search, highlightedDisplay, index, focused) => (
            <div className={`user ${focused ? "focused" : ""}`}>{highlightedDisplay}</div>
          )}
          onAdd={onAdd}
          style={defaultMentionStyle}
        />

        {/* <Mention
          markup="@[__display__](email:__id__)"
          trigger={emailRegex}
          data={(search) => [{ id: search, display: search }]}
          onAdd={onAdd}
          style={{ backgroundColor: "#d1c4e9" }}
        /> */}
        {/* <Mention
          markup="#[__display__](user:__id__)"
          trigger="#"
          data={Object.values(markets).map((market) => {
            return {
              id: market.marketId,
              display: market.title,
            };
          })}
          renderSuggestion={(suggestion, search, highlightedDisplay, index, focused) => (
            <div className={`user ${focused ? "focused" : ""}`}>{highlightedDisplay}</div>
          )}
          onAdd={onAdd}
          style={defaultMentionStyle}
        /> */}
      </MentionsInput>
    </Box>
  );
})

// const asExample = provideExampleValue(
//   "Hi @[John Doe](user:johndoe), \n\nlet's add @[joe@smoe.com](email:joe@smoe.com) and @[John Doe](user:johndoe) to this conversation... "
// )

export default MentionInput;
