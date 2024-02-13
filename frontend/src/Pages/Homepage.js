import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box display="flex" justifyContent="center" w="100%" m="10px 0 5px 0">
        <Text
          fontSize="4xl"
          fontFamily="josefin sans"
          fontWeight="semibold"
          color="white"
        >
          Gupshup
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        borderColor="black"
        borderWidth="1px"
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab
              _selected={{ fontSize: "1xl", color: "white", bg: "#0047AB" }}
              color="black"
              fontSize="2xl"
              width="50%"
            >
              Login
            </Tab>
            <Tab
              _selected={{ fontSize: "1xl", color: "white", bg: "#0047AB" }}
              color="black"
              fontSize="2xl"
              width="50%"
            >
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
